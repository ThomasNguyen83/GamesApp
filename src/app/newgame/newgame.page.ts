import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GamesService } from '../games/games.service';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.page.html',
  styleUrls: ['./newgame.page.scss'],
})
export class NewgamePage implements OnInit {
  gameForm: FormGroup;
  constructor(private gamesService: GamesService,
    private router: Router) { }


  ngOnInit() {
    this.gameForm = new FormGroup({

      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),

      releaseDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),

      genre: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }

  onCreateGame() {
    this.gamesService.addGame(
      this.gameForm.value.title,
      new Date(this.gameForm.value.releaseDate),
      this.gameForm.value.genre
    );
    this.gameForm.reset();
    this.router.navigate(['/home']);
  }

}
