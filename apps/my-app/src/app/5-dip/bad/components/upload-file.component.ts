import { ChangeDetectionStrategy, Component } from '@angular/core';
import { S3StorageService } from '../services/s3-storage.service';

@Component({
  selector: 'wojjan-dip-upload',
  templateUrl: './upload-file.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFileComponent {
  constructor(private fileUploadService: S3StorageService) {}

  onUploadFileClicked() {
    this.fileUploadService.store();
  }
}
