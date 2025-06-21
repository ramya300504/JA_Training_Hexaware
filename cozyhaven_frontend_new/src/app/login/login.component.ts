import { Component } from '@angular/core';
import { LoginDTO } from '../models/login.dto';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   login: LoginDTO = new LoginDTO();

  constructor(private authService: AuthenticationService, private router: Router) {}


onLogin(form: NgForm): void {
  if (form.valid) {
    this.authService.loginUser(this.login).subscribe({
      next: (response) => {
        const token = response.token;
        this.authService.setToken(token);

        
        if (token) {
          const payload = JSON.parse(atob(token.split('.')[1]));
          console.log('Decoded Token Payload:', payload);
        }

        const role = this.authService.getUserRole();
        const email = this.login.email;

       
        timer(200).subscribe(() => {
          this.authService.getUserByEmail(email).subscribe({
            next: (user: any) => {
              this.authService.setGuestId(user.userId);
              console.log('User ID:', user.userId);
              console.log('Role from token:', role);

            
              if (role === 'ROLE_ADMIN') {
                this.router.navigate(['/admindashboard']);
              } else if (role === 'ROLE_USER') {
                this.router.navigate(['/userdashboard']);
              } else if (role === 'ROLE_HOTELOWNER') {
                this.router.navigate(['/ownerdashboard']);
              } else {
                this.router.navigate(['/login']);
              }
            },
            error: (err: any) => {
              console.error('Error fetching user details:', err);
              alert('Login succeeded, but failed to retrieve user details.');
            }
          });
        });
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Invalid email or password.');
      }
    });
  }
}

}