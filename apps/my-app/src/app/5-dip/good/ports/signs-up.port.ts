import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const SIGNS_UP = new InjectionToken<SignsUpPort>('SIGNS_UP');

export interface SignsUpPort {
  signUp(username: string, email: string, password: string): Observable<void>;
}
