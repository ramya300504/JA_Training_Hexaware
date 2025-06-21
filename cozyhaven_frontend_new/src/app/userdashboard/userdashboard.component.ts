import { Component, OnInit } from '@angular/core';
import { HotelService } from '../services/hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HotelDTO } from '../models/hotel.dto';
import { RoomDTO } from '../models/room.dto';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent  implements OnInit{

search = {
    location: '',
    checkInDate: '',
    checkOutDate: '',
    noOfRooms: 1,
    noOfAdults: 1,
    noOfChildren: 0
  };

  today!: string;

  hotels: HotelDTO[] = [];

  roomList:RoomDTO[]=[]

  searched:boolean=false;

  location: string[] = [];

  constructor(private hotelService: HotelService,private router:Router,private reviewService:ReviewService) {}
  ngOnInit(): void {
    
    this.hotelService.getAllLocations().subscribe({
    next: (data: string[]) => {
      this.location = data;
      console.log("Location from BAckend",data)
    }})
    const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
  }

  logout() {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('userId'); 
  alert("LoggedOut Sucessfully");
  
}

  searchHotels(form: NgForm) {

     this.searched= true;

    const { location, checkInDate, checkOutDate, noOfRooms, noOfAdults, noOfChildren } = this.search;

    this.hotelService.searchHotels(location, checkInDate, checkOutDate, noOfRooms, noOfAdults, noOfChildren).subscribe(
      (data) => {
        this.hotels = data;
        console.log('Hotels fetched:', this.hotels);

   } )
      }
      
  }

    

