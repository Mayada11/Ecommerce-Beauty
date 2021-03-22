import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private httpClient:HttpClient) { }
  private baseUrl='http://localhost:3000/api/cart';

  getCart(){
    return this.httpClient.get(this.baseUrl+'/',{observe:'response'});
   }
   EditCart(cart:any,_id:any){
     
     return this.httpClient.patch(this.baseUrl+'/'+ _id,cart);
   }
   AddNewCart(productId:any){
     const body={
      productId:productId
     }
     return this.httpClient.post(this.baseUrl+'/add-to-cart',body);
   }
   deleteCart(_id:any){
     return this.httpClient.delete(this.baseUrl+'/delete/'+_id);
   }
}
