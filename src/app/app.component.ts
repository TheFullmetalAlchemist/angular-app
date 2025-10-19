import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected readonly title = signal('angular-app');
  users = DUMMY_USERS;

  selectedUserId:string | undefined;

  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId);
  }
  
  onClickUserSelected(userId: string) {
    this.selectedUserId = userId;
}
}
