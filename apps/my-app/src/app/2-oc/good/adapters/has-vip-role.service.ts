import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HasRolePort } from '../ports/has-hole.port';

@Injectable()
export class HasAdminRoleService implements HasRolePort {
  hasRole(): Observable<boolean> {
    return of(false);
  }
}
