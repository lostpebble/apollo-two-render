import {IImageMetaData} from "../../utils/ImageUtils";
import {BetterDate} from "../../utils/DateUtils";

export interface IMovieTruthObject {
    id: string;
    title: string;
    overview: string;
    imdbID: string;
    tmdbID: string;
    releaseYear: number;
    openingDate: number;
    guidanceRating: string;
    runtime: number;
    genres: {
        [key: string]: boolean;
    };

    tmdbPopularity: number;
    voteRatings: {
        [key: string]: IRatingObject;
    };
    averageVoteRating: number;
    hasVoteRating: boolean;
    trailerUrl: string;

    productionCountry: string;
    images: IMovieImages;
    hasBackdrop: boolean;
    hasPoster: boolean;
    posterSource: string;
    posterSourceID: string;
    movieInfoSource: string;
    movieInfoSourceID: string;
}

export interface ILocationNode {
    timezone: string;
    timezoneUTCOffset: number;
    coordinates: ICoordinates;
    countryCode: string;
    address?: string;
}

export interface ICoordinates {
    latitude: number;
    longitude: number;
}

export interface ICinemaTruthObject extends ILocationNode {
    id: string;
    name: string;
    phoneNumber: string;
    cinemaBrandName: string;
    cinemaSourceBrandID: string;
    cinemaInfoSource: string;
    cinemaInfoSourceID: string;
    screens: number;
}

export interface IScheduleTimesObject {
    [year: number]: {
        [month: number]: {
            [day: number]: number[];
        };
    };
}

export interface IMovieScheduleObject extends ILocationNode {
    id: string;
    movieTruthID: string;
    cinemaTruthID: string;
    scheduleSourceBrandID: string;
    scheduleSourceCinemaID: string;
    scheduleSourceScheduleID: string;
    scheduleSourceMovieID: string;
    startDate: number;
    endDate: number;
    isScheduled: boolean;
    screenAttributes: {
        [screenAttribute: string]: boolean;
    };
    scheduleTimes: BetterDate[];
}

export interface IMovieListingObject extends IMovieTruthObject {
    startDate: number;
    endDate: number;
    screenAttributes: {
        [screenAttribute: string]: boolean;
    };
}

export interface IRatingMap {
    tmdb ?: IRatingObject;
    sterkinekor ?: IRatingObject;
}

export interface IRatingObject {
    totalVotes: number;
    voteRating: number;
}

export interface IImage {
    url: string;
    meta: IImageMetaData;
}

export interface IImageSet {
    thumbnail: IImage;
    normal: IImage;
    original: IImage;
}

export interface IMovieImages {
    poster: IImageSet;
    backdrop: IImageSet;
}
