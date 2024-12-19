import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {


  private idProductEmitter:EventEmitter<number>=new EventEmitter();
 
  private productEventEmitter:EventEmitter<Product>= new EventEmitter();
 
  constructor() { }
 
  get getIdProductEmitter():EventEmitter<number>{
    return this.idProductEmitter;
  }
  get getProductEventEmitter():EventEmitter<Product>{
    return this.productEventEmitter;
  }
}