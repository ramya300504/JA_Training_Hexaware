import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-adminowner',
  templateUrl: './adminowner.component.html',
  styleUrls: ['./adminowner.component.css']
})
export class AdminownerComponent implements OnInit{

  allOwnerList: any[] = [];

  constructor(private adminService:AdminService){}

  ngOnInit() {
  this.getAllOwners();
  }

  getAllOwners(){

    this.adminService.getAllOwners().subscribe(
      (response)=>{
        this.allOwnerList=response;
      }
    )
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
