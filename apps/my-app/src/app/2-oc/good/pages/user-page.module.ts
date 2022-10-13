import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminPageModule } from './admin-page.module';
import { VipPageModule } from './vip-page.module';

class TestPage {}

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TestPage,
        children: [
          // {
          //   path: 'guest',
          //   component: GuestPage,
          // },
          {
            path: 'vip',
            loadChildren: () => VipPageModule,
          },
          {
            path: 'admin',
            loadChildren: () => AdminPageModule,
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule]
})
export class UserPageModule {}
