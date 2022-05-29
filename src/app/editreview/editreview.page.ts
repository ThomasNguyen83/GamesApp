import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Games } from '../games/games.model';
import { GamesService } from '../games/games.service';
import { Review } from '../review/review.model';
import { ReviewService } from '../review/review.service';

@Component({
  selector: 'app-editreview',
  templateUrl: './editreview.page.html',
  styleUrls: ['./editreview.page.scss'],
})
export class EditreviewPage implements OnInit {
  review: Review;
  game: Games;
  id: string;
  reviewForm: FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private gamesService: GamesService,
    private reviewService: ReviewService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('reviewId');
    this.review = this.reviewService.getReview(this.id);
    console.log('this.review: ', this.review);
    console.log('this.review.review: ', this.review.review);
    console.log('this.review.rating: ', this.review.rating);
    this.reviewForm = new FormGroup({
      rating: new FormControl(this.review.rating, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),

      review: new FormControl(this.review.review, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }


  onUpdateReview() {
    this.reviewService.updateReview(
      this.id,
      this.review.title,
      this.review.releaseDate,
      this.reviewForm.value.rating,
      this.reviewForm.value.review,
    );
    this.reviewForm.reset();
    this.router.navigate(['/review'])
  }

}
