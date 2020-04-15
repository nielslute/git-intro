const tl = new TimelineMax();

tl.from('main', 0.5, { scale: 0, opacity: 0.5 }, '=+.25');
tl.from('h1', 0.5, { y: -200, opacity: 0 }, '=+.5');
tl.from('p', 1, { x: 200, opacity: 0 }, '=-.5');
tl.from(
  'img',
  2,
  { x: -200, opacity: 0, rotation: 360, ease: 'elastic.out(1, .3)' },
  '=+.25'
);
