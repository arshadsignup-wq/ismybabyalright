import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-spitting-up-through-nose',
  title: 'Baby Spitting Up Through Nose',
  category: 'digestive',
  searchTerms: [
    'baby spit up through nose',
    'baby spit up out nose',
    'baby milk coming from nose',
    'infant spit up nose',
    'baby reflux through nose',
    'baby vomiting through nose',
    'baby formula coming out nose',
    'baby choking spit up nose',
    'why does baby spit up from nose',
    'baby nasal spit up',
  ],
  quickAnswer:
    'Spit-up coming through the nose is common and generally harmless, though it can be startling to see. The back of the nose and throat are connected, so when babies spit up, some milk can travel up into the nasal passages. This does not mean your baby is choking or in danger. Gently clear the nose afterward if needed.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Nasal spit-up is especially common in young infants because they are obligate nose breathers. The connection between the mouth and nose allows milk to come out either way. If your baby spit up through the nose, stay calm, hold them upright, and gently suction the nose with a bulb syringe if they seem congested afterward.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Spit-up through the nose may continue but usually decreases as the baby grows. If it happens frequently and your baby seems uncomfortable, try keeping them upright longer after feeds and offering smaller amounts. The spit-up itself does not harm the nasal passages.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As reflux improves and babies eat more solids, nasal spit-up becomes less common. If milk or food frequently comes through the nose during or after meals, and especially if it happens with every feed, mention this to your pediatrician as it could rarely indicate a structural issue.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Nasal spit-up should be rare at this age. If food or liquid regularly comes through the nose during eating in a toddler, your pediatrician may want to evaluate for submucous cleft palate or other structural concerns. Occasional nasal vomiting during illness is normal.',
    },
  ],
  whenNormal: [
    'Occasional spit-up coming through the nose in a young baby who recovers quickly',
    'Nasal spit-up that happens during a large spit-up episode and does not cause distress',
    'The baby clears their nose naturally or with gentle suctioning and resumes feeding normally',
  ],
  whenToMention: [
    'Spit-up through the nose happens frequently and you want reassurance',
    'Your baby seems to have persistent nasal congestion from frequent nasal spit-up',
    'Nasal spit-up occurs with every feed',
  ],
  whenToActNow: [
    'Your baby appears to be choking or unable to breathe after nasal spit-up',
    'Liquid consistently comes through the nose with every feeding, which could indicate a structural issue',
    'Spit-up through the nose is accompanied by color changes (blue or dusky)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Spitting Up in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Spitting-Up-Reflux.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. GER in Infants.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/acid-reflux-ger-gerd-infants',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Spit-Up and Reflux. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Spitting-Up-Reflux.aspx',
    },
  ],
  relatedConcernSlugs: ['spitting-up', 'reflux', 'spit-up-vs-vomit'],
};
