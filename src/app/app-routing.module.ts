import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./main-page/home/home.component";
import {CategoryPageComponent} from "./cathegory-page/category-page.component";
import {CategoryTableComponent} from "./cathegory-page/category-table/category-table.component";

const routes: Routes = [
  {path:'',component: HomeComponent},
  {
    path:'portfolio',
    component: CategoryPageComponent,
    children: [
      {path: ':category_id',component: CategoryTableComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
