import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-branchial-cleft-cyst',
  title: 'My Baby Has a Lump on the Side of Their Neck (Branchial Cleft Cyst)',
  category: 'medical',
  searchTerms: [
    'baby neck lump side',
    'branchial cleft cyst baby',
    'baby lateral neck mass',
    'baby lump side neck',
    'branchial cyst treatment baby',
    'congenital neck cyst lateral',
    'baby neck cyst side',
    'branchial cleft anomaly baby',
    'baby side neck lump soft',
    'branchial cyst surgery baby',
  ],
  quickAnswer:
    'A branchial cleft cyst is a congenital lump that appears on the side of the neck, usually along the front edge of the sternocleidomastoid muscle. It develops from remnants of embryonic structures (branchial arches) that did not fully resolve during fetal development. The cyst is typically painless and may be noticed at birth or later in childhood, often when it becomes infected. Surgical removal is the recommended treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Branchial cleft cysts may be present at birth as a painless, soft lump on the side of the neck, or as a small pit or sinus opening on the skin. Your pediatrician will evaluate the mass with ultrasound to confirm the diagnosis. In the absence of infection, surgery is typically planned electively rather than urgently.',
    },
    {
      ageRange: '3-12 months',
      context:
        'The cyst may remain stable in size or grow gradually. It often comes to attention when it becomes infected during an upper respiratory illness, becoming red, swollen, and tender. Infected cysts are treated with antibiotics first, followed by surgical removal after the infection clears. Some branchial cleft anomalies include a fistula (tract) that opens to the skin surface.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If surgery has been recommended, this is a common age to proceed. The operation removes the cyst and any associated tract to prevent recurrence and future infections. Recovery is typically 1-2 weeks. The surgical scar usually heals well and becomes less visible over time.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Branchial cleft cysts that were not noticed earlier may become apparent during this period, especially if they become infected. A lateral neck mass in a toddler that fluctuates in size may be a branchial cleft cyst that periodically fills and drains through a sinus tract. Definitive surgical management prevents further episodes.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Some branchial cleft cysts are first discovered at preschool age. The recommendation for surgical removal remains the same to prevent recurrent infections. Before surgery, imaging (ultrasound or MRI) maps the extent of the cyst and any associated tracts to guide the surgical approach.',
    },
  ],
  whenNormal: [
    'A small, painless lateral neck lump that has been diagnosed as a branchial cleft cyst and is being monitored',
    'Your pediatric surgeon has scheduled elective removal',
    'A small skin pit on the side of the neck without drainage or swelling',
  ],
  whenToMention: [
    'You notice a new lump on the side of your baby\'s neck',
    'A known branchial cleft cyst seems to be growing',
    'There is intermittent drainage from a small opening on the neck',
  ],
  whenToActNow: [
    'The cyst becomes rapidly swollen, red, warm, and painful (infected cyst requiring antibiotics)',
    'A neck mass is hard, rapidly growing, or accompanied by other concerning symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-thyroglossal-duct-cyst',
    'baby-cervical-lymphadenopathy',
    'baby-pediatric-ent-when',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Neck Masses in Children. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/27/7/e50/62497',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Branchial cleft cyst.',
      url: 'https://www.mayoclinic.org/diseases-conditions/branchial-cleft-cyst/cdc-20389605',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Branchial Cleft Cyst. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK499914/',
    },
  ],
};
