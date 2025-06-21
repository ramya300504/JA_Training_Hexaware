import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../models/user.dto';
import { Observable } from 'rxjs';
import { ReservationDTO } from '../models/reservation.dto';
import { RefundDTO } from '../models/refund.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  baseURL:string="http://localhost:8080/user";


  registerUser(userdto:UserDTO):Observable<UserDTO>{

    return this.http.post<UserDTO>(`${this.baseURL}/create/user`, userdto);

  }

  updateUser(userdto:UserDTO,userId:number):Observable<UserDTO>{

    const token = localStorage.getItem('jwtToken');
    console.log("JWT Token being sent:", token);
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url=`http://localhost:8080/user/updateuser/${userId}`

    return this.http.put<UserDTO>(url,userdto,{headers});

  }

  viewAllBookings(userId:number):Observable<ReservationDTO[]>{

    const token = localStorage.getItem('jwtToken');
    console.log("JWT Token being sent:", token);
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     return this.http.get<ReservationDTO[]>(`${this.baseURL}/getreservationbyUser/${userId}`, {headers});
  }

  cancelBooking(reservationId:number):Observable<string>{

    const token = localStorage.getItem('jwtToken');
    console.log("JWT Token being sent:", token);
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url = `http://localhost:8080/booking/cancel/${reservationId}`;
    
    return this.http.put<string>(url, null, { headers });

  }

  submitRefundRequest(refunddto:RefundDTO):Observable<RefundDTO>{

    const token = localStorage.getItem('jwtToken');
    console.log("JWT Token being sent:", token);
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url=`http://localhost:8080/user/processrefund`;

    return this.http.post<RefundDTO>(url,refunddto,{headers})

  }

  

}
