import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newPipe',
  standalone: true
})
export class NewPipePipe implements PipeTransform {
  transform(num: number): number {
    return num * 24;
  }
}
