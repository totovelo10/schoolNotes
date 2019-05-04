import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { RouterModule, Routes } from '@angular/router';

const usersListRoutes: Routes = [
  { path: 'userslist', component: UsersListComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(usersListRoutes)
  ],
  exports: [ RouterModule ]
})
export class UsersListRoutingModule { }
