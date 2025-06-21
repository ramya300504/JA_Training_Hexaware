import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-adminsearchuser',
  templateUrl: './adminsearchuser.component.html',
  styleUrls: ['./adminsearchuser.component.css']
})
export class AdminsearchuserComponent {

  constructor(private adminService:AdminService){}

  userId!: number;
  userList: any[] = [];

  searchByUserId() {
  if (this.userId <= 0) {
    alert('Please enter a valid User ID');
    return;
  }

  this.adminService.searchUserById(this.userId).subscribe({
    next: (response) => {
      this.userList = [response]; 
    },
    error: () => {
      alert('User not found');
      this.userList = [];
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
