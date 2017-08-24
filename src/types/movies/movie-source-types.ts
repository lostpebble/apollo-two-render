import {ICoordinates} from "../vibescout/index";

export interface ICinemaSource {
  id: string;
  countryCode: string;
  address: string;
  cinemaBrandID: string;
  cinemaBrandName: string;
  coordinates: ICoordinates;
  name: string;
  phoneNumber: string;
  screens: string;
  timezone: string;
  timezoneUTCOffset: string;
}

export interface IMovieSource {
  id: string;
  title: string;
  overview: string;
  imdbID: string;
  tmdbID: string;
  releaseYear: string;
  openingDate: string;
  guidanceRating: string;
  runtime: string;
  genres: string[];

  ratingTotalVotes: string;
  averageVoteRating: string;
  trailerUrl: string;

  productionCountry: string;
  posterImageUrl: string;
}

export interface IScheduledMovieSource {
  id: string;
  movieID: string;
  cinemaID: string;
  screenName: string;
  screenAttributes: string[];
  scheduledTime: string;
}
