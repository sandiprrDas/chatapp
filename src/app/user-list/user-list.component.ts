import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ChartService } from '../services/chart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{
  users: User[];
  constructor(private chat: ChartService) {
    this.chat.getUsers().valueChanges().subscribe(users => {
      console.log("fdhfdhhfdhdfh",users)
      this.users = users;
    });
  }
  // ngOnInit(){
  //   this.chat.getUsers().valueChanges().subscribe(users => {
  //     console.log(users)
  //     this.users = users;
  //   });
  //   // this.mUsers = this.db.list('users').valueChanges();
  // }
}
