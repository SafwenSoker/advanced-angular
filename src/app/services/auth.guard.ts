import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  let userRole = "";
  userRole = "admin"
  const router = inject(Router)
  if(userRole !== "admin"){
    router.navigate(['access-denied'])
    return false;
  }
  return true;
};
