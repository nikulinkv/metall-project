import * as flsFunctions from "./modules/functions.js";
import Swiper from "swiper/bundle"

flsFunctions.isWebp();
flsFunctions.tabs();
flsFunctions.accordeon();

const swiper = new Swiper(".swiper", {
   centeredSlides: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   }
});