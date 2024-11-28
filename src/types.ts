export interface IAuthContext {
  auth: any;
  setAuth: any;
}

export interface IEntry {
  id?: number;
  _id?: number;
  type: string;
  date: string;
  amount: number;
  category: string;
  description: string;
}

export interface IEntryModal {
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
  onAddEntry: (newEntry: IEntry) => void;
  entry?: any;
}

export interface IDeleteModal {
  entryId: number;
  closeModal: () => void;
  refetch: () => void;
}

export interface IEditEntryModal {
  entry: IEntry;
  isOpen: () => void;
  closeModal: () => void;
  refetch: () => void;
}
