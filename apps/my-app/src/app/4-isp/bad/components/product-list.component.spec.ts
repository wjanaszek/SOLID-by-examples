import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../services/product.service';

describe('ProductListComponent', () => {
  let productListComponent: ProductListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [CommonModule],
      providers: [
        {
          provide: ProductService,
          useValue: {

          }
        }
      ]
    }).compileComponents();

    productListComponent = TestBed.inject(ProductListComponent);
  });
});
