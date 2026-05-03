import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ear-infections',
  title: 'Baby Ear Infections (Otitis Media)',
  category: 'medical',
  searchTerms: [
    'baby ear infection symptoms',
    'signs of ear infection in baby',
    'baby pulling at ears',
    'baby ear infection signs',
    'how to tell if baby has ear infection',
    'how to know if baby has ear infection',
    'signs of ear infection in breastfed baby',
    'baby crying and grabbing ear',
    'baby ear infection without fever',
    'baby keeps getting ear infections',
    'toddler ear infection treatment',
    'does my baby need antibiotics for ear infection',
    'baby ear infection home remedies',
    'ear infection baby symptoms',
    'baby ear infection vs teething',
    'baby refusing to nurse ear infection',
    'recurrent ear infections baby',
    'ear tubes baby',
  ],
  quickAnswer:
    'Ear infections are one of the most common childhood illnesses, and most children will have at least one by age 3. They are caused by fluid buildup behind the eardrum, often following a cold. While uncomfortable, most ear infections are not dangerous and many resolve on their own, though some need antibiotics.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Ear infections in babies under 6 months are less common but are treated more aggressively when they occur. Because very young infants cannot fight infections as effectively, doctors typically prescribe antibiotics promptly for this age group. Signs can be subtle: increased fussiness, difficulty feeding, or disrupted sleep.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is when ear infections become more common, often following upper respiratory infections. Babies at this age may tug at their ears, become irritable, have trouble sleeping lying flat, or develop a fever. The AAP recommends antibiotics for confirmed ear infections in this age group, though mild cases in babies over 6 months may be observed for 48-72 hours.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers remain very susceptible to ear infections as their Eustachian tubes are still short and horizontal. They may point to or hold their ears, become clingy, or have balance issues. For children over 2 with mild symptoms, watchful waiting (pain management without immediate antibiotics) is a reasonable first approach per AAP guidelines.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Ear infections typically become less frequent as children grow and their Eustachian tubes mature. If your child has had 3 or more infections in 6 months or 4 or more in a year, your pediatrician may discuss ear tubes (tympanostomy tubes), which are a very common and effective procedure to reduce recurrence.',
    },
  ],
  whenNormal: [
    'Your baby tugs or plays with their ears without any other symptoms, as babies often explore their ears out of curiosity or during teething',
    'A single ear infection that responds to treatment and resolves fully',
    'Mild fussiness during a cold without signs of ear pain such as crying when lying flat or refusing to feed on one side',
    'Some fluid behind the eardrum (middle ear effusion) persisting for a few weeks after an infection, which is normal and usually clears',
  ],
  whenToMention: [
    'Your baby seems to have recurring ear infections (3 or more in 6 months)',
    'Your baby consistently pulls at one ear and seems uncomfortable, especially after colds',
    'You notice your child does not seem to hear well or is not responding to sounds normally after a recent ear infection',
  ],
  whenToActNow: [
    'Your baby has ear pain along with a high fever (above 102.2F/39C), severe irritability, or fluid or blood draining from the ear',
    'Your baby under 3 months has any signs of an ear infection (fever, fussiness, feeding difficulty), as young infants need prompt evaluation',
    'Redness or swelling behind the ear, which could indicate mastoiditis, a rare but serious complication requiring emergency care',
  ],
  relatedConcernSlugs: [
    'baby-ear-infection-vs-teething',
    'baby-ear-pulling',
    'baby-ear-wax-buildup',
    'hearing-loss-signs-baby',
    'toddler-speech-regression-after-ear-infection',
    'not-responding-to-sounds',
    'not-turning-to-sounds',
    'speech-delay',
  ],
  relatedMilestones: [
    'hearing',
    'language-development',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Diagnosis and Management of Acute Otitis Media. Pediatrics, 2013.',
      url: 'https://publications.aap.org/pediatrics/article/131/3/e964/30912/The-Diagnosis-and-Management-of-Acute-Otitis-Media',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Ear Infection Information.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Ear Infection.',
      url: 'https://www.cdc.gov/antibiotic-use/ear-infection.html',
    },
  ],
};
