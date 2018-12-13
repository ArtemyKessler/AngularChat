import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";
import User from "../User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  constructor(private usersService: UsersService) {}

  users: User[];
  usersToShow: User[];

  ngOnInit() {
    this.getUsers();
  }

  searchUser(event: any) {
    const search = event.target.value;
    this.usersToShow = this.users.filter(user => {
      if (user.name.indexOf(search) !== -1) return user;
    });
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => (this.users = users));
    this.usersToShow = this.users;
  }
}
