export interface UserOrderModel {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: {
    iconUrl: string;
  };
  totalMoneySpent: string;
  isTrusted: boolean;
}
