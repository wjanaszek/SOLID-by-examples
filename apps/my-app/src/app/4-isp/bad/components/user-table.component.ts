import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'wojjan-isp-root-user-table',
  templateUrl: './user-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent {
  readonly users$ = this.usersService.getUsers();

  constructor(private usersService: UserListService) {}

  goToDetails(id: string): void {
    // this.router.navigate(...)
  }
}
