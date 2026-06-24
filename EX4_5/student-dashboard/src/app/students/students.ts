import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {

  showDetails = true;

  students = [
    {
      id:1,
      name:'Arun',
      mark:95,
      attendance:98
    },

    {
      id:2,
      name:'Divya',
      mark:85,
      attendance:91
    },

    {
      id:3,
      name:'Kavin',
      mark:45,
      attendance:70
    },

    {
      id:4,
      name:'Nisha',
      mark:78,
      attendance:88
    }
  ];

  toggleDetails(){
    this.showDetails = !this.showDetails;
  }

}