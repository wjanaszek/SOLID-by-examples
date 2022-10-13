import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { CreatesFolderPort } from '../ports/creates-folder.port';
import { UpdatesFolderPort } from '../ports/updates-folder.port';

@Injectable()
export class HttpFolderService implements CreatesFolderPort, UpdatesFolderPort {
  constructor(private http: HttpClient) {}

  create(data: Record<string, string>): Observable<void> {
    return this.http.post<void>('some-api-url', data);
  }

  update(data: Record<string, string>): Observable<void> {
    return this.http.put<void>('some-api-url', data);
  }
}
