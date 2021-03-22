import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public router :Router) { }

  ngOnInit(): void {
  }
  onSelectViewProduct(){
    this.router.navigate(['/adminProduct']);
  }
  onSelectAdminOrder(){
    this.router.navigate(['/adminOrder']);
  }
}
