import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Page } from './enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public user: UserService) {}
  ngOnInit() {}
}

