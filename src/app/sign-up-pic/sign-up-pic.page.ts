import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-sign-up-pic',
  templateUrl: './sign-up-pic.page.html',
  styleUrls: ['./sign-up-pic.page.scss'],
})

export class SignUpPicPage implements OnInit {

  constructor(public photoService: PhotoService, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  public async showActionSheet(photo, position) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Ajouter comme photo de profil',
        role: 'add???',
        icon: 'person',
        handler: () => {
        }
      }, {
        text: 'Effacer',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Annuler',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }
}
