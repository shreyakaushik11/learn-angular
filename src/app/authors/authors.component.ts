import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  template: `<h1> {{ title }} </h1>
  <ul>
     <li *ngFor="let author of authors"> {{ author }}
     </li>
  </ul>`
})
export class AuthorsComponent implements OnInit {

  constructor(private author: AuthorsService) { }

  ngOnInit() {
  }

  title = 'List of authors';
  authors = this.author.getAuthors();

}
