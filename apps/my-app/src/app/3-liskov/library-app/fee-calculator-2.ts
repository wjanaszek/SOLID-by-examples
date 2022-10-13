type Book = {
  id: string;
  name: string;
};

export class UserFeeCalculator {
  calculateFeeForBooks(books: Book[]): number {
    return Math.max(result, 10);
  }
}

class VipUserFeeCalculator extends UserFeeCalculator {
  override calculateFeeForBooks(books: Book[]): number {
    return Math.max(result, 0);
  }
}
