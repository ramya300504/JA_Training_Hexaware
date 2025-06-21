import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReservationDTO } from '../models/reservation.dto';
import { PaymentDTO } from '../models/payment.dto';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8080/booking';

  createReservation(reservation:ReservationDTO){

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url=`${this.baseUrl}/create`;

    return this.http.post<ReservationDTO>(url,reservation,{ headers });

  }

  doPayment(payment:PaymentDTO){

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url=`${this.baseUrl}/addpayment`;

    return this.http.post<PaymentDTO>(url,payment,{ headers });
 
  }
}
