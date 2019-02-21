import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { DIALOGUES } from "./mock-messages";

import Message from "./Message";
import Dialogue from "./Dialogue";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
  constructor() {}
  private Timer = setInterval(this.anotherUserMock.bind(this), 5000);
  private disabledNotifIds: number[] = [];
  private disabledDialogues: number[] = [];

  addToDisabledNotif(dialogueId: number) {
    this.disabledNotifIds.push(dialogueId);
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

  isMessagesContainString(
    search: string,
    dialogueId: number
  ): Observable<boolean> {
    let flag = false;
    const messages = DIALOGUES.find(dialogue => {
      return dialogue.dialogueId === dialogueId;
    }).messages;
    messages.forEach(message => {
      if (message.message.indexOf(search) !== -1) {
        flag = true;
      }
    });
    return of(flag);
  }

  getLastMessage(dialogueId: number): Observable<string> {
    const messages = DIALOGUES.find(dialogue => {
      return dialogue.dialogueId === dialogueId;
    }).messages;
    const messageToShow = messages[messages.length - 1];
    let stringToShow = messageToShow.message;
    if (stringToShow.length > 20) {
      return of(stringToShow.slice(0, 20) + "...");
    }
    return of(stringToShow);
  }

  anotherUserMock() {
    const dialogueId = Math.trunc(Math.random() * (DIALOGUES.length - 1) + 1);
    const message: Message = {
      message: "AAAA",
      userId: dialogueId,
      withUserPic: false,
      timestamp: new Date(),
      picSrc: ""
    };
    let flag = true;
    if (this.disabledNotifIds.indexOf(dialogueId) !== -1) {
      flag = false;
    }
    if (flag) {
      const audio = new Audio(
        "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
      );
      audio.play();
    }
    this.sendMessage(message, dialogueId);
  }

  ngOnDestroy(): void {
    clearInterval(this.Timer);
  }
}
