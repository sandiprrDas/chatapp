import { Component, OnInit , Input} from '@angular/core';
import { ChartService } from '../services/chart.service';
import { AuthService} from '../services/auth.service';
import { ChatMessage } from '../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: boolean;
  ownEmail: string;

  constructor(private authService: AuthService) {
    authService.authUser().subscribe(user => {
      this.ownEmail = user.email;
      this.isOwnMessage = this.ownEmail === this.userEmail;
    });
    
  }

  ngOnInit(chatMessage = this.chatMessage) {
    // alert(JSON.stringify(chatMessage = this.chatMessage))
    this.messageContent = chatMessage.message;
    // this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
    console.log(this.messageContent)
  }


}
