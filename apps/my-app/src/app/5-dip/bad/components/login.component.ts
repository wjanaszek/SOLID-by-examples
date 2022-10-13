import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'wojjan-dip-root-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private emailOrUsername = '';
  private password = '';

  constructor(private authService: FirebaseAuthService) {}

  login(): void {
    this.authService
      .login(this.emailOrUsername, this.password, 'firebase-key')
      .subscribe();
  }
}
