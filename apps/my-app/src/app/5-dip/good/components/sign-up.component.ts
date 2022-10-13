import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { SIGNS_UP, SignsUpPort } from '../ports/signs-up.port';

@Component({
  selector: 'wojjan-dip-root-sign-up',
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  private username = '';
  private email = '';
  private password = '';

  // constructor(private authService: FirebaseAuthService) {}
  constructor(@Inject(SIGNS_UP) private signsUp: SignsUpPort) {}

  signUp(): void {
    // this.authService
    //   .signUp(this.username, this.email, this.password, 'firebase-key')
    //   .subscribe();
    this.signsUp.signUp(this.username, this.email, this.password).subscribe();
  }
}
