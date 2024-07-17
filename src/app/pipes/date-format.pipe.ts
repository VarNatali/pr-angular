import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: number): string {

    if (value == null) {
      return '';
    }
    else {
      let h = Math.trunc(value / 60);
      let m = value % 60;
      return (' ' + h + ':' + m);
    }



  }

}
