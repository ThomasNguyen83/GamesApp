import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditreviewPageRoutingModule } from './editreview-routing.module';

import { EditreviewPage } from './editreview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

    EditreviewPageRoutingModule
  ],
  declarations: [EditreviewPage]
})
export class EditreviewPageModule {}
