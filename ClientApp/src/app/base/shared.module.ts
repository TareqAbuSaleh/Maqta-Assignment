import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedService } from './service/shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
],
  imports: [
    CommonModule,MenubarModule,InputTextModule,ButtonModule,HttpClientModule, FormsModule,
  ],
  exports:[ MenubarModule,MenubarModule,InputTextModule,ButtonModule,HttpClientModule, FormsModule,
    ],
   providers :[SharedService]
})
export class SharedModule {
  
 }
