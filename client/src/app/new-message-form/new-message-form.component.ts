import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { NgForm } from '@angular/forms';
import { MessageService } from '../message-service';

@Component({
  selector: 'app-new-message-form',
  templateUrl: './new-message-form.component.html',
  styleUrls: ['./new-message-form.component.scss']
})
export class NewMessageFormComponent implements OnInit {

  message: Message;

  constructor(private messageService: MessageService) {

  }

  ngOnInit() {
    this.resetMessage();
  }

  onSubmit() {
    this.messageService.createMessage(this.message);
    this.resetMessage();
  }

  resetMessage () {
    this.message = new Message();
  }

}
