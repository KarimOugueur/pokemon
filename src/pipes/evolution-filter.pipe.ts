import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evolutionFilter'
})

export class EvolutionFilterPipe implements PipeTransform {

  transform(value: any, filters?: any): any {
    if (!value) {
      return;
    }
    if (!filters) {
      return value;
    }
    return value.filter(item => {
      let matchFound = true;
      if (item.details && item.details.abilities) {
        filters.forEach(filter => {
          if (matchFound) {
            matchFound = JSON.stringify(item.details.abilities)
            .toLowerCase()
            .includes(filter);
            }
          });
      }
      return matchFound;
    });
  }
}
