import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../product-list.service';
import { Product } from '../models/product';
import { ProductApiService } from '../products-api-service';

@Component({
  selector: 'app-product-home',
  standalone: false,
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.css'
})
export class ProductHomeComponent implements OnInit {

  //constructor(private service: ProductListService){ }
  constructor(private service: ProductApiService){ }

  productList:Product[] = []; 
  selectedModel: Product = <Product>{}; 

  ngOnInit(): void {
      //this.productList = this.service.getAllProduct(); 
      this.service.getAllProducts().subscribe((data:any)=>{
        this.productList = <Product[]>data;
      });
  }
  select(productId:number) { 
    //this.selectedModel = this.service.getProductById(productId);  
  }
  
  addNewClicked() { 
    this.selectedModel = <Product>{}; //assign an empty product object
  }

  saveChanges(item:Product) {
    //pass this object to the service. 
    //add one more function in the service called - createNew(item:product) 
    //which will push the item to the productList. 
    //before pushing, get the last productId, add 1 to it and then update the 
    //item.productId with the new value. 
    ///this.service.createNew(item); 
    //this.productList=this.service.getAllProduct();
  }

}
