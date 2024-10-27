export const TravelListOptions = [
  {
    id: 1,
    title: "Solo",
    description: "Explore at your own pace.",
    icon: "🧳",
    numberOfPeople: 1,
  },
  {
    id: 2,
    title: "Friends",
    description: "Unforgettable adventures with friends.",
    icon: "👯‍♂️",
    numberOfPeople: "3-6",
  },
  {
    id: 3,
    title: "Couple",
    description: "Romantic getaways for two.",
    icon: "❤️",
    numberOfPeople: 2,
  },
  {
    id: 4,
    title: "Family",
    description: "Fun activities for the whole family.",
    icon: "👨‍👩‍👧‍👦",
    numberOfPeople: "4-8",
  },
];

export const BudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    description: "Affordable stays and budget-friendly activities.",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    description: "Comfortable trips without overspending.",
    icon: "💵",
  },
  {
    id: 3,
    title: "Luxury",
    description: "Indulge in premium experiences and stays.",
    icon: "💎",
  },
];

// export const AI_PROMPT =
//   "Generate travel plan for location: {location}, for {totalDays} Days and {totalNights} Night for {traveller} with a {budget} budget with a Flight details, approximate Flight price with booking URL, hotel options list with HotelName, Hotel address, approximate price, hotel image URL, geo coordinates, rating, descriptions and places to visit nearby with place name, place image URL, geo coordinates, place details, ticket pricing, time travel for each of the locations. for {totalDays} day and {totalNights} night with each day plan with best time to visit in JSON Format.";

// export const AI_PROMPT =
//   "Generate travel plan for location: {location}, for {totalDays} Days and {totalNights} Night for {traveller} with a {budget} budget with a Flight details, approximate Flight price with booking URL, hotel options list with HotelName, Hotel address, approximate price, hotel image URL, geo coordinates, rating, descriptions and places to visit nearby with place name, place image URL, geo coordinates, place details, ticket pricing, time travel for each of the locations. Provide a suggested day plan for places to visit {totalDays} day(s) and {totalNights} night(s), focusing only on the best times to visit each location and excluding arrival and departure plans including farewell dinner in JSON Format.";

// export const AI_PROMPT =
//   "Generate travel plan for location: {location}, for {totalDays} Days and {totalNights} Night for {traveller} with a {budget} budget. Include the following information:Flight Details: Approximate flight price, Booking URL.Hotel Options: Hotel name, Hotel address, Approximate price per night, Hotel image URL, Geo coordinates, Rating, Description, Places to visit nearby. Itinerary which is a suggested day plan: Place name, Place image URL, Geo coordinates, Place details, Ticket pricing, Estimated time for exploration, Focus on best times to visit each location. Exclude arrival, departure plans, lunch and dinner plans in JSON Format.";

export const AI_PROMPT =
  "Generate travel plan for location: {location}, for {totalDays} Days and {totalNights} Night for {traveller} with a {budget} budget. Include the following information:Flight Details: Approximate flight price, Booking URL.Hotel Options: Hotel name, Hotel address, Approximate price per night, Hotel image URL, Geo coordinates, Rating, Description. Itinerary which is a suggested day plan: Place name, Place image URL, Geo coordinates, Place details, Ticket pricing, Estimated time for exploration, Focus on best times to visit each location. Exclude arrival, departure plans, lunch and dinner plans in JSON Format.";
