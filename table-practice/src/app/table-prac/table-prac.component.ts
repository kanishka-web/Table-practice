import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-table-prac',
  templateUrl: './table-prac.component.html',
  styleUrls: ['./table-prac.component.css']
})
export class TablePracComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   jsonData : Person[]=[
    {id:1,name:"kanishka Gupta",dob:"2000-12-22"},
    {id:2,name:"Anil Gupta",dob:"1984-11-12"},
    {id:3,name:"Rajni Gupta",dob:"1990-10-02"},
    {id:4,name:"Pratham Gupta",dob:"2003-06-09"},
    {id:4,name:"Pratham Gupta",dob:"2003-06-09"},
  ]

  // calculateAge(dob: string): number {
  //   //'YYYY-MM-DD'
  //   const birthDate = new Date(dob);
  //   const currentDate = new Date();
  //   const age = currentDate.getFullYear()-birthDate.getFullYear();

  //   if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
  //     return age - 1;
  //   }
  //   return age;
  // }

}
