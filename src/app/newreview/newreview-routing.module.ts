import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewreviewPage } from './newreview.page';

const routes: Routes = [
  {
    path: '',
    component: NewreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewreviewPageRoutingModule {}
