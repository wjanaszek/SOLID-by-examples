import { NgModule } from "@angular/core";
import { HAS_ROLE } from '../ports/has-hole.port';
import { HasAdminRoleService } from './has-vip-role.service';

@NgModule({
  providers: [
    HasAdminRoleService,
    {
      provide: HAS_ROLE,
      useExisting: HasAdminRoleService
    }
  ]
})
export class HasVipRoleServiceModule {}

