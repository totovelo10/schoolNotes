import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { User } from '../user';
import {Moment} from 'moment';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  types: string[];
  user: User;
  submitted: boolean;
  constructor() {}

  ngOnInit() {
    this.types = ['Eleve', 'Professeur', 'Administrateur'];
   this.user = new User(18, '', '', '', 0, this.types[0]);

    this.submitted = false;
    console.log(this.user);
  }

  onSubmit() {
    this.createUser();
  }
  createUser() {
    this.submitted = true;
  }
}
