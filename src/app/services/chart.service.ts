import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList, AngularFireObject} from "@angular/fire/database";
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService} from '../services/auth.service';
import * as firebase from 'firebase/app';
import { ChatMessage } from '../models/chat-message.model';
// import { User } from 'src/app/models/user.model';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable({ providedIn: 'root' })
export class ChartService {
  user:firebase.User;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  userName: Observable<string>;
  mUser: Observable<any>;
  public jsonObject: any;


  constructor( 
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,public http: Http
    ) {
        this.afAuth.authState.subscribe(auth => {
          if (auth !== undefined && auth !== null) {
            this.user = auth;
            console.log("auth",auth)
            console.log("fkjfjffjjf",this.user)
          }
        
          this.getUser().valueChanges().subscribe(a => {
            console.log("helllllll",a)
            console.log("jhjhjh",this.userName)
              this.userName = a.displayName;
              return this.userName;
          });

    
          // this.user.subscribe((user: firebase.User) => {
          //   this.userName = user.displayName;
          //   console.log(`[constructor]userName : ${this.userName}`);
          // });
        });      
    }
  getUser():any{
    const userId = this.user.uid;
    const path = `/users/${userId}`;
    console.log("fdgjkljfngbnlbflnsblnblnlgnblnlbnlnbgl",this.db.object(path))
    return this.db.object(path);

  }
  getUsers() {
    const path = '/users';
    // // console.log(path);
    // const users = [{
    //   name: 'Guru',
    //   status: 'online',
    //   id: 1,
    // }, {
    //   name: 'sandip',
    //   status: 'offline',
    //   id: 2,
    // }]
    // console.log('haa', this.db.list(path));
    // alert(JSON.stringify(this.db.list(path)))
    return this.db.list(path);
    
  }
  sendMessage(msg: string) {
    const email = this.user.email;
    const userName = this.user.displayName;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      "message": msg,
      "userName":this.user.displayName,
      "email": email });
  }
 
  deleteAll()
  {
    this.db.list('/messages').remove();
  }


  getMessages(): AngularFireList<ChatMessage> {
    console.log("test");
    console.log(this.db.list('messages'))
    return this.db.list('messages', ref => ref.limitToLast(5).orderByKey());
    
  }


  // getTimeStamp() {
  //   const now = new Date();
  //   const date = now.getUTCFullYear() + '/' +
  //                (now.getUTCMonth() + 1) + '/' +
  //                now.getUTCDate();
  //   const time = now.getUTCHours() + ':' +
  //                now.getUTCMinutes() + ':' +
  //                now.getUTCSeconds();

  //   return (date + ' ' + time);
  // }
   
  
}
