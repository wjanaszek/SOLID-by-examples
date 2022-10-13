import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

export class UserOrderService {
  getUser(): Observable<User> {
    return of({
      id: 'test id',
      firstName: 'John',
      lastName: 'Doe',
      email: 'some-john-mail@google.com',
      photo: {
        iconUrl: 'https://google.com/image',
      },
      isTrusted: false,
      totalMoneySpent: '5$',
    });
  }
}
