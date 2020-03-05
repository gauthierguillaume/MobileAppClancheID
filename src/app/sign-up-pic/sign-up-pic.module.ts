import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPicPageRoutingModule } from './sign-up-pic-routing.module';

import { SignUpPicPage } from './sign-up-pic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPicPageRoutingModule
  ],
  declarations: [SignUpPicPage]
})
export class SignUpPicPageModule {}
