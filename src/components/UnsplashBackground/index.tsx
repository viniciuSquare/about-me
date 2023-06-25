import { useEffect, useState } from "react";

import { createApi } from "unsplash-js";
import { Basic } from "unsplash-js/dist/methods/photos/types";
import { Photos } from "unsplash-js/dist/methods/search/types/response";

import styled from "./styled.module.css";
import { UnsplashService } from "@/services/Unsplash";

interface UnsplashImageProps {
  photo: Photos;
}

export function UnsplashImage() {
  const [ unsplashPhotos, setPhotos ] = useState<Basic[]>();
  const [ randomIndex, setRandomIndex ] = useState(0);

  const [ error, setError ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);

  const toggleLoading = () => setIsLoading(!isLoading);

  const periodsTags = {
    morning: ["sunrise", "morning mist", "coffee"],
    afternoon: ["sunset", "beach", "outdoors"],
    night: ["city lights", "stars", "moon"],
  };

  const updateRandomIndex = () => {
    setRandomIndex(Math.floor(
      Math.random() * unsplashPhotos!.length
    ))
  }

  useEffect(() => {
    //  Fetch photos from Unsplash API
    const unsplash = new UnsplashService();
    console.log("Fetching photos...");
    unsplash.getImageByTag("sunset")
      .then((photos) => {
        photos &&
        setPhotos(photos);
        console.log("Photos fetched successfully");
      })
      .finally
      (()=> toggleLoading()); 

  }, []);

  return (
    <div className={styled['styled-bg']} id="unsplash-bg">
      { ( !error && !isLoading && unsplashPhotos != undefined ) && 
        ( <img className={styled['bg-img']} src={ unsplashPhotos[randomIndex]!.urls.regular } /> ) 
      }
      <footer  className={styled.footer}> <button onClick={updateRandomIndex}>Next Image</button> </footer>
    </div>
  );
}

{
  /* <a
          className="credit"
          target="_blank"
          href={`https://unsplash.com/@${user.username}`}
        ></a> */
}
