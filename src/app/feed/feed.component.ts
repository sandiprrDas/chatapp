import { Component, OnInit, OnChanges } from '@angular/core';
import {ChartService} from '../services/chart.service';
import { Observable } from 'rxjs';
import { ChatMessage } from '../models/chat-message.model';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges{

  feed: AngularFireList<ChatMessage[]>;
  items: Observable<any[]>;
  constructor(private chat: ChartService,private db: AngularFireDatabase) {
    this.feed = db.list('messages');
    this.items = this.feed.valueChanges();
  }

  ngOnInit() {
    console.log("feed messages");
    this.feed = this.chat.getMessages();
  }
  ngOnChanges(){
    this.feed = this.chat.getMessages();
  }

}
