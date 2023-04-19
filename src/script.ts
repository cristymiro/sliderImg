import FrostwalkerCarousel from "image-carousel-frostwalker.js";

import image1 from "../src/assets/animal1.jpg";
import image2 from "../src/assets/animal2.jpg";
import image3 from "../src/assets/animal3.jpg";

const carouselId = document.querySelector("#carouselId");

const carousel1 = FrostwalkerCarousel(carouselId, timer, image1, image2);