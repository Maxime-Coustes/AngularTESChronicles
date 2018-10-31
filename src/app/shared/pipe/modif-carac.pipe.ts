import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifCarac'
})
export class ModifCaracPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let modificateur: any = Math.floor(value / 2) - 5;
    if (modificateur >= 0) {
      modificateur = '+ ' + String(modificateur);
    }
    return modificateur;
  }

}
