import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CadastrarPjComponent, CadastroPjComponent} from './components';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { CadastrarPjService } from './services';

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  declarations: [
    CadastroPjComponent,
    CadastrarPjComponent
  ],
  providers: [
    CadastrarPjService
  ]
})
export class  CadastroPjModule {}
