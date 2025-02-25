import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RoutedListComponent } from './routed-list.component';
import { RoutedViewComponent } from './routed-view.component';
import { RoutedNewComponent } from './routed-new.component';
import { RoutedDelComponent } from './routed-del.component';
import { RoutedEditComponent } from './routed-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RoutedListComponent,
    RoutedViewComponent,
    RoutedNewComponent,
    RoutedEditComponent,
    RoutedDelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
