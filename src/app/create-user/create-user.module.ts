import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

import {MatSelectModule} from '@angular/material/select';
import { CreateUserRoutingModule } from './create-user-routing.module';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    CreateUserRoutingModule
    ],
  declarations: [CreateUserComponent],
  exports: [CreateUserComponent]
})
export class CreateUserModule { }
