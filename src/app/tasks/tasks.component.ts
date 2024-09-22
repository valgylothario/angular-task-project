import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {NewTaskData, Task} from './task/task.model';
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  constructor(private tasksService: TasksService) {
  }

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingNewTask = false;


  get selectedTasks() {
    return this.tasksService.getTasksByUserId(this.userId);
  }

  onStartAddNewTask() {
    this.isAddingNewTask = true;
  }

  onClose() {
    this.isAddingNewTask = false;
  }
}
