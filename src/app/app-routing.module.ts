import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {ContactComponent} from './contact/contact.component';
import {ProductsComponent} from './products/products.component';
import {UsersComponent} from './users/users.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'services',
    component:ServicesComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'products',
    component:ProductsComponent,
  },
  {
    path:'users',
    component:UsersComponent,
  },
  {
    path:'dashboard',
    component:DashBoardComponent,
  },
  {
    path:'createProduct',
    component:CreateProductComponent
  },
  {
    path:'createUser',
    component:CreateUserComponent
  },
  {
    path:'editProduct/:id',
    component:EditProductComponent
  },
  {
    path:'editUser/:id',
    component:EditUserComponent
  },
  {
    path:"product/:id",
    component:ProductDetailComponent
  },
  {
    path:"user/:id",
    component:UserDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
