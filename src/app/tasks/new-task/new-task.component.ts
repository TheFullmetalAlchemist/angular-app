import { Component, Output, EventEmitter, signal, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter<void>();
  enteredtitle = signal('');
  enteredsummary = signal('');
  entereddate = signal('');
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
   this.tasksService.addTask({
      title: this.enteredtitle(),
      summary: this.enteredsummary(),
      dueDate: this.entereddate(),
   }, this.userId);
  }
}
