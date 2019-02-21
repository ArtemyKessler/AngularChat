import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { UsersService } from "../users.service";
import { MessagesService } from "../messages.service";

import User from "../User";
import Message from "../Message";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private messagesService: MessagesService
  ) {}

  users: User[];
  usersToShow: User[];
  lastMessages: string[];
  @Input() dialogueId: number;

  ngOnInit() {
    this.getUsers();
  }

  searchUser(event: any) {
    const search = event.target.value;
    this.usersToShow = this.users.filter(user => {
      let flag;
      this.messagesService
        .isMessagesContainString(search, user.id)
        .subscribe(flagReceived => (flag = flagReceived));
      if (user.name.indexOf(search) !== -1 || flag) {
        return user;
      }
    });
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => (this.users = users));
    this.usersToShow = this.users;
  }

  @Output() onChangeDialogueId = new EventEmitter<number>();
  changeDialogue(id: any) {
    this.onChangeDialogueId.emit(id);
  }

  getLastMessage(dialogueId: number): string {
    let messageString: string;
    this.messagesService
      .getLastMessage(dialogueId)
      .subscribe(lastMessage => (messageString = lastMessage));
    return messageString;
  }
}
