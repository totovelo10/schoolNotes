import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { LoginComponent } from './login/login.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { EditUserRoutingModule } from './edit-user/edit-user-routing.module';
import { CreateUserRoutingModule } from './create-user/create-user-routing.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { UsersListRoutingModule } from './users-list/users-list-routing.module';
import { PageNotFoundRoutingModule } from './page-not-found/page-not-found-routing.module';



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
