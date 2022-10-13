import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HAS_ROLE, HasRolePort } from '../ports/has-hole.port';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(@Inject(HAS_ROLE) private hasRole: HasRolePort) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.hasRole.hasRole();
  }
}
