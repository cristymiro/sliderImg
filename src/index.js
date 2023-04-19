import ImageSlider from '@karim04/image-slider';

import image1 from "../src/assets/animal1.jpg";

const body = document.querySelector('body');
const slider = ImageSlider(image1);
body.appendChild(slider);
