import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

//import Components region
import { HeaderComponent } from './header/header.component';
//endregion

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports:[HeaderComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
