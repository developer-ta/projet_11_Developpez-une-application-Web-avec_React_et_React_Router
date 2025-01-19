import { useCallback, useEffect, useRef, useState } from "react";
import { sliderService } from "./../../application_Layer/appDataService";

export const useImageCarousel = (cover, pictures) => {
  const [imag, setImg] = useState(cover);
  const [isSingleImg] = useState(pictures.length == 1);
  const currentImgNumber = useRef(1);
  const currentIndex = useRef(0);

  const turnImgHandler = useCallback((arg) => {
    currentIndex.current = sliderService(currentIndex, pictures.length, arg);
    setImg(pictures[currentIndex.current]);
    currentImgNumber.current = currentIndex.current + 1;
  });

  return { turnImgHandler, imag, isSingleImg, currentImgNumber };
};


