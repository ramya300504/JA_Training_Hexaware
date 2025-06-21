import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationdataService {

  constructor(){}

  reservationData: any = {};

  setReservationData(data: any): void {
    this.reservationData = data;
  }

  getReservationData(): any {
    return this.reservationData;
  }

  clearReservationData(): void {
    this.reservationData = {};
  }
}
