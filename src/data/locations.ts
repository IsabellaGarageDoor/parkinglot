export type Location = {
  slug: string;
  city: string;
  county: string;
  blurb: string;
  hero: string;
  img: string;
  distanceFromRosebush: string;
  nearbyLandmarks: string[];
  metaTitle: string;
  metaDescription: string;
};

export const locations: Location[] = [
  {
    slug: 'mt-pleasant-mi',
    city: 'Mt. Pleasant, MI',
    county: 'Isabella County',
    blurb:
      'Mt. Pleasant is the biggest commercial hub in Isabella County — and the parking lots here see real traffic, from downtown retail to the CMU campus and the Soaring Eagle complex. We stripe, patch, and sign lots across Mt. Pleasant and the surrounding townships, with crews dispatched from Rosebush and free estimates within 48 hours.',
    hero: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1600',
    img: '/photos/mt-pleasant-michigan.avif',
    distanceFromRosebush: '15 min from Rosebush',
    nearbyLandmarks: ['Downtown Mt. Pleasant', 'Central Michigan University', 'Soaring Eagle Casino'],
    metaTitle: 'Parking Lot Striping in Mt. Pleasant, MI | Pavement Preservation',
    metaDescription: 'Seal coating, parking lot striping, pothole repair, signs, and ADA compliance in Mt. Pleasant, MI. Crews dispatched from Rosebush. Free estimates within 48 hours.',
  },
  {
    slug: 'clare-mi',
    city: 'Clare, MI',
    county: 'Clare County',
    blurb:
      'Clare sits right on US-127 and the county line — a natural stop for travelers heading north. Retail lots, gas stations, and restaurants along the corridor see steady traffic and need regular re-striping and pothole patching. We serve Clare and the surrounding lakes-area communities with full parking lot maintenance.',
    hero: 'https://images.pexels.com/photos/3027628/pexels-photo-3027628.jpeg?auto=compress&cs=tinysrgb&w=1600',
    img: '/photos/clare-michigan.avif',
    distanceFromRosebush: '20 min from Rosebush',
    nearbyLandmarks: ['US-127 corridor', 'Downtown Clare', 'Clare County lakes region'],
    metaTitle: 'Parking Lot Striping in Clare, MI | Pavement Preservation',
    metaDescription: 'Seal coating, parking lot striping, pothole repair, signs, and ADA compliance in Clare, MI. Serving the US-127 corridor and lakes-area communities. Free estimates.',
  },
  {
    slug: 'alma-mi',
    city: 'Alma, MI',
    county: 'Gratiot County',
    blurb:
      'Alma is the home of Alma College and a solid manufacturing base — both of which mean parking lots that take a beating. We handle re-striping, pothole patching, wheel stop replacement, and ADA compliance work for commercial, institutional, and industrial lots across Alma and Gratiot County.',
    hero: '/photos/alma-michigan.avif',
    img: '/photos/alma-michigan.avif',
    distanceFromRosebush: '25 min from Rosebush',
    nearbyLandmarks: ['Alma College', 'Downtown Alma', 'Gratiot industrial corridor'],
    metaTitle: 'Parking Lot Striping in Alma, MI | Pavement Preservation',
    metaDescription: 'Seal coating, parking lot striping, pothole repair, wheel stops, and ADA compliance in Alma, MI. Serving Alma College, downtown, and Gratiot County. Free estimates.',
  },
  {
    slug: 'midland-mi',
    city: 'Midland, MI',
    county: 'Midland County',
    blurb:
      'Midland is the largest city we serve — a corporate and medical hub with big-box retail, the Dow campus, and MidMichigan Medical Center. Larger lots here need a crew that can handle full re-striping, multi-phase ADA upgrades, and scheduled maintenance contracts. We dispatch from Rosebush and serve all of Midland County.',
    hero: 'https://images.pexels.com/photos/417072/pexels-photo-417072.jpeg?auto=compress&cs=tinysrgb&w=1600',
    img: '/photos/midland-michigan.avif',
    distanceFromRosebush: '40 min from Rosebush',
    nearbyLandmarks: ['Downtown Midland', 'Dow corporate campus', 'MidMichigan Medical Center'],
    metaTitle: 'Parking Lot Striping in Midland, MI | Pavement Preservation',
    metaDescription: 'Seal coating, parking lot striping, pothole repair, signs, ADA compliance, and maintenance contracts in Midland, MI. Serving Dow, MidMichigan, and retail. Free estimates.',
  },
  {
    slug: 'houghton-lake-mi',
    city: 'Houghton Lake, MI',
    county: 'Roscommon County',
    blurb:
      'Houghton Lake is Michigan\'s largest inland lake — and the seasonal traffic spike is real. Summer weekends bring a flood of visitors to restaurants, marinas, and retail, and those lots need to be ready. We serve Houghton Lake, Prudenville, and Higgins Lake with striping, patching, and signage timed around the tourist season.',
    hero: 'https://images.pexels.com/photos/9462277/pexels-photo-9462277.jpeg?auto=compress&cs=tinysrgb&w=1600',
    img: 'https://images.pexels.com/photos/9462277/pexels-photo-9462277.jpeg?auto=compress&cs=tinysrgb&w=900',
    distanceFromRosebush: '35 min from Rosebush',
    nearbyLandmarks: ['Houghton Lake', 'Prudenville', 'Higgins Lake'],
    metaTitle: 'Parking Lot Striping in Houghton Lake, MI | Pavement Preservation',
    metaDescription: 'Seal coating, parking lot striping, pothole repair, and signage in Houghton Lake, Prudenville, and Higgins Lake, MI. Seasonal scheduling for tourist-area lots. Free estimates.',
  },
  {
    slug: 'rosebush-mi',
    city: 'Rosebush, MI',
    county: 'Isabella County',
    blurb:
      'Rosebush is our home base — a small Isabella County community just north of Mt. Pleasant. From here we dispatch crews across central Michigan for line striping, pothole repair, wheel stops, signs, ADA compliance, and small concrete work. Local jobs get priority scheduling and the fastest turnaround we offer.',
    hero: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1600',
    img: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=900',
    distanceFromRosebush: 'Home base',
    nearbyLandmarks: ['Isabella County', 'US-27 business corridor', 'Chippewa River area'],
    metaTitle: 'Parking Lot Striping in Rosebush, MI | Pavement Preservation',
    metaDescription: 'Rosebush, MI home base for Pavement Preservation. Seal coating, parking lot striping, pothole repair, wheel stops, signs, ADA compliance, and small concrete work. Free estimates.',
  },
  {
    slug: 'shepherd-mi',
    city: 'Shepherd, MI',
    county: 'Isabella County',
    blurb:
      'Shepherd is a small Isabella County village just south of Mt. Pleasant — quiet, but with the same parking lot needs as anywhere else. We serve Shepherd\'s small commercial lots, churches, and community buildings with the same care we bring to the bigger jobs.',
    hero: 'https://images.pexels.com/photos/5821848/pexels-photo-5821848.jpeg?auto=compress&cs=tinysrgb&w=1600',
    img: 'https://images.pexels.com/photos/5821848/pexels-photo-5821848.jpeg?auto=compress&cs=tinysrgb&w=900',
    distanceFromRosebush: '20 min from Rosebush',
    nearbyLandmarks: ['Village of Shepherd', 'Isabella County', 'South of Mt. Pleasant'],
    metaTitle: 'Parking Lot Striping in Shepherd, MI | Pavement Preservation',
    metaDescription: 'Seal coating, parking lot striping, pothole repair, and signage in Shepherd, MI. Serving small commercial lots, churches, and community buildings. Free estimates.',
  },
  {
    slug: 'st-louis-mi',
    city: 'St. Louis, MI',
    county: 'Gratiot County',
    blurb:
      'St. Louis sits between Alma and Mt. Pleasant in Gratiot County — a small town with a strong manufacturing presence and the kind of steady traffic that wears on a parking lot. We handle striping, patching, and ADA compliance work for commercial and industrial lots across St. Louis.',
    hero: 'https://images.pexels.com/photos/417072/pexels-photo-417072.jpeg?auto=compress&cs=tinysrgb&w=1600',
    img: 'https://images.pexels.com/photos/417072/pexels-photo-417072.jpeg?auto=compress&cs=tinysrgb&w=900',
    distanceFromRosebush: '30 min from Rosebush',
    nearbyLandmarks: ['Downtown St. Louis', 'Gratiot County', 'Between Alma & Mt. Pleasant'],
    metaTitle: 'Parking Lot Striping in St. Louis, MI | Pavement Preservation',
    metaDescription: 'Seal coating, parking lot striping, pothole repair, and ADA compliance in St. Louis, MI. Serving commercial and industrial lots across Gratiot County. Free estimates.',
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
