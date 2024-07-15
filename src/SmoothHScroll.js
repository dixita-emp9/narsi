import React, { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

var overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.15,
  maxOverscroll: 150
};
var options = {
  damping: 0.07,
  alwaysShowTracks: true,
  plugins: {
    overscroll: { ...overscrollOptions }
  }
};

const SmoothHScroll = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    const scrollbar = Scrollbar.init(containerRef.current, options);
    return () => {
      if (scrollbar) scrollbar.destroy(containerRef.current);
    };
  }, []);

  return <div ref={containerRef} style={{ overflowX: "auto", paddingBottom: '30px', overflowY: "hidden", }}>{children}</div>;
};

export default SmoothHScroll;
