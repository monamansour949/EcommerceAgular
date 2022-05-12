import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './Components/card/card.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';

import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderComponent } from './Components/order/order.component';
import { ProductComponent } from './Components/product/product.component';

const routes: Routes = [

   {path:'',redirectTo:'/Home',pathMatch:'full'},
   {path:'',component:MainLayoutComponent,children:[
     {path:'Home',component:HomeComponent},
     {path:'Order',component:OrderComponent},
    {path:'Product',component:ProductComponent},
    {path:'Cart',component:CardComponent}
   ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
