import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  expand() {
    const i = document.getElementById('square');
    if (i.style.width === '36%') {
      i.style.width = '80%';
    } else {
      i.style.width = '36%';
    }
  }

  displayImage() {
    const x = document.getElementById('qr-code');
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }

}
