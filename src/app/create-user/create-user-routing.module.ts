import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const createUserRoutes: Routes = [
  { path: 'createuser', component: CreateUserComponent },
  { path: 'edituser/:id', component: CreateUserComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    RouterModule.forChild(createUserRoutes)
  ],
  exports: [ RouterModule ]
})
export class CreateUserRoutingModule { }
