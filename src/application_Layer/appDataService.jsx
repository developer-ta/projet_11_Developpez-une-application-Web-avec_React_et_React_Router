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

  // async getById(id) {
  //   if (!this.data) {
  //     this.data = await this.getAllData(url);
  //   }

  //   return this.data ? this.data.find((el) => el.id == id) : null;
  // }
}

export function starRatingService(rating) {
  const listStart = [];
  for (let i = 0; i < rating; i++) {
    listStart.push(i);
  }
  return listStart;
}
