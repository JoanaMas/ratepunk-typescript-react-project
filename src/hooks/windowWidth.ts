import { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";

const useWindowWidth = () => {
    const [windowWidth] = useWindowSize();
    const [screenWidth, setScreenWidth] = useState(0);
  
    useEffect(() => {
      setScreenWidth(windowWidth);
    }, [windowWidth]);
  
    return { screenWidth };
};

export default useWindowWidth;