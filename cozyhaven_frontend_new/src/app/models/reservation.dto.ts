export class ReservationDTO{

    reservationId:number=0;
    checkInDate:Date = new Date;
    checkOutDate: Date = new Date;
    numberOfAdults:number=0;
    numberOfChildren:number=0;
    totalPrice:number=0;
    status:string='';
    userId:number=0;
    hotelId:number=0;
    roomId:number=0;
    paymentId:number |null=0;
    refundStatus:string |null='';



}


	