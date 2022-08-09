import { SearchBookByTitlePipe } from './search-book-by-title.pipe';

describe('SearchBookByTitlePipe', () => {
  const pipe = new SearchBookByTitlePipe();
  const books = ["Learn C", "Learn C++", "Java"];
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('search by valid book title', () => {
    expect(pipe.transform(books,'Learn').length).toEqual(2);
  });

  it('search by invalid book title', () => {
    expect(pipe.transform(books,'Angular').length).toEqual(0);
  });
});
