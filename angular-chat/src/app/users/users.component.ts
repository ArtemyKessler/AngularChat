import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { UsersService } from "../users.service";
import { MessagesService } from "../messages.service";
import { Router } from "@angular/router";

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
    private messagesService: MessagesService,
    private router: Router
  ) {}

  users: User[];
  usersToShow: User[];
  lastMessages: string[];
  selectedUserId: number;

  ngOnInit() {
    this.getUsers();
    this.selectedUserId = 0;
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

  redirect(id) {
    this.selectedUserId = id;
    this.router.navigate(["/dialogue"], {
      queryParams: { dialogueId: id }
    });
  }

  getLastMessage(dialogueId: number): Message {
    let message: Message;
    this.messagesService
      .getLastMessage(dialogueId)
      .subscribe(lastMessage => (message = lastMessage));
    return message;
  }
}
