import { Injectable } from '@angular/core';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private _reviews: Review[] = [];
  get reviews() {
    return [...this._reviews];
  }
  getReview(reviewId: string) {
    return { ...this._reviews.find(p => p.reviewId === reviewId) };
  }
  addReview(reviewId: string, id: string, title: string, releaseDate: Date, rating: number, review: string) {
    const newReview = new Review(reviewId, id, title, releaseDate, rating, review);
    this._reviews.push(newReview);
  }

  removeReview(reviewId: String) {
    const position = this._reviews.findIndex(
      p => p.reviewId === reviewId);
    this._reviews.splice(position, 1);
  }

  updateReview(reviewId: string, title: string, releaseDate: Date, rating: number, review: string) {
    const updatedReviewIndex = this._reviews.findIndex(p1 => p1.reviewId === reviewId);
    const oldReview = this._reviews[updatedReviewIndex];
    this._reviews[updatedReviewIndex] = new Review(
      oldReview.id,
      reviewId,
      title,
      releaseDate,
      rating,
      review
    );
  }
  isGameReviewed(id: string) {
    return this._reviews.find(p => p.id === id);
  }

  constructor() { }
}
