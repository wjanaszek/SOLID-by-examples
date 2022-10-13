import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HasAdminRoleServiceModule } from '../adapters/has-admin-role.service-module';
import { UserRoleGuard } from '../guards/user-role.guard';

class AdminPage {}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
        canActivate: [UserRoleGuard],
      },
    ]),
    HasAdminRoleServiceModule,
  ],
  exports: [RouterModule],
})
export class AdminPageModule {}
