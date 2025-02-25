import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutedListComponent } from './routed-list.component';
import { RoutedNewComponent } from './routed-new.component';
import { RoutedViewComponent } from './routed-view.component';
import { RoutedEditComponent } from './routed-edit.component';
import { RoutedDelComponent } from './routed-del.component';

const routes: Routes = [
  {
    path:'admin', 
    children: [
      {path:'list', component: RoutedListComponent},
      {path:'new', component: RoutedNewComponent},
      {path:'view/:id', component:RoutedViewComponent},
      {path:'edit/:id', component: RoutedEditComponent},
      {path: 'del/:id', component: RoutedDelComponent},
      {path:'', redirectTo:'/home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
