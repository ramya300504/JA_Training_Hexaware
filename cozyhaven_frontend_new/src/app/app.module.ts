import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HotellistComponent } from './services/hotellist/hotellist.component';
import { AddroomComponent } from './ownerdashboard-feautures/addroom/addroom.component';
import { EditroomComponent } from './ownerdashboard-feautures/editroom/editroom.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { RoombookingComponent } from './roombooking/roombooking.component';
import { DopaymentComponent } from './dopayment/dopayment.component';
import { ReservationlistComponent } from './reservationlist/reservationlist.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdminownerComponent } from './adminowner/adminowner.component';
import { AdminsearchuserComponent } from './adminsearchuser/adminsearchuser.component';
import { AdminsearchownerComponent } from './adminsearchowner/adminsearchowner.component';
import { AdminreservationComponent } from './adminreservation/adminreservation.component';
import { ReviewsectionComponent } from './reviewsection/reviewsection.component';
import { HotelbyadminComponent } from './hotelbyadmin/hotelbyadmin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    OwnerdashboardComponent,
    HotellistComponent,
    AddroomComponent,
    EditroomComponent,
    RoomlistComponent,
    RoombookingComponent,
    DopaymentComponent,
    ReservationlistComponent,
    AdminuserComponent,
    AdminownerComponent,
    AdminsearchuserComponent,
    AdminsearchownerComponent,
    AdminreservationComponent,
    ReviewsectionComponent,
    HotelbyadminComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
