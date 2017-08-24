export interface ISterkinekorGenreObject {
    ID: string;
    Name: string;
    NameTranslations: string[];
    Description: string;
    DescriptionTranslations: string[];
}

export interface ISterkinekorFilmObject {
    ID: string;
    ShortCode: string;
    Title: string;
    Rating: string;
    RatingDescription: string;
    Synopsis: string;
    ShortSynopsis: string;
    HOFilmCode: string;
    CorporateFilmId: string;
    RunTime: number;
    OpeningDate: string;
    TrailerUrl: string;
    IsComingSoon: true,
    IsScheduledAtCinema: false,
    TitleAlt: string;
    RatingAlt: null,
    RatingDescriptionAlt: string;
    SynopsisAlt: string;
    ShortSynopsisAlt: string;
    WebsiteUrl: string;
    GenreId: string;
    EDICode: string;
    TwitterTag: string;
    TitleTranslations: string[];
    SynopsisTranslations: string[];
    RatingDescriptionTranslations: string[];
    CustomerRatingStatistics: ICustomerRatingStatistics;
    CustomerRatingTrailerStatistics: ICustomerRatingTrailerStatistics;
    FilmWebId: string;
}

export interface ISterkinekorCinemaObject {
    ID: string;
    CinemaNationalId: string;
    Name: string;
    NameAlt: string;
    PhoneNumber: string;
    EmailAddress: string;
    Address1: string;
    Address2: string;
    City: string;
    Latitude: string;
    Longitude: string;
    ParkingInfo: string;
    LoyaltyCode: string;
    IsGiftStore: boolean;
    Description: string;
    DescriptionAlt: string;
    PublicTransport: string;
    CurrencyCode: string;
    AllowPrintAtHomeBookings: boolean;
    AllowOnlineVoucherValidation: boolean;
    DisplaySofaSeats: boolean;
    TimeZoneId: string;
    HOPK: string;
    NameTranslations: string[];
    DescriptionTranslations: string[];
    ParkingInfoTranslations: string[];
    PublicTransportTranslations: string[];
    TipsCompulsory: boolean;
    TipPercentages: string;
    ServerName: string;
}

export interface ISterkinekorCinemaResponse {
    value: ISterkinekorCinemaObject[];
}

export interface ISterkinekorSessionObject {
    ID: string;
    CinemaId: string;
    ScheduledFilmId: string;
    SessionId: string;
    AreaCategoryCodes: string[];
    Showtime: string;
    IsAllocatedSeating: boolean;
    AllowChildAdmits: boolean;
    SeatsAvailable: number;
    AllowComplimentaryTickets: boolean;
    EventId: string;
    PriceGroupCode: string;
    ScreenName: string;
    ScreenNameAlt: string;
    ScreenNumber: number;
    CinemaOperatorCode: string;
    FormatCode: string;
    SalesChannels: string;
    SessionAttributesNames: string[];
    ConceptAttributesNames: string[];
    AllowTicketSales: boolean;
    HasDynamicallyPricedTicketsAvailable: boolean;
    PlayThroughId: string;
    SessionBusinessDate: string;
    SessionDisplayPriority: number;
    GroupSessionsByAttribute: boolean;
}

export interface ISterKinekorSessionsResponse {
    value: ISterkinekorSessionObject[];
}

export interface ISterKinekorScheduledFilmObject {
    ID: string;
    ScheduledFilmId: string;
    CinemaId: string;
    HasFutureSessions: boolean;
    Title: string;
    TitleAlt: string;
    Distributor: string;
    Rating: string;
    RatingAlt: string;
    RatingDescription: string;
    RatingDescriptionAlt: string;
    Synopsis: string;
    SynopsisAlt: string;
    OpeningDate: string;
    FilmHOPK: string;
    FilmHOCode: string;
    ShortCode: string;
    RunTime: string;
    TrailerUrl: string;
    DisplaySequence: number;
    TwitterTag: string;
    HasSessionsAvailable: boolean;
    GraphicUrl: string;
    CinemaName: string;
    CinemaNameAlt: string;
    AllowTicketSales: boolean;
    AdvertiseAdvanceBookingDate: boolean;
    AdvanceBookingDate: string;
    LoyaltyAdvanceBookingDate: string;
    HasDynamicallyPricedTicketsAvailable: boolean;
    IsPlayThroughMarketingFilm: boolean;
    CustomerRatingStatistics: ICustomerRatingStatistics;
    CustomerRatingTrailerStatistics: ICustomerRatingTrailerStatistics;
    NationalOpeningDate: string;
    CorporateFilmId: string;
    EDICode: string;
}

export interface ICustomerRatingStatistics {
    RatingCount: number;
    AverageScore: number;
}

export interface ICustomerRatingTrailerStatistics {
    RatingCount: number;
    RatingCountLiked: number;
}

export interface ISterKinekorScheduledFilmsResponse {
    value: ISterKinekorScheduledFilmObject[];
}
