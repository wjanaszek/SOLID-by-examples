import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphqlClient } from './graphql.client';
import { WebsocketClient } from './websocket.client';

@Injectable()
export class FolderDataService {
  constructor(
    private http: HttpClient,
    private websocket: WebsocketClient,
    private graphql: GraphqlClient
  ) {}

  createFolder(data: Record<string, string>): Observable<void> {
    if (data['experimental']) {
      return this.websocket.create();
    }

    return this.http.post<void>('some-api-url', data);
  }

  updateFolder(data: Record<string, string>): Observable<void> {
    if (data['experimental']) {
      return this.websocket.update();
    }

    if (data['graphql']) {
      return this.graphql.update();
    }

    return this.http.put<void>('some-api-url', data);
  }
}
