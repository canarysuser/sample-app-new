import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { filter } from 'rxjs';

const productList: Product[] = [
  new Product(101, 'First', 900, 400, true),
  new Product(102, 'Unknown Product', 700, 500, false),
  new Product(103, 'Third Product', 500, 600, true),
  new Product(104, 'Fourth Item', 300, 700, false),
  new Product(105, 'Fifth Item', 100, 800, true),
];

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }

  getAllProduct() : Product[] { 
    return productList; 
  }
  getProductById(productId:number) : Product { 
    var filteredList = productList.filter(c=>c.productId==productId); 
    if(filteredList.length) {//exists 
      return filteredList[0];
    }
    return <Product>{}; //empty product object
  }
  createNew(item:Product) { 
    var maxId = productList[0].productId;
    productList.map((value, index)=>{
      if(value.productId> maxId)
        maxId = value.productId;
    }); 
    var pId = maxId+1;
    item.productId=pId; 
    productList.push(item);
  }

}
