import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  celsius: number = 0;
  fahrenheit: number = 32;

  convertToFahrenheit() {
    this.fahrenheit = (this.celsius * 9 / 5) + 32;
  }

  convertToCelsius() {
    this.celsius = (this.fahrenheit - 32) * 5 / 9;
  }
}