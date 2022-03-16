import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { AllProductsComponent } from './all-products/all-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdateProductComponent } from './update-product/update-product.component';
import { RemoveProductComponent } from './remove-product/remove-product.component';
import { AddauthUserComponent } from './addauth-user/addauth-user.component';
import { RegisterComponent } from './register/register.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BuyerLoginComponent } from './buyer-login/buyer-login.component';
import { UpdateauthUserComponent } from './updateauth-user/updateauth-user.component';
import { RemoveauthUserComponent } from './removeauth-user/removeauth-user.component';
import { SearchComponent } from './search/search.component';
import { ViewProductComponent } from './view-product/view-product.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    AllProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    RemoveProductComponent,
    AddauthUserComponent,
    RegisterComponent,
    BuyerLoginComponent,
    UpdateauthUserComponent,
    RemoveauthUserComponent,
    SearchComponent,
    ViewProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTooltipModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
