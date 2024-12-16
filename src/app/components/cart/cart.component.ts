import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart',
  imports: [],
  templateUrl: './cart.component.html',
})
export class CartComponent {

  @Input() items : CartItem[]=[];

  @Input() total!:number; 

  @Output() idProductEmitter=new EventEmitter();

  onDeleteCart(id:number){
    this.idProductEmitter.emit(id);
  }

}
