import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  Input
} from "@angular/core";
import { MessagesService } from "../messages.service";
import Message from "../Message";
import Dialogue from "../Dialogue";
import { UsersService } from "../users.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit, OnChanges {
  constructor(
    private messagesService: MessagesService,
    private usersService: UsersService
  ) {}
  selectedMessage: Message;
  messages: Message[];
  date: Date = new Date();
  @Input() dialogueId: number = 3;

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.getDialogueById(this.dialogueId);
  }

  ngOnInit() {
    this.getDialogueById(this.dialogueId);
  }

  getDialogueById(dialogueId: number) {
    this.messagesService
      .getDialogueById(dialogueId)
      .subscribe(dialogue => (this.messages = dialogue.messages));
  }

  selectMessage(message: Message) {
    this.selectedMessage = message;
  }
}
