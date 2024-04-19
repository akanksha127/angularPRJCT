import { Component, OnInit, inject, input } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { CommonModule } from '@angular/common';
import { MovieDetail } from '../interfaces/movie-detail';
import { environment } from '../../environments/environment.development';

const imgUrl =environment.imgUrl;
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {
   private movieService = inject(MovieService)
   //movies: any =[];
    movies : MovieDetail = {
      adult: false,
      backdrop_path: '',
      belongs_to_collection: undefined,
      budget: 0,
      genres: [],
      homepage: '',
      id: 0,
      imdb_id: '',
      origin_country: [],
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      production_companies: [],
      production_countries: [],
      release_date: '',
      revenue: 0,
      runtime: 0,
      spoken_languages: [],
      status: '',
      tagline: '',
      title: '',
      video: false,
      vote_average: 0,
      vote_count: 0
    };
   ngOnInit(): void {
      this.loadMovies();
  }
  loadMovies(){
    this.movieService.getMovies().subscribe({ // the next callback will be executed when the request is successfull and it receives the request from the http requet
      next : (res:any) => {
        this.movies = res as MovieDetail;
        console.log(res);
      },
      error : (error) => console.log("Error fetching movies")
    });
  }

  getFullImageUrl(posterPath:String): String  {
    return imgUrl+posterPath;
  }
}
