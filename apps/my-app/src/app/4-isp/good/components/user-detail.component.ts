import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserDetailService } from '../services/user-detail.service';

@Component({
  selector: 'wojjan-isp-root-user-detail',
  templateUrl: './user-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailComponent {
  readonly user$ = this.userService.getUser();

  constructor(private userService: UserDetailService) {}
}
