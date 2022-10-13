import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const UPDATES_PRODUCT = new InjectionToken<UpdatesProductPort>(
  'UPDATES_PRODUCT'
);

export interface UpdatesProductPort {
  update(): Observable<void>;
}
