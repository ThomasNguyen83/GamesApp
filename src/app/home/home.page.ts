import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Games } from '../games/games.model';
import { GamesService } from '../games/games.service';
import { ReviewService } from '../review/review.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loadedGames: Games[];

  constructor(
    private gamesService: GamesService,
    private router:Router,
    private reviewService: ReviewService) { }


  ionViewWillEnter() {
    this.loadedGames = this.gamesService.games;
  }

  onRemoveGame(gameId: string) {
    this.gamesService.removeGame(gameId);
    this.loadedGames = this.gamesService.games;
    
  }
  isReviewed(gameId: string) {
    return this.reviewService.isGameReviewed(gameId);
  }

  toNewGame(){
    this.router.navigate(['newgame']);
  }

  toNewReview(gameId:string){
    this.router.navigate([`newreview/${gameId}`]);
  }

}
