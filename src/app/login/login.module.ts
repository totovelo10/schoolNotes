import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
