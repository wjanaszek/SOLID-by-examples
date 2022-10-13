import { of } from 'rxjs';
import { StoresFilePort } from '../ports/stores-file.port';

export class LocalStorageService implements StoresFilePort {
  store() {
    localStorage.setItem('image', JSON.stringify('...'));
    return of();
  }
}
