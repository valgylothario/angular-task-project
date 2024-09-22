import {Component, EventEmitter, inject, Input, Output, output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NewTaskData} from "../task/task.model";
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter();
  private taskService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId)
    this.onClose();
  }
}
