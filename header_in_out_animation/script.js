const headerGreeting = document.querySelector('.header-greeting');
const headerTitle = document.querySelector('.header-title');
const headerSubTitle = document.querySelector('.header-sub-title');
const spinner = document.querySelector('.spinner');
const spinnerSideLines = document.querySelectorAll('.spinner-wrapper span:not(.spinner)');

const headerWrapper = document.querySelector('.header-wrapper')

let controller = new ScrollMagic.Controller();

let headerTl = new TimelineMax();

headerTl
  .from(headerTitle, 0.5, { opacity: 0, scale: 2 })
  .from(spinner, 0.6, { opacity: 0, rotation: '360deg' })
  .staggerFrom(spinnerSideLines, .3, { opacity: 0, width: 0 })
  .from(headerGreeting, 0.6, { opacity: 0, y: -50 })
  .from(headerSubTitle, 0.7, { opacity: 0 });

TweenMax.delayedCall(headerTl.duration(), makeScene);


function makeScene() {
  headerTl.pause();
  
  let sm = new ScrollMagic.Scene({ 
    triggerElement: ".header-wrapper",
    duration: 200,
    triggerHook: 0.2
  })
  .setTween(TweenMax.fromTo(headerTl, 1, {progress:1}, {progress:0} ))
    // .addIndicators()
  .addTo(controller)
  
}