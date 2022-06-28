export type IPhoneType = 'work' | 'home' | 'mobile' | 'main' | 'other';

export interface IPhone {
  type: IPhoneType;
  number: string;
}

export interface UserModel {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    membership?: string;
    phones: IPhone[];
  }
}

