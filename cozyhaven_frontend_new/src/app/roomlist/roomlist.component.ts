import { Component, Input, OnInit } from '@angular/core';
import { RoomDTO } from '../models/room.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { ReservationDTO } from '../models/reservation.dto';
import { ReservationdataService } from '../services/reservationdata.service';
import { AuthenticationService } from '../services/authentication.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit{


 numberOfAdults!: number;
  
 numberOfChildren!: number;
 checkInDate!: Date;
 checkOutDate!: Date;
  
  userId!: number;

  hotelId!: number;
  totalFare!: number;

  totalpersons:number=0;


  rooms: RoomDTO[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private hotelService: HotelService,
    private reservationdataService:ReservationdataService,private authService:AuthenticationService,private roomService:RoomService) {}

  ngOnInit(): void {

    const userId = this.authService.getGuestId();
    this.userId = userId; 
    this.route.paramMap.subscribe(
      (params) => {

      this.hotelId = Number(params.get('hotelId'));
      this.getRoomsbyHotel(this.hotelId);
    });

    this.route.queryParamMap.subscribe(
      (params) => {
      this.numberOfAdults = Number(params.get('adults'));
      this.numberOfChildren = Number(params.get('children'));
    });
  }

  getRoomsbyHotel(hotelId: number): void {
    this.hotelService.getRoomsByHotelId(hotelId).subscribe(
      (data) => {

      this.rooms = data;

    });
  }

  calculateTotalFare(room: RoomDTO): void {
    this.hotelService.calculateTotalFare(room.bedType, room.baseFare, this.numberOfAdults, this.numberOfChildren).subscribe(
      (price) => {
        room.totalFare = price;
         this.totalFare = price;
      });
  }

  bookRoom(room: RoomDTO) {
  if (room.totalFare == null) {
    alert("Please calculate fare before booking.");
    return;
  }

  if (!room.available) {
    alert("Selected Room is Not Available. Choose another Room.");
    return;
  }

  this.totalpersons = this.numberOfAdults + this.numberOfChildren;

  if (room.bedType === 'SINGLE') {
    if (this.totalpersons > 2) {
      alert("For Single Room, only 2 persons are allowed.");
      return;
    }
  } 
  else if (room.bedType === 'DOUBLE') {
    if (this.totalpersons > 4) {
      alert("For Double Room, only 4 persons are allowed.");
      return;
    }
  } 
  else if (room.bedType === 'KING') {
    
    if (this.totalpersons > 6) {
      alert("For King Room, only 6 persons are allowed.");
      return;
   }
  }
   else {
    alert("Invalid bed type or configuration.");
    return;
  }

  const data = {
    hotelId: this.hotelId,
    roomId: room.roomId,
    userId: this.userId,
    checkInDate: this.checkInDate,
    checkOutDate: this.checkOutDate,
    numberOfAdults: this.numberOfAdults,
    numberOfChildren: this.numberOfChildren,
    totalFare: room.totalFare,
    status: 'BOOKED'
  };

  console.log("Storing reservation data:", data);
  this.reservationdataService.setReservationData(data);
  this.router.navigate(['/roombooking']);
}

  filterroomsList:RoomDTO[]=[];
  filterApplied: boolean = false; 
  baseFare!:number;

  selectedBedType!:string;

  filterAvailableRooms(){

    this.roomService.getAvailableRooms(this.hotelId).subscribe(
     (response)=> {
         
             this.filterroomsList=response;
              this.filterApplied = true;

    }) }

  filterAcRooms() {
  this.roomService.getAcRooms(this.hotelId).subscribe(
    (response) => {
      this.filterroomsList = response;
       this.filterApplied = true;
    }
  );
}



filterByBedType(bedType: string) {
  this.roomService.getRoomsByBedType(bedType, this.hotelId).subscribe(
    (response) => {
      this.filterroomsList = response;
      this.filterApplied = true;
    }
  );
}

filterByBaseFare() {
  if (this.baseFare != null && this.baseFare > 0) {
    this.roomService.getRoomsLessThanBF(this.baseFare, this.hotelId).subscribe(
      (response) => {
        this.filterroomsList = response;
        this.filterApplied = true;
      }
    );
  } else {
    alert("Please enter a valid base fare.");
  }
}
    
clearFilters() {
  this.baseFare = 0;
  this.selectedBedType = '';
  this.filterroomsList = [];
   this.filterApplied = false; 
  this.getRoomsbyHotel(this.hotelId);
}

  
}