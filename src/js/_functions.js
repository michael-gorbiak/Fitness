// This file is just a collection of connections for ready-made components.
// It is recommended to create a separate file in the components folder and connect everything there

// Determining the operating system on mobile devices
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Defining Screen WidthF
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Throttling functions (for resizing, input, scrolling, etc.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Fix fullscreen blocks
// import './functions/fix-fullheight';

// Implementation of a burger menu
// import { burger } from './functions/burger';

// Implementation of scroll stop (don't forget to call the function)
// import { disableScroll } from './functions/disable-scroll';

// Implementation of enabling scrolling (don't forget to call the function)
// import { enableScroll } from './functions/enable-scroll';

// Implementing a modal window
import GraphModal from "graph-modal";
const modal = new GraphModal();

// Implementation of tabs
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Getting the site header height (don't forget to call the function)
// import { getHeaderHeight } from './functions/header-height';

// Connecting the custom scroll plugin
// import 'simplebar';

// Connecting a plugin for tooltip positioning
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Connecting a swiper
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// Connecting scrolling animations
// import AOS from 'aos';
// AOS.init();

// Connecting block parallax when scrolling
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Connecting smooth scrolling to anchors
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Connecting swipe events on mobile devices
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Sent');
// };

// validateForms('.form-1', rules1, afterForm);
