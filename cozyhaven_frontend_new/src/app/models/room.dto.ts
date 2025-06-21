export class RoomDTO{

    roomId:number=0
    roomSize:string='';
    bedType:string='';
    baseFare:number=0;
    maxPersons:number=0;
    ac:boolean=true;
    available:boolean=true;
    hotelId: number=0;
    imageUrl:string='';

    totalFare?: number;// optional modification for calculatebasefare

}


