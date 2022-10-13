import { NgModule } from '@angular/core';
import { LOGS_IN } from '../ports/logs-in.port';
import { SIGNS_UP } from '../ports/signs-up.port';
import { FirebaseAuthService } from './firebase-auth.service';

@NgModule({
  providers: [
    FirebaseAuthService,
    { provide: LOGS_IN, useExisting: FirebaseAuthService },
    { provide: SIGNS_UP, useExisting: FirebaseAuthService },
  ],
})
export class FirebaseAuthServiceModule {}
