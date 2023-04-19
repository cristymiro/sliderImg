import ImageSlider from '@karim04/image-slider';

import image1 from "../src/assets/animal1.jpg";
import image2 from "../src/assets/animal2.jpg";
import image3 from "../src/assets/animal3.jpg";

const body = document.querySelector('body');
const slider = ImageSlider(image1, image2, image3);
body.appendChild(slider);
