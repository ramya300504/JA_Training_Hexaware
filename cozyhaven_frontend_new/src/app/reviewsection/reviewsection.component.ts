import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { ReviewDTO } from '../models/review.dto';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviewsection',
  templateUrl: './reviewsection.component.html',
  styleUrls: ['./reviewsection.component.css']
})
export class ReviewsectionComponent implements OnInit {

  hotelId!: number;

  constructor(private reviewService:ReviewService,private route:ActivatedRoute){}
 
  review:ReviewDTO={reviewId: 0, rating: 0,comment: '', hotelId: 0};
  isEditMode: boolean = false;

   ngOnInit(): void {
    this.hotelId = this.route.snapshot.params['hotelId'];
    this.review.hotelId = this.hotelId;
   }

  addReview(form:NgForm){


    this.review=form.value;
     this.review.hotelId = this.hotelId;
    this.reviewService.addReview(this.review).subscribe(
      (response)=>{

        this.review=response;
        alert("Review Added Sucessfully");
      }
    ) }


  

    deleteReview(){

      this.reviewService.deleteReview(this.review.reviewId).subscribe(
        ()=>
        {
          alert("Review Deleted Sucessfully");
        }
      )

    }


}
