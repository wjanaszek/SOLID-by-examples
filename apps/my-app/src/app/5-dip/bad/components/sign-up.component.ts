import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FirebaseAuthService } from '../services/firebase-auth.service';

@Component({
  selector: 'wojjan-dip-root-sign-up',
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  private username = '';
  private email = '';
  private password = '';

  constructor(private authService: FirebaseAuthService) {}

  signUp(): void {
    this.authService
      .signUp(this.username, this.email, this.password, 'firebase-key')
      .subscribe();
  }
}
