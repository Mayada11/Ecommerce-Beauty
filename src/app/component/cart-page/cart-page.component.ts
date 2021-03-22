import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { promises } from 'node:fs';
import { CartServiceService } from 'services/cart-service.service';
import{ProductsServiceService} from 'services/products-service.service';
var array1 :Array<object>;
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent implements OnInit {
cartIds:any;
res:any;
Products:any;
productInfo?:any;
ress:any
arr:any
dataValues:any
dataKeys:any
  constructor( private activateRoute:ActivatedRoute,
    
    private route:Router,public CartService:CartServiceService,private productService:ProductsServiceService) { 
   
      
      
 
      
    }




  ngOnInit(): void {
 
    this.CartService.getCart().subscribe((data)=>{
      this.res = data
      this.cartIds = this.res.body;
      for(let values of this.cartIds){
        this.productService.getProduct(values.productId).subscribe((data)=>{
          this.ress = data;
          this.arr = this.ress.body
         console.log(this.arr);
          array1.push((this.arr));
          console.log(array1);
 
         },
        (err)=>{
  
        },
      ) 
      
      }
    });
  }
 
}
