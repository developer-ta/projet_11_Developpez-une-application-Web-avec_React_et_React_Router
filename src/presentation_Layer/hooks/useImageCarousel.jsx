import { useCallback, useRef, useState } from "react";

export const useImageCarousel = (cover, pictures) => {
  const [imag, setImg] = useState(cover);
  const index = useRef(0);
  const currentImgNumber = useRef(1);
  const isSingleImg = useRef(false).current;

  const turnImgHandler = useCallback((arg) => {
    const maxIndex = pictures.length - 1;

    index.current += arg;
    if (maxIndex == 0) {
      isSingleImg = true;
    } else if (index.current > maxIndex) {
      index.current = 0;
    } else if (index.current < 0) {
      index.current = maxIndex;
    }
    setImg(pictures[index.current]);
    currentImgNumber.current = index.current + 1;
    return "ok";
  });

  return { turnImgHandler, imag, isSingleImg, currentImgNumber };
};
