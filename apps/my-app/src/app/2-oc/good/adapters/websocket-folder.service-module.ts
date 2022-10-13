import { NgModule } from '@angular/core';
import { CREATES_FOLDER } from '../ports/creates-folder.port';
import { UPDATES_FOLDER } from '../ports/updates-folder.port';
import { WebsocketFolderService } from './websocket-folder.service';

@NgModule({
  providers: [
    WebsocketFolderService,
    {
      provide: CREATES_FOLDER,
      useExisting: WebsocketFolderService,
    },
    {
      provide: UPDATES_FOLDER,
      useExisting: WebsocketFolderService,
    },
  ],
})
export class WebsocketFolderServiceModule {}
