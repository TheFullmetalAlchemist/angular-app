import { Component, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   
  @Input() name!: string;
  @Input() avatar!: string;
  @Input() id!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return `assets/users/${this.avatar}`;
  }

  onClickSelectedUser(){
    this.select.emit(this.id);
  } 
}
