
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'personfilter',
    pure: false
})
export class PersonFilter implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        if (filter.option === 1) {
          return items.filter(item => item.firstname.toLowerCase().indexOf(filter.firstname) !== -1);
        }
        else {
          return items.filter(item => item.lastname.toLowerCase().indexOf(filter.lastname) !== -1);
        }

    }
}
