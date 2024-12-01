import { CanActivateFn } from '@angular/router';

export const notCompleteGuard: CanActivateFn = (route, state) => {
 return confirm("Are you sure you want to leave?")
};
