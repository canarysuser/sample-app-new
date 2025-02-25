import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductApiService } from '../products-api-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routed-edit',
  standalone: false,
  templateUrl: './routed-edit.component.html',
  styleUrl: './routed-edit.component.css'
})
export class RoutedEditComponent implements OnInit {
  router:ActivatedRoute = inject(ActivatedRoute);
  navigator:Router = inject(Router);
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
    this.model = {
      productId: this.productForm.controls['productId'].value || 0,
      productName: this.productForm.controls['productName'].value || '',
      unitPrice: this.productForm.controls['unitPrice'].value || 0,
      unitsInStock: this.productForm.controls['unitsInStock'].value || 0,
      discontinued: this.productForm.controls['discontinued'].value || false,
    }
    this.service.updateItem(this.model).subscribe((data:any)=>{
      this.navigator.navigate(['/admin/list']);
    })
  }
}
