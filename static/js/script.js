const timeline = new TimelineMax();

timeline.from(
  'main',
  0.5,
  { scale: 0, opacity: 0.5, ease: 'back.out(1.7)' },
  '=+.25'
);
timeline.from('main > h1', 0.5, { y: -200, opacity: 0 }, '=+.5');
timeline.from('p', 1, { x: -200, opacity: 0 }, '=-.5');
timeline.from('section', 0.5, { x: 500, opacity: 0 }, '=-1');
timeline.staggerFrom('code', 1, { x: '+=150', opacity: 0 }, 0.2, '=-.75');
timeline.from(
  'img',
  2,
  { x: -200, opacity: 0, rotation: 360, ease: 'elastic.out(1, .3)' },
  '=+.25'
);
