import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  getAuthors(){
    return ['Sudha Murthy', 'Paulo Coelho', 'Chetan Bhagat']
  }
}
