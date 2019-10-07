import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  template: `<h1> {{title}} </h1>
  <ul>
  <li *ngFor="let course of courses"> {{ course }} </li>
  </ul>`
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = "List of courses";
  courses = ['Operating Systems', 'Computer Networks', 'Data Structures'];

}
