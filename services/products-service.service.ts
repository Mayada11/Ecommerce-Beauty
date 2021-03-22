import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ NgForm, FormControl, FormGroup, Validators }from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  


private baseUrl='http://localhost:3000/api/products';

  constructor(private httpClient:HttpClient) { 
  }

  getProducts(){
   return this.httpClient.get(this.baseUrl+'/',{observe:'response'});
  }
  EditProducts(product:any,_id:any){
    return this.httpClient.patch(this.baseUrl+'/edit-product/'+ _id,product);
  }
  AddNewProduct(product:any){
    return this.httpClient.post(this.baseUrl+'/add-product',product);
  }
  deleteProduct(_id:any){
    return this.httpClient.delete(this.baseUrl+'/delete-product/'+_id);
  }
  getProduct(_id:any){
    return this.httpClient.get(this.baseUrl+'/'+_id,{observe:'response'});
  }
}
