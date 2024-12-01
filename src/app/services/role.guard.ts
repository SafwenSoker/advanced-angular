import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  let userRole = "admin";

  if(userRole !== "admin"){
    alert("You don't have access");
    return false;
  }
  return true;
};
