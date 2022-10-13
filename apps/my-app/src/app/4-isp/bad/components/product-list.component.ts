import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'wojjan-isp-product-list',
  templateUrl: './product-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent {
  readonly products$ = this.productService.getAll();

  constructor(private productService: ProductService) {}

  onCreateProductClicked() {
    
  }

  onDeleteProductClicked(id: string) {
    this.productService.delete();
  }

  onEditProductClicked(id: string) {
    this.productService.update()
  }
}
