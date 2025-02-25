import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductApiService } from '../products-api-service';

@Component({
  selector: 'app-routed-list',
  standalone: false,
  templateUrl: './routed-list.component.html',
  styleUrl: './routed-list.component.css'
})
export class RoutedListComponent implements OnInit {

  productList: Product[] = <Product[]>[];

  service: ProductApiService = inject(ProductApiService);
  
  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data:Product[])=>{
      this.productList = data;
    });
  }
}
