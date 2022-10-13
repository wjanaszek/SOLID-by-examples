import { NgModule } from '@angular/core';
import { CREATES_FOLDER } from '../ports/creates-folder.port';
import { UPDATES_FOLDER } from '../ports/updates-folder.port';
import { GraphqlFolderService } from './graphql-folder.service';

@NgModule({
  providers: [
    GraphqlFolderService,
    {
      provide: CREATES_FOLDER,
      useExisting: GraphqlFolderService,
    },
    {
      provide: UPDATES_FOLDER,
      useExisting: GraphqlFolderService,
    },
  ],
})
export class GraphqlFolderServiceModule {}
