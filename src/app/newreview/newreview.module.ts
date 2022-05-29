import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,     ReactiveFormsModule,
} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewreviewPageRoutingModule } from './newreview-routing.module';

import { NewreviewPage } from './newreview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

    NewreviewPageRoutingModule
  ],
  declarations: [NewreviewPage]
})
export class NewreviewPageModule {}
