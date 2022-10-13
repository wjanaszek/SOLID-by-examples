import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const HAS_ROLE = new InjectionToken<HasRolePort>('HAS_ROLE')

export interface HasRolePort {
  hasRole(): Observable<boolean>;
}
