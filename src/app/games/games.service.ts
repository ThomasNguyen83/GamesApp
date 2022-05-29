import { Injectable } from '@angular/core';
import { Games } from './games.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private _games: Games[]= [
    new Games(
      '1',
      'Call of Duty: Vangaurd',
      '../assets/cod.jpg',
      new Date('2021-11-05'),
      'FPS'
    ),
    new Games(
      '2',
      'Minecraft',
      '../assets/minecraft.jpg',
      new Date('2011-11-18'),
      'Survival'
    ),
    new Games(
      '3',
      'League of Legends',
      '../assets/lol.jpg',
      new Date('2009-10-27'),
      'MOBA'
    ),
    new Games(
      '4',
      'Halo: Reach',
      '../assets/halo.jpg',
      new Date('2010-09-14'),
      'Action Game'
    ),
    new Games(
      '5',
      'Animal Crossing: New Horizons',
      '../assets/ac.jpg',
      new Date('2020-03-20'),
      'Social simulation'
    ),
    new Games(
      '6',
      'Tetris',
      '../assets/tetris.jpg',
      new Date('1984-06-06'),
      'Tile-matching video game'
    )
  ];

  get games(){
    return [...this._games];
  }
  getGame(id:string){
    return{...this._games.find(p => p.id === id)};
  }
  addGame(title: string, releaseDate: Date, genre: string){
    const newGame = new Games(Math.random().toString(),
    title,
    '../assets/cod.jpg',
    releaseDate,
    genre
    );
  this.http.post('https://ionicproject-thomas-default-rtdb.firebaseio.com/games.json',
  {newGame, id:null}
  ).subscribe((response)=>{
    console.log(response);});
    this._games.push(newGame);
    console.log(this._games);
  }
  removeGame(gameId: string){
    const position = this._games.findIndex(p => p.id === gameId);
    this._games.splice(position,1);
  }
  constructor(private http: HttpClient) { }
}
