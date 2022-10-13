import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const CREATES_FOLDER = new InjectionToken<CreatesFolderPort>('CREATES_FOLDER');

export interface CreatesFolderPort {
  create(data: Record<string, string>): Observable<void>;
}
