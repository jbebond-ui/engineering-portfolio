'use strict';

// A visitor-driven study: no automatic cycling, and no pointer motion on touch.
(() => {
  const study = document.querySelector('.hero-study');
  if (!study) return;
  const tablist = study.querySelector('.study-tabs');
  const tabs = [...study.querySelectorAll('.study-tab')];
  const panel = study.querySelector('[role="tabpanel"]');
  const canvas = study.querySelector('.study-canvas');
  const example = study.querySelector('.study-example');
  const illustration = study.querySelector('.study-art');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const stages = {
    sketch: {
      annotation: 'Fit & form',
      copy: 'Start with the interfaces. Refine every detail.',
      link: 'Explore my Apple design work',
      project: 'iphone',
      image: 'An exploded mechanical assembly with construction guides, illustrating the design stage.'
    },
    build: {
      annotation: 'System integration',
      copy: 'From individual parts to a working system.',
      link: 'See my custom drone build',
      project: 'fpv',
      image: 'A layered aluminum assembly with a blue core, illustrating how components fit together.'
    },
    test: {
      annotation: 'Repeatable testing',
      copy: 'Build the fixture. Let the evidence lead.',
      link: 'Explore my test engineering',
      project: 'simplehuman-led',
      image: 'An assembled mechanical concept with a blue inspection plane, illustrating the test stage.'
    }
  };
  function select(tab, focus = false) {
    const key = tab.dataset.stage;
    const stage = stages[key];
    study.dataset.stage = key;
    tabs.forEach(item => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    study.querySelector('.study-annotation').textContent = stage.annotation;
    example.querySelector('p').textContent = stage.copy;
    const link = example.querySelector('button');
    link.dataset.project = stage.project;
    link.querySelector('.study-link-label').textContent = stage.link;
    illustration.setAttribute('aria-label', stage.image);
    if (focus) tab.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); select(tabs[next], true); }
    });
  });
  tablist.hidden = false;
  example.querySelector('button').hidden = false;

  let frame = 0;
  let x = 0;
  let y = 0;
  function reset() {
    cancelAnimationFrame(frame);
    frame = 0;
    illustration.style.removeProperty('--study-rx');
    illustration.style.removeProperty('--study-ry');
  }
  canvas.addEventListener('pointermove', event => {
    if (motion.matches || !pointer.matches || event.pointerType === 'touch') return;
    const bounds = canvas.getBoundingClientRect();
    x = Math.max(-.5, Math.min(.5, (event.clientX - bounds.left) / bounds.width - .5));
    y = Math.max(-.5, Math.min(.5, (event.clientY - bounds.top) / bounds.height - .5));
    if (!frame) frame = requestAnimationFrame(() => {
      illustration.style.setProperty('--study-rx', `${(-y * 8).toFixed(2)}deg`);
      illustration.style.setProperty('--study-ry', `${(x * 10).toFixed(2)}deg`);
      frame = 0;
    });
  }, { passive: true });
  canvas.addEventListener('pointerleave', reset);
  canvas.addEventListener('pointercancel', reset);
  motion.addEventListener('change', reset);
  pointer.addEventListener('change', reset);
})();
