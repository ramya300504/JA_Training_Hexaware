import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ReservationDTO } from '../models/reservation.dto';

@Component({
  selector: 'app-adminreservation',
  templateUrl: './adminreservation.component.html',
  styleUrls: ['./adminreservation.component.css']
})
export class AdminreservationComponent implements OnInit {

  constructor(private adminService:AdminService){}

  ngOnInit(): void {
    this.getAllReservations();
  }

  reservationList:ReservationDTO[]=[];
  getAllReservations(){


    this.adminService.getAllReservations().subscribe(
      (respone)=>{

            this.reservationList=respone;
            console.log(this.reservationList);
      }
    )

  }

}
