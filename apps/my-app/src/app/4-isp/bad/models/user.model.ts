import { UserRole } from './user-role.model';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: {
    iconUrl?: string;
    url?: string;
    backgroundUrl?: string;
  };
  roles?: UserRole[];
  totalMoneySpent?: string;
  timezone?: string;
  isTrusted?: boolean;
}
