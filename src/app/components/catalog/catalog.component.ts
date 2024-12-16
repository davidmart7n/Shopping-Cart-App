import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'catalog',
  imports: [ProductCardComponent],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent {

  @Input() products! : Product[];

  @Output() productEventEmitter=new EventEmitter<Product>

  onAddCart(product: Product){
    this.productEventEmitter.emit(product)
  }
}