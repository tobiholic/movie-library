import apiClient from './api-client';
import create from './http-service';

//Defining attributes for users to show
export interface User {
  id: number;
  name: string;
  username?: string;
  email?: string;
  website?: string;
}

export default create('/users');
