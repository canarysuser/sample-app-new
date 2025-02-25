import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductListService } from '../product-list.service';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  title="Home"; 
  model: Product = new Product(1, 'Sample', 100, 200, false);

  constructor(private service: ProductListService) { }
  productList: Product[] = []; 
  //OnInit interface member 
  //method is triggered when the component loads
  ngOnInit(): void {
      this.productList = this.service.getAllProduct(); 
  }

  greeting() { 
    return "Hello!! Welcome to Angular App";
  }
  showData() { 
    return {username:'abc', lastAccessed:'today', name:'Capg'};
  }

}
