import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input() productList:Product[] = []; 
  @Output('selectItem') selectItem = new EventEmitter<number>();
  @Output() addNewItemClicked = new EventEmitter<void>(); //Delegate event

  selectedItem(productId: number) { 
    console.log(productId);
    this.selectItem.emit(productId);
  }

  addNew() {
    this.addNewItemClicked.emit();  //delegate.Invoke()
  }
}
