import { ChangeDetectionStrategy, Component } from '@angular/core';
import { finalize, of, Subject } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { DialogService } from '../services-fixed/dialog.service';
import { DownloadService } from '../services-fixed/download.service';
import { FileBrowserService } from '../services-fixed/file-browser.service';
import { PrintService } from '../services-fixed/print.service';
import { ProfileService } from '../services-fixed/profile.service';
import { UploadService } from '../services-fixed/upload.service';

@Component({
  selector: 'wojjan-srp-root',
  templateUrl: '../../bad/components/srp-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SrpFixedProfileComponent {
  readonly isUploading$ = new Subject<boolean>();

  constructor(
    private dialogService: DialogService,
    private downloadService: DownloadService,
    private fileBrowserService: FileBrowserService,
    private printService: PrintService,
    private profileService: ProfileService,
    private uploadService: UploadService
  ) {}

  uploadProfilePhoto(): void {
    const allowedFileExtensions = ['jpg', 'png'];

    this.isUploading$.next(true);

    this.fileBrowserService
      .selectFile(allowedFileExtensions)
      .pipe(
        take(1),
        filter(Boolean),
        switchMap((photo) =>
          this.uploadService.uploadFile(photo, 'profileBucket')
        ),
        finalize(() => this.isUploading$.next(false))
      )
      .subscribe();
  }

  downloadProfilePhoto(url: string, print = false): void {
    this.downloadService
      .download(url)
      .pipe(
        switchMap((photo) => {
          if (print) {
            return this.printService.printPhoto(photo, 'A4');
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
          this.dialogService.prompt('Do you want to add a new one?')
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
