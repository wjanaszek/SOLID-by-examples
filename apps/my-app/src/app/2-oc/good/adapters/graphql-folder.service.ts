import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatesFolderPort } from '../ports/creates-folder.port';
import { UpdatesFolderPort } from '../ports/updates-folder.port';
import { GraphqlClient } from '../services/graphql.client';

@Injectable()
export class GraphqlFolderService
  implements CreatesFolderPort, UpdatesFolderPort
{
  constructor(private graphql: GraphqlClient) {}

  create(data: Record<string, string>): Observable<void> {
    return this.graphql.create();
  }

  update(data: Record<string, string>): Observable<void> {
    return this.graphql.update();
  }
}
