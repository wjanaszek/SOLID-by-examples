import { NgModule } from '@angular/core';
import { STORES_FILE } from '../ports/stores-file.port';
import { S3StorageService } from './s3-storage.service';

@NgModule({
  providers: [
    S3StorageService,
    {
      provide: STORES_FILE,
      useExisting: S3StorageService,
    },
  ],
})
export class S3StorageServiceModule {}
