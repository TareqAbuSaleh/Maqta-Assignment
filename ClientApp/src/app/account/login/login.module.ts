import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];
@NgModule({
  declarations: [LoginComponent],
  imports: [FormsModule   , ReactiveFormsModule,ToastModule,RippleModule,
    CommonModule,RouterModule.forChild(routes),
  ],
  exports:[RouterModule,FormsModule,ReactiveFormsModule,ToastModule,RippleModule,]
})
export class LoginModule { }
