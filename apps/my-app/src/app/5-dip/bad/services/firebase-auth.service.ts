import { of } from 'rxjs';

export class FirebaseAuthService {
  login(emailOrUsername: string, password: string, firebaseKey: string) {
    return of();
  }

  signUp(username: string, email: string, password: string, firebaseKey: string) {
    return of();
  }
}
