import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoomDTO } from '../models/room.dto';
import { Observable } from 'rxjs';
import { RefundDTO } from '../models/refund.dto';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http:HttpClient) { }

  baseURL:string='http://localhost:8080/owner';

  addRoom(roomdto: RoomDTO): Observable<RoomDTO> 
  {

  const token = localStorage.getItem('jwtToken');
  console.log("JWT Token being sent:", token);

  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  const url = 'http://localhost:8080/owner/addRoom';

  return this.http.post<RoomDTO>(url, roomdto, { headers });
}


  deleteRoom(roomId:number){

    const token = localStorage.getItem('jwtToken');
    console.log("JWT Token being sent:", token);

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);


    const url=`http://localhost:8080/owner/deleteRoom/`
 
    return this.http.delete(url+roomId,{ headers });
  }

  updateRoom(roomId: number, roomdto: RoomDTO): Observable<RoomDTO> 
  {

     const token = localStorage.getItem('jwtToken');
     console.log("JWT Token being sent:", token);

     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      const url = `http://localhost:8080/owner/updateRoom/${roomId}`;

       return this.http.put<RoomDTO>(url, roomdto,{ headers });
  }

  getAllRooms(): Observable<RoomDTO[]> {

  const token = localStorage.getItem('jwtToken'); 
  console.log("JWT Token being sent:", token); 
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.get<RoomDTO[]>('http://localhost:8080/owner/getallrooms', { headers });
  
}

getAllRefundRequests():Observable<RefundDTO[]>
{
   const token = localStorage.getItem('jwtToken'); 
  console.log("JWT Token being sent:", token); 
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url=`http://localhost:8080/owner/getallrefunds`;

  return this.http.get<RefundDTO[]>(url,{headers});

}


  approveRefund(refundId:number):Observable<RefundDTO>{

  const token = localStorage.getItem('jwtToken'); 
  console.log("JWT Token being sent:", token); 
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url=`http://localhost:8080/owner/approveRefund/${refundId}`;
   return this.http.put<RefundDTO>(url, {}, { headers });

}

rejectRefund(refundId:number):Observable<RefundDTO>{

  const token = localStorage.getItem('jwtToken');
  console.log("JWT Token being sent:", token); 
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  const url=`http://localhost:8080/owner/rejectRefund/${refundId}`;
   return this.http.put<RefundDTO>(url, {}, { headers });

}


}
