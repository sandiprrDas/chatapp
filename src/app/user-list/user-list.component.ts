import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ChartService } from '../services/chart.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[];
  constructor(chat: ChartService) {
    // chat.getUsers().subscribe(users => {
    //   this.users = users;
    // });
  }
}
