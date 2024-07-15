import { useEffect } from "react";
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

var overscrollOptions = {
  enable: true, effect: 'bounce',
  damping: 0.15,
  maxOverscroll: 150
}
var options = {
  damping: 0.07,
  Plugins: {
    overscroll: { ...overscrollOptions }
  }
}


const SmoothScroll = () => {

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin)
    let scrollbar = Scrollbar.init(document.querySelector('.smoothScroll-container'), options)

    scrollbar.addListener((status) => {
      console.log(status)
      if (status.offset.y > 40) {
        document.querySelector('.header').classList.add("header-bg");
      }
      else {
        document.querySelector('.header').classList.remove("header-bg");
      }
    });
  }, [])
  return () => {
    if (Scrollbar)
      Scrollbar.destroy(document);
  };
}

export default SmoothScroll;