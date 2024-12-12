export interface Client {
  id?: number;
  userName: string;
  name: string;
  phone: string;
  email: string;
  startDate: Date;
  endDate?: Date;
}
