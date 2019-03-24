import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { UsersListComponent } from './users-list.component';
import { MatFormFieldModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [UsersListComponent],
  exports: [UsersListComponent]
})
export class UsersListModule { }
