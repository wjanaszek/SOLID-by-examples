import { ChangeDetectionStrategy, Component } from '@angular/core';
import { finalize, of, Subject } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'wojjan-srp-root',
  templateUrl: './srp-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SrpProfileComponent {
  readonly isUploading$ = new Subject<boolean>();

  constructor(private profileService: ProfileService) {}

  uploadProfilePhoto(): void {
    const allowedFileExtensions = ['jpg', 'png'];

    this.isUploading$.next(true);

    this.profileService
      .selectFile(allowedFileExtensions)
      .pipe(
        take(1),
        filter(Boolean),
        switchMap((photo) =>
          this.profileService.uploadFile(photo, 'profileBucket')
        ),
        finalize(() => this.isUploading$.next(false))
      )
      .subscribe();
  }

  downloadProfilePhoto(url: string, print = false): void {
    this.profileService
      .download(url)
      .pipe(
        switchMap((photo) => {
          if (print) {
            return this.profileService.printPhoto(photo, 'A4');
          }

          return of(photo);
        })
      )
      .subscribe();
  }

  removeProfilePhoto(): void {
    this.profileService
      .removeProfilePhoto()
      .pipe(
        switchMap(() =>
          this.profileService.prompt('Do you want to add a new one?')
        ),
        switchMap((shouldAddNewOne) => {
          if (shouldAddNewOne) {
            return of(this.uploadProfilePhoto());
          }

          return of();
        })
      )
      .subscribe();
  }
}
