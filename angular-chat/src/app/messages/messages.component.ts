import {
  Component,
  OnInit,
  OnChanges,
  SimpleChange,
  Input
} from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MessagesService } from "../messages.service";
import Message from "../Message";
import Dialogue from "../Dialogue";
import { UsersService } from "../users.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private messagesService: MessagesService,
    private usersService: UsersService
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        /* const url = this.location.path(false);
        this.dialogueId = parseInt(url[url.length - 1]); */
        this.dialogueId = parseInt(
          this.route.snapshot.queryParamMap.get("dialogueId")
        );
        this.getDialogueById(this.dialogueId);
        this.userId = this.dialogueId;
      }
    });
  }

  selectedMessage: Message;
  messages: Message[];
  date: Date = new Date();
  absentTime: string;
  timerId = setInterval(this.getAbsentTime.bind(this), 5000);
  userId: number;
  disabledDialogues: number[] = [];
  dialogueId = 0;

  swapColorTheme(): void {
    /* const appContainer = document.querySelector(".container");
    if (appContainer.classList.contains("whiteTheme")) {
      appContainer.classList.remove("whiteTheme");
    } else if (appContainer) {
      document.querySelector(".container").classList.add("whiteTheme");
    } */
  }

  disableNotif(id: number) {
    this.messagesService.addToDisabledNotif(id);
  }

  disableDialogue(id: number) {
    this.disabledDialogues.push(id);
  }

  ngOnInit() {
    this.getDialogueById(this.dialogueId);
    this.userId = this.dialogueId;
  }

  /*   getIdFromLocation() {
    this.route.queryParams.subscribe(params => {
      this.dialogueId = params.dialogueId;
      this.getDialogueById(params.dialogueId);
      this.userId = this.dialogueId;
    });
  } */

  OnDestroy(): void {
    clearInterval(this.timerId);
  }

  getDialogueById(dialogueId: number) {
    this.messagesService
      .getDialogueById(dialogueId)
      .subscribe(dialogue => (this.messages = dialogue.messages));
    this.getAbsentTime();
  }

  selectMessage(message: Message) {
    this.selectedMessage = message;
  }

  getAbsentTime() {
    for (let index = 0; index < this.messages.length; index++) {
      if (this.messages[index].userId === this.userId) {
        const date = new Date();
        const absentTime =
          date.getTime() - this.messages[index].timestamp.getTime();
        this.dateStringifyer(absentTime);
      }
    }
  }

  dateStringifyer(absentTime: number) {
    const seconds = Math.trunc(absentTime / 1000);
    const minutes = Math.trunc(seconds / 60);
    const hours = Math.trunc(minutes / 60);
    const days = Math.trunc(hours / 24);
    if (days >= 1) {
      this.absentTime = ` absent for ${days} day(s)`;
    } else if (hours >= 1) {
      this.absentTime = ` absent for ${hours} hour(s)`;
    } else if (minutes >= 1) {
      this.absentTime = ` absent for ${minutes} minute(s)`;
    } else if (seconds >= 1) {
      this.absentTime = ` absent for ${seconds} second(s)`;
    } else {
      this.absentTime = ` last seen recently`;
    }
  }
}
