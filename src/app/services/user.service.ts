import { Injectable } from '@angular/core';
import { User } from '../user';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  constructor(private afs: AngularFirestore) {
    this.usersCollection = afs.collection<User>('users');
  }

  createUser(user: User): string {
    const id = this.afs.createId();
    user.id = id;
    // check if the all properties are present
    if (
      user.name === '' ||
      user.firstname === '' ||
      user.email === '' ||
      user.type === '' ||
      user.dateNaissance === ''
    ) {
      return 'Formulaire incomplet!';
    } else {
      this.addUser(user);
    }
    return 'Utilisateur enregistré';
  }

  addUser(user: User) {
    this.usersCollection.doc(user.id).set({
      id: user.id,
      name: user.name,
      firstname: user.firstname,
      email: user.email,
      dateNaissance: user.dateNaissance,
      type: user.type
    });
  }


  deleteUser(user: User) {

  }

  getUsersList(): Observable<User[]> {
    this.users = this.usersCollection.valueChanges();
    return this.users;
  }
}
