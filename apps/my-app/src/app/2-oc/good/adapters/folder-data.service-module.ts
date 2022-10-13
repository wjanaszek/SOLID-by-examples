import { ModuleWithProviders, NgModule } from '@angular/core';
import { CREATES_FOLDER } from '../ports/creates-folder.port';
import { UPDATES_FOLDER } from '../ports/updates-folder.port';
import { GraphqlFolderService } from './graphql-folder.service';
import { HttpFolderService } from './http-folder.service';
import { WebsocketFolderService } from './websocket-folder.service';

@NgModule({})
export class FolderDataServiceModule {
  static forFeature(
    provider: 'graphql' | 'websocket' | 'http'
  ): ModuleWithProviders<FolderDataServiceModule> {
    const graphqlProviders = [
      GraphqlFolderService,
      {
        provide: CREATES_FOLDER,
        useExisting: GraphqlFolderService,
      },
      {
        provide: UPDATES_FOLDER,
        useExisting: GraphqlFolderService,
      },
    ];
    const websocketProviders = [
      WebsocketFolderService,
      {
        provide: CREATES_FOLDER,
        useExisting: WebsocketFolderService,
      },
      {
        provide: UPDATES_FOLDER,
        useExisting: WebsocketFolderService,
      },
    ];
    const httpProviders = [
      HttpFolderService,
      {
        provide: CREATES_FOLDER,
        useExisting: HttpFolderService,
      },
      {
        provide: UPDATES_FOLDER,
        useExisting: HttpFolderService,
      },
    ];

    return {
      ngModule: FolderDataServiceModule,
      providers: [
        provider === 'graphql'
          ? [...graphqlProviders]
          : provider === 'websocket'
          ? [...websocketProviders]
          : [...httpProviders],
      ],
    };
  }
}
