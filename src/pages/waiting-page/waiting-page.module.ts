import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitingPage } from './waiting-page';

@NgModule({
  declarations: [
    WaitingPage,
  ],
  imports: [
    IonicPageModule.forChild(WaitingPage),
  ],
  exports: [
    WaitingPage
  ]
})
export class WaitingPageModule {}
