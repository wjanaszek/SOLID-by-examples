import { of } from 'rxjs';

export class LocalStorageService {
  store() {
    localStorage.setItem('image', JSON.stringify('...'));
    return of();
  }
}
