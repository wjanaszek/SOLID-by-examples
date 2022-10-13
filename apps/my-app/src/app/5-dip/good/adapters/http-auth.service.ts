import { Observable, of } from 'rxjs';
import { LogsInPort } from '../ports/logs-in.port';
import { SignsUpPort } from '../ports/signs-up.port';

export class HttpAuthService implements LogsInPort, SignsUpPort {
  login(emailOrUsername: string, password: string): Observable<void> {
    return of();
  }

  signUp(username: string, email: string, password: string): Observable<void> {
    return of();
  }
}
