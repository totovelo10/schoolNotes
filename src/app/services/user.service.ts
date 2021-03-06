import { Injectable } from '@angular/core';
import { User } from '../user';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
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
      user.dateNaissance === null
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
      dateNaissance: user.dateNaissance.locale('fr').format(),
      type: user.type
    });
  }


  deleteUser(user: User) {

    this.usersCollection.doc(user.id).delete();

  }
  deleteUsers(users: User[]) {

    users.forEach(user => {
      this.usersCollection.doc(user.id).delete();
    });
  }


  getUsersList(): Observable<User[]> {
    this.users = this.usersCollection.valueChanges();
    return this.users;
  }

  getUser(id: string): Observable<User> {
    const user = this.usersCollection.doc<User>(id);

    return user.valueChanges();
  }
  updateUser(user: User): string {
    console.log(user);
    this.usersCollection.doc(user.id).update({
      name: user.name,
      firstname: user.firstname,
      email: user.email,
      dateNaissance: user.dateNaissance.locale('fr').format(),
      type: user.type
    });
    return'user updated';
  }
}
