import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'cart-modal',
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
})
export class CartModalComponent {

    @Input() items : CartItem[]=[];
  
    @Input() total!:number; 

    @Output() idProductEmitter=new EventEmitter();
    
    @Output() closeCartEmitter =new EventEmitter();

    onDeleteCart(id:number){
      this.idProductEmitter.emit(id);
    }

    closeCart():void{
      this.closeCartEmitter.emit();
    }
}
