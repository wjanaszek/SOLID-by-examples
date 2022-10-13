import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const DELETES_PRODUCT = new InjectionToken<DeletesProductPort>(
  'DELETES_PRODUCT'
);

export interface DeletesProductPort {
  delete(): Observable<void>;
}
