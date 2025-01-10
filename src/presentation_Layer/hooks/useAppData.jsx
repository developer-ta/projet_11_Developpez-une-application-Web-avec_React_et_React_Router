import { useEffect, useState } from "react";
import { AppDataService } from "../../application_Layer/appDataService";

export const useAppData = (getUrl) => {
  const [appdata, setAppData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const appService = new AppDataService(getUrl);

      const data = await appService.getAllData();

      setAppData(data);
    };
    getData();
  }, []);

  return appdata;
};
