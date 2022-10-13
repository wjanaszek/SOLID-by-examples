import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    switch (route.data['role']) {
      case UserRole.Guest:
        return this.userService.isGuest();
      case UserRole.Admin:
        return this.userService.isAdmin();
      default:
        return of(false);
    }
  }
}

enum UserRole {
  Guest = 'GUEST',
  Admin = 'ADMIN',
  VIP = 'VIP'
}
