import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

}
