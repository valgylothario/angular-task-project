import {Injectable} from '@angular/core';
import {User} from "./user.model";
import {DUMMY_USERS} from "../dummy-users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = DUMMY_USERS;

  getUsers() {
    return this.users;
  }
}

