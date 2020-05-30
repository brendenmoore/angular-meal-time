import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'meal-time';
  userId = null;

  constructor(public user: UserService, public data: DatabaseService) {}

  ngOnInit() {
    this.user.uid.subscribe(uid => {
      this.userId = uid;
    });
  }

  test(){
    console.log(this.userId);
  }

}
