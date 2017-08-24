export interface IMovieSearchResponse {
  page: number;
  results: IMovieSearchResultsObject[];
  total_results: number;
  total_pages: number;
}

export interface IMovieSearchResultsObject {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface IMovieGenreObject {
  id: number;
  name: string;
}

export interface IMovieCollectionObject {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IMovieProductionCompanyObject {
  id: number;
  name: string;
}

export interface IMovieProductionCountryObject {
  iso_3166_1: string;
  name: string;
}

export interface IMovieSpokenLanguagesObject {
  iso_639_1: string;
  name: string;
}

export interface IMovieDetailObject {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IMovieCollectionObject;
  budget: number;
  genres: IMovieGenreObject[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IMovieProductionCompanyObject[];
  production_countries: IMovieProductionCountryObject[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: IMovieSpokenLanguagesObject[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieReleaseDate {
  certification: string;
  iso_639_1: string;
  release_date: string;
  type: number;
}

export interface IMovieReleaseObject {
  iso_3166_1: string;
  release_dates: IMovieReleaseDate[];
}

export interface IMovieReleaseResponse {
  id: number;
  results: IMovieReleaseObject[];
}

export interface IMovieVideoObject {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface IMovieVideoResponse {
  id: number;
  results: IMovieVideoObject[];
}

export interface IMovieImagesConfigObject {
  base_url: string;
  secure_base_url: string;
  backdrop_sizes: string[];
  logo_sizes: string[];
  poster_sizes: string[];
  profile_sizes: string[];
  still_sizes: string[];
}

export interface IMovieConfigObject {
  images: IMovieImagesConfigObject;
  change_keys: string[];
}

export interface IMovieGenresResponse {
  genres: IMovieGenreObject[];
}

export interface IFallbackSearchOptions {
  title: string;
  year: number;
  overviewCompare?: string;
  language?: string;
  yearsToFallback?: number;
}
