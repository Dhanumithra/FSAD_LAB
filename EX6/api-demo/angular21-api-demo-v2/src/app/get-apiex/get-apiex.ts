import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-apiex',
  standalone: true,
  templateUrl: './get-apiex.html',
  styleUrl: './get-apiex.css'
})
export class GetAPIEx {

  http = inject(HttpClient);

  userlist = signal<any[]>([]);
  loading  = signal<boolean>(true);

  constructor() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (res) => {
          this.userlist.set(res);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
          alert('Unable to load users');
        }
      });
  }
}
