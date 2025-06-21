import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomDTO } from '../models/room.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }

   getAcRooms(hotelId:number):Observable<RoomDTO[]>{

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url=`http://localhost:8080/rooms/getacrooms/${hotelId}`;

    return this.http.get<RoomDTO[]>(url,{headers});
    
   }

    getAvailableRooms(hotelId:number):Observable<RoomDTO[]>{

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url=`http://localhost:8080/rooms/getavailablerooms/${hotelId}`;

    return this.http.get<RoomDTO[]>(url,{headers});
    
   }

    getRoomsLessThanBF(baseFare:number,hotelId:number):Observable<RoomDTO[]>{

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url=`http://localhost:8080/rooms/getroomslessthanbasefare/${baseFare}/${hotelId}`;

    return this.http.get<RoomDTO[]>(url,{headers});
    
   }

    getRoomsByBedType(bedType:string,hotelId:number):Observable<RoomDTO[]>{

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url=`http://localhost:8080/rooms/getroomsbybedtype/${bedType}/${hotelId}`;

    return this.http.get<RoomDTO[]>(url,{headers});
    
   }



}
