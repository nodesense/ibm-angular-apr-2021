// sort.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

// pipe used for transformting data in view
// pipe accept at least 1 argument, but can accept more parameters
// pipe returns an output
// value | sort:arg1:arg2
// products | sort:'price':'desc'
// products = [ {id, name, price: 1000}, {price:566}]

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], fieldName: string, sortType: string = 'asc' ): any[] {
    console.log('sort pipe called ', fieldName, sortType)
    if (!items || !fieldName) {
      return items;
    }

    if (sortType == 'desc') {
      return items.sort ( (left, right) => {
        if (left[fieldName] < right[fieldName])
          return 1;

        return -1
      })
    }

    // asc
    return items.sort ( (left, right) => {
      if (left[fieldName] > right[fieldName])
        return 1;

      return -1
    })
  }

}
