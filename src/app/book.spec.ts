import { Book } from './book';

describe('Book', () => {
  it('should create an instance', () => {
    const book = new Book(1,"Learn Angular", 3000);
    expect(book).toBeTruthy();
  });

  it('should get the book details', ()=>{
    const book = new Book(1,"Learn Angular", 3000);
    expect(book.id).toEqual(1);
    expect(book.title).toEqual("Learn Angular");
    expect(book.price ).toEqual(3000);
  });
});
