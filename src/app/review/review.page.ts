import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { Review } from './review.model';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage {
  reviews: Review[];
  constructor(
    private reviewService: ReviewService,
    private router: Router,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController
  ) { }

  ionViewWillEnter() {

    this.reviews = this.reviewService.reviews;
    console.log('this.reviews: ', this.reviews);
  }

  async presentActionSheet(reviewId: any) {

    const actionSheet = await this.actionSheetController.create({
      header: 'Your actions',
      buttons: [
        {
          text: 'Update Review',
          icon: 'pencil',
          data: 10,
          handler: () => {
            this.toEdit(reviewId);
          }
        },
        {
          text: 'Remove Review',
          icon: 'trash',
          handler: () => {
            this.removeReview(reviewId);
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  toEdit(reviewId: string) {
    this.router.navigate([`editreview/${reviewId}`]);

  }

  async removeReview(reviewId: string) {
    this.reviews = this.reviewService.reviews;
    this.reviewService.removeReview(reviewId);
    const alert = await this.alertController.create({
      header: "Removing Review",
      message:"Are you sure you want to remove review?",
      buttons: [
        {text: "Yes",
        handler: () => {
          this.reviewService.removeReview(reviewId);
        }},
        {text: "No",
        role:"cancel",
        handler:() =>{
          console.log("Cancelled");
        }}
      ]
    })
    await alert.present();
  }
}
