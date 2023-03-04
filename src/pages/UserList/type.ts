export interface User {
  id: number;
  name: string;
  address: {
    city: string;
    street: string;
  };
  email: string;
  phone: string;
  username: string;
  website: string;
}
