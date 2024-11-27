export interface IAuthContext {
  auth: any;
  setAuth: any;
}

export interface IEntry {
  id: number;
  type: string;
  date: string;
  amount: number;
  category: string;
  description: string;
};

export type FinanceTableProps ={
  initialEntries: IEntry[];
};