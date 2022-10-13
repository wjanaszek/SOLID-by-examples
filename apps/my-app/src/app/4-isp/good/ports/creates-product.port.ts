import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const CREATES_PRODUCT = new InjectionToken<CreatesProductPort>(
  'CREATES_PRODUCT'
);

export interface CreatesProductPort {
  create(): Observable<void>;
}
