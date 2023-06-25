import { axiosClient } from "./axios";

export abstract class NotionAPIService {
  private apiUrl?: string;
  abstract featureUrl: string;
  
  constructor() { 
    this.apiUrl ="http://localhost:3030"
  }

  get baseUrl() {
    return `${this.apiUrl}/${this.featureUrl}`
  }

  buildURL(path: string = '') {
    return `${this.baseUrl}/${path&& path}`
  }

  async getData(path: string = '') {
    try {     
      return (await axiosClient.get(this.buildURL(path))).data;
    } catch (error) {
      console.log(error)
    }
  }

  getDatabaseProperties(id: string) {
    return this.getData(`database/details/${id}`);
  }
}