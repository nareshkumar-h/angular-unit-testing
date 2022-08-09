import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }


  // getBooks(){
  //   const url= "http://localhost:3000/books";
  //   //return this.http.get(url);
  // }

  getBooks(){
    const books = ["Learn C", "Learn C++", "Learn Java"];
    return books;
  }
}
