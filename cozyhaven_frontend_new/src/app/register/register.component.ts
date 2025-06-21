import { Component } from '@angular/core';
import { UserDTO } from '../models/user.dto';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

     
  user: UserDTO = new UserDTO();

  constructor(private userService: UserService) {}

  onRegister(form: NgForm){

    if (form.valid) {

      this.userService.registerUser(this.user).subscribe(
        (userdata) => {
          alert('User registration successful!');
          alert('Login to Access our Services');
          localStorage.setItem('userId', userdata.userId.toString());
          form.resetForm(); 
        }
      ) }
  }

}

