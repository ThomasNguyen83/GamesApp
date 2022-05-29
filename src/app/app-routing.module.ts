import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'newgame',
    loadChildren: () => import('./newgame/newgame.module').then( m => m.NewgamePageModule)
  },
  {
    path: 'newreview/:gameId',
    loadChildren: () => import('./newreview/newreview.module').then( m => m.NewreviewPageModule)
  },
  {
    path: 'editreview/:reviewId',
    loadChildren: () => import('./editreview/editreview.module').then( m => m.EditreviewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
