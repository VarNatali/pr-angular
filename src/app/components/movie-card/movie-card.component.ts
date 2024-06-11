import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})

export class MovieCardComponent implements OnInit {
  @Input() data: any;
  public movie: any;
  @Output() addWatchList = new EventEmitter<any>();
  @Output() addFavourite = new EventEmitter<any>();

  ngOnInit() {
    this.movie = this.data;
  }
  watchList() {
    this.addWatchList.emit(this.movie.title);
  }
  favourite() {
    this.addFavourite.emit(this.movie.title);
  }

}
