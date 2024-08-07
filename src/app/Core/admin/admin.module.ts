import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './Components/product/product.component';
import { CategoryComponent } from './Components/category/category.component';
import { OrderComponent } from './Components/order/order.component';
import { UserComponent } from './Components/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AdminGuard } from 'src/app/Gaurds/admin.guard';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: '', redirectTo: 'product', pathMatch: 'full' },
      { path: 'product', canActivate:[AdminGuard], title: 'Home | product', component: ProductComponent },
      { path: 'category', title: 'Home | category', component: CategoryComponent },
      { path: 'order', title: 'Home | order', component: OrderComponent },
      { path: 'user', title: 'Home | user', component: UserComponent },
    ]
  }
];

@NgModule({
  declarations: [
    ProductComponent,
    CategoryComponent,
    OrderComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AdminModule { }
