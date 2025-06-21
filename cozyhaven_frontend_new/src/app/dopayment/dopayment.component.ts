import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { NgForm } from '@angular/forms';
import { PaymentDTO } from '../models/payment.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationdataService } from '../services/reservationdata.service';

@Component({
  selector: 'app-dopayment',
  templateUrl: './dopayment.component.html',
  styleUrls: ['./dopayment.component.css']
})
export class DopaymentComponent implements OnInit{

    payment:PaymentDTO=new PaymentDTO;
    queryParams: any = {};

  constructor(private bookingService:BookingService,private route:ActivatedRoute,private router:Router,private reservationdataService: ReservationdataService){}

  ngOnInit(): void {
 
     const data = this.reservationdataService.getReservationData();
     const today = new Date();
     this.payment.paymentDate = today.toISOString().split('T')[0];
      this.payment.amount = data.totalFare;

     
  }

  doPayment(form:NgForm){

         this.payment.paymentMethod = form.value.paymentMethod;
    
         this.payment.paymentId = null; 
          this.bookingService.doPayment(this.payment).subscribe(
            (response)=>{

              const paymentId = response.paymentId 

              const updatedData = {
                        ...this.reservationdataService.getReservationData(),
                           paymentId: paymentId
                            };
              this.reservationdataService.setReservationData(updatedData);
              alert("Payment Successful !!");
              alert("Go Back and Confirm your Booking");
             this.router.navigate(['/roombooking']);
             
             })
        }
          


  
//   goBack() {

//        const queryParamspay = { ...this.queryParams,paymentId: this.payment.paymentId};

//        this.router.navigate(['/roombooking'], { queryParams: queryParamspay });
// }



  formattedDisplayDate(): string
   {
      const date = new Date(this.payment.paymentDate);  

       const day = ('0' + date.getDate()).slice(-2);                // Get day as 2 digits
       const month = ('0' + (date.getMonth() + 1)).slice(-2); 
      const year = date.getFullYear();                              

      return `${day}-${month}-${year}`;               
  }  
}
