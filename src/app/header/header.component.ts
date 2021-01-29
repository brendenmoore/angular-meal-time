import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { $ } from 'protractor';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public user: UserService, @Inject(DOCUMENT) private document: Document) { }

  // Allows the navbar to transition from transparent to blue on scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150) {
      document.getElementById('navbarMain').classList.add('scrolled');
    } else {
      document.getElementById('navbarMain').classList.remove('scrolled');
    }
  }

}
