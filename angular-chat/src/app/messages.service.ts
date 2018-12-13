import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MESSAGES } from "./mock-messages";
import Message from "./Message";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  constructor() {}
  getMessages(): Observable<Message[]> {
    return of(MESSAGES);
  }
  sendMessage(message: Message): void {
    MESSAGES.push(message);
  }
}
