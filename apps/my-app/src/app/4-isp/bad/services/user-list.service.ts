import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

export class UserListService {
  getUsers(): Observable<User[]> {
    return of([
      {
        id: 'test id',
        firstName: 'John',
        lastName: 'Doe',
        email: 'johnsdoes@gmail.com',
        photo: {
          iconUrl: 'https://google.com/url-image',
          backgroundUrl: 'https://s3.fff/image'
        }
      },
      {
        id: 'test id',
        firstName: 'Angela',
        lastName: 'Sim',
        email: 'angela_sim@gmail.com',
        photo: {
          iconUrl: 'https://google.com/url-image',
          backgroundUrl: 'https://s3.fff/image'
        }
      }
    ]);
  }
}
