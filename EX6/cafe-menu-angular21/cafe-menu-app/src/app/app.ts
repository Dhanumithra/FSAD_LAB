import { Component } from '@angular/core';
import { GetAPIEx } from './get-apiex/get-apiex';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GetAPIEx],
  template: `<app-get-apiex></app-get-apiex>`
})
export class App { }
