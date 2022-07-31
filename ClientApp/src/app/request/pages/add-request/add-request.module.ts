import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRequestComponent } from './add-request.component';
import {SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
const routes: Routes = [
  {
    path: '',
    component: AddRequestComponent
  }
];
@NgModule({
  declarations: [AddRequestComponent],
  imports: [ FormsModule, ReactiveFormsModule,ToastModule,RippleModule,
    CommonModule, SidebarModule,RouterModule.forChild(routes),
    ButtonModule
  ],
  
  exports:[ 
     SidebarModule, FormsModule, ReactiveFormsModule,ToastModule,RippleModule,
    ButtonModule,
    RouterModule]
})
export class AddRequestModule { }

