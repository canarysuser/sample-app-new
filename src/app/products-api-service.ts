import { inject, Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { Product } from "./models/product";

@Injectable({
    providedIn:'root'
})
export class ProductApiService { 

    //constructor(private http: HttpClient) {} 
    http:HttpClient = inject(HttpClient);
    //NOTE: baseUrl should be the URL of the new Product API 
    //UPDATE the URL accordingly.
    baseUrl = 'http://localhost:7001/api/products'; 
    //ALl URLs used in this Service will have to be updated 
    //as per the new API Controller. 

    getHeader() { 
        return {
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    }
    getAllProducts(): any { 
        return this.http.get(this.baseUrl, {headers: this.getHeader()}); 
    }
    getProductDetails(productId: number) : Observable<Product>{
        var url = `${this.baseUrl}/${productId}`;
        return this.http.get<Product>(url, {headers: this.getHeader()});
    }
    createNew(item: Product) { 
        var body = JSON.stringify(item); 
        var headers = { 
            'Content-Type':'application/json'
        }
        return this.http.post(this.baseUrl, body, {
            headers: {...headers, ...this.getHeader()}
        });
    }
    updateItem(item: Product) { 
        var body = JSON.stringify(item); 
        var headers = { 
            'Content-Type':'application/json'
        }
        var url = `${this.baseUrl}/${item.productId}`;
        return this.http.put(url, body, {
            headers: {...headers}
        });
    }
    deleteItem(productId: number) { 
        var url = `${this.baseUrl}/${productId}`;
        return this.http.delete<Product>(url)
    }
}