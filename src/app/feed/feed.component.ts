import { Component, OnInit, OnChanges } from '@angular/core';
import {ChartService} from '../services/chart.service';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import {Pipe} from '@angular/core';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges{
  feed: AngularFireList<ChatMessage>;
  items: Observable<any[]>;
  constructor(private chat: ChartService,public db: AngularFireDatabase) { }
  ngOnInit() {
    this.feed = this.chat.getMessages();
    this.items = this.db.list('messages').valueChanges();
    // this.items =   this.db.list('items').valueChanges().subscribe(console.log);
  }
  ngOnChanges() {
    this.feed = this.chat.getMessages();
    this.items = this.db.list('messages').valueChanges();

    // this.items = this.chat.getMessages();
  }
}
