import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const STORES_FILE = new InjectionToken<StoresFilePort>('STORES_FILE');

export interface StoresFilePort {
  store(): Observable<void>;
}
