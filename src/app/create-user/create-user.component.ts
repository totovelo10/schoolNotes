import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { User } from '../user';
import * as moment from 'moment';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {  ActivatedRoute, ParamMap, Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepickerInputEvent, MatDatepickerInput} from '@angular/material/datepicker';





@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [
    // The locale would typically be provided on the root module of your application. We do it at
    // the component level here, due to limitations of our example generation script.
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},

    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class CreateUserComponent implements OnInit {
  types: string[];
  user: User;
  users: Observable<User[]>;
  userToDb: User;
  submitted: boolean;
  edition: boolean;
  messageService: string;
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    this.types = ['Elève', 'Professeur', 'Administrateur'];
    this.submitted = false;
   if ( this.router.url !== '/createuser') {
     this.edition = true;
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUser(params.get('id')))
    ).subscribe(user => {
      this.user = user;
      console.log(user);
    }
      );
   } else {
   this.edition = false;
   this.user = {} as User;
   }
  }

  onSubmit(event: MatDatepickerInputEvent<Date>) {
    console.log(this.user);
    if (this.edition) {
      this.updateUser(event);
    } else {
      this.createUser();
    }
  }

  createUser() {

    this.messageService = this.userService.createUser(this.user);
  }
  updateUser(event: MatDatepickerInputEvent<Date>) {
    this.user.dateNaissance = moment(this.user.dateNaissance)
    console.log(this.user.dateNaissance);
    //this.addEvent('input', event);
    this.messageService = this.userService.updateUser(this.user);
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.user.dateNaissance = moment(event.value);
    console.log(this.user)

  }
}
