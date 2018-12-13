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
}
