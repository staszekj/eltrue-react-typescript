import {of} from 'rxjs';
import {filter, map} from 'rxjs/operators';

export const getUserActions = (amount) => {
  return of(amount)
    .pipe(
      filter(x => x % 2 === 1),
      map(x => x + x)
    )
};

