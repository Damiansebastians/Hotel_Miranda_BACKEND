export interface BookingModel {
  id: number;
  img:string
  // number?: string;
  Guest: string;
  Order_Date: Date | string;
  Check_in: Date | string;
  Check_out: Date |string;
  roomId?: number;
  price: number;
  Special_Request: string;
  amenities?: string;
  // Room_type: string;
  description: string;
  Status: string,
};