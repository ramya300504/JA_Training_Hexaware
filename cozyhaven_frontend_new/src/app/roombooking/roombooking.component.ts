import { Component, Input, OnInit } from '@angular/core';
import { ReservationDTO } from '../models/reservation.dto';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationdataService } from '../services/reservationdata.service';

@Component({
  selector: 'app-roombooking',
  templateUrl: './roombooking.component.html',
  styleUrls: ['./roombooking.component.css']
})
export class RoombookingComponent implements OnInit{



  minDate!: string;
  
  reservation!: ReservationDTO;

  constructor(private bookingService: BookingService,private route: ActivatedRoute,private reservationdataService:ReservationdataService, private router:Router) {}

  ngOnInit(): void {

    const today = new Date();
     this.minDate = today.toISOString().split('T')[0]; 
    
       const data = this.reservationdataService.getReservationData();

        
      this.reservation = {
         reservationId: 0,
         hotelId: data.hotelId,
         roomId: data.roomId,
        userId: data.userId,
       checkInDate: new Date(data.checkInDate),
       checkOutDate: new Date(data.checkOutDate),
       numberOfAdults: data.numberOfAdults,
       numberOfChildren: data.numberOfChildren,
       totalPrice: data.totalFare,
       status: data.status,
       paymentId: data.paymentId || null,
       refundStatus:null
    };
    
  }

  createReservation() {

    this.bookingService.createReservation(this.reservation).subscribe(

      (response) => {

         alert('Room Booked successfully!');
        console.log('Reservation created!');
        this.router.navigate(['/userdashboard']); 
        

      } 
    )
  }


  
}