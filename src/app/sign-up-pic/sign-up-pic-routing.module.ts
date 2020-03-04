import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPicPage } from './sign-up-pic.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPicPageRoutingModule {}
