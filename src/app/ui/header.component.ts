import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  {

  service: AuthService = inject(AuthService);
  router: Router = inject(Router);
  logout() { 
    this.service.isAuthenticated = false;
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('roleName');
    sessionStorage.removeItem('expires');
    this.router.navigate(['/home']);
  }
}
