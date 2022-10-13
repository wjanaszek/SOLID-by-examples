import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { GETS_ALL_PRODUCTS } from '../ports/gets-all-products.port';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let productListComponent: ProductListComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [CommonModule],
      providers: [
        {
          provide: GETS_ALL_PRODUCTS,
          useValue: () => jest.fn(),
        },
      ],
    }).compileComponents();

    productListComponent = TestBed.inject(ProductListComponent);
  });
});
