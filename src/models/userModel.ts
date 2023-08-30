export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  img: string;
  Job_Desk: string;
  Contact: number | string;
  Status: "ACTIVE" | "INACTIVE";
};