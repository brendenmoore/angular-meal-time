import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  uidObs = this.afAuth.authState.pipe(map(authState => {
    if (!authState) {
      return null;
    } else {
      return authState.uid;
    }
  }))
  uid: string;

  constructor(private afAuth: AngularFireAuth) {
    this.uidObs.subscribe(uidString => this.uid = uidString);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
