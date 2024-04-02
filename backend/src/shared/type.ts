export type HotelType = {
    _id: string;
    userId: string;
    name: string;
    city: string;
    country: string;
    description: string;
    type: string;
    facilities: string[];
    adultCount: number;
    childCount: number;
    pricePerNight: number;
    imageUrls: string[];
    starRating: number;
    lastUpdated: Date;
  };