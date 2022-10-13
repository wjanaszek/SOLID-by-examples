import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const UPDATES_FOLDER = new InjectionToken<UpdatesFolderPort>(
  'UPDATES_FOLDER'
);

export interface UpdatesFolderPort {
  update(data: Record<string, string>): Observable<void>;
}
