import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AdminAuthGuard } from './auth/admin-auth.guard';


import { AboutComponent } from './about/about.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ProductsComponent } from './component/products/products.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavComponent } from './component/nav/nav.component'

import { CartServiceService } from '../../services/cart-service.service';
import { ProductsServiceService } from '../../services/products-service.service';
import { AdminProductComponent } from './component/admin-product/admin-product.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { SearchProductComponent } from './component/search-product/search-product.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AdminOrderComponent } from './component/admin-order/admin-order.component';
import { UserOrderComponent } from './component/user-order/user-order.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    AboutComponent,
    UserHomeComponent,
    AdminHomeComponent,
    ProductsComponent,
    FooterComponent,
    AdminProductComponent,
    CartPageComponent,
    NavComponent,
    SearchProductComponent,
    DashboardComponent,
    AdminOrderComponent,
    UserOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,AdminAuthGuard,UserService,ProductsServiceService,ProductsServiceService,AppComponent,AdminProductComponent,CartPageComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

function cloudinaryLib(cloudinaryLib: any, arg1: { cloud_name: string; }): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}