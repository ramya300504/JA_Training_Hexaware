import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ReservationDTO } from '../models/reservation.dto';
import { NgForm } from '@angular/forms';
import { RefundDTO } from '../models/refund.dto';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-reservationlist',
  templateUrl: './reservationlist.component.html',
  styleUrls: ['./reservationlist.component.css']
})
export class ReservationlistComponent implements OnInit{
  activeSection: string='';


  constructor(private userService:UserService,private authService:AuthenticationService){}

  refunddto!:RefundDTO;

  
  userId:number=  0;
  reservationList:ReservationDTO[]=[];

  ngOnInit(): void {
   const userId = this.authService.getGuestId();
   this.userId = userId; 
     this.getAllBookings(this.userId);
  }




  getAllBookings(userId:number){

     this.userService.viewAllBookings(userId).subscribe(

      (response)=>{

        console.log(userId)
        this.reservationList=response;
         console.log("Reservation list with refund status:", this.reservationList);
      }
     )
  }

  cancelBooking(reservationId:number){

   
         this.userService.cancelBooking(reservationId).subscribe(
          (respone)=>{
          
              alert("Reservation Cancelled Successfully,Now you can Request for Rerfund");

              const reservation = this.reservationList.find(r => r.reservationId === reservationId);
                if (reservation)
                  {
                     reservation.status = 'CANCELLED';
                  }
            }
          
         )
 }

 selectedReservation!: ReservationDTO; 
  refundReason: string = '';
  today: Date = new Date();

  showRefundForm(reservation: any) {
    this.selectedReservation = reservation;
    this.refundReason = '';
    this.activeSection = 'refundForm';
  }

 submitRefundRequest(form:NgForm){

           const refundDTO: RefundDTO = {
            refundId: 0,refundAmount: this.selectedReservation.totalPrice,refundReason: this.refundReason,refundDate: this.today,
            refundStatus: 'PENDING',reservationId: this.selectedReservation.reservationId, userId: this.selectedReservation.userId};
            this.userService.submitRefundRequest(refundDTO).subscribe(
            (response)=>{

              
               console.log("Selected reservation: ", this.selectedReservation);
            console.log("Fare:", this.selectedReservation?.totalPrice);
               alert("Refund request submitted successfully");
               this.getAllBookings(this.userId);
                      
            }
          )

 }




}
