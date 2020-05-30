import { Injectable } from '@angular/core';
import { of as observableOf, Observable} from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { map, switchMap} from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';

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

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
