import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../games/games.model';
import { GamesService } from '../games/games.service';
import { ReviewService } from '../review/review.service';

@Component({
  selector: 'app-newreview',
  templateUrl: './newreview.page.html',
  styleUrls: ['./newreview.page.scss'],
})
export class NewreviewPage implements OnInit {
  game: Games;
  id: string;
  reviewForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private gamesService: GamesService,
    private router: Router,
    private reviewService: ReviewService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('gameId');
    this.game = this.gamesService.getGame(this.id);

    this.reviewForm = new FormGroup({
      rating: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      review: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
  onAddReview() {
    const reviewId = Math.random().toString();
    this.reviewService.addReview(
      reviewId,
      this.id,
      this.game.title,
      this.game.releaseDate,
      this.reviewForm.value.rating,
      this.reviewForm.value.review,
    );
    this.reviewForm.reset();
    this.router.navigate(['/review']);
  }

}
