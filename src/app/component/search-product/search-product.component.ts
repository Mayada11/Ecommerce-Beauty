import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsServiceService} from 'services/products-service.service';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
library.add(faCartPlus);

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  res:any;
  faCartPlus = faCartPlus;
  products:any;
  filteredItems:any;
productName:any;
productList:any;
msg:any;
  constructor(private productService:ProductsServiceService,private route:ActivatedRoute) { }

  assignCopy(){
    console.log("empty");
   this.filteredItems = Object.assign([], this.products);
 }
 filterItem(value:any){
   if(!value){
     this.msg="item not found";
       this.assignCopy();
   } 
 return  this.filteredItems = Object.assign([], this.products).filter(
     (item:any) => item.title.toLowerCase().indexOf(value.toLowerCase()) > -1
   )}

   ngOnInit(): void {

    this.productName = localStorage['searchValue'];


    console.log(this.productName);
    this.productService.getProducts().subscribe(
      (data) => {

        this.res = data;
        console.log(this.res.body);
        this.products = this.res.body;
        for (const product in this.products) {
          console.log(this.products[product]._id)
          console.log(this.products[product].title)
          console.log(this.products[product].price)
          console.log(this.products[product].description)
        }
      }, (err) => { }, () => {
        this.productList = this.filterItem(this.productName);
        console.log(this.productList);
        if ((this.productList).length === 0) {
          console.log("hhhiii")
          this.msg = "item not found";
        }
      })




  }
  onSelectedProduct(id: any) {

  }

}
