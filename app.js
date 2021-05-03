const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

// const tween = TweenLite.to(object, time, {animate })

// const tween = TweenLite.to('.cover', 1, {
//   width: '40%',
// });

// timeLine
// i can stop animation using pausing :true and it animates then when i want, if we leave only paused:true then the first click does not work
// x its translateX
const tl = new TimelineLite({ paused: true, reversed: true });
// multiple animation
tl.to('.cover', 1, {
  width: '60%',
  ease: Power2.easeOut,
})
  .to(
    'nav',
    1,
    {
      height: '100%',
      ease: Power2.easeOut,
    },
    '-=1'
  )
  .fromTo(
    '.nav-open',
    0.5,
    {
      opacity: 0,
      x: 50,
      ease: Power2.easeOut,
    },
    {
      opacity: 1,
      x: 0,
      onComplete: function () {
        navOpen.style.pointerEvents = 'auto';
        console.log('done');
      },
    }
  );

navButton.addEventListener('click', () => {
  // to check if the animation is going and not able to break it when its running through multiple clicks

  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }

  toggleTween(tl);
});

// going back, checks if the timeLIne is reversed or not.

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}
