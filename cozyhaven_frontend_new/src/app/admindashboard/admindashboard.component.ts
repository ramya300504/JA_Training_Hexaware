import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { UserDTO } from '../models/user.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {


constructor(private adminService: AdminService,private router:Router) {}
 
currentSection: string = '';


ownerId!: number;


ownerList: any[] = [];

allUserList: any[] = [];



userId!:number


  logout() {
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('userId'); // if you're storing it
  
}


searchByOwnerId() {
  if (this.userId <= 0) {
    alert('Please enter a valid Owner ID');
    return;
  }

  this.adminService.searchOwnerById(this.userId).subscribe({
    next: (response) => {
      this.ownerList = [response];
    },
    error: () => {
      alert('Owner not found');
      this.ownerList = [];
    }
  });
}


  // deleteUserById(userId: number) {
  //   if (confirm('Are you sure you want to delete this user?')) {
  //     this.adminService.deleteUserById(userId).subscribe(
  //       (response) =>
  //        {
  //         if(response==="User Deleted Successfully"){

  //           alert('User deleted successfully');
  //           this.getAllUsers();
            
  //         }
        
  //     });
  //   }
  // }

  deleteUserById(userId: number) {

  if (confirm('Are you sure you want to delete this user?')) 
    {
    this.adminService.deleteUserById(userId).subscribe(
      (response) => {
        
          alert('User deleted successfully');
          this.getAllUsers();
          window.location.reload(); 
        })
      }
  }


  getAllUsers(){

     this.adminService.getAllUsers().subscribe(
      (response)=>{

        this.allUserList=response;
      }
     )
 }

   
}
