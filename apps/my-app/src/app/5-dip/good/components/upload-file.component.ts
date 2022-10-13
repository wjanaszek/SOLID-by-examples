import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { STORES_FILE, StoresFilePort } from '../ports/stores-file.port';

@Component({
  selector: 'wojjan-dip-upload',
  templateUrl: './upload-file.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFileComponent {
  constructor(@Inject(STORES_FILE) private storesFile: StoresFilePort) {}

  onUploadFileClicked(): void {
    this.storesFile.store();
  }
}
