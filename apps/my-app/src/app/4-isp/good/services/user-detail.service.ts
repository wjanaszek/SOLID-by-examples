import { Observable, of } from 'rxjs';
import { UserDetail } from '../models/user-detail.model';

export class UserDetailService {
  getUser(): Observable<UserDetail> {
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
