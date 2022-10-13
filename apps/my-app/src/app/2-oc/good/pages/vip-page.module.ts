import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HasVipRoleServiceModule } from '../adapters/has-vip-role.service-module';
import { UserRoleGuard } from '../guards/user-role.guard';

class VipPage {}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: VipPage,
        canActivate: [UserRoleGuard]
      }
    ]),
    HasVipRoleServiceModule
  ],
  exports: [RouterModule]
})
export class VipPageModule {}
