import { Moment } from 'moment';

export interface User {
     id: string;
     name: string;
     firstname: string;
     email: string;
     dateNaissance: Moment;
     type: string;
}

