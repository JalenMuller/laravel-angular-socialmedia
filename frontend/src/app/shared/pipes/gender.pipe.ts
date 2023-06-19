import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'M':
        return 'male';
      case 'F':
        return 'Female';
      default:
        return 'Other';
    }
  }
}
