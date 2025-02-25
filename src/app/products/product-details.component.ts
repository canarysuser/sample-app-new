import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() productDetails: Product=<Product>{} ;
  @Output() saveChanges = new EventEmitter<Product>();

  // updatePrice() {
  //   this.productDetails.unitPrice += (this.productDetails.unitPrice * 0.10);
  // }
  updateChanges() {  //will be called on button (click)="updateChanges()"
    this.saveChanges.emit(this.productDetails);
  }
}
