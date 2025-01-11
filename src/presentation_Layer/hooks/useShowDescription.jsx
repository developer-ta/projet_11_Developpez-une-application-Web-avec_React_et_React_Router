import { useCallback } from "react";
import { useState } from "react";

export const useShowDescription = () => {
  const [isVisibleDescription, setIsVisibleDescription] = useState(false);
  const [isVisibleEquipment, setIsVisibleEquipment] = useState(false);

  const openDetail = useCallback((type) => {
    if (type === "Équipements") {
      setIsVisibleEquipment((isVisible) => !isVisible);
    }
    setIsVisibleDescription((isVisible) => !isVisible);
  });

  return { openDetail, isVisibleDescription, isVisibleEquipment };
};
