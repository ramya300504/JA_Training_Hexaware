import { Component } from '@angular/core';
import { OwnerService } from '../services/owner.service';
import { RoomDTO } from '../models/room.dto';
import { NgForm } from '@angular/forms';
import { RefundDTO } from '../models/refund.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerdashboard',
  templateUrl: './ownerdashboard.component.html',
  styleUrls: ['./ownerdashboard.component.css']
})
export class OwnerdashboardComponent {





  constructor(private ownerService:OwnerService,private router:Router){}

 active: string = '';


 roomList:RoomDTO[]=[];

   room: RoomDTO = new RoomDTO();

 editRoomId : number | null= null;

 doEdit(roomId: number){

       this.editRoomId = roomId;
   }

  cancelEdit() {
  this.editRoomId = null;
}
addRoom() {
   

    if (this.room.hotelId === 0 || this.room.hotelId == null) {
      alert("Hotel ID is required.");
      return;
    }

    this.ownerService.addRoom(this.room).subscribe({
      next: (response) => {
        console.log('Room Added Successfully:', response);
        alert('Room Added Successfully');
        this.room = new RoomDTO(); 
      },
      error: (err) => {
        console.error('Error adding room:', err);
        alert('Failed to add room');
      }
    });
  }



showAddRoom() {
  this.activeSection = 'addRoom';
}

showViewAllRooms() {
  this.activeSection = 'viewAllRooms';
  this.getAllRooms();
}

showRefunds() {
  this.activeSection = 'refunds';
}


logout() {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('userId'); 
}


getAllRooms(){

  this.ownerService.getAllRooms().subscribe(
    (rooms)=>{
      console.log("Rooms from backend:", rooms);
      this.roomList=rooms;
      
    }

  )

}


updateRoom(room:RoomDTO){

  const roomId=room.roomId;
  this.ownerService.updateRoom(roomId,room).subscribe(
    (respone)=>{
      alert("Room Updated Successfully");
      this.editRoomId = null;
      console.log('Room updated:',respone);
    }
  )


}

deleteRoom(roomId: number) {
  const confirmed = confirm("Do you want to delete this room?");
  
  if (confirmed) {
    this.ownerService.deleteRoom(roomId).subscribe({
      next: () => {
        alert("Room deleted successfully");
        this.getAllRooms();
      },
      error: (err) => {
        console.error("Error deleting room:", err)
      }
    });
  }
}

refundList: RefundDTO[] = [];

selectedReservation: any = null;
activeSection: string = 'reservationList';
refundReason: string = '';
today: Date = new Date();

ngOnInit() {
  this.getAllRefundRequests();
}

showRefundForm(reservation: any) {
  this.selectedReservation = reservation;
  this.refundReason = '';
  this.activeSection = 'refundForm';
}

getAllRefundRequests() {
  this.ownerService.getAllRefundRequests().subscribe(
    (res: RefundDTO[]) => {
      this.refundList = res;
    }
  );
}

approve(refundId: number) {
  this.ownerService.approveRefund(refundId).subscribe(() => {
    this.getAllRefundRequests();
    alert("Refund approved");
  });
}

reject(refundId: number) {
  this.ownerService.rejectRefund(refundId).subscribe(() => {
    this.getAllRefundRequests();
    alert("Refund rejected");
  });
}

}


