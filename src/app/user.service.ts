import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid = this.afAuth.authState.pipe(map(authState => {
    if (!authState) {
      return null;
    } else {
      return authState.uid;
    }
  }))

  constructor(private afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
