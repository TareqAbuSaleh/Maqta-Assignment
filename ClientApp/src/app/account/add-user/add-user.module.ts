import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

const routes: Routes = [
  {
    path: '',
    component: AddUserComponent
  }
];

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    FormsModule, ReactiveFormsModule,ToastModule,RippleModule,
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [FormsModule, ReactiveFormsModule,ToastModule,RippleModule,
    CommonModule, RouterModule]
})
export class AddUserModule { }
