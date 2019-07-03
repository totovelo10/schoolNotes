import { Moment } from 'moment';
import { Classe} from './classe';
export interface User {
     id: string;
     name: string;
     firstname: string;
     email: string;
     dateNaissance: Moment;
     type: string;
}

export interface Professeur extends User {
     type: 'professeur';
     matiere: string;
}

export interface Eleve extends User {
     type: 'eleve';
     classe: Classe;
}

export interface Admin extends User {
     type: 'admin';
}
