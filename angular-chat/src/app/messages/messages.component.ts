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

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit, OnChanges {
  constructor(private messagesService: MessagesService) {}

  messages: Message[];
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
}
