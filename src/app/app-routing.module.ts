import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home.component';
import { ProductHomeComponent } from './products/product-home.component';
import { PageNotFoundComponent } from './ui/page-not-found.component';

const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path: 'products', component: ProductHomeComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
//ng g component ui/page-not-found --flat --skip-tests --inline-template 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule 
{
   
}
