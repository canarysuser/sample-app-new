import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header.component';
import { FooterComponent } from './ui/footer.component';
import { HomeComponent } from './ui/home.component';
import { ProductHomeComponent } from './products/product-home.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './ui/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoginComponent } from './auth/login.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  /* declarations section contains list of components,directives that form a 
  part of the application */
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductHomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    LoginComponent,
    
  ],
  /* the imports section lists all the external module dependencies for this 
  application */ 
  imports: [
    BrowserModule, 
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    AppRoutingModule
  ],
  /* providers contains a list of all services and pipes that are used 
  in the application  */
  providers: [provideHttpClient(withInterceptorsFromDi())],
  /* bootstrap section can be defined only within one module in the application, 
  The module that defines the bootstrap section is called the startup module */
  bootstrap: [AppComponent]
})
export class AppModule { }
