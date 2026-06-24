import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'functional-constipation-infant-new-guidelines',
  title: 'Functional Constipation in Infants: Updated Guidelines',
  category: 'digestive',
  searchTerms: [
    'functional constipation baby',
    'infant constipation guidelines',
    'baby constipation treatment',
    'infant constipation Rome criteria',
    'baby not pooping constipated',
    'constipation treatment infant new guidelines',
    'osmotic laxative baby',
    'PEG 3350 infant',
    'Miralax for baby',
    'lactulose infant constipation',
    'baby constipation when to treat',
  ],
  quickAnswer:
    'Functional constipation in infants is defined by the Rome IV criteria as two or more of the following for at least one month: two or fewer bowel movements per week, excessive stool retention, painful or hard bowel movements, large diameter stools, or a large fecal mass in the rectum. Updated guidelines emphasize that functional constipation is common, affecting up to 30% of children, and that early, appropriate treatment prevents complications. Treatment focuses on adequate fluid intake, dietary fiber, and when needed, osmotic laxatives like polyethylene glycol (PEG 3350).',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'True functional constipation is uncommon in exclusively breastfed infants, who may go up to 7-10 days between bowel movements (as long as stools are soft). Formula-fed babies are more prone to constipation. The important distinction is between constipation (hard, difficult-to-pass stools) and infant dyschezia (straining and crying with soft stools due to poor coordination of abdominal pressure and pelvic floor relaxation). Dyschezia resolves on its own and does not require treatment. Rectal stimulation (with a thermometer or glycerin suppository) should be reserved for infrequent use and not become a routine, as it can create dependency.',
    },
    {
      ageRange: '4-12 months',
      context:
        'Constipation often emerges with the introduction of solid foods, as the diet shifts and fluid intake may be insufficient. Ensuring adequate water intake alongside solids, offering high-fiber foods (prunes, pears, peas, oats), and limiting constipating foods (bananas, rice cereal, cheese) can help. If dietary measures are insufficient, updated guidelines support the use of osmotic laxatives. PEG 3350 (Miralax), while not FDA-approved for infants, is widely used off-label and endorsed by NASPGHAN and ESPGHAN guidelines at a dose of 0.4-0.8 g/kg/day. Lactulose is an alternative with FDA approval for all ages.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are particularly prone to developing a cycle of constipation: painful stools lead to withholding, which leads to harder stools. Breaking this cycle early is critical. Current guidelines recommend adequate treatment duration (months, not weeks) to prevent relapse. Behavioral strategies include encouraging regular toilet time after meals (using the gastrocolic reflex), positive reinforcement, and avoiding punishment for accidents. Dietary fiber intake should be approximately age in years plus 5 grams per day. If standard treatment fails, referral to a pediatric gastroenterologist may be needed to rule out organic causes.',
    },
  ],
  whenNormal: [
    'Your exclusively breastfed baby goes several days between soft bowel movements.',
    'Your baby has occasional harder stools when starting solids that resolve with dietary adjustments.',
    'Your child is on a laxative recommended by their pediatrician and is having regular, comfortable bowel movements.',
  ],
  whenToMention: [
    'Your baby has hard, pellet-like stools with straining and apparent pain.',
    'Your baby has fewer than 2 bowel movements per week and seems uncomfortable.',
    'Dietary changes have not resolved your baby\'s constipation after 2-4 weeks.',
  ],
  whenToActNow: [
    'Your newborn under 1 month has not passed meconium within 48 hours of birth, which could indicate Hirschsprung disease.',
    'Your baby has a distended abdomen, bile-stained vomiting, and failure to pass stool, which could indicate obstruction.',
    'Your baby has explosive, watery stools leaking around a fecal mass (overflow incontinence), severe abdominal pain, or blood in stool.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['formula-constipation-hard-stools', 'hard-pebble-poop', 'straining-to-poop', 'poop-withholding-toddler'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Tabbers MM, et al. ESPGHAN/NASPGHAN Evidence-Based Guidelines for the Management of Functional Constipation in Neonates and Children. Journal of Pediatric Gastroenterology and Nutrition, 2014.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24345831/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Constipation in Children. NIDDK.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation-children',
    },
  ],
};
