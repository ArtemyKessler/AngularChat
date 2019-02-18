import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MESSAGES, DIALOGUES } from "./mock-messages";

import Message from "./Message";
import Dialogue from "./Dialogue";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  constructor() {}
  getMessages(): Observable<Message[]> {
    return of(MESSAGES);
  }
  sendMessage(message: Message, dialogueId: number): void {
    const currentDialogueIndex = DIALOGUES.findIndex(element => {
      return element.dialogueId === dialogueId;
    });

    const currentDialogue = DIALOGUES[currentDialogueIndex];
    const messages = currentDialogue.messages;
    const messagesLength = messages.length;
    const lastUserId = messages[messagesLength - 1].userId;
    message.withUserPic = message.userId !== lastUserId;
    DIALOGUES[currentDialogueIndex].messages.push(message);
  }

  getDialogueById(dialogueId: number): Observable<Dialogue> {
    return of(
      DIALOGUES.find(element => {
        return element.dialogueId === dialogueId;
      })
    );
  }
}
