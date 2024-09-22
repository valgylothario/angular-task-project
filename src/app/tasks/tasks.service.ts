import {NewTaskData, Task} from "./task/task.model";
import {dummyTasks} from "./dummy-tasks";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getTasksByUserId(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  removeTaskByTaskId(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      summary: taskData.summary,
      userId: userId,
      title: taskData.title,
      dueDate: taskData.date
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
