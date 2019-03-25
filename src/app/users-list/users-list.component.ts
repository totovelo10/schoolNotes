import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {User} from '../user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['select', 'delete', 'name', 'firstname', 'type', 'dateNaissance', 'email', 'icons'];
  dataSource: MatTableDataSource<User>;
  userlist: User [];
  selection = new SelectionModel<User>(true, []);

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsersList().subscribe(user => {
    this.dataSource = new MatTableDataSource(user);
    console.log(this.dataSource);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /**Delete User from list */
  deleteUser(user: User) {
    this.userService.deleteUser(user);
  }

  /** The label for the checkbox on the passed row 
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row + 1}`;
  }**/
}
