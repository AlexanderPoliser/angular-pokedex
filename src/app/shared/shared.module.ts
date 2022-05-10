import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

//import Components region
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
//endregion

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    ListComponent
  ],
  exports: [HeaderComponent, SearchComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
