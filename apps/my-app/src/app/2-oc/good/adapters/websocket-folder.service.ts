import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatesFolderPort } from '../ports/creates-folder.port';
import { UpdatesFolderPort } from '../ports/updates-folder.port';
import { WebsocketClient } from '../services/websocket.client';

@Injectable()
export class WebsocketFolderService
  implements CreatesFolderPort, UpdatesFolderPort
{
  constructor(private websocket: WebsocketClient) {}

  create(data: Record<string, string>): Observable<void> {
    return this.websocket.create();
  }

  update(data: Record<string, string>): Observable<void> {
    return this.websocket.update();
  }
}
