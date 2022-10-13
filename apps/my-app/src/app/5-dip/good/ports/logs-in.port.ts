import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const LOGS_IN = new InjectionToken<LogsInPort>('LOGS_IN');

export interface LogsInPort {
  login(emailOrUsername: string, password: string): Observable<void>;
}
