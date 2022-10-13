import { of } from 'rxjs';
import { DeletesProductPort } from '../ports/deletes-product.port';
import { GetsAllProductsPort } from '../ports/gets-all-products.port';
import { UpdatesProductPort } from '../ports/updates-product.port';

export class ProductService
  implements GetsAllProductsPort, UpdatesProductPort, DeletesProductPort
{
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
    return of();
  }
}
