import { of } from 'rxjs';
import { LogsInPort } from '../ports/logs-in.port';
import { SignsUpPort } from '../ports/signs-up.port';

export class FirebaseAuthService implements LogsInPort, SignsUpPort {
  login(emailOrUsername: string, password: string) {
    return of();
  }

  signUp(username: string, email: string, password: string) {
    return of();
  }
}
