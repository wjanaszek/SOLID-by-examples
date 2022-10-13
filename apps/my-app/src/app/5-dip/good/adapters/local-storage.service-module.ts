import { NgModule } from "@angular/core";
import { STORES_FILE } from '../ports/stores-file.port';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  providers: [
    LocalStorageService,
    {
      provide: STORES_FILE,
      useExisting: LocalStorageService
    }
  ]
})
export class LocalStorageServiceModule {}
