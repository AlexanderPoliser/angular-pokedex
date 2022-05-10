import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

//import Components region
import {HomeComponent} from "./home/home.component";

import {DetailsComponent} from "./details/details.component";
//endregion

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'details',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
