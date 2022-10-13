import { NgModule } from '@angular/core';
import { LOGS_IN } from '../ports/logs-in.port';
import { SIGNS_UP } from '../ports/signs-up.port';

@NgModule({
  providers: [
    HttpAuthServiceModule,
    { provide: LOGS_IN, useExisting: HttpAuthServiceModule },
    { provide: SIGNS_UP, useExisting: HttpAuthServiceModule },
  ],
})
export class HttpAuthServiceModule {}
