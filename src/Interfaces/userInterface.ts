export interface User {
  id: number;
  img: string;
  name: string;
  number: string;
  Job_Desk: string;
  Schedule: string;
  Contact: string;
  Status: "ACTIVE" | "INACTIVE";
};