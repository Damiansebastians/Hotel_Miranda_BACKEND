export interface UserModel {
  // id: number;
  name: string;
  password: string;
  img: string;
  Job_Desk: string;
  Contact: number | string;
  Status: "ACTIVE" | "INACTIVE";
};