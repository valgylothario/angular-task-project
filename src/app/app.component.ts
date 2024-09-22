import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./dummy-users";
import {TasksComponent} from "./tasks/tasks.component";
import {User} from "./user/user.model";
import {UserService} from "./user/user.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: User[];
  selectedUser!: User;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  onSelectedUser(user: User) {
    this.selectedUser = user;
  }

  isUserSelected(user: User) {
    return this.selectedUser && this.selectedUser.id === user.id;
  }
}
