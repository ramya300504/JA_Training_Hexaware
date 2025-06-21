export class RefundDTO{

refundId: number = 0;
  refundAmount: number = 0;
  refundReason: string = '';
  refundDate: Date = new Date();
  refundStatus: string = 'PENDING';
  reservationId: number = 0;
  userId: number = 0;
}