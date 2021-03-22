import { Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from './auth/auth.guard'

import { ProductsComponent } from '../app/component/products/products.component';
import { AppComponent } from './app.component';
import { AdminProductComponent } from '../app/component/admin-product/admin-product.component';
import { CartPageComponent } from '../app/component/cart-page/cart-page.component';

import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component'
import { AdminAuthGuard } from './auth/admin-auth.guard';

import { UserHomeComponent } from './user-home/user-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { NavComponent } from './component/nav/nav.component';
import { SearchProductComponent } from './component/search-product/search-product.component';
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { AdminOrderComponent } from './component/admin-order/admin-order.component'
import { UserOrderComponent } from './component/user-order/user-order.component'
export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
    },
    {
        path: 'about', component: AboutComponent
    },
    // {
    //     path: '', redirectTo: '/home', pathMatch: 'full'
    // },
    {
        path: '', redirectTo: '/producthome', pathMatch: 'full'
    },
    {
        path: 'producthome', component: ProductsComponent
    },
    {
        path: 'adminProduct', component: AdminProductComponent, canActivate: [AdminAuthGuard]
    },
    {
        path: 'dashboard', component: DashboardComponent, canActivate: [AdminAuthGuard]
    },
    {
        path: 'adminOrder', component: AdminOrderComponent, canActivate: [AdminAuthGuard]
    },
    {
        path: 'userOrder', component: UserOrderComponent, canActivate: [AdminAuthGuard]
    },
    {
        path: 'cartPage/:id', component: CartPageComponent
    },
    {
        path: 'searchPage', component: SearchProductComponent
    },

];
