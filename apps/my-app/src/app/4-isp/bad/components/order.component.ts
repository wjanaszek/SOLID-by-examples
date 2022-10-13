import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserOrderService } from '../services/user-order.service';

@Component({
  selector: 'wojjan-isp-root-order',
  templateUrl: './order.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  readonly user$ = this.userService.getUser();

  constructor(private userService: UserOrderService) {}
}
