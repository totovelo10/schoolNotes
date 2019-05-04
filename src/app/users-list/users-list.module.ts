import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { UsersListComponent } from './users-list.component';
import { MatFormFieldModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UsersListRoutingModule } from './users-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    UsersListRoutingModule
  ],
  declarations: [UsersListComponent],
  exports: [UsersListComponent]
})
export class UsersListModule { }
