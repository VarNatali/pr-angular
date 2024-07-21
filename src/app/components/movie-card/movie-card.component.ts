import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie';
import { movies } from '../constants/movies';
import { DateFormatPipe } from "../../pipes/date-format.pipe";


@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, DateFormatPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})

export class MovieCardComponent {
  @Input() item!: Movie;
  @Input() isShowRemove!: boolean;

  @Output() addToFavouriteEvent = new EventEmitter<any>();
  @Output() addToWatchEvent = new EventEmitter<any>();
  @Output() removeFromWatchEvent = new EventEmitter<any>();
  @Output() removeFromFavouriteEvent = new EventEmitter<any>();
  // public isShow = false;

  addToFavouriteList() {//подія, відбувається в template child
    this.addToFavouriteEvent.emit();

  }
  addToWatchList() {
    this.addToWatchEvent.emit();
  }

  removeFromWatch() {//подія, відбувається в template child
    this.removeFromWatchEvent.emit();

  }
  removeFromFavourite() {//подія,  відбувається в template child
    this.removeFromFavouriteEvent.emit();
  }

}
//