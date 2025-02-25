import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductApiService } from '../products-api-service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-routed-view',
  standalone: false,
  templateUrl: './routed-view.component.html',
  styleUrl: './routed-view.component.css'
})
export class RoutedViewComponent implements OnInit {

  router:ActivatedRoute = inject(ActivatedRoute);
  service: ProductApiService=inject(ProductApiService);
  productId:number=0;
  model:Product  = <Product>{};
  fb:FormBuilder = inject(FormBuilder);
  productForm = this.fb.group({
    productId: new FormControl(0),
    productName: new FormControl('', Validators.required),
    unitPrice: new FormControl(0),
    unitsInStock: new FormControl(0), 
    discontinued: new FormControl(false)
  });

  ngOnInit(): void { 
    this.productId = this.router.snapshot.params['id'];
    this.service.getProductDetails(this.productId).subscribe(
      (data:Product) => {
        this.model = data;
        //update the values into the formControl object
        this.productForm.patchValue({
          productId: this.model.productId,
          productName: this.model.productName,
          unitPrice: this.model.unitPrice,
          unitsInStock: this.model.unitsInStock,
          discontinued: this.model.discontinued,
        });
      });
  }
  onSubmit() { 

  }
}
