import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastrarPjComponent } from './components';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    CadastrarPjComponent
  ]
})
export class  CadastroPjModule {}
