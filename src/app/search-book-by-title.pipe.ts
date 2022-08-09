import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBookByTitle'
})
export class SearchBookByTitlePipe implements PipeTransform {

  transform(books:any[], value: string): any[] {
    return books.filter(book=> book.includes(value));
  }

}
