import { Component, OnInit } from "@angular/core";
import { MessagesService } from "../messages.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor(private messageService: MessagesService) {}
  messageToSend: string;
  ngOnInit() {}
  sendMessage() {
    this.messageService.sendMessage({ message: this.messageToSend, userId: 1 });
    this.messageToSend = "";
  }
}
