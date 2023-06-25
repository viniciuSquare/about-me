import { createApi } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";

export class UnsplashService {

  private api = createApi({
    accessKey: "ud0DtQ7tcMUqDTON7V6k5vM1w9R6_sojNm2xOB3ioag",
  });
  
  private photos: Basic[] = [];

  /**
   * Query images with Unsplash API by given tag
   * @returns Images array
   *  */ 
  async getImageByTag(tag = "sunrise") {
    try {
      return await this.api.search
        .getPhotos({ query: tag, orientation: "landscape" })
        .then((unsplashResponse) => { 
          // Verify if there is any error
          if (
            unsplashResponse == null ||
            unsplashResponse == undefined ||
            unsplashResponse!.errors
          ) throw new Error("Error fetching images - IN");
          else 
            this.photos = unsplashResponse.response.results;

          return this.photos;

          // Handle context state
        })  
    } catch (error) {
      console.log("something went wrong!", error);
      throw new Error("Error fetching images - OUT");   
    }
  }
}