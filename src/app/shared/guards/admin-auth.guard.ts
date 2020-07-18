import { AdminService } from './../services/admin.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private adminservice: AdminService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('token') != null) {
    const roles = next.data.permittedRoles as Array<string>;
    if (roles) {
      if (this.adminservice.roleMatch(roles)) { return true; } else {
        this.router.navigate(['/userhome/forbidden']);
        return false;
      }
    }
    return true;
    } else {
      this.router.navigate(['/user/signin']);
      return false;
    }

  }

}
