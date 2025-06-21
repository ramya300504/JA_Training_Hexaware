import { Component } from '@angular/core';
import { HotelDTO } from '../models/hotel.dto';
import { HotelService } from '../services/hotel.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-hotelbyadmin',
  templateUrl: './hotelbyadmin.component.html',
  styleUrls: ['./hotelbyadmin.component.css']
})
export class HotelbyadminComponent {

  activeSection: string = '';
  viewSection:string='';
  editHotelId: number | null = null;

  hotel: HotelDTO = {hotelId: 0, hotelName: '',location: '',address: '',  contactNumber: '',description: '',imageUrl: '',amenities: '', rating: 0 };

  hotelList: HotelDTO[] = [];

  constructor(private adminService:AdminService) {}

  ngOnInit(): void {
    this.getAllHotels();
  }

  showAddHotel() {
    this.activeSection = 'addHotel';
  }

  scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  showViewAllHotels() {
    this.activeSection = 'viewAllHotels';
    this.getAllHotels();
  }

  // Add hotel
  addHotel() {
    this.adminService.addHotel(this.hotel).subscribe({
      next: (data) => {
        alert('Hotel added successfully!');
        this.hotel=data;
        this.resetForm();
        this.activeSection = 'viewAllHotels';
      },
      error: (err) => {
        alert('Error adding hotel.');
        console.error(err);
      }
    });
  }


  getAllHotels() {
    this.adminService.getAllHotels().subscribe({
      next: (data) => {
        this.hotelList = data;
        console.log('Hotels fetched:', data);
      },
      error: (err) => {
        alert('Error fetching hotels.');
        console.error(err);
      }
    });
  }

 
  doEdit(hotelId: number) {
    this.editHotelId = hotelId;
  }


  cancelEdit() {
    this.editHotelId = null;
  }

  
  updateHotel(hotel: HotelDTO) {
    this.adminService.updateHotel(hotel, hotel.hotelId).subscribe({
      next: (data) => {
        alert('Hotel updated successfully!');
        this.editHotelId = null;
      },
      error: (err) => {
        alert('Error updating hotel.');
        console.error(err);
      }
    });
  }

  // Delete hotel
  deleteHotel(hotelId: number) {
    if (confirm('Are you sure you want to delete this hotel?')) {
      this.adminService.deleteHotel(hotelId).subscribe({
        next: () => {
          alert('Hotel deleted successfully!');
          this.hotelList = this.hotelList.filter(h => h.hotelId !== hotelId);
        },
        error: (err) => {
          alert('Error deleting hotel.');
          console.error(err);
        }
      });
    }
  }

  resetForm() {
    this.hotel = {hotelId: 0, hotelName: '', location: '', address: '',  contactNumber: '',description: '',  imageUrl: '', amenities: '', rating: 0 };
  }

}
