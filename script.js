'use strict';

// Sources: the supplied resume, project handoff, user corrections, and original portfolio.
// Public Apple product imagery provides context, not evidence of individual contribution.
const projects = {
  iphone: {
    eyebrow: 'APPLE / IPHONE 18 PRO & PRO MAX',
    title: 'A better service experience starts with the details.',
    intro: 'Mechanical design for iPhone servicing, translating a repeated assembly task into a carefully considered part with clear material, tolerance, and manufacturing requirements.',
    role: 'Operations Test Engineering Co-op', date: 'Apr–Sep 2026 · Cupertino, CA', tools: 'Siemens NX · Material selection · DFM',
    image: 'assets/apple-iphone.webp', alt: 'Official Apple image of the iPhone 18 Pro camera system and rear enclosure',
    metrics: [],
    sections: [
      ['The need', 'Camera-module servicing involves reconnecting delicate interfaces. The design challenge was to guide that operation consistently while fitting within the surrounding assembly and accommodating repeated use.'],
      ['My contribution', 'Owned the mechanical design of a servicing part in Siemens NX, working alongside the surfacing team. Developed guiding geometry that helps connectors seat squarely, with attention to clearances and thin-wall manufacturability.'],
      ['Material decisions', 'Led material down-selection around electrostatic-discharge safety, electrical behavior, machinability, and repeated mating. Compared engineering polymers to balance the service environment with the demands of a small, precision-machined part.'],
      ['Design to manufacture', 'Worked with Apple’s in-house CNC machining teams on tolerances and manufacturability. Design targets included high actuation-cycle use, with tolerance refinement and thermal review informing the next iteration.']
    ],
    gallery: [], source: 'https://www.apple.com/iphone-18-pro/', sourceLabel: 'View iPhone on Apple',
    note: 'Public product image © Apple. The servicing component itself is not pictured.'
  },
  airpods: {
    eyebrow: 'APPLE / AIRPODS 5',
    title: 'Better tests. Smarter internal AI tools.',
    intro: 'Developed internal AI tools alongside touch-test optimization and case-line architecture work: turning production data into repeatable analysis and shared engineering knowledge into an accessible assistant.',
    role: 'Operations Test Engineering Co-op', date: 'Apr–Sep 2026 · Cupertino, CA', tools: 'Test analytics · Python · AI tooling',
    image: 'assets/apple-airpods.webp', alt: 'Official Apple product image of AirPods 5', contain: true,
    metrics: [['≈50%', 'less touch-test time, estimated'], ['≈78%', 'less study time, estimated'], ['900', 'entries in the assistant’s glossary']],
    sections: [
      ['Test coverage', 'Read the test requirements, worked with the responsible engineers to understand measurement history, and examined production failure data. Unique defects per million (UDPPM) analysis helped identify overlapping coverage so redundant touch-test work could be reduced while preserving defect capture. The handoff describes touch-test time as nearly halved, represented here as an estimated 50% reduction.'],
      ['Line architecture', 'Compared retrofit, modular-cell, conveyor, and rotary concepts for the case test line. Modeled equipment reuse and investment across multiple lines, and investigated combining stations and running tests in parallel. The analysis informed an executive funding decision and evaluated paths toward higher throughput and greater automation.'],
      ['Internal AI analysis tool', 'Co-developed a conversational tool that lets test engineers run redundancy studies on production data without writing code. It gathers and processes the data, ranks candidates, and generates visualizations for engineering review. A typical study fell from roughly 45 minutes to about 10 minutes, an estimated 78% reduction rounded to the nearest percent. Engineers retain the final decision on test changes.'],
      ['Internal AI assistant', 'Built an internal AI assistant to make test information easier to find, including a 900-entry glossary. Organized engineering knowledge and test-flow references so answers could be grounded in shared sources, reducing the need to search through scattered trackers and presentations.']
    ],
    gallery: [], source: 'https://www.apple.com/airpods-5/', sourceLabel: 'View AirPods on Apple',
    note: 'Public product image © Apple. Estimated time reductions describe specific engineering workflows, not overall factory throughput.'
  },
  homeview: {
    eyebrow: 'APPLE / HOMEVIEW',
    title: 'Making each test earn its place.',
    intro: 'Supporting HomeView throughput and yield work through defect-coverage analysis. Apple’s home display brings communication, entertainment, and connected-home controls into one place.',
    role: 'Operations Test Engineering Co-op', date: 'Apr–Sep 2026 · Cupertino, CA', tools: 'UDPPM · Test coverage · Production analysis',
    image: 'assets/apple-homeview.webp', alt: 'Official Apple HomeView product image showing the home displays', contain: true,
    metrics: [],
    sections: [
      ['My contribution', 'Helped run unique defects per million (UDPPM) analyses to understand which tests contributed distinct failure coverage and where coverage overlapped. The work supported decisions aimed at improving throughput and yield.'],
      ['The approach', 'Compared test coverage using production evidence, making redundant measurements easier to identify and discuss with the engineering team. The focus was on making the test flow more efficient while keeping quality central to the decision.']
    ],
    gallery: [], source: 'https://www.apple.com/apple-homeview/', sourceLabel: 'View HomeView on Apple',
    note: 'Public product image and product context © Apple. Contribution summary is based on my co-op experience.'
  },
  fpv: {
    eyebrow: 'PERSONAL PROJECT / CUSTOM UAV + UAS',
    title: 'From a box of parts to a first flight.',
    intro: 'A hands-on FPV quadcopter build: selecting compatible hardware, learning to solder, configuring the flight controller, and taking the finished system into the field.',
    role: 'Independent design & build', date: 'Personal project', tools: 'Betaflight · Soldering · System integration',
    image: 'assets/drone-parts.webp', alt: 'Annotated photograph of the custom drone’s motors, flight controller, camera, receiver, and video transmitter',
    metrics: [['15+', 'components checked for compatibility'], ['5-inch', 'freestyle frame'], ['4S', 'LiPo power system']],
    sections: [
      ['The challenge', 'Build a capable FPV drone while learning how its mechanical, electrical, and control systems fit together. A component-by-component approach made compatibility, cost, and performance part of the design from the beginning.'],
      ['The build', 'Created a bill of materials around a Source One V4 frame, four iFlight Xing2 motors, a SpeedyBee F405 V3 stack, and an ELRS receiver. Assembled and soldered the electronics, integrated the camera and video transmitter, then configured and calibrated the system in Betaflight.'],
      ['The iteration', 'Troubleshot a damaged receiver and a faulty radio before progressing from line-of-sight flight to FPV and acro flying. Flight observations informed PID tuning and motor-output adjustments. The project connected component choices to what actually happens in the air.']
    ],
    gallery: [['assets/drone-assembly.jpg', 'Hands-on assembly and soldering.']],
    source: 'https://lyjames31.wixsite.com/engineeringportfolio/drone',
    note: 'Original build photographs and project details from my Wix portfolio.'
  },
  bge: {
    eyebrow: 'BGE / UAS DEVELOPMENT & OPERATIONS',
    title: 'Smarter payloads. More useful flights.',
    intro: 'Mechanical design for utility drones, where every gram matters and a useful prototype has to meet the demands of field work.',
    role: 'UAS Development and Operations Co-op', date: 'Apr–Dec 2024', tools: 'Fusion 360 · FEA · Prototyping',
    image: 'assets/bge-payload-design.webp', alt: 'A utility drone and payload during BGE field work',
    metrics: [['75%', 'lower part weight, up to'], ['≈$135k', 'annual operational cost savings'], ['9 months', 'co-op, including remote work']],
    sections: [
      ['The challenge', 'Make utility drones more useful without sacrificing the payload budget. Mounts, cutters, clamps, and retrieval tools needed to balance low mass with sufficient strength and practical attachment points.'],
      ['The design', 'Led design and R&D for drone payloads, using finite element analysis to optimize stress distribution and safety factors. The work reduced the weight of existing parts by up to 75% without compromising performance or reliability.'],
      ['The controls', 'Led full-cycle development of drone-mounted tools using Arduinos and NRF24L01 transceivers. Tools for debris and nest removal streamlined field operations, contributing approximately $135,000 in annual operational cost savings.'],
      ['The iteration', 'Developed a bird-cone deployment and retrieval hook around a ten-pound load objective, three attachment points, and filleted supports. A second iteration targeted retrieval and base stability. Work across release mechanisms, clamps, and field operations kept each design tied to its intended use.']
    ],
    gallery: [['assets/bge-capstone.webp', 'Discussing the capstone work with the BGE team.'], ['assets/skydio-drone.webp', 'Skydio commercial hardware used to illustrate the UAS platform context.']],
    source: 'https://lyjames31.wixsite.com/engineeringportfolio/work-exp-layout',
    note: 'Results reflect my updated résumé and project account. Skydio imagery represents commercial hardware.'
  },
  'simplehuman-led': {
    eyebrow: 'SIMPLEHUMAN / LED LIFECYCLE & OPTICAL TESTING',
    title: 'A better test starts with a better fixture.',
    intro: 'Developed test systems for a compact LED product, connecting mechanical fixture design, battery cycling, button endurance, and optical data analysis.',
    role: 'Test Engineering and R&D Co-op', date: 'Mar–Sep 2025', tools: 'Fixture design · Arduino · Python',
    image: 'assets/simplehuman-light-tester.webp', alt: 'Commercial TKlamp measurement instrument with generic accessories; the project device and custom fixtures are not shown', contain: true,
    imageCaption: 'Commercial measurement hardware. The project device and custom fixtures are not shown.',
    metrics: [['100k+', 'cycles in button endurance testing'], ['50+', 'LED units in data visualizations'], ['3', 'charging-fixture approaches']],
    iterations: [
      ['Manual connection', 'Established the charge/discharge workflow with hands-on USB-C connection between cycles.'],
      ['Linear actuation', 'Automated direct plug insertion and withdrawal. The small connector made fixture alignment a central design constraint.'],
      ['Magnetic coupling', 'Used a magnetic USB-C cable with an adapter seated in the port. Bringing the cable close to the adapter reduced the positioning precision needed to reconnect power.']
    ],
    sections: [
      ['Battery cycling', 'Built a lifecycle setup to fully charge and then discharge the battery, with automated connection and disconnection between cycles. Iterating the charging interface made repeated testing less dependent on manual plug handling.'],
      ['Two test purposes', 'Magnetic coupling supported repeatable electrical charge/discharge cycles while the adapter stayed seated. It did not cycle the native USB-C receptacle. Direct insertion and withdrawal addressed the separate question of mechanical connector durability.'],
      ['Button endurance', 'Used a robotic arm to repeatedly actuate the button, simulating forces similar to a human finger press. Measured the applied force with a force gauge to characterize the loading and make the test representative of everyday use. The automated endurance test ran more than 100,000 cycles.'],
      ['Optical data', 'Reverse-mapped the TKlamp instrument’s commands and timing, then used Python resampling to reduce more than a billion raw readings into manageable datasets. Visualizations across more than 50 units made the optical test results easier to compare.'],
      ['Measurement consistency', 'Worked with manufacturing partners in China and Taiwan to standardize lux and color measurement workflows. The original case study reports lab-to-factory variation within one to three lux after standardization.']
    ],
    gallery: [],
    source: 'https://lyjames31.wixsite.com/engineeringportfolio/copy-of-work-exp-layout',
    note: 'Test methods are summarized at a high level. Product geometry, internal specifications, raw data, and custom fixture drawings are omitted.'
  },
  'simplehuman-home': {
    eyebrow: 'SIMPLEHUMAN / SENSOR CANS & SENSOR MIRROR',
    title: 'Everyday products. Repeatable evidence.',
    intro: 'Worked across the 58L Sensor Recycler, 58L Sensor Can, semi-round sensor can, and Sensor Mirror Trio Max. The work connected lifecycle fixture development, electrical measurements, and functional testing with electrical engineers.',
    role: 'Test Engineering and R&D Co-op', date: 'Mar–Sep 2025', tools: 'Fixture development · Electrical measurement · Functional testing',
    products: [
      { image: 'assets/simplehuman-sensor-recycler.webp', name: '58L Sensor Recycler', alt: 'simplehuman 58L Sensor Recycler, official commercial product image', source: 'https://www.simplehuman.com/products/58l-sensor-recycler' },
      { image: 'assets/simplehuman-mirror-trio-max.webp', name: 'Sensor Mirror Trio Max', alt: 'simplehuman Sensor Mirror Trio Max, official commercial product image', source: 'https://www.simplehuman.com/products/sensor-mirror-trio-max' }
    ],
    metrics: [['≈10', 'recycler units per lifecycle fixture'], ['V + I', 'operating voltage & current measurements'], ['USB-C', 'mirror port lifecycle fixture']],
    sections: [
      ['Recycler fixture', 'Built a lifecycle fixture that could accommodate approximately ten sensor recycler units at a time. Integrated Hall-effect sensors to count operating cycles, then cross-checked those counts with programmed cameras. Linking the cycle counts to observed operation helped monitor the units during repeated use and investigate customer returns.'],
      ['Electrical behavior', 'Measured battery voltage and current draw while the recyclers were operating. Reviewing these measurements alongside unit behavior helped troubleshoot returns and understand how the units performed during repeated operation.'],
      ['Functional & firmware', 'Performed functional tests and collaborated with electrical engineers on firmware testing across the sensor can lineup. The work covered the 58L Sensor Recycler, 58L Sensor Can, and semi-round sensor can, connecting observed hardware behavior with the controls being evaluated.'],
      ['Sensor Mirror Trio Max', 'Performed functional testing and helped develop lifecycle fixtures for the mirror lineup. The work also included a dedicated USB-C port lifecycle fixture to repeat connector insertion and withdrawal.'],
      ['The connector interface', 'The mirror fixture focused on the mechanical USB-C interface: repeatedly mating and unmating the plug to evaluate the port under repeated use. This is distinct from the LED battery-cycling setup, where a magnetic adapter could remain in the port.']
    ],
    gallery: [],
    note: 'Official simplehuman images illustrate the commercial product lineups; the custom fixtures are not pictured. Fixture capacity is approximate. Personal contributions are described from my project account.'
  },
  simplehuman: {
    eyebrow: 'SIMPLEHUMAN / SOAP-PUMP FAILURE ANALYSIS',
    title: 'Find the failure. Improve the design.',
    intro: 'Connected customer-return teardowns with automated lifecycle testing to identify rusted motors as a failure mode. The investigation helped inform design changes that improved reliability and enabled approximately $500,000 in cost savings.',
    role: 'Test Engineering and R&D Co-op', date: 'Mar–Sep 2025', tools: 'Arduino · Prototyping · Failure analysis',
    image: 'assets/simplehuman-soap-pumps.webp', alt: 'Commercial simplehuman soap pumps illustrating the product family investigated', contain: true,
    metrics: [['100+', 'liquid soap pumps investigated'], ['≈$500k', 'in savings enabled by design changes']],
    sections: [
      ['Start with the returns', 'Performed teardown and failure analysis on more than 100 returned liquid soap pumps, investigating mechanical and electrical faults. Connected the observed dispensing problems to the condition of the internal components, building a clearer picture of where reliability was breaking down.'],
      ['Make the test repeatable', 'Built an automated fluid-cycling carousel to run the pumps through repeated dispensing cycles while recycling the test fluid. The fixture combined Arduino control, acrylic and printed parts, DC and peristaltic motors, and MOSFET boards. Staggered actuation balanced demand on a shared power supply, supporting repeatable lifecycle testing.'],
      ['Trace the motor failure', 'Used the lifecycle fixture to investigate pump performance through repeated operation, then connected the test behavior with teardown findings. That combination identified rusted motors as a failure mode and tied the visible dispensing problem to a specific component condition.'],
      ['Turn evidence into changes', 'Brought the failure-analysis and lifecycle findings into the design-improvement process. The work helped enable changes that improved reliability and contributed approximately $500,000 in cost savings, connecting the investigation to a measurable engineering outcome.']
    ],
    gallery: [],
    source: 'https://lyjames31.wixsite.com/engineeringportfolio/copy-of-work-exp-layout',
    note: 'Commercial product imagery illustrates the soap-pump family. Savings reflect the design changes supported by the failure-analysis work; the custom lifecycle fixture is not pictured.'
  },
  data: {
    eyebrow: 'BGE / INFRASTRUCTURE DATA & AUTOMATION',
    title: 'Better placement. $15M+ in cost efficiencies.',
    intro: 'Built a Python-based geospatial automation workflow in ArcGIS, using AI-assisted development to turn infrastructure asset data into actionable drone-site priorities.',
    role: 'UAS Development and Operations Co-op', date: 'Apr–Dec 2024', tools: 'ArcGIS · Python · Power BI',
    image: 'assets/bge-lng-tanks.jpg', alt: 'LNG storage tanks illuminated blue at night',
    metrics: [['$15M+', 'in cost efficiencies'], ['3M+', 'assets evaluated for coverage'], ['1 day', 'processing, down from 3 weeks']],
    sections: [
      ['The challenge', 'Determine where drone docks could provide useful coverage across a large utility network. A repeatable, asset-based workflow needed to turn geographic information into clear site priorities.'],
      ['Python implementation', 'Implemented the automated mapping algorithm in Python within an ArcGIS workflow, using AI-assisted coding during development. The workflow automated spatial coverage analysis across more than three million utility assets to identify optimal Drone in the Box (DIB) locations and prioritize sites for maximum asset coverage.'],
      ['Operational impact', 'The repeatable mapping workflow reduced processing from three weeks to one day and drove more than $15 million in cost efficiencies. Automating the analysis made infrastructure-scale coverage planning practical within a much shorter turnaround.'],
      ['The field data', 'Inspected and compiled data on more than 37,640 sections of LNG storage tank support pylons using an A-200 Pipe Crawler. Related work used Python and Power BI to make infrastructure and operational data easier to review.']
    ],
    gallery: [],
    source: 'https://lyjames31.wixsite.com/engineeringportfolio/work-exp-layout',
    note: 'Metrics reflect my updated résumé and project account, superseding the earlier Wix figures. The photo illustrates the infrastructure context.'
  }
};

const processSteps = [
  { label: '01 / DEFINE THE PROBLEM', title: 'Before the solution,\nunderstand the problem.', description: 'Start with the real need. Understand the loads, interfaces, environment, and people involved. Give the design something meaningful to solve.', example: 'In practice: balancing a drone’s payload limit with the load a wire-cutter mount needed to support.', top: 'START WITH THE RIGHT QUESTION', bottom: 'CONSTRAINTS → CLARITY', dimension: 'THE PROBLEM' },
  { label: '02 / EXPLORE THE DESIGN', title: 'Make the tradeoffs\nvisible.', description: 'Turn the requirements into concepts. Compare geometry, materials, mass, and interfaces, then use analysis to decide which direction is worth building.', example: 'In practice: using Fusion 360 and FEA to reduce mount mass while retaining load capability.', top: 'MAKE EVERY GRAM COUNT', bottom: 'CONCEPT → ANALYSIS', dimension: 'THE DESIGN' },
  { label: '03 / BUILD TO LEARN', title: 'Put an idea\nin your hands.', description: 'A prototype makes assumptions tangible. Assemble, wire, program, and refine the system until the parts work together, not just on their own.', example: 'In practice: integrating more than 15 drone components, soldering electronics, and configuring Betaflight.', top: 'PARTS BECOME A SYSTEM', bottom: 'ASSEMBLE → INTEGRATE', dimension: 'THE PROTOTYPE' },
  { label: '04 / VERIFY & ITERATE', title: 'Let the results\nshape the next version.', description: 'Run the test. Look closely at the failure. Translate measurements into a better design and a repeatable way to check it.', example: 'In practice: automated button tests beyond 100,000 cycles, plus teardown analysis to understand product failures.', top: 'EVIDENCE BEFORE ASSUMPTIONS', bottom: 'MEASURE → IMPROVE', dimension: 'THE EVIDENCE' }
];

document.getElementById('year').textContent = new Date().getFullYear();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('primary-nav');

function closeMenu(returnFocus = false) {
  const wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
  navigation.classList.remove('is-open');
  if (returnFocus && wasOpen) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(true); });
window.matchMedia('(min-width: 581px)').addEventListener('change', () => closeMenu());

const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
filters.forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.filter;
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  cards.forEach(card => {
    card.hidden = selected !== 'all' && card.dataset.category !== selected;
    if (!card.hidden) { count += 1; card.classList.add('in-view'); }
  });
  document.getElementById('filter-status').textContent = `Showing ${count} projects: ${selected === 'all' ? 'all work' : button.textContent.trim()}`;
  scheduleScroll();
}));

// The featured link must reveal its destination even after the testing-only filter.
document.querySelector('a[href="#apple-work"]').addEventListener('click', () => {
  if (document.getElementById('apple-work').hidden) filters.find(button => button.dataset.filter === 'all').click();
});

const tabs = [...document.querySelectorAll('.process-tab')];
const tabList = document.querySelector('.process-tabs');
function setStep(index, focus = false) {
  const step = processSteps[index];
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', index === i);
    tab.setAttribute('aria-selected', String(index === i));
    tab.tabIndex = index === i ? 0 : -1;
  });
  document.getElementById('process-panel').setAttribute('aria-labelledby', tabs[index].id);
  document.getElementById('process-label').textContent = step.label;
  document.getElementById('process-title').innerText = step.title;
  document.getElementById('process-description').textContent = step.description;
  document.getElementById('process-example').textContent = step.example;
  document.querySelector('.process-visual').dataset.stage = String(index);
  document.querySelector('.label-top').textContent = step.top;
  document.querySelector('.label-bottom').textContent = step.bottom;
  document.querySelector('.diagram-dimension').replaceChildren(document.createElement('span'), document.createTextNode(step.dimension), document.createElement('span'));
  if (focus) tabs[index].focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => setStep(index));
  tab.addEventListener('keydown', event => {
    let next;
    if (['ArrowRight', 'ArrowDown'].includes(event.key)) next = (index + 1) % tabs.length;
    if (['ArrowLeft', 'ArrowUp'].includes(event.key)) next = (index + tabs.length - 1) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); setStep(next, true); }
  });
});
const verticalTabs = window.matchMedia('(min-width: 801px)');
function setTabOrientation() { tabList.setAttribute('aria-orientation', verticalTabs.matches ? 'vertical' : 'horizontal'); }
verticalTabs.addEventListener('change', setTabOrientation);
setTabOrientation();

const dialog = document.getElementById('project-dialog');
const dialogContent = document.getElementById('dialog-content');
let dialogTrigger = null;
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

function openProject(key, trigger) {
  const project = projects[key];
  if (!project) return;
  dialogTrigger = trigger;
  dialogContent.innerHTML = `
    <p class="eyebrow">${escapeHTML(project.eyebrow)}</p>
    <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
    <p class="dialog-intro">${escapeHTML(project.intro)}</p>
    <div class="dialog-meta"><div>ROLE<strong>${escapeHTML(project.role)}</strong></div><div>WHEN<strong>${escapeHTML(project.date)}</strong></div><div>TOOLS<strong>${escapeHTML(project.tools)}</strong></div></div>
    ${project.products ? `<div class="product-pair dialog-product-pair">${project.products.map(product => `<figure><img src="${product.image}" alt="${escapeHTML(product.alt)}"><figcaption>${escapeHTML(product.name)}</figcaption></figure>`).join('')}</div>` : `<img class="dialog-hero${project.contain ? ' contain' : ''}" src="${project.image}" alt="${escapeHTML(project.alt)}">`}
    ${project.imageCaption ? `<p class="dialog-image-caption">${escapeHTML(project.imageCaption)}</p>` : ''}
    ${project.metrics.length ? `<div class="dialog-metrics">${project.metrics.map(([value, label]) => `<div><strong>${escapeHTML(value)}</strong><p>${escapeHTML(label)}</p></div>`).join('')}</div>` : ''}
    ${project.iterations ? `<section class="fixture-iterations" aria-labelledby="iterations-title"><h3 id="iterations-title">Evolving the charging fixture.</h3><ol role="list">${project.iterations.map(([title, copy]) => `<li><h4>${escapeHTML(title)}</h4><p>${escapeHTML(copy)}</p></li>`).join('')}</ol></section>` : ''}
    ${project.sections.map(([title, copy]) => `<section class="dialog-section"><h3>${escapeHTML(title)}</h3><p>${escapeHTML(copy)}</p></section>`).join('')}
    ${project.gallery.length ? `<div class="dialog-gallery">${project.gallery.map(([src, caption]) => `<figure><img src="${src}" alt="${escapeHTML(caption)}" loading="lazy"><figcaption>${escapeHTML(caption)}</figcaption></figure>`).join('')}</div>` : ''}
    <div class="dialog-source"><p>${escapeHTML(project.note)}</p><div class="dialog-source-links">${project.products ? project.products.map(product => `<a class="text-link" href="${product.source}" target="_blank" rel="noopener noreferrer">${escapeHTML(product.name)} on simplehuman <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>`).join('') : `<a class="text-link" href="${project.source}" target="_blank" rel="noopener noreferrer">${escapeHTML(project.sourceLabel || 'Original case study')} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>`}</div></div>`;
  closeMenu();
  document.body.classList.add('dialog-open');
  dialog.showModal();
  dialog.scrollTop = 0;
}
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => openProject(button.dataset.project, button)));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
let pointerStartedOnBackdrop = false;
dialog.addEventListener('pointerdown', event => { pointerStartedOnBackdrop = event.target === dialog; });
dialog.addEventListener('click', event => {
  if (event.target === dialog && pointerStartedOnBackdrop) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (dialogTrigger && dialogTrigger.isConnected) dialogTrigger.focus({ preventScroll: true });
});

dialog.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')].filter(element => element.getClientRects().length);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});

// A bounded preview link from the icon chooser changes only this browser tab.
const iconChoices = { precision: 'jl-precision', ligature: 'jl-ligature', orbit: 'orbit', fold: 'fold' };
const iconPreview = new URLSearchParams(location.search).get('icon');
if (Object.hasOwn(iconChoices, iconPreview)) document.querySelector('link[rel="icon"]').href = `assets/icons/${iconChoices[iconPreview]}.svg`;

// Content remains visible when JS or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window) {
  if (!reducedMotion.matches) document.documentElement.classList.add('motion-ready');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); revealObserver.unobserve(entry.target); } });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
}
const progress = document.querySelector('.scroll-progress');
const product = document.querySelector('.hero-product');
const showcase = document.querySelector('.hero-showcase');
const sections = [...document.querySelectorAll('main > section[id]')];
const navLinks = [...document.querySelectorAll('[data-nav]')];
let scrollScheduled = false;
function updateScroll() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0})`;
  if (!reducedMotion.matches && window.innerWidth > 580) {
    const rect = showcase.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) product.style.setProperty('--hero-shift', `${Math.max(-12, Math.min(12, (rect.top - window.innerHeight / 3) * .025))}px`);
  } else product.style.removeProperty('--hero-shift');
  let current = 'top';
  sections.forEach(section => { if (section.getBoundingClientRect().top <= 150) current = section.id; });
  navLinks.forEach(link => { if (link.dataset.nav === current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  scrollScheduled = false;
}
function scheduleScroll() { if (!scrollScheduled) { scrollScheduled = true; requestAnimationFrame(updateScroll); } }
window.addEventListener('scroll', scheduleScroll, { passive: true });
window.addEventListener('resize', scheduleScroll, { passive: true });
reducedMotion.addEventListener('change', () => { document.documentElement.classList.toggle('motion-ready', !reducedMotion.matches); scheduleScroll(); });
updateScroll();
