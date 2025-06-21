import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelDTO } from '../models/hotel.dto';
import { RoomDTO } from '../models/room.dto';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl = 'http://localhost:8080/hotels';

  constructor(private http: HttpClient) {}

  searchHotels(location: string, checkInDate: string, checkOutDate: string, noOfRooms: number, noOfAdults: number, noOfChildren: number)
  : Observable<HotelDTO[]> {
    
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url = `${this.baseUrl}/searchAvailable/${location}/${checkInDate}/${checkOutDate}/${noOfRooms}/${noOfAdults}/${noOfChildren}`;

    return this.http.get<HotelDTO[]>(url, { headers });
  }

  getAllLocations(): Observable<string[]> {

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

     return this.http.get<string[]>('http://localhost:8080/hotels/locations',{headers});
  }

  getRoomsByHotelId(hotelId:number):Observable<RoomDTO[]>{

    const token = localStorage.getItem('jwtToken');
    console.log("JWT Token being sent:", token);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url='http://localhost:8080/rooms/getroomsbyhotel/'

    return this.http.get<RoomDTO[]>(url+hotelId,{ headers });

  }
calculateTotalFare(bedType: string, baseFare: number, numberOfAdults: number, numberOfChildren: number)
: Observable<number> {

  const token = localStorage.getItem('jwtToken');
  console.log("JWT Token being sent:", token);

  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  const url = `http://localhost:8080/user/gettotalprice/${bedType}/${baseFare}/${numberOfAdults}/${numberOfChildren}`;
  

  return this.http.get<number>(url, { headers });
}

}
