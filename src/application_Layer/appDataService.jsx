import { fetchAllData } from "../infrastructure_Layer/api/fetchAllData";

export class AppDataService {
  constructor(url) {
    this.url = url;
    this.data = null;
  }

  async getAllData() {
    this.data = await fetchAllData(this.url);

    return this.data;
  }

}

export function starRatingService(rating) {
  const listStart = [];
  for (let i = 0; i < rating; i++) {
    listStart.push(i);
  }
  return listStart;
}

export function sliderService(currentIndex,pictures, arg) {
  const maxIndex = pictures.length - 1;

   currentIndex.current += arg;
  if (maxIndex == 0) {
    return currentIndex.current;
  } else if (currentIndex.current > maxIndex) {
    currentIndex.current = 0;
  } else if (currentIndex.current < 0) {
    currentIndex.current = maxIndex;
  }
  console.log('currentIndex: ', currentIndex.current);

  return currentIndex.current;
}
