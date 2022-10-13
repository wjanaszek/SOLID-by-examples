import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

export class UserDetailService {
  getUser(): Observable<User> {
    return of({
      id: 'test id',
      firstName: 'John',
      lastName: 'Doe',
      email: 'johnsdoes@gmail.com',
      roles: [
        {
          id: '1',
          name: 'Admin'
        }
      ],
      timezone: 'GMT+2',
      photo: {
        url: 'https://google.com/url-image',
        backgroundUrl: 'https://s3.fff/image'
      }
    });
  }
}
