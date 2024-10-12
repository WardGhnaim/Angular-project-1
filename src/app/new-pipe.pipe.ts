import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class NewPipePipe implements PipeTransform {
  transform(value: string, searchText: string): string {
    if (!searchText) {
      return value;
    }
    const re = new RegExp(searchText, 'gi');
    return value.replace(re, (match) => `<mark>${match}</mark>`);
  }
}
