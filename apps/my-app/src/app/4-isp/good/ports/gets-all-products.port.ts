import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const GETS_ALL_PRODUCTS = new InjectionToken<GetsAllProductsPort>('GETS_ALL_PRODUCTS')

export interface GetsAllProductsPort {
  getAll(): Observable<unknown[]>;
}
