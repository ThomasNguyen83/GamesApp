import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditreviewPage } from './editreview.page';

const routes: Routes = [
  {
    path: '',
    component: EditreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditreviewPageRoutingModule {}
