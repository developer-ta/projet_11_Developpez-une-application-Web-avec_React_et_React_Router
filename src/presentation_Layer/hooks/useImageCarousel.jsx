import { useCallback, useRef, useState } from "react";

export const useImageCarousel = (cover, pictures) => {
  const index = useRef(0);
  const [imag, setImg] = useState(cover);

  const turnImgHandler = useCallback((arg) => {
    const maxIndex = pictures.length - 1;

    index.current += arg;
    console.log("index: ", index.current);

    if (index.current > maxIndex) {
      index.current = 0;
    } else if (index.current < 0) {
      index.current = maxIndex;
    }
    setImg(pictures[index.current]);
    return "ok";
  });

  return { turnImgHandler, imag };
};
