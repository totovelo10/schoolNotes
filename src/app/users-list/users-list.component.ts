import { Component, OnInit, LOCALE_ID } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';
import {User} from '../user';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeFr);


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]

})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['select', 'delete', 'name', 'firstname', 'type', 'dateNaissance', 'email', 'edit'];
  dataSource: MatTableDataSource<User>;
  userlist: User [];
  selection = new SelectionModel<User>(true, []);

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.userService.getUsersList().subscribe(user => {
    this.dataSource = new MatTableDataSource(user);
    console.log(this.dataSource);
    console.log(this.selection.selected);
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
    this.selection.clear();
  }
  /**Delete Users from list */
  deleteUsers(users: User[]) {
    this.userService.deleteUsers(users);
    users.forEach(usr => {
      this.selection.deselect(usr);
    });

    console.log(this.selection.selected);
  }

  editUser(user: User) {

    this.router.navigate(['/edituser', user.id]);
  }

}
