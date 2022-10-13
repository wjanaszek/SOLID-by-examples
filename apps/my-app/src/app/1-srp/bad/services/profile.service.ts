import { of } from 'rxjs';

export class ProfileService {
  selectFile(allowedFileExtensions: string[]) {
    return of();
  }

  uploadFile(photo: unknown, profileBucket: string) {
    return of();
  }

  download(url: string) {
    return of();
  }

  printPhoto(photo: unknown, format: string) {
    return of();
  }

  removeProfilePhoto() {
    return of();
  }

  prompt(message: string) {
    return of();
  }
}
