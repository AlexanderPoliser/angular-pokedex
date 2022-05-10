import { NgModule } from '@angular/core';

//import Modules region
import { CommonModule } from '@angular/common'

import {SharedModule} from "../shared/shared.module";

import {RoutingModule} from "./pages-routing.module";
//endregion

//import Components region
import { HomeComponent } from './home/home.component';

import { DetailsComponent } from './details/details.component';

//endregion

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
