import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  task = '';
  tasks: string[] = [];

  addTask() {
    if (this.task.trim() !== '') {
      this.tasks.push(this.task);
      this.task = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}