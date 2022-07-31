import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from './request.component';

import {TableModule} from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
const routes: Routes = [
  {
    path: '',
    component: RequestComponent
  }
];

@NgModule({
  declarations: [RequestComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),TableModule,ToastModule,RippleModule,

  ],
  exports:[RouterModule,TableModule,ToastModule,RippleModule,]
})
export class RequestModule { }
