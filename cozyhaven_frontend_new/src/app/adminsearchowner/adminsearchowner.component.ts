import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-adminsearchowner',
  templateUrl: './adminsearchowner.component.html',
  styleUrls: ['./adminsearchowner.component.css']
})
export class AdminsearchownerComponent {


  constructor(private adminService:AdminService){}

  ownerId!:number

  
  ownerList: any[] = [];

  allOwnerList: any[] = [];

  searchByOwnerId() {
  if (this.ownerId <= 0) {
    alert('Please enter a valid Owner ID');
    return;
  }

  this.adminService.searchOwnerById(this.ownerId).subscribe({
    next: (response) => {
      this.ownerList = [response];
    },
    error: () => {
      alert('Owner not found');
      this.ownerList = [];
    }
  });
}


  deleteUserById(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.adminService.deleteUserById(userId).subscribe(
        (response) =>
         {
          if(response==="User Deleted Successfully"){

            alert('User deleted successfully');
            
          }
        
      });
    }
  }

}
