export interface UserModel {
  id: number;
  img: string;
  name: string;
  // number: number;
  Job_Desk: string;
  // Schedule: string;
  Contact: number | string;
  Status: "ACTIVE" | "INACTIVE";
};