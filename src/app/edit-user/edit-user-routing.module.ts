import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user.component';
import { RouterModule, Routes } from '@angular/router';

const editUserRoutes: Routes = [
 // { path: 'edituser/:id', component: EditUserComponent },

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(editUserRoutes)
  ],
  exports: [ RouterModule ]
})
export class EditUserRoutingModule { }
