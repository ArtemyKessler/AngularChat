import { Injectable } from "@angular/core";
import { USERS } from "./mock-users";
import { Observable, of } from "rxjs";

import User from "./User";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  getUserNameById(id: number): string {
    return USERS.find(user => {
      if (user.id === id) {
        return true;
      }
    }).name;
  }

  getUserPicById(id: number): string {
    return USERS.find(user => {
      if (user.id === id) {
        return true;
      }
    }).userPicUrl;
  }
}
