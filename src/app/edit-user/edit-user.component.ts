import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User } from '../user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
     this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.userService.getUser(params.get('id')))
    ).subscribe(user => {this.user = user;
      console.log(user);
    }
      );
  }

}
