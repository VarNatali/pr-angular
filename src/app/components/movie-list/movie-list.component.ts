import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { OnChanges, OnInit, AfterContentChecked, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../models/movie';
import { movies } from '../constants/movies';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, RouterOutlet],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  movies: Movie[] = movies;
  favoriteList: Movie[] = [];
  watchLaterList: Movie[] = [];


  handleAddingFavorites(newItem: Movie) {
    console.log("handle Adding Favorites");
    this.favoriteList.push(newItem);

  }
  handleAddingWatchList(newItem: Movie) {
    console.log("handle Adding WatchList");

    this.watchLaterList.push(newItem);

  }
  removingFromWatch(newItem: Movie) {
    console.log("handle remove");

    const index = this.watchLaterList.indexOf(newItem);
    console.log("Watch index=" + index);
    if (index > -1) this.watchLaterList.splice(index, 1);

  }
  removingFromFavourite(newItem: Movie) {
    console.log("handle remoove from Favourite");
    const index = this.favoriteList.indexOf(newItem);
    console.log(`!!! favorite index=${index}`);
    if (index > -1) this.favoriteList.splice(index, 1);

  }

  constructor() {
    console.log("constructr");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");

  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewIni");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

}
