import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { User } from '../user';
import * as moment from 'moment';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import {ErrorStateMatcher} from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class CreateUserComponent implements OnInit {
  types: string[];
  user: User;
  users: Observable<User[]>;
  userToDb: User;
  submitted: boolean;
  messageService: string;
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.types = ['Eleve', 'Professeur', 'Administrateur'];
    this.user = {} as User;
    this.userToDb = {} as User;
    this.submitted = false;
    console.log(this.user);
    this.users = this.userService.getUsersList();


  }

  onSubmit() {
    this.createUser();
  }
  createUser() {
    this.userToDb.name = this.user.name;
    this.userToDb.firstname = this.user.firstname;
    this.userToDb.email = this.user.email;
    this.userToDb.type = this.user.type;
    this.userToDb.dateNaissance = moment(this.user.dateNaissance).format('L');
    console.log(this.user);
    console.log(this.userToDb);
    this.messageService = this.userService.createUser(this.userToDb);
  }
}
