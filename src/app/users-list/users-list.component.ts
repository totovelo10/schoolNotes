import { Component, OnInit } from '@angular/core';
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
  displayedColumns: string[] = ['name', 'firstname', 'type', 'dateNaissance','email'];
  dataSource: MatTableDataSource<User>;
  userlist: User [];
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

}
