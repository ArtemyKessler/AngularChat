import { Component, OnInit } from "@angular/core";
import { MessagesService } from "../messages.service";
import Message from "../Message";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  constructor(private messagesService: MessagesService) {}

  messages: Message[];

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    this.messagesService
      .getMessages()
      .subscribe(messages => (this.messages = messages));
  }
}
