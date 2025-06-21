import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { OwnerdashboardComponent } from './ownerdashboard/ownerdashboard.component';
import { RoomlistComponent } from './roomlist/roomlist.component';
import { RoombookingComponent } from './roombooking/roombooking.component';
import { DopaymentComponent } from './dopayment/dopayment.component';
import { ReservationlistComponent } from './reservationlist/reservationlist.component';
import { AdminsearchuserComponent } from './adminsearchuser/adminsearchuser.component';
import { AdminsearchownerComponent } from './adminsearchowner/adminsearchowner.component';
import { AdminownerComponent } from './adminowner/adminowner.component';
import { AdminreservationComponent } from './adminreservation/adminreservation.component';
import { ReviewsectionComponent } from './reviewsection/reviewsection.component';
import { HotelbyadminComponent } from './hotelbyadmin/hotelbyadmin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [

 {path:'', component:WelcomeComponent},
 {path:'register',component:RegisterComponent},
 {path:'login',component:LoginComponent},
 {path:'userdashboard',component:UserdashboardComponent},
 {path:'admindashboard',component:AdmindashboardComponent},
 {path:'ownerdashboard',component:OwnerdashboardComponent},
 { path: 'view-rooms/:hotelId', component:RoomlistComponent },
 {path:'roombooking',component:RoombookingComponent},
 {path:'dopayment',component:DopaymentComponent},
 {path:'viewbookings',component:ReservationlistComponent},
 {path:'userbyadmin',component:AdminsearchuserComponent},
 {path:'ownerbyadmin',component:AdminsearchownerComponent},
 {path:'getallowners',component:AdminownerComponent},
  {path:'adminreservation',component:AdminreservationComponent},
  {path:'reviewsection/:hotelId',component:ReviewsectionComponent},
  {path:'hotelsbyadmin',component:HotelbyadminComponent},
  {path:'userprofile',component:UserprofileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
