import { NgModule } from '@angular/core';
import { CREATES_FOLDER } from '../ports/creates-folder.port';
import { UPDATES_FOLDER } from '../ports/updates-folder.port';
import { HttpFolderService } from './http-folder.service';

@NgModule({
  providers: [
    HttpFolderService,
    {
      provide: CREATES_FOLDER,
      useExisting: HttpFolderService,
    },
    {
      provide: UPDATES_FOLDER,
      useExisting: HttpFolderService,
    },
  ],
})
export class HttpFolderServiceModule {}
