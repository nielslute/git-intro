const timeline = new TimelineMax();

timeline
  .from('main', 0.5, { scale: 0, opacity: 0.5 }, '=+.25')
  .from('main > h1', 0.5, { y: -200, opacity: 0 }, '=+.5')
  .from('p', 1, { x: -200, opacity: 0 }, '=-.5')
  .from('section', 0.5, { y: 500, opacity: 0 }, '=-1')
  .staggerFrom('code', 1, { x: '+=150', opacity: 0 }, 0.2, '=-.75')
  .from(
    'img',
    2,
    {
      opacity: 0,
      rotation: 360,
      scale: 0,
      transformOrigin: '50% 50%',
      ease: 'elastic.out(1, .3)'
    },
    '=+.25'
  );
