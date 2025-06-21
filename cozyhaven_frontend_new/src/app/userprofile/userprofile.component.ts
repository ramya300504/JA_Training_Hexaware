import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserDTO } from '../models/user.dto';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

 

  constructor(private authService:AuthenticationService,private userService:UserService){}

  user: UserDTO = new UserDTO();
  editMode: boolean = false;
  originalUser: UserDTO = new UserDTO();


  ngOnInit(): void {
    const email = this.authService.getEmailFromToken();
    if (email) {
      this.authService.getUserByEmail(email).subscribe({
        next: (data) => {
          this.user = { ...data };
          this.originalUser = { ...data }; 
        },
        error: () => alert('Failed to load user profile.')
      });
    }
  }


   enableEdit(){
    this.editMode=true;
   }

  cancelEdit() {
    this.user = { ...this.originalUser };
    this.editMode = false;
  }

  updateProfile() {
    this.userService.updateUser(this.user,this.user.userId).subscribe({
      next: () => {
        alert('Profile updated successfully!');
        this.editMode = false;
        this.originalUser = { ...this.user };
      },
      error: () => alert('Failed to update profile.')
    });
  }


}
