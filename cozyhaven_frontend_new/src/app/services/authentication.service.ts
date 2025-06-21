import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserDTO } from '../models/user.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://localhost:8080/user'; 
  constructor(private http: HttpClient, private router: Router) {}

loginUser(data: { email: string; password: string }) {

  return this.http.post<{ token: string }>(`${this.baseUrl}/login/authenticate`, data);
}


getUserByEmail(email: string): Observable<UserDTO> {

  return this.http.get<UserDTO>(`http://localhost:8080/user/getbyemail/${email}`);
}

  setToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

 getUserRole(): string | null {
  
  const token = this.getToken();
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));
  const authorities = payload.authorities; 

  return Array.isArray(authorities) ? authorities[0] : authorities;
}

 setGuestId(userId: number) {
    localStorage.setItem('userId', userId.toString());
  }

  getGuestId(): number {
    return Number(localStorage.getItem('userId')) || 0;
  }

 logout() {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('userId'); 
  
}

getEmailFromToken(): string | null {
  const token = this.getToken();
  if (!token) return null;

  const payload = JSON.parse(atob(token.split('.')[1]));
  return payload.sub || null;
}

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
