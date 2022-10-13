import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DELETES_PRODUCT, DeletesProductPort } from '../ports/deletes-product.port';
import {
  GETS_ALL_PRODUCTS,
  GetsAllProductsPort,
} from '../ports/gets-all-products.port';
import { UPDATES_PRODUCT, UpdatesProductPort } from '../ports/updates-product.port';

@Component({
  selector: 'wojjan-isp-product-list',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  readonly products$ = this.getsAllProducts.getAll();

  constructor(
    @Inject(GETS_ALL_PRODUCTS) private getsAllProducts: GetsAllProductsPort,
    @Inject(DELETES_PRODUCT) private deletesProduct: DeletesProductPort,
    @Inject(UPDATES_PRODUCT) private updatesProduct: UpdatesProductPort
  ) {}

  onCreateProductClicked() {}

  onDeleteProductClicked(id: string) {
    this.productService.delete();
  }

  onEditProductClicked(id: string) {
    this.productService.update();
  }
}
