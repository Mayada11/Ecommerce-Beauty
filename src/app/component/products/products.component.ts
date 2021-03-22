import { Component, OnInit } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { ProductsServiceService } from 'services/products-service.service';

import {ActivatedRoute, Params, Router} from '@angular/router';
import {CartServiceService} from 'services/cart-service.service'
library.add(faCartPlus);

import { UserService } from '../../shared/user.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  faCartPlus = faCartPlus;
  
  constructor(private userService: UserService,private productService:ProductsServiceService,private router:Router,private route:ActivatedRoute,private cartService:CartServiceService) { }

  selectdCartId:string | undefined;
products:any;
res:any;

productsObj:any;

  ngOnInit(): void {
  
    this.productService.getProducts().subscribe(
      (data)=>{

        this.res=data;
        console.log(this.res.body);
        this.products=this.res.body;
        for (const product in this.products) {
          console.log(this.products[product]._id)
         console.log(this.products[product].title)
         console.log(this.products[product].price)
         console.log(this.products[product].description)

     //   this.productsObj.push(this.products[product])
        }

      },
      (err)=>{
        console.log("error -_-")
      },
    )}
  onSelectedProduct(id:string){
    if(this.userService.isLoggedIn()){
      console.log("iam here")
    console.log("the id is "+id);
    // this.router.navigate(['/cartPage/'+id])
    this.cartService.AddNewCart(id)
    .subscribe( (data)=>{
      console.log(data);
      window.alert('added successfully');
    })
    }
    else{
      this.router.navigateByUrl('/login');
    }
    


}

 

}
