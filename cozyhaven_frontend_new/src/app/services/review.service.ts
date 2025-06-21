import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewDTO} from '../models/review.dto';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http:HttpClient) { }

  getHotelRating(hotelId: number): Observable<number> {

  const token = localStorage.getItem('jwtToken');
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  return this.http.get<number>(`http://localhost:8080/reviews/getratingbyhotel/${hotelId}`,{headers});
}

  addReview(reviewdto:ReviewDTO):Observable<ReviewDTO>{

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url=`http://localhost:8080/reviews/addReview`
    return this.http.post<ReviewDTO>(url,reviewdto,{headers});


  }

  // updateReview(reviewdto:ReviewDTO,reviewId:number):Observable<ReviewDTO>{

  //   const token = localStorage.getItem('jwtToken');
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

  //   const url=`http://localhost:8080/reviews/updateReview/${reviewId}`;
  //   return this.http.post<ReviewDTO>(url,reviewdto,{headers});


  // }

  deleteReview(reviewId:number):Observable<void>{

    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const url=`http://localhost:8080/reviews/deleteReview/${reviewId}`;

    return this.http.delete<void>(url,{headers});
  }


}
