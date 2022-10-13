import { of } from "rxjs";
import { StoresFilePort } from '../ports/stores-file.port';

export class S3StorageService implements StoresFilePort {
  store() {
    return of();
  }
}
