import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get the book details', () => {
    const books = service.getBooks();
    expect(books.length).toEqual(3);
    expect(books[0]).toEqual("Learn C");
  });

});
