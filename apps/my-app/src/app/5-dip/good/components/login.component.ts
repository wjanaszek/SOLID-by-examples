import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { LOGS_IN, LogsInPort } from '../ports/logs-in.port';

@Component({
  selector: 'wojjan-dip-root-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private emailOrUsername = '';
  private password = '';

  // constructor(private authService: FirebaseAuthService) {}
  constructor(@Inject(LOGS_IN) private logsIn: LogsInPort) {}

  login(): void {
    // this.authService
    //   .login(this.emailOrUsername, this.password, 'firebase-key')
    //   .subscribe();
    this.logsIn.login(this.emailOrUsername, this.password).subscribe();
  }
}
