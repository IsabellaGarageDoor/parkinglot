export type Service = {
  slug: string;
  title: string;
  short: string;
  tagline: string;
  description: string;
  icon: string;
  hero: string;
  gallery: string[];
  bullets: string[];
  process: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'seal-coating',
    title: 'Seal Coating',
    short: 'Protective sealcoat application that shields asphalt from Michigan freeze-thaw, UV, and oil damage — and gets your lot ready to re-stripe.',
    tagline: 'The coat that buys your asphalt another decade.',
    description:
      'Unsealed asphalt oxidizes, cracks, and breaks down fast under Michigan\'s freeze-thaw cycles, road salt, and summer UV. We apply a premium sealcoat that fills surface pores, blocks water and oil intrusion, and restores that deep black finish — a fraction of the cost of an overlay or repave. We clean and prep the lot, spot-prime oil stains so the sealer bonds, and apply two coats by squeegee or spray depending on the surface. Most lots are ready to re-stripe within a day or two of the final coat.',
    icon: 'droplet',
    hero: 'https://images.pexels.com/photos/5821848/pexels-photo-5821848.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    bullets: [
      'Blocks water, oil, and UV damage that breaks down asphalt',
      'Oil-stain spot priming so the sealer actually bonds',
      'Two-coat application by squeegee or spray',
      'Lot ready to re-stripe within a day or two',
    ],
    process: [
      { title: 'Inspect & quote', detail: 'We walk the lot, check for cracks or potholes that need attention first, and quote by square footage.' },
      { title: 'Clean & prep', detail: 'Lot swept and blown free of debris, oil spots primed so the sealer bonds instead of lifting.' },
      { title: 'Apply sealcoat', detail: 'Premium sealer applied in two coats, edges cut in clean around curbs, islands, and drains.' },
      { title: 'Cure & re-open', detail: 'Cones stay up while it cures — typically drivable within 24 hours, ready to re-stripe shortly after.' },
    ],
    faqs: [
      { q: 'Does sealcoating fix cracks or potholes?', a: 'No — sealcoat is a protective finish, not a repair. We fill cracks and patch potholes first, then sealcoat over a sound surface.' },
      { q: 'How long does sealcoat last?', a: 'Most lots hold up 2–3 years before needing a fresh coat, depending on traffic volume and winter salt exposure.' },
      { q: 'What weather do you need to sealcoat?', a: 'Surface and air temps above 50°F with no rain in the forecast for at least 24 hours. We\'ll schedule around the window.' },
      { q: 'Do I need to re-stripe after sealcoating?', a: 'Yes — sealcoat covers your existing lines. We can bundle re-striping in right after the sealer cures so the lot is fully finished.' },
    ],
    metaTitle: 'Asphalt Seal Coating in Central Michigan | Schwab & Co. Holdings',
    metaDescription: 'Professional parking lot and driveway sealcoating in central Michigan. Two-coat application, oil-stain priming, freeze-thaw protection. Free estimates.',
  },
  {
    slug: 'crack-filling',
    title: 'Crack Filling',
    short: 'Hot-pour rubberized crack sealant that keeps water out of your sub-base before small cracks turn into potholes.',
    tagline: 'Stop the crack before it becomes the pothole.',
    description:
      'Every pothole starts as a crack that let water into the base. We clean out cracks with compressed air, then fill them with hot-pour rubberized sealant that stays flexible through Michigan\'s freeze-thaw swings instead of drying out and popping loose like cheap cold-pour fillers. Cracks under about a half-inch get a straight pour; wider or alligatored cracks get routed first for a clean bond. It\'s the cheapest square foot of pavement maintenance you\'ll ever buy — and usually the first step before sealcoating.',
    icon: 'crack',
    hero: 'https://images.pexels.com/photos/3027628/pexels-photo-3027628.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/9462277/pexels-photo-9462277.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    bullets: [
      'Hot-pour rubberized sealant — stays flexible, won\'t pop loose',
      'Routing for wider or alligatored cracks so the sealant bonds',
      'Stops water intrusion before it undermines the sub-base',
      'The cheapest way to delay a full sealcoat or overlay',
    ],
    process: [
      { title: 'Inspect & mark', detail: 'We walk the lot, mark every crack worth sealing, and quote by linear foot.' },
      { title: 'Clean & rout', detail: 'Cracks blown clean of debris; wider or alligatored cracks routed first for a clean bonding edge.' },
      { title: 'Hot-pour fill', detail: 'Rubberized sealant melted and applied hot, flush with the surface so it doesn\'t catch a plow blade.' },
      { title: 'Squeegee & cure', detail: 'Sealant squeegeed level and dusted so it doesn\'t track, then left to set before traffic returns.' },
    ],
    faqs: [
      { q: 'Hot-pour vs. cold-pour crack filler?', a: 'Cold-pour is a DIY-store fix that hardens and pops loose in a season. Hot-pour rubberized sealant stays flexible through freeze-thaw cycles and lasts years longer.' },
      { q: 'When should cracks be filled?', a: 'As soon as they appear, and always before sealcoating — sealing over open cracks just traps water underneath the new coat.' },
      { q: 'Is there a crack that\'s too big to fill?', a: 'Wide, alligatored, or crumbling sections usually mean the base has failed underneath — that\'s a patch or repair job, not a crack fill. We\'ll flag it if that\'s the case.' },
    ],
    metaTitle: 'Asphalt Crack Filling in Central Michigan | Schwab & Co. Holdings',
    metaDescription: 'Hot-pour rubberized crack sealing for parking lots and driveways in central Michigan. Routing for wider cracks, freeze-thaw flexible. Free estimates.',
  },
  {
    slug: 'line-striping',
    title: 'Line Striping',
    short: 'Crisp, MUTCD-compliant parking lot striping — stalls, arrows, stop bars, and crosswalks that hold up to Michigan traffic and weather.',
    tagline: 'Crisp lines that make your lot look brand new.',
    description:
      'Fresh line striping is the single fastest way to make a parking lot look cared-for. We lay down premium traffic paint in MUTCD-compliant layouts — stall lines, fire lanes, stop bars, directional arrows, and crosswalks — with crisp 4-inch lines that stay bright through a Michigan winter. Whether you need a full re-stripe or a touch-up after sealcoating, we schedule around your business hours so your lot stays open.',
    icon: 'paint-roller',
    hero: 'https://images.pexels.com/photos/417072/pexels-photo-417072.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/5821848/pexels-photo-5821848.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    bullets: [
      'MUTCD-compliant layouts and ADA-compliant stall counts',
      'Premium waterborne traffic paint — fast cure, low VOC',
      'Stalls, fire lanes, stop bars, arrows, crosswalks, and stenciling',
      'Night and weekend scheduling so your lot stays open',
    ],
    process: [
      { title: 'Site walk & layout', detail: 'We measure your lot, confirm stall counts and ADA requirements, and mark a layout that maximizes usable space.' },
      { title: 'Surface prep', detail: 'We clean and blow the pavement so paint bonds to asphalt, not to dust and debris.' },
      { title: 'Paint application', detail: 'Premium traffic paint applied with a striper for crisp, uniform 4-inch lines and clean edges.' },
      { title: 'Walk-through', detail: 'You get a final walk-through before we pack up — if a line isn\'t right, we fix it on the spot.' },
    ],
    faqs: [
      { q: 'How long does line striping take to dry?', a: 'Waterborne traffic paint is dry to traffic in 30–60 minutes in warm weather. We\'ll cone off the work and tell you exactly when it\'s safe to drive on.' },
      { q: 'Do I need to close my parking lot?', a: 'No. We work in sections and can schedule nights or weekends so your business stays open the entire time.' },
      { q: 'How often should a lot be re-striped?', a: 'Most commercial lots in Michigan need a re-stripe every 18–24 months. High-traffic lots may need annual touch-ups.' },
    ],
    metaTitle: 'Parking Lot Line Striping in Central Michigan | Schwab & Co. Holdings',
    metaDescription: 'Professional parking lot line striping in central Michigan. MUTCD-compliant layouts, premium traffic paint, night and weekend scheduling. Free estimates.',
  },
  {
    slug: 'pothole-repair',
    title: 'Pothole Repair',
    short: 'Cold-mix and hot-mix pothole patching that stops damage before it spreads to your sub-base and turns into a costly overlay.',
    tagline: 'Fix the pothole before it fixes you.',
    description:
      'Michigan freeze-thaw cycles are brutal on asphalt. A small pothole in October becomes a crater by April. We patch potholes fast with cold-mix asphalt for quick response and hot-mix for longer-lasting repairs in season — saw-cut to clean edges, tack-coated, and compacted so the patch bonds and stays put through the next winter.',
    icon: 'hammer',
    hero: 'https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/3027628/pexels-photo-3027628.jpeg?auto=compress&cs=tinysrgb&w=900',
      'https://images.pexels.com/photos/417072/pexels-photo-417072.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    bullets: [
      'Cold-mix for fast response, hot-mix for season-long durability',
      'Saw-cut square edges, tack coat, and proper compaction',
      'Stops water intrusion before it wrecks your sub-base',
      'Per-pothole or per-lot pricing — no surprise add-ons',
    ],
    process: [
      { title: 'Inspect & quote', detail: 'We walk the lot, mark every pothole, and quote per-pothole or per-lot so you know the cost up front.' },
      { title: 'Cut & clean', detail: 'Each pothole is saw-cut to square edges and cleaned of loose material so the patch bonds to solid asphalt.' },
      { title: 'Tack & fill', detail: 'Tack coat applied to the edges, then cold or hot mix compacted in lifts to match the surrounding pavement.' },
      { title: 'Seal the edges', detail: 'We seal the patch perimeter to keep water out — the step most crews skip and the reason patches fail.' },
    ],
    faqs: [
      { q: 'Cold mix vs. hot mix — which do I need?', a: 'Cold mix is a year-round emergency fix that holds for months. Hot mix (in season) is a longer-lasting repair that can run for years. We\'ll recommend based on timing and budget.' },
      { q: 'Can you fix potholes in winter?', a: 'Yes — cold mix is designed for winter installs. Hot-mix plants close in winter, so cold mix is the right call January through March.' },
      { q: 'How long until I can drive on a patch?', a: 'Cold mix is drivable immediately after compaction. Hot mix needs a few hours to cool. We\'ll cone it off and tell you when it\'s safe.' },
    ],
    metaTitle: 'Pothole Repair in Central Michigan | Schwab & Co. Holdings',
    metaDescription: 'Fast pothole patching in central Michigan. Cold-mix and hot-mix options, saw-cut edges, tack coat, and proper compaction. Stop pothole damage before it spreads.',
  },
  {
    slug: 'wheel-stop-replacement',
    title: 'Wheel Stop Replacement',
    short: 'Broken, heaved, or missing wheel stops replaced and re-anchored — concrete, rubber, or recycled options for any lot.',
    tagline: 'Stop the curb creep before it costs you a car.',
    description:
      'A cracked or heaved wheel stop is a trip hazard and a liability. We remove old concrete wheel stops, reset the base, and install new concrete, rubber, or recycled-plastic wheel stops — properly anchored with rebar or epoxy so they stay put through Michigan frost heaves. We also paint them reflective yellow or ADA blue for visibility.',
    icon: 'square',
    hero: 'https://images.pexels.com/photos/9462277/pexels-photo-9462277.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    bullets: [
      'Concrete, rubber, and recycled-plastic options',
      'Rebar or epoxy anchoring rated for frost heave',
      'Reflective yellow or ADA blue painting',
      'Old wheel stops hauled away and disposed',
    ],
    process: [
      { title: 'Inspect & count', detail: 'We walk the lot, count the wheel stops, and note which are broken, heaved, or missing.' },
      { title: 'Remove & reset base', detail: 'Old wheel stops come out and we re-grade and compact the base so the new stops sit level.' },
      { title: 'Install & anchor', detail: 'New wheel stops are set and anchored with rebar or epoxy per the manufacturer spec.' },
      { title: 'Paint & stripe', detail: 'Reflective yellow or ADA blue paint applied, plus any re-striping needed around the stop.' },
    ],
    faqs: [
      { q: 'Concrete or rubber wheel stops?', a: 'Concrete is the traditional choice and lasts decades. Rubber and recycled plastic are lighter, easier to install, and won\'t crack from salt — great for northern climates.' },
      { q: 'Do you paint wheel stops?', a: 'Yes — reflective yellow for visibility, or ADA blue for accessible stalls. Painting is included in the install price.' },
      { q: 'Can you re-anchor a wheel stop that\'s still good?', a: 'Yes. If the wheel stop is solid but the anchor has failed, we can reset and re-anchor it for less than a full replacement.' },
    ],
    metaTitle: 'Wheel Stop Replacement in Central Michigan | Schwab & Co. Holdings',
    metaDescription: 'Broken or heaved wheel stops replaced and re-anchored in central Michigan. Concrete, rubber, and recycled options. Reflective painting included. Free estimates.',
  },
  {
    slug: 'signage',
    title: 'Parking Lot Signs',
    short: 'Stop signs, handicap parking, fire lane, and custom parking signs — installed to MUTCD spec on posts, poles, or existing mounts.',
    tagline: 'Signs that say what your lot means.',
    description:
      'A parking lot without the right signs is a liability waiting to happen. We install stop signs, handicap parking, fire lane, no parking, reserved, and custom parking signs to MUTCD spec — on steel posts, u-channel posts, or existing poles. Every sign is set at the right height, the right distance from the stop bar, and reflective so it reads at night.',
    icon: 'sign',
    hero: 'https://images.pexels.com/photos/3027628/pexels-photo-3027628.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    bullets: [
      'Stop, handicap, fire lane, no parking, reserved, and custom signs',
      'MUTCD-compliant engineering-grade reflective aluminum',
      'Steel post, u-channel, or pole mount installation',
      'Set at correct height and distance per code',
    ],
    process: [
      { title: 'Audit & spec', detail: 'We walk the lot, audit existing signs, and spec what\'s missing or non-compliant.' },
      { title: 'Order & fabricate', detail: 'Signs ordered to MUTCD spec — engineering-grade reflective aluminum, correct size and legend.' },
      { title: 'Install', detail: 'Posts set in concrete or signs mounted to existing poles at the right height and setback.' },
      { title: 'Document', detail: 'You get a sign inventory with photos — useful for insurance and ADA compliance records.' },
    ],
    faqs: [
      { q: 'What size stop sign do I need?', a: 'MUTCD standard is 30-inch for most lots, 36-inch for higher-speed approaches. We\'ll spec the right size for your lot.' },
      { q: 'Do you handle ADA signage?', a: 'Yes — van-accessible, standard accessible, and tow-away warning signs, all set to ADA height and placement requirements.' },
      { q: 'Can you make custom reserved signs?', a: 'Yes — reserved, customer parking, numbered stalls, and branded signs. We\'ll mock up the design before fabrication.' },
    ],
    metaTitle: 'Parking Lot Signs in Central Michigan | Schwab & Co. Holdings',
    metaDescription: 'Stop signs, handicap parking, fire lane, and custom parking signs installed to MUTCD spec in central Michigan. Reflective aluminum, steel post, or pole mount.',
  },
  {
    slug: 'ada-compliance',
    title: 'ADA Compliance',
    short: 'ADA audits and corrections — accessible stalls, access aisles striping, signage, slopes, and path-of-travel reviews.',
    tagline: 'Make your lot accessible — and stay ahead of the lawsuit.',
    description:
      'An ADA non-compliant parking lot is a federal liability. We audit your lot against current ADA Standards for Accessible Design — stall count, access aisle width, signage, slope, and path of travel — and bring it up to code. We document every correction so you have a paper trail if a complaint ever comes.',
    icon: 'accessibility',
    hero: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/9462277/pexels-photo-9462277.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    bullets: [
      'Full ADA audit against current ADA Standards for Accessible Design',
      'Correct stall count, access aisle width, and van-accessible layout',
      'Signage, slope, and path-of-travel corrections',
      'Documented corrections for your compliance file',
    ],
    process: [
      { title: 'ADA audit', detail: 'We measure stall counts, aisle widths, slopes, signage, and path of travel against the current ADA Standards.' },
      { title: 'Correction plan', detail: 'You get a written plan: what\'s non-compliant, what needs to change, and what it costs.' },
      { title: 'Striping & signage', detail: 'We re-stripe accessible stalls and access aisles to spec and install ADA-compliant signage.' },
      { title: 'Slope & path fixes', detail: 'For slope and path-of-travel issues, we coordinate with our concrete repair crew or refer a partner.' },
    ],
    faqs: [
      { q: 'How many ADA stalls do I need?', a: 'It scales with total stalls — 1 accessible per 1–25 total, 2 per 26–50, and so on, with at least 1 van-accessible per 6 accessible. We\'ll calculate it for your lot.' },
      { q: 'What\'s an access aisle?', a: 'The striped no-parking zone next to an accessible stall, 60 inches wide for standard stalls and 96 inches for van-accessible. It lets wheelchair users deploy ramps.' },
      { q: 'Can you fix slope issues?', a: 'Slope corrections often require regrading or concrete work. We handle small concrete repairs and refer trusted partners for larger regrading.' },
    ],
    metaTitle: 'ADA Parking Lot Compliance in Central Michigan | Schwab & Co. Holdings',
    metaDescription: 'ADA audits and corrections for parking lots in central Michigan. Stall count, access aisle striping, signage, slope, and path-of-travel reviews. Documented compliance.',
  },
  {
    slug: 'concrete-repair',
    title: 'Small Concrete Repair',
    short: 'Curbs, sidewalks, aprons, and catch basin repairs — small concrete work that protects your pavement and your liability.',
    tagline: 'The concrete details that hold the lot together.',
    description:
      'Broken curb, heaved sidewalk, spalled catch basin — these are the small concrete failures that turn into big ones if you ignore them. We handle small concrete repairs: curb replacement, sidewalk squares, apron patches, catch basin frame-and-grate resets, and ADA curb cut installations. Anything bigger than a few squares, we refer a trusted partner.',
    icon: 'box',
    hero: 'https://images.pexels.com/photos/3027628/pexels-photo-3027628.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    bullets: [
      'Curb replacement and curb cut installations',
      'Sidewalk square replacement and trip-hazard removal',
      'Catch basin frame-and-grate resets',
      'ADA curb cuts and ramp installations',
    ],
    process: [
      { title: 'Inspect & quote', detail: 'We walk the lot, mark the concrete failures, and quote per-square or per-item.' },
      { title: 'Demo & form', detail: 'Old concrete broken out, base re-compacted, and forms set to grade.' },
      { title: 'Pour & finish', detail: 'Concrete poured, screeded, and finished with a broom texture for traction.' },
      { title: 'Cure & seal', detail: 'Cure time respected and a sealing coat applied for winter durability.' },
    ],
    faqs: [
      { q: 'How big is "small" concrete?', a: 'Up to about 10 sidewalk squares or a single curb run. Larger pours we refer a trusted concrete partner and project-manage the work.' },
      { q: 'How long does concrete need to cure?', a: 'Foot traffic in 24 hours, vehicle traffic in 5–7 days, full strength at 28 days. We\'ll cone it off and tell you when it\'s safe.' },
      { q: 'Can you do ADA curb cuts?', a: 'Yes — ADA curb cuts and ramps are a common request, especially for lots doing an ADA compliance upgrade.' },
    ],
    metaTitle: 'Small Concrete Repair in Central Michigan | Schwab & Co. Holdings',
    metaDescription: 'Small concrete repair for parking lots in central Michigan. Curbs, sidewalks, aprons, catch basin resets, and ADA curb cuts. Free estimates.',
  },
  // crack filling section
  // {
  //   slug: 'crack-filling',
  //   title: 'Crack Filling',
  //   ...
  // },
  {
    slug: 'speed-bumps',
    title: 'Speed Bumps & Humps',
    short: 'Speed bumps and humps installed and anchored — slow traffic in your lot without slowing your business.',
    tagline: 'Calm the lot without calming your customers.',
    description:
      'Speeding cars in a parking lot are a pedestrian-safety liability. We install speed bumps and speed humps — asphalt, recycled rubber, or precast concrete — properly anchored and striped with reflective yellow chevrons so drivers see them day and night. We\'ll help you pick the right profile (bump vs. hump) for your target speed and traffic flow.',
    icon: 'triangle',
    hero: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1600',
    gallery: [
      'https://images.pexels.com/photos/417072/pexels-photo-417072.jpeg?auto=compress&cs=tinysrgb&w=900',
    ],
    bullets: [
      'Asphalt, recycled rubber, or precast concrete options',
      'Properly anchored for frost-heave resistance',
      'Reflective yellow chevron striping',
      'Bump (3–5 mph) or hump (15–20 mph) profiles',
    ],
    process: [
      { title: 'Site & spec', detail: 'We walk the lot, recommend bump vs. hump based on target speed, and mark placement.' },
      { title: 'Prep & anchor', detail: 'Surface prepped, anchors drilled, and base set so the speed bump won\'t shift.' },
      { title: 'Install', detail: 'Speed bump set and bolted down — or asphalt bump formed and compacted in place.' },
      { title: 'Stripe & sign', detail: 'Reflective chevron striping and optional "Speed Bump" warning signs.' },
    ],
    faqs: [
      { q: 'Speed bump or speed hump?', a: 'Bumps are aggressive — 3–5 mph — and best for tight lots. Humps are gentler — 15–20 mph — and better for through-traffic lanes. We\'ll recommend based on your lot.' },
      { q: 'Can speed bumps damage cars?', a: 'Properly profiled and signed, no. We use standard heights and add warning signs and striping so drivers see them in time.' },
      { q: 'Do they work in winter?', a: 'Yes — rubber and concrete bumps shed snow better than asphalt, which is why we recommend them for plowed lots.' },
    ],
    metaTitle: 'Speed Bump Installation in Central Michigan | Schwab & Co. Holdings',
    metaDescription: 'Speed bumps and humps installed and anchored in central Michigan. Asphalt, rubber, or concrete options. Reflective striping and warning signs. Free estimates.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
