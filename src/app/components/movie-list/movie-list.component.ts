import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { OnChanges, OnInit, AfterContentChecked, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent, RouterOutlet],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  movie = {
    backdrop_path: "assets/img/01.jpeg",
    title: "Тест на тещу",
    release_date: "12.05.2024",
    rating: 5.6,
    overview: "Дуже смішна комедія про родичів та їх справжнє походження, яке не приховаєш від тесту ДНК. ",
    duration: 145,
    filmmaker: "Жульєн Ерве",
    age_limits: "16+",
    id: 653346

  }


  handleFavourite(movie: any) {
    console.log("handlefavourit", movie.title)

  }
  handleWatchList(movie: any) {
    console.log("handlewatchList", movie.title)

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
