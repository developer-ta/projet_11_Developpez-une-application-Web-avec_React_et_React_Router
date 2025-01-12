import { useCallback, useEffect, useRef, useState } from "react";
import { sliderService } from "./../../application_Layer/appDataService";

export const useImageCarousel = (cover, pictures) => {
  const [imag, setImg] = useState(cover);
  const [isSingleImg] = useState(pictures.length == 1);
  const currentImgNumber = useRef(1);
  const currentIndex = useRef(0);

  const turnImgHandler = useCallback((arg) => {
     currentIndex.current = sliderService(currentIndex,pictures, arg);
    setImg(pictures[ currentIndex.current]);
    currentImgNumber.current =  currentIndex.current + 1;
  });

  return { turnImgHandler, imag, isSingleImg, currentImgNumber };
};

// (arg) => {
//   const maxIndex = pictures.length - 1;

//   index.current += arg;
//   if (maxIndex == 0) {
//     isSingleImg.current = true;
//   } else if (index.current > maxIndex) {
//     index.current = 0;
//   } else if (index.current < 0) {
//     index.current = maxIndex;
//   }
//   setImg(pictures[index.current]);
//   currentImgNumber.current = index.current + 1;
//   return "ok";
// }
