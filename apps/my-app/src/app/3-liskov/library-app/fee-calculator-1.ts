type Book = {
  id: string;
  name: string;
};
const FEE = 2;

export class UserFeeCalculator {
  calculateFeeForBooks(books: Book[]): number {
    if (books.length > 1) {
      return books.length * FEE;
    }

    return 0;
  }
}

class VipUserFeeCalculator extends UserFeeCalculator {
  override calculateFeeForBooks(books: Book[]): number {
    if (books.length > 3) {
      return books.length * FEE;
    }
  }
}
