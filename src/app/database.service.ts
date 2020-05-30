import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';


class User {
  exists: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements OnInit{

  users: AngularFireList<User> = null

  constructor(private db: AngularFireDatabase) {
    this.users = this.db.list('users');
  }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList(): AngularFireList<User> {
    return this.users;
  }

  createUser(uid: string) {
    this.db.list('users').update(uid, {exists: true});
  }

}
