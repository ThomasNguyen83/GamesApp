import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewgamePageRoutingModule } from './newgame-routing.module';
import { NewgamePage } from './newgame.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewgamePageRoutingModule
  ],
  declarations: [NewgamePage]
})
export class NewgamePageModule { }
