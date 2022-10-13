import { UserRole } from './user-role.model';

export interface UserDetail {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: UserRole[];
  timezone: string;
  photo: {
    url: string;
    backgroundUrl: string;
  };
}
