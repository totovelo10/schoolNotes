import {Professeur, Eleve} from './user';
export interface Classe {
    id: string;
    name: string;
    professeurs: Professeur[];
    eleves: Eleve[];
    annee: string;
}
