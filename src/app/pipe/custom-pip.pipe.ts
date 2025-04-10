import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPip'
})
export class CustomPipPipe implements PipeTransform {

  transform(value: number, num: number): unknown {
    return value * num;
  }

}
