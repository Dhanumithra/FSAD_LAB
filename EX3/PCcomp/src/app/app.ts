import { Component } from '@angular/core';

import { Header } from './component/header/header';
import { Menu } from './component/menu/menu';
import { Body } from './component/body/body';
import { Account } from './component/account/account';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Menu,
    Body,
    Account
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}