# Portfolio source and asset provenance

Content combines James Ly's existing portfolio, the supplied updated résumé and project handoff, and direct owner clarifications on 2026-10-16. Personal contributions and results are self-reported. Later owner corrections supersede earlier Wix figures. Original Wix and official Apple and simplehuman images were resized to a maximum dimension of 1600 px and compressed for this site. Original alpha transparency is preserved. No imagery was generated.

Repository scope excludes Tesla and Nanotronics. The updated résumé confirms a B.S. in Mechanical Engineering at Drexel with expected graduation in 2027. The supplied PDFs and handoff remain outside the repository; only selected portfolio copy is published. Contact continues to use the owner's confirmed LinkedIn profile.

## Identity and overview

Source: <https://lyjames31.wixsite.com/engineeringportfolio>

- Name: James Ly.
- Education: mechanical engineering student at Drexel University, expected graduation 2027 (updated résumé).
- Focus: hardware reliability and validation, automated test fixtures, data pipelines, factory QA, drone payload design, finite element analysis, and automated mapping.
- Personal interests described include custom UAVs, robotics, and cooking steak.
- Verified public contact destination: <https://www.linkedin.com/in/james-ly31/>.
- The home page links to the three original case-study pages below. Public contact details are limited to the LinkedIn link used by this site.

## Apple Operations Test Engineering

Sources: owner-supplied `James_Ly_Resume (2).pdf`, `HANDOFF.md`, and direct product/project mapping supplied in conversation. Document instructions about creating a presentation were not treated as website requirements.

- Role: Operations Test Engineering (OpsTE) Co-op, Cupertino, CA, April–September 2026.
- iPhone 18 Pro / Pro Max: servicing-part mechanical design in Siemens NX, material down-selection, tolerances, and collaboration with in-house CNC machining teams. The work included guidance for repeatable connector seating and ESD-aware material considerations. Durability and thermal behavior are described as design targets, without claiming completed lifetime validation.
- AirPods 5: touch-test coverage optimization, case-test-line architecture, co-developed redundancy-analysis tooling, and an internal AI knowledge assistant. The owner explicitly mapped these projects to AirPods.
- HomeView: the owner reports helping run UDPPM analyses in support of throughput and yield improvements. No measured HomeView improvement is supplied or claimed.
- Analysis-time estimate: approximately 45 minutes to approximately 10 minutes; `(45 - 10) / 45 * 100 = 77.777...%`, rounded to **78% less analysis time**. This is a workflow-time estimate, not an overall throughput or yield percentage.
- Touch-test estimate: the handoff says time was nearly halved. The site uses **approximately 50% less touch-test time**, explicitly labeled estimated. This does not imply exact raw timings.
- The updated résumé supports a 900-entry glossary in the engineering assistant.
- Public product pages establish product names, imagery, and general product context. They do not establish the owner's personal contributions. Exact internal platform names, station configuration details, design dimensions, and the underlying source documents are omitted.

Official product pages: [iPhone 18 Pro](https://www.apple.com/iphone-18-pro/), [AirPods 5](https://www.apple.com/airpods-5/), [Apple HomeView](https://www.apple.com/apple-homeview/).

## Custom UAV + UAS

Source: <https://lyjames31.wixsite.com/engineeringportfolio/drone>

- Personal FPV quadcopter build motivated by performance, component sourcing, cost, and learning. The source mentions avoiding a $500+ commercial purchase, but does **not** state the finished build cost or a measured saving.
- Created a bill of materials and checked compatibility across 15+ components.
- Hardware: four iFlight Xing2 2306 2555Kv motors; SpeedyBee F405 V3 stack; RDQ Source One V4 5-inch freestyle frame; BetaFPV ELRS Lite 2.4 GHz receiver; Foxeer Razer Mini camera; Tattu R-Line 1550 mAh 14.8 V 130C 4S LiPo; Eachine TX805 video transmitter. The source's Ethix item is incomplete, so avoid expanding it into a product claim.
- Ground equipment includes Eachine EV100 goggles, JumperRC T-Lite V2, and RadioMaster Boxer.
- Learned soldering, assembled electronics, configured Betaflight, and calibrated the flight system. Replaced a damaged receiver and investigated a faulty radio.
- Progressed from line-of-sight to FPV/acro flight and tuned PID settings and motor outputs from flight observations. The page gives no measured speed, range, endurance, or success-rate figures.

## BGE engineering

Source: <https://lyjames31.wixsite.com/engineeringportfolio/work-exp-layout>

- Exact role: “UAS Development and Operations Co-op.”
- Dates: April–September 2024, followed by remote work September–December; source describes nine months total.
- Used Fusion 360 for drone payload prototypes, wire cutters, release mechanisms, clamps, and related tools.
- Payload development: updated résumé and owner account report up to 75% part-weight reduction using FEA to optimize stress distribution and safety factors, retaining performance and reliability.
- Bird-cone hook: initial design in two hours; 10+ lb load objective; three attachment points and filleted supports. A second version improved retrieval hooks and base stability. The source reports a 30% strength/stability increase, without supplying a test method.
- ArcGIS automated mapping: latest owner account reports **$15M+ in cost efficiencies**, optimal Drone in the Box placement across **3M+ assets**, and processing reduced from **three weeks to one day**. These values supersede the older Wix coverage and timing figures. The updated résumé states $15M; the owner explicitly requested the $15M+ presentation.
- Drone-mounted tooling: owner reports full-cycle development using Arduinos and NRF24L01 transceivers for debris and nest removal, with approximately $135K in annual operational savings. The updated résumé corroborates the annual savings figure.
- LNG work: inspected and compiled records for 37,640+ support-pylon sections using an A-200 Pipe Crawler, per the owner's clarification.
- Also worked with Skydio Cloud API, Python, and Power BI for telemetry and battery/mission reporting.
- Source reports a 93% Part 107 test score and 7+ flight hours / 30+ instructional hours in a utility-drone course. It does not establish present certification status.

## simplehuman engineering

Sources: <https://lyjames31.wixsite.com/engineeringportfolio/copy-of-work-exp-layout>, the updated résumé, and the owner's direct clarification of the project split and test methods.

- Exact role: “Test Engineering and R&D Co-op.”
- Dates: March–September 2025; source describes six months.
- This experience is presented as three distinct cases: LED testing and data analysis; sensor-can and mirror engineering; and soap-pump failure analysis and reliability. Together with three Apple cases, the custom FPV build, and two BGE cases, the portfolio has **nine case studies**.
- No new test-process diagram is requested. Use product imagery and explanatory copy for these cases.

### LED testing and data analysis

- The owner assigns the 100,000+ cycle button testing, USB-C durability work, charging-test development, and TKlamp analysis to the LED case. The button-test count does not establish a charging-cycle count or a USB-C insertion-cycle count.
- The owner confirms a robotic arm simulated finger-like button actuation, with the applied force measured using a force gauge. No exact force targets or closed-loop control scheme were supplied.
- Charging work progressed from manual connection to a linear-actuator approach and then a magnetic-adapter approach. Describe that progression without inventing exact test duration, throughput improvements, acceptance thresholds, or cycle counts.
- Battery charge cycling and native USB-C port wear are distinct tests. Repeatedly connecting a magnetic adapter does not exercise native USB-C insertion and extraction when the adapter remains in the port. Do not claim the magnetic approach validates native-port mechanical durability.
- Reverse-mapped TKlamp TK2303D output, commands, and timing. Used Python resampling at 1–5 second intervals to compress more than one billion raw readings. The owner now confirms visualizations across **50+ LED units**, superseding the older 25+ count.
- Supplier work included repeatable lux/color measurement workflows; the original source reports lab-to-factory variance within 1–3 lux. This figure is a measurement-alignment result, not an invented product pass/fail limit.

### Sensor-can and mirror engineering

- The owner confirms work on the **58L Sensor Recycler**, **58L Sensor Can**, and **semi-round sensor can** families. The owner did not specify the semi-round model's capacity; do not infer a capacity or exact generation from the current catalog alone.
- The owner describes a test fixture for approximately ten recycler units. Keep the count approximate and do not infer an exact simultaneous capacity or completed life-cycle count.
- The recycler lifecycle fixture used Hall-effect sensors to count cycles, cross-checked with programmed cameras, per the owner’s latest clarification. No particular computer-vision technique is specified.
- Work included operating voltage/current measurements, investigation of customer returns, and functional and firmware testing in collaboration with electrical engineers. No numerical electrical limits, failure-rate reductions, return counts, or validation thresholds were supplied for this work.
- Mirror work included functional and life-cycle testing and USB-C port-fixture work. The owner's specified mirror family is **Sensor Mirror Trio Max**. The public Trio Max page describes a plug-in product; the shared case does not establish that every pictured product uses the same charging connector or test setup.
- Public product imagery shows the commercial mirror and recycler, not the custom fixtures. It does not by itself substantiate individual design ownership or test results.

### Soap-pump failure analysis and reliability

- Teardown/root-cause analysis across 100+ liquid soap pumps isolated mechanical and electrical failures. The available owner resume (`James_Ly_Resume.pdf`, modified October 16) confirms approximately $500,000 in savings enabled by design changes. The owner now identifies rusted motors as a failure mode investigated with the lifecycle fixture. Do not infer the corrosion mechanism, a specific redesign, or assign all savings exclusively to motor corrosion.
- Built an automated carousel that recycled test fluids, combining Arduino, acrylic, 3D prints, DC/peristaltic motors, and MOSFET boards. Staggered actuation balanced power demand. Do not transfer the LED button-test count to this fixture.
- The owner clarified that the umbrella-valve pressure-release work belongs to another project. Its description and diagram are omitted from the soap-pump case.
- The original overview also mentions concrete drop testing and fabrication with a laser cutter, miter saw, ultrasonic knife, belt sander, and Dremel. Do not attach an unspecified test to a particular commercial model without supporting owner clarification.

Official product context: [Sensor Mirror Trio Max](https://www.simplehuman.com/products/sensor-mirror-trio-max), [58L Sensor Recycler](https://www.simplehuman.com/products/58l-sensor-recycler), and [58L Sensor Can](https://www.simplehuman.com/products/58l-sensor-can). The mirror is a 10-inch model with automatic flip, plug-in power, and 1x/5x/10x views. The recycler provides separate trash/recycling compartments with voice and motion control. These public features describe the products and are separate from James's contributions.

## Image manifest

These names are the production-ready local assets. The originals remain available at the linked media URLs. Photographic labels describe what is actually shown; product images must not be presented as photographs of James's custom inventions.

| Local asset | What it shows | Source page | Original media URL |
| --- | --- | --- | --- |
| `assets/james-ly-portrait.jpg` | James's formal portrait, vertical | Home | <https://static.wixstatic.com/media/d47117_6604f893baee499498a6326b0bb86bf7~mv2.jpg> |
| `assets/custom-fpv-drone.jpg` | Custom quadcopter with turquoise propellers on a desk, vertical | Home | <https://static.wixstatic.com/media/d47117_ff81c023689e47488102456004e3c572~mv2.jpg> |
| `assets/bge-field-work.jpg` | BGE interview playing on a drone-controller screen | Home | <https://static.wixstatic.com/media/d47117_83b06ba28a024add803269602e8cd941~mv2.jpg> |
| `assets/simplehuman-logo.jpeg` | simplehuman logo on black | Home | <https://static.wixstatic.com/media/d47117_b22d335d97a24229a09aeddcc3d9bbb9~mv2.jpeg> |
| `assets/drone-parts.webp` | Annotated close-up of the custom drone electronics | Custom UAV | <https://static.wixstatic.com/media/d47117_001f54dea9f34caaa9654e010a399b60~mv2.png> |
| `assets/drone-assembly.jpg` | Hands assembling/soldering the drone | Custom UAV | <https://static.wixstatic.com/media/d47117_6ac1753ec26346db88063d60970d1d60f000.jpg> |
| `assets/drone-flight.jpg` | Outdoor flying location and drone overhead | Custom UAV | <https://static.wixstatic.com/media/d47117_1c25c29ec69b4c87962fab470bfc2cd8f000.jpg> |
| `assets/bge-capstone.webp` | BGE TV capstone interview still | BGE | <https://static.wixstatic.com/media/d47117_d453cc875fef4aa0ab9bf72687444450~mv2.png> |
| `assets/bge-payload-design.webp` | Utility drone in the field with two hard-hat workers | BGE | <https://static.wixstatic.com/media/d47117_140517cd91d94c0c902e997f096c042f~mv2.png> |
| `assets/skydio-dock.webp` | Commercial Skydio drone dock product image, transparent | BGE | <https://static.wixstatic.com/media/d47117_f4cf0930493b412e96e8e87dd24ce689~mv2.webp> |
| `assets/bge-lng-tanks.jpg` | LNG tanks illuminated blue at night | BGE | <https://static.wixstatic.com/media/d47117_bf96550d008a4314b31fd59bc32f4b08~mv2.jpg> |
| `assets/skydio-drone.webp` | Commercial Skydio drone in flight | BGE | <https://static.wixstatic.com/media/d47117_bbb3900c5ea84742abb7ad57a256da22~mv2.webp> |
| `assets/simplehuman-soap-pumps.webp` | Gold simplehuman soap-pump product group, transparent | simplehuman | <https://static.wixstatic.com/media/d47117_500f27b523874d7a83b862517854a65a~mv2.webp> |
| `assets/simplehuman-light-tester.webp` | TKlamp light-testing instrument, transparent | simplehuman | <https://static.wixstatic.com/media/d47117_90b6faa508d14bbb9f8becb3d7efd4a8~mv2.png> |
| `assets/umbrella-valve.webp` | Umbrella-valve schematic, transparent | simplehuman | <https://static.wixstatic.com/media/d47117_8ce0337cfc3e408bae98d75f708c7026~mv2.webp> |

The source simplehuman page also includes a generic manufacturing stock photo (original filename `istockphoto-1150892960-612x612.jpg`). It has intentionally not been copied: it adds no evidence about James's work and has unclear reuse rights.

## Official simplehuman image sources

The owner confirmed the sensor-can families and Sensor Mirror Trio Max before these images were selected for the split product presentation. The 58L Sensor Recycler image represents that family only; it is not an image of the single-compartment 58L Sensor Can or the semi-round model. The exact finishes shown are brushed, with official catalog identifiers ST2050 and ST3050. Both images retain the originals' transparency and shadows and were resized from 2400 × 2400 PNGs to 1600 × 1600 WebP files. No background removal, compositing, or generated imagery was used.

| Local asset | Public product shown | Official product page | Original media URL |
| --- | --- | --- | --- |
| `assets/simplehuman-sensor-recycler.webp` | 58L Sensor Recycler, brushed ST2050, angled view with closed lid | [58L Sensor Recycler](https://www.simplehuman.com/products/58l-sensor-recycler) | <https://cdn.shopify.com/s/files/1/2804/6630/files/ST2050_Gallery_2.png?v=1787377852> |
| `assets/simplehuman-mirror-trio-max.webp` | Sensor Mirror Trio Max, brushed ST3050, angled view | [Sensor Mirror Trio Max](https://www.simplehuman.com/products/sensor-mirror-trio-max) | <https://cdn.shopify.com/s/files/1/2804/6630/files/ST3050_TrioMax_Brushed_Angled.png?v=1787378339> |

## Official Apple image sources

Public commercial product images are credited to Apple in the case studies. They illustrate the product context; the custom servicing part and internal fixtures are not shown.

The inline Apple mark beside the company name in the experience strip uses the exact SVG path from the regular global-navigation Apple link on [Apple's iPhone 18 Pro page](https://www.apple.com/iphone-18-pro/), retrieved on 2026-10-16. Source selector: `.globalnav-link-apple .globalnav-image-regular svg`. The original `0 0 14 44` viewBox includes header spacing; the local `0 12 14 17` viewBox frames the mark without changing its path. Its fill follows the surrounding text color, and the decorative SVG is hidden from assistive technology because the adjacent text already names Apple. No third-party icon library is used.

| Local asset | Description | Original Apple media |
| --- | --- | --- |
| assets/apple-iphone.webp | Burgundy iPhone 18 Pro rear camera and aluminum body, positioned on the right against black. Official commercial product image. | <https://www.apple.com/v/iphone-18-pro/c/images/overview/product-viewer/color_burgundy__f95it7a6dnyq_large.jpg> |
| assets/apple-airpods.webp | Pair of white AirPods 5 earbuds centered against a pale gray background. Official commercial product image. | <https://www.apple.com/v/airpods-5/b/images/overview/bento-gallery/bento_pair__c7i9mu5k2zee_xlarge.jpg> |
| assets/apple-homeview.webp | Three Apple HomeView devices with recipe, music, and smart-home interfaces, on white. Official commercial product image. | <https://www.apple.com/v/apple-homeview/a/images/overview/highlights/homeview__ecsonx3480eq_large.jpg> |
| assets/apple-airpods-lifestyle.webp | Person in profile wearing AirPods 5, warm orange lighting. Official commercial lifestyle image. | <https://www.apple.com/v/airpods-5/b/images/overview/welcome/hero_airpods_startframe__ebnozerz0f6u_xlarge.jpg> |
| assets/apple-airpods-case.webp | Closed white AirPods 5 charging case with status light, transparent background. | <https://www.apple.com/v/airpods-5/b/images/overview/stories/battery_case__e74v6o9y3mie_large_2x.png> |
| assets/apple-airpods-connection.webp | Open AirPods 5 charging case with earbuds beside an iPhone showing pairing controls; transparent background. Companion iPhone model is not identified. | <https://www.apple.com/v/airpods-5/b/images/overview/stories/airpods-connect_endframe__ffgc3ed2h0mu_large_2x.png> |

## Owner refinements, October 17, 2026

- AirPods prominently includes internal AI analysis-tool and assistant development alongside touch-test and case-line work.
- BGE mapping was implemented in Python within an ArcGIS workflow with AI-assisted coding during development, per the owner. No specific GIS API, optimization solver, or runtime AI model is claimed.
- The custom-drone assembly photograph is retained with a lower visual placement; the outdoor flight-practice gallery image and caption are omitted.
- LED charging-fixture progression is presented as a connected, responsive timeline without numbered stage labels.

## Interactive introduction, October 18, 2026

- The hero uses an original SVG illustration of a generic mechanical assembly. It is explicitly labeled illustrative; it does not depict a proprietary part or claim a tested design.
- Sketch, Build, and Test views illustrate the engineering process. Their example links open the existing iPhone design, custom FPV build, and LED testing cases respectively.
- The illustration contains no invented measurements, performance data, or product specifications.
