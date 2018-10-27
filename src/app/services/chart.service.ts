import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService} from '../services/auth.service';
import * as firebase from 'firebase/app';
import {map} from 'rxjs/operators';
import { ChatMessage } from '../models/chat-message.model';
import { User } from 'src/app/models/user.model';


@Injectable()
export class ChartService {
  user: firebase.User;
  users : Observable<User[]>;

  chatMessages: AngularFireList<ChatMessage[]>;
  chatMessage: ChatMessage;
  userName:string;
  usersRef: AngularFireList<any>;


  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { 
    this.usersRef = db.list('users');
    this.users = this.usersRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.user = auth;
      }
         
      });
      
    }
    getUser(){
        const userId = this.user.uid;
        const path= `/users/${userId}`;
        return this.db.object(path);
    }
    getUsers(){
      const path= '/users';
      return this.db.list(path);
    }
    
    sendMessage(msg: string) {
      const timestamp = this.getTimeStamp();
      const email = this.user.email;
      console.log(timestamp)
      this.chatMessages = this.getMessages();
      console.log(this.chatMessages);
      var arr = []
      var object ={ 
        userName: 'tom',
        message: "",
        timeSent: timestamp,
        email: email
      }
      arr.push(object)
      this.chatMessages.push(arr)
    }

  getMessages(): AngularFireList<ChatMessage[]> {
    console.log("calling get messages");
   return this.db.list('messages', ref => ref.limitToLast(10).orderByKey());

  }
  // getMessages(): Observable<ChatMessage[]> {
  //   return this.db.list('/messages', ref => 
  //     let q = ref.limitTolast(25).orderByKey(true);
  //     return q;
  //   );
  // }

  getTimeStamp(){
    const now = new Date();
    const date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
    const time = now.getUTCHours() + ':' + 
                 now.getUTCMinutes()+ ':' +
                 now.getUTCSeconds();
    return(date + ' ' + time);
  }
}
