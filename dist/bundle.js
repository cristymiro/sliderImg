/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _karim04_image_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @karim04/image-slider */ \"./node_modules/@karim04/image-slider/src/index.js\");\n\nvar image1 = __webpack_require__(/*! ../src/assets/animal1.jpg */ \"./src/assets/animal1.jpg\");\n\n// const carouselId = document.querySelector(\"#carouselId\");\n\n// // const carousel1 = FrostwalkerCarousel(carouselId, timer, image1, image2);\n\nconst myCarousel = (0,_karim04_image_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(image1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBZ0Q7QUFFL0MsSUFBSUMsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLDJEQUEyQixDQUFDOztBQUVsRDs7QUFFQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUdILGlFQUFXLENBQUNDLE1BQU0sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NsaWRlcmltZy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZVNsaWRlciBmcm9tICdAa2FyaW0wNC9pbWFnZS1zbGlkZXInO1xuXG4gdmFyIGltYWdlMSA9IHJlcXVpcmUoXCIuLi9zcmMvYXNzZXRzL2FuaW1hbDEuanBnXCIpO1xuXG4vLyBjb25zdCBjYXJvdXNlbElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJvdXNlbElkXCIpO1xuXG4vLyAvLyBjb25zdCBjYXJvdXNlbDEgPSBGcm9zdHdhbGtlckNhcm91c2VsKGNhcm91c2VsSWQsIHRpbWVyLCBpbWFnZTEsIGltYWdlMik7XG5cbmNvbnN0IG15Q2Fyb3VzZWwgPSBJbWFnZVNsaWRlcihpbWFnZTEpXG4iXSwibmFtZXMiOlsiSW1hZ2VTbGlkZXIiLCJpbWFnZTEiLCJyZXF1aXJlIiwibXlDYXJvdXNlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/assets/animal1.jpg":
/*!********************************!*\
  !*** ./src/assets/animal1.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"30d4687f5c7511bf04434cc495127c61.jpg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2FuaW1hbDEuanBnLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxxQkFBdUIseUNBQXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xpZGVyaW1nLy4vc3JjL2Fzc2V0cy9hbmltYWwxLmpwZz82NWNkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzMGQ0Njg3ZjVjNzUxMWJmMDQ0MzRjYzQ5NTEyN2M2MS5qcGdcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/animal1.jpg\n");

/***/ }),

/***/ "./node_modules/@karim04/image-slider/src/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@karim04/image-slider/src/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageSlider)\n/* harmony export */ });\n/* eslint-disable no-param-reassign */\nfunction ImageSlider(...imageSources) {\n  if (imageSources.length < 1) return null;\n\n  const slider = document.createElement('div');\n\n  slider.style.minHeight = '150px';\n  slider.style.minWidth = '200px';\n  slider.style.maxWidth = '1000px';\n  slider.style.maxHeight = '750px';\n  slider.style.aspectRatio = '1.5 / 1';\n  slider.style.width = '100%';\n  slider.style.position = 'relative';\n  slider.style.padding = '0 36px';\n  slider.style.boxSizing = 'border-box';\n\n  const frame = document.createElement('div');\n  const container = document.createElement('div');\n  container.style.display = 'flex';\n  container.style.width = 'max-content';\n  container.style.height = '100%';\n\n  frame.appendChild(container);\n  slider.appendChild(frame);\n\n  frame.style.overflow = 'hidden';\n  frame.style.width = '100%';\n  frame.style.margin = '0 auto';\n  frame.style.height = '95%';\n\n  // default settings\n  let controlsColors = '#6b7280';\n  let slidingTimer = 5000;\n  let transitionSpeed = 600;\n  let transitionFunc = 'ease-in-out';\n\n  // checking for settings input\n  for (const param of imageSources) {\n    if (typeof param === 'object') {\n      \n      if (typeof param.color === 'string') {\n        controlsColors = param.color; \n      }\n      if (typeof param.slidingTimer === 'number') {\n        slidingTimer = param.slidingTimer;\n      } else if (param.slidingTimer === false) {\n        slidingTimer = false;\n      }\n      if (typeof param.transitionFunc === 'string') {\n        transitionFunc = param.transitionFunc;\n      }\n      if (typeof param.transitionSpeed === 'number') {\n        transitionSpeed = param.transitionSpeed;\n      }\n      break;\n    }\n  };\n\n  // creating slider items/images\n  const items = [];\n  imageSources.forEach((source) => {\n    if (typeof source === 'string') {\n      const item = document.createElement('div');\n      item.style.display = 'flex';\n      item.style.justifyContent = 'center';\n      item.style.alignItems = 'center';\n      item.style.transition = `transform \n      ${transitionSpeed}ms ${transitionFunc}`;;\n\n      item.style.height = '100%';\n      item.style.aspectRatio = '1 / 1';\n\n      const image = document.createElement('img');\n      image.src = source;\n      image.style.maxHeight = '100%';\n      image.style.maxWidth = '90%';\n      image.style.borderRadius = '12px';\n\n      items.push(item);\n      item.appendChild(image);\n      container.appendChild(item);\n    } \n  });\n\n  // sliding functionality\n  let currentSlide = 0;\n  container.style.transition = `transform \n  ${transitionSpeed}ms ${transitionFunc}`;\n\n  function showSlide(slide) {\n    if (items.length < 1) return;\n    container.style.transform = `translateX(${\n      -(slide * items[slide].offsetWidth)\n      + ((frame.offsetWidth / 2)\n      - (items[slide].offsetWidth / 2))\n    }px)`;\n    currentSlide = slide;\n\n    // make adjacent slides smaller\n    if (currentSlide > 0 && items[currentSlide - 1]) {\n      items[currentSlide - 1].style.transform = `scale(0.5)\n      translateX(45%)`;\n    }\n    if (currentSlide < items.length - 1 && items[currentSlide + 1]) {\n      items[currentSlide + 1].style.transform = `scale(0.5)\n      translateX(-45%)`;\n    }\n    items[currentSlide].style.transform = '';\n\n    selectedCircle(currentSlide);\n  }\n\n  function nextSlide() {\n    // if at last slide return to first slide\n    if ((currentSlide >= items.length - 1)\n      || (currentSlide < 0)) {\n      showSlide(0);\n      return;\n    }\n    // show next slide\n    showSlide(currentSlide + 1);\n  }\n\n  function previousSlide() {\n    // if at last slide return to first slide\n    if ((currentSlide > items.length - 1)\n      || (currentSlide <= 0)) {\n      showSlide(items.length - 1);\n      return;\n    }\n    // show previous slide\n    showSlide(currentSlide - 1);\n  }\n\n  // sliding buttons\n  const previous = document.createElement('div');\n  previous.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" \n  height=\"48\" width=\"48\" viewBox =\"0 0 48 48\" >\n  <path d=\"M28.05 36 16 23.95 28.05 \n  11.9l2.15 2.15-9.9 9.9 9.9 9.9Z\"/></svg>`;\n  previous.style.position = 'absolute';\n  previous.style.top = 'calc(50% - 24px';\n  previous.style.left = '12%';\n  previous.firstChild.style.width = '100%';\n  previous.firstChild.style.height = '100%';\n  previous.style.width = '10%';\n  previous.style.aspectRatio = '1 / 1';\n  previous.firstChild.style.fill = controlsColors;\n  previous.style.transition = 'all 0.2s ease-in-out';\n  previous.style.borderRadius = '50%'\n\n\n\n  const next = document.createElement('div');\n  next.innerHTML = `<svg xmlns= \"http://www.w3.org/2000/svg\" \n  height=\"48\" width=\"48\" viewBox =\"0 0 48 48\">\n  <path d=\"m18.75 36-2.15-2.15 \n  9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z\"/></svg>`;\n  next.style.position = 'absolute';\n  next.style.top = 'calc(50% - 24px';\n  next.style.right = '12%';\n  next.firstChild.style.width = '100%';\n  next.firstChild.style.height = '100%';\n  next.style.width = '10%';\n  next.style.aspectRatio = '1 / 1';\n  next.firstChild.style.fill = controlsColors;\n  next.style.transition = 'all 0.2s ease-in-out';\n  next.style.borderRadius = '50%'\n\n  // adding hover effects to navigation buttons\n  const hoverEnlarge = function () {\n    this.style.transform = 'scale(1.2)';\n  }\n\n  const unhover = function () {\n    this.style.transform = '';\n  }\n\n  const flashButton = function () {\n    const button = this;\n    button.style.backgroundColor =controlsColors;\n    button.style.opacity = '0.5';\n  setTimeout(() => {\n    button.style.backgroundColor = '';\n    button.style.opacity = '';\n  }, 200);\n  }\n\n  next.onmouseover = hoverEnlarge;\n  previous.onmouseover = hoverEnlarge;\n  next.onmouseleave = unhover;\n  previous.onmouseleave = unhover;\n  previous.onmousedown = flashButton;\n  next.onmousedown = flashButton;\n\n\n\n  // circles representing the slides for quick navigation\n  const sliderCircles = document.createElement('div');\n  sliderCircles.style.display = 'flex';\n  sliderCircles.style.gap = '12px';\n  sliderCircles.style.justifyContent = 'center';\n  sliderCircles.style.alignItems = 'center';\n  sliderCircles.style.height = '5%';\n\n  const circles = []\n  for (let i = 0; i < items.length; i++) {\n    const circle = document.createElement('div');\n    circle.style.height = '50%';\n    circle.style.minHeight = '12px'\n    circle.style.aspectRatio = '1 / 1';\n    circle.style.borderRadius = '50%';\n    circle.style.border = `1px solid ${controlsColors}`;\n    circle.style.transition = `background \n    ${transitionSpeed}ms ${transitionFunc}`;\n    circle.onclick = () => {\n      showSlide(i);\n    }\n    sliderCircles.appendChild(circle);\n    circles.push(circle);\n  }\n\n  function selectedCircle (slideNumber) {\n    \n    // reseting any circle selected\n    circles.forEach((circle) => {\n      circle.style.backgroundColor = '';\n    });\n\n    // setting new circle selection\n    circles[slideNumber].style.backgroundColor = controlsColors;\n  }\n\n  // binding buttons\n  next.onclick = nextSlide;\n  previous.onclick = previousSlide;\n\n  slider.append(previous, next, sliderCircles);\n\n  setTimeout(() => showSlide(currentSlide), 10);\n  \n  if (typeof slidingTimer === `number`) {\n    setInterval(nextSlide, slidingTimer);\n  }\n\n  return slider;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGthcmltMDQvaW1hZ2Utc2xpZGVyL3NyYy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdCQUFnQixLQUFLLGVBQWU7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnQkFBZ0IsS0FBSyxlQUFlOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsZUFBZTtBQUN0RDtBQUNBLE1BQU0sZ0JBQWdCLEtBQUssZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zbGlkZXJpbWcvLi9ub2RlX21vZHVsZXMvQGthcmltMDQvaW1hZ2Utc2xpZGVyL3NyYy9pbmRleC5qcz81YzY5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZVNsaWRlciguLi5pbWFnZVNvdXJjZXMpIHtcbiAgaWYgKGltYWdlU291cmNlcy5sZW5ndGggPCAxKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBzbGlkZXIuc3R5bGUubWluSGVpZ2h0ID0gJzE1MHB4JztcbiAgc2xpZGVyLnN0eWxlLm1pbldpZHRoID0gJzIwMHB4JztcbiAgc2xpZGVyLnN0eWxlLm1heFdpZHRoID0gJzEwMDBweCc7XG4gIHNsaWRlci5zdHlsZS5tYXhIZWlnaHQgPSAnNzUwcHgnO1xuICBzbGlkZXIuc3R5bGUuYXNwZWN0UmF0aW8gPSAnMS41IC8gMSc7XG4gIHNsaWRlci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgc2xpZGVyLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgc2xpZGVyLnN0eWxlLnBhZGRpbmcgPSAnMCAzNnB4JztcbiAgc2xpZGVyLnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICdtYXgtY29udGVudCc7XG4gIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG5cbiAgZnJhbWUuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgc2xpZGVyLmFwcGVuZENoaWxkKGZyYW1lKTtcblxuICBmcmFtZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICBmcmFtZS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgZnJhbWUuc3R5bGUubWFyZ2luID0gJzAgYXV0byc7XG4gIGZyYW1lLnN0eWxlLmhlaWdodCA9ICc5NSUnO1xuXG4gIC8vIGRlZmF1bHQgc2V0dGluZ3NcbiAgbGV0IGNvbnRyb2xzQ29sb3JzID0gJyM2YjcyODAnO1xuICBsZXQgc2xpZGluZ1RpbWVyID0gNTAwMDtcbiAgbGV0IHRyYW5zaXRpb25TcGVlZCA9IDYwMDtcbiAgbGV0IHRyYW5zaXRpb25GdW5jID0gJ2Vhc2UtaW4tb3V0JztcblxuICAvLyBjaGVja2luZyBmb3Igc2V0dGluZ3MgaW5wdXRcbiAgZm9yIChjb25zdCBwYXJhbSBvZiBpbWFnZVNvdXJjZXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnb2JqZWN0Jykge1xuICAgICAgXG4gICAgICBpZiAodHlwZW9mIHBhcmFtLmNvbG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb250cm9sc0NvbG9ycyA9IHBhcmFtLmNvbG9yOyBcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcGFyYW0uc2xpZGluZ1RpbWVyID09PSAnbnVtYmVyJykge1xuICAgICAgICBzbGlkaW5nVGltZXIgPSBwYXJhbS5zbGlkaW5nVGltZXI7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtLnNsaWRpbmdUaW1lciA9PT0gZmFsc2UpIHtcbiAgICAgICAgc2xpZGluZ1RpbWVyID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHBhcmFtLnRyYW5zaXRpb25GdW5jID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cmFuc2l0aW9uRnVuYyA9IHBhcmFtLnRyYW5zaXRpb25GdW5jO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBwYXJhbS50cmFuc2l0aW9uU3BlZWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHRyYW5zaXRpb25TcGVlZCA9IHBhcmFtLnRyYW5zaXRpb25TcGVlZDtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuICAvLyBjcmVhdGluZyBzbGlkZXIgaXRlbXMvaW1hZ2VzXG4gIGNvbnN0IGl0ZW1zID0gW107XG4gIGltYWdlU291cmNlcy5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIGl0ZW0uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgICAgIGl0ZW0uc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgICAgaXRlbS5zdHlsZS50cmFuc2l0aW9uID0gYHRyYW5zZm9ybSBcbiAgICAgICR7dHJhbnNpdGlvblNwZWVkfW1zICR7dHJhbnNpdGlvbkZ1bmN9YDs7XG5cbiAgICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgICAgaXRlbS5zdHlsZS5hc3BlY3RSYXRpbyA9ICcxIC8gMSc7XG5cbiAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBpbWFnZS5zcmMgPSBzb3VyY2U7XG4gICAgICBpbWFnZS5zdHlsZS5tYXhIZWlnaHQgPSAnMTAwJSc7XG4gICAgICBpbWFnZS5zdHlsZS5tYXhXaWR0aCA9ICc5MCUnO1xuICAgICAgaW1hZ2Uuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzEycHgnO1xuXG4gICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgaXRlbS5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gICAgfSBcbiAgfSk7XG5cbiAgLy8gc2xpZGluZyBmdW5jdGlvbmFsaXR5XG4gIGxldCBjdXJyZW50U2xpZGUgPSAwO1xuICBjb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gXG4gICR7dHJhbnNpdGlvblNwZWVkfW1zICR7dHJhbnNpdGlvbkZ1bmN9YDtcblxuICBmdW5jdGlvbiBzaG93U2xpZGUoc2xpZGUpIHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoIDwgMSkgcmV0dXJuO1xuICAgIGNvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke1xuICAgICAgLShzbGlkZSAqIGl0ZW1zW3NsaWRlXS5vZmZzZXRXaWR0aClcbiAgICAgICsgKChmcmFtZS5vZmZzZXRXaWR0aCAvIDIpXG4gICAgICAtIChpdGVtc1tzbGlkZV0ub2Zmc2V0V2lkdGggLyAyKSlcbiAgICB9cHgpYDtcbiAgICBjdXJyZW50U2xpZGUgPSBzbGlkZTtcblxuICAgIC8vIG1ha2UgYWRqYWNlbnQgc2xpZGVzIHNtYWxsZXJcbiAgICBpZiAoY3VycmVudFNsaWRlID4gMCAmJiBpdGVtc1tjdXJyZW50U2xpZGUgLSAxXSkge1xuICAgICAgaXRlbXNbY3VycmVudFNsaWRlIC0gMV0uc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKDAuNSlcbiAgICAgIHRyYW5zbGF0ZVgoNDUlKWA7XG4gICAgfVxuICAgIGlmIChjdXJyZW50U2xpZGUgPCBpdGVtcy5sZW5ndGggLSAxICYmIGl0ZW1zW2N1cnJlbnRTbGlkZSArIDFdKSB7XG4gICAgICBpdGVtc1tjdXJyZW50U2xpZGUgKyAxXS5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGUoMC41KVxuICAgICAgdHJhbnNsYXRlWCgtNDUlKWA7XG4gICAgfVxuICAgIGl0ZW1zW2N1cnJlbnRTbGlkZV0uc3R5bGUudHJhbnNmb3JtID0gJyc7XG5cbiAgICBzZWxlY3RlZENpcmNsZShjdXJyZW50U2xpZGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dFNsaWRlKCkge1xuICAgIC8vIGlmIGF0IGxhc3Qgc2xpZGUgcmV0dXJuIHRvIGZpcnN0IHNsaWRlXG4gICAgaWYgKChjdXJyZW50U2xpZGUgPj0gaXRlbXMubGVuZ3RoIC0gMSlcbiAgICAgIHx8IChjdXJyZW50U2xpZGUgPCAwKSkge1xuICAgICAgc2hvd1NsaWRlKDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBzaG93IG5leHQgc2xpZGVcbiAgICBzaG93U2xpZGUoY3VycmVudFNsaWRlICsgMSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2aW91c1NsaWRlKCkge1xuICAgIC8vIGlmIGF0IGxhc3Qgc2xpZGUgcmV0dXJuIHRvIGZpcnN0IHNsaWRlXG4gICAgaWYgKChjdXJyZW50U2xpZGUgPiBpdGVtcy5sZW5ndGggLSAxKVxuICAgICAgfHwgKGN1cnJlbnRTbGlkZSA8PSAwKSkge1xuICAgICAgc2hvd1NsaWRlKGl0ZW1zLmxlbmd0aCAtIDEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBzaG93IHByZXZpb3VzIHNsaWRlXG4gICAgc2hvd1NsaWRlKGN1cnJlbnRTbGlkZSAtIDEpO1xuICB9XG5cbiAgLy8gc2xpZGluZyBidXR0b25zXG4gIGNvbnN0IHByZXZpb3VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByZXZpb3VzLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBcbiAgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCIgdmlld0JveCA9XCIwIDAgNDggNDhcIiA+XG4gIDxwYXRoIGQ9XCJNMjguMDUgMzYgMTYgMjMuOTUgMjguMDUgXG4gIDExLjlsMi4xNSAyLjE1LTkuOSA5LjkgOS45IDkuOVpcIi8+PC9zdmc+YDtcbiAgcHJldmlvdXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBwcmV2aW91cy5zdHlsZS50b3AgPSAnY2FsYyg1MCUgLSAyNHB4JztcbiAgcHJldmlvdXMuc3R5bGUubGVmdCA9ICcxMiUnO1xuICBwcmV2aW91cy5maXJzdENoaWxkLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICBwcmV2aW91cy5maXJzdENoaWxkLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgcHJldmlvdXMuc3R5bGUud2lkdGggPSAnMTAlJztcbiAgcHJldmlvdXMuc3R5bGUuYXNwZWN0UmF0aW8gPSAnMSAvIDEnO1xuICBwcmV2aW91cy5maXJzdENoaWxkLnN0eWxlLmZpbGwgPSBjb250cm9sc0NvbG9ycztcbiAgcHJldmlvdXMuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC4ycyBlYXNlLWluLW91dCc7XG4gIHByZXZpb3VzLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnXG5cblxuXG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV4dC5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIFxuICBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIiB2aWV3Qm94ID1cIjAgMCA0OCA0OFwiPlxuICA8cGF0aCBkPVwibTE4Ljc1IDM2LTIuMTUtMi4xNSBcbiAgOS45LTkuOS05LjktOS45IDIuMTUtMi4xNUwzMC44IDIzLjk1WlwiLz48L3N2Zz5gO1xuICBuZXh0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgbmV4dC5zdHlsZS50b3AgPSAnY2FsYyg1MCUgLSAyNHB4JztcbiAgbmV4dC5zdHlsZS5yaWdodCA9ICcxMiUnO1xuICBuZXh0LmZpcnN0Q2hpbGQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gIG5leHQuZmlyc3RDaGlsZC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gIG5leHQuc3R5bGUud2lkdGggPSAnMTAlJztcbiAgbmV4dC5zdHlsZS5hc3BlY3RSYXRpbyA9ICcxIC8gMSc7XG4gIG5leHQuZmlyc3RDaGlsZC5zdHlsZS5maWxsID0gY29udHJvbHNDb2xvcnM7XG4gIG5leHQuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMC4ycyBlYXNlLWluLW91dCc7XG4gIG5leHQuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSdcblxuICAvLyBhZGRpbmcgaG92ZXIgZWZmZWN0cyB0byBuYXZpZ2F0aW9uIGJ1dHRvbnNcbiAgY29uc3QgaG92ZXJFbmxhcmdlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMiknO1xuICB9XG5cbiAgY29uc3QgdW5ob3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICB9XG5cbiAgY29uc3QgZmxhc2hCdXR0b24gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYnV0dG9uID0gdGhpcztcbiAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID1jb250cm9sc0NvbG9ycztcbiAgICBidXR0b24uc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBidXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyc7XG4gICAgYnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnJztcbiAgfSwgMjAwKTtcbiAgfVxuXG4gIG5leHQub25tb3VzZW92ZXIgPSBob3ZlckVubGFyZ2U7XG4gIHByZXZpb3VzLm9ubW91c2VvdmVyID0gaG92ZXJFbmxhcmdlO1xuICBuZXh0Lm9ubW91c2VsZWF2ZSA9IHVuaG92ZXI7XG4gIHByZXZpb3VzLm9ubW91c2VsZWF2ZSA9IHVuaG92ZXI7XG4gIHByZXZpb3VzLm9ubW91c2Vkb3duID0gZmxhc2hCdXR0b247XG4gIG5leHQub25tb3VzZWRvd24gPSBmbGFzaEJ1dHRvbjtcblxuXG5cbiAgLy8gY2lyY2xlcyByZXByZXNlbnRpbmcgdGhlIHNsaWRlcyBmb3IgcXVpY2sgbmF2aWdhdGlvblxuICBjb25zdCBzbGlkZXJDaXJjbGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNsaWRlckNpcmNsZXMuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgc2xpZGVyQ2lyY2xlcy5zdHlsZS5nYXAgPSAnMTJweCc7XG4gIHNsaWRlckNpcmNsZXMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcbiAgc2xpZGVyQ2lyY2xlcy5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XG4gIHNsaWRlckNpcmNsZXMuc3R5bGUuaGVpZ2h0ID0gJzUlJztcblxuICBjb25zdCBjaXJjbGVzID0gW11cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNpcmNsZS5zdHlsZS5oZWlnaHQgPSAnNTAlJztcbiAgICBjaXJjbGUuc3R5bGUubWluSGVpZ2h0ID0gJzEycHgnXG4gICAgY2lyY2xlLnN0eWxlLmFzcGVjdFJhdGlvID0gJzEgLyAxJztcbiAgICBjaXJjbGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzUwJSc7XG4gICAgY2lyY2xlLnN0eWxlLmJvcmRlciA9IGAxcHggc29saWQgJHtjb250cm9sc0NvbG9yc31gO1xuICAgIGNpcmNsZS5zdHlsZS50cmFuc2l0aW9uID0gYGJhY2tncm91bmQgXG4gICAgJHt0cmFuc2l0aW9uU3BlZWR9bXMgJHt0cmFuc2l0aW9uRnVuY31gO1xuICAgIGNpcmNsZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgc2hvd1NsaWRlKGkpO1xuICAgIH1cbiAgICBzbGlkZXJDaXJjbGVzLmFwcGVuZENoaWxkKGNpcmNsZSk7XG4gICAgY2lyY2xlcy5wdXNoKGNpcmNsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZWxlY3RlZENpcmNsZSAoc2xpZGVOdW1iZXIpIHtcbiAgICBcbiAgICAvLyByZXNldGluZyBhbnkgY2lyY2xlIHNlbGVjdGVkXG4gICAgY2lyY2xlcy5mb3JFYWNoKChjaXJjbGUpID0+IHtcbiAgICAgIGNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJztcbiAgICB9KTtcblxuICAgIC8vIHNldHRpbmcgbmV3IGNpcmNsZSBzZWxlY3Rpb25cbiAgICBjaXJjbGVzW3NsaWRlTnVtYmVyXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb250cm9sc0NvbG9ycztcbiAgfVxuXG4gIC8vIGJpbmRpbmcgYnV0dG9uc1xuICBuZXh0Lm9uY2xpY2sgPSBuZXh0U2xpZGU7XG4gIHByZXZpb3VzLm9uY2xpY2sgPSBwcmV2aW91c1NsaWRlO1xuXG4gIHNsaWRlci5hcHBlbmQocHJldmlvdXMsIG5leHQsIHNsaWRlckNpcmNsZXMpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4gc2hvd1NsaWRlKGN1cnJlbnRTbGlkZSksIDEwKTtcbiAgXG4gIGlmICh0eXBlb2Ygc2xpZGluZ1RpbWVyID09PSBgbnVtYmVyYCkge1xuICAgIHNldEludGVydmFsKG5leHRTbGlkZSwgc2xpZGluZ1RpbWVyKTtcbiAgfVxuXG4gIHJldHVybiBzbGlkZXI7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@karim04/image-slider/src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("1039e096900297c6667c")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "sliderimg:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatesliderimg"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;