import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[] | null, key: string): any[] {
    if (value === null) {
      return [];
    }

    return value.sort((a: any, b: any) => {

      if ((typeof a[key] === 'number') && (typeof b[key] === 'number')) {
        return a[key] - b[key];
      }

      return String(a[key]).localeCompare(String(b[key]));

    });
  }

}
