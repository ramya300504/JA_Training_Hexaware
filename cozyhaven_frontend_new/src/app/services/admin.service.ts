import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDTO } from '../models/user.dto';
import { Observable } from 'rxjs';
import { ReservationDTO } from '../models/reservation.dto';
import { HotelDTO } from '../models/hotel.dto';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


  searchUserById(userId:number):Observable<UserDTO>{

    const token = localStorage.getItem('jwtToken');
   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

   const url=`http://localhost:8080/admin/getuserbyid/${userId}`;

    return this.http.get<UserDTO>(url,{headers});

  }

   searchOwnerById(ownerId:number):Observable<UserDTO>{

    const token = localStorage.getItem('jwtToken');
   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

   const url=`http://localhost:8080/admin/getownerbyid/${ownerId}`;

    return this.http.get<UserDTO>(url,{headers});

  }


  deleteUserById(userId: number): Observable<string> 
  {

  const token = localStorage.getItem('jwtToken');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url = `http://localhost:8080/admin/deleteuserbyid/${userId}`;
  return this.http.delete<string>(url, { headers });

  }


  getAllUsers():Observable<UserDTO[]>{

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `http://localhost:8080/admin/getallusers`;

    return this.http.get<UserDTO[]>(url,{headers});

  }


    getAllOwners():Observable<UserDTO[]>{

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `http://localhost:8080/admin/getallowners`;

    return this.http.get<UserDTO[]>(url,{headers});

  }

  getAllReservations():Observable<ReservationDTO[]>{

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `http://localhost:8080/admin/getallreservations`;

    return this.http.get<ReservationDTO[]>(url,{headers});

  }


  getAllHotels():Observable<HotelDTO[]>{

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     const url = `http://localhost:8080/admin/getallhotels`;

      return this.http.get<HotelDTO[]>(url,{headers});

  }

  addHotel(hoteldto:HotelDTO):Observable<HotelDTO>{

     const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     const url = `http://localhost:8080/admin/addHotel`;

     return this.http.post<HotelDTO>(url,hoteldto,{headers});
  }


  updateHotel(hoteldto:HotelDTO,hotelId:number):Observable<HotelDTO>{

     const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
     const url = `http://localhost:8080/admin/updateHotel/${hotelId}`;

     return this.http.put<HotelDTO>(url,hoteldto,{headers});
  }

  deleteHotel(hotelId:number){

    const token = localStorage.getItem('jwtToken');
    console.log("JWT Token being sent:", token);

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);


    const url=`http://localhost:8080/admin/deleteHotel/${hotelId}`;
 
    return this.http.delete(url,{ headers });
  }


}
