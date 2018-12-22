import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message-service';
import { Message } from '../message';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  messages: Message[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messageService.getMessages().subscribe((data: Message[]) => {
      this.messages = data;
    });
  }

}
