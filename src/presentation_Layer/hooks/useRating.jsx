import { useState } from "react";
import { starRatingService } from "../../application_Layer/appDataService";

export const useRating = (rating) => {
  const [stars] = useState(starRatingService(rating));
  return stars;
};
