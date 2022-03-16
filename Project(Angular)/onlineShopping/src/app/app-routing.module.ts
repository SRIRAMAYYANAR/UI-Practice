import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddauthUserComponent } from './addauth-user/addauth-user.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { BuyerLoginComponent } from './buyer-login/buyer-login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"home",component: HomeComponent},
  {path:"allProducts",component: AllProductsComponent},
  {path:"popProducts",component: AllProductsComponent},
  {path:"newArrival",component: AllProductsComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"buyerlogin",component:BuyerLoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"addAuth",component:AddauthUserComponent},
  {path:"search",component:SearchComponent},
  {path:"buy/:id",component:ViewProductComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
