import { of } from 'rxjs';

export class ProductService {
  getAll() {
    return of([
      { id: '1', name: 'Soap' },
      { id: '2', name: 'Beer' },
    ]);
  }

  getOne() {
    return of();
  }

  create() {
    return of();
  }

  createBulk() {
    return of();
  }

  delete() {
    return of();
  }

  deleteBulk() {
    return of();
  }

  update() {
    return of();
  }

  updateBulk() {
    return of()
  }
}
