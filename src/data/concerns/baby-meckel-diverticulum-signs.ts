import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-meckel-diverticulum-signs',
  title: 'Meckel\'s Diverticulum Signs in Baby',
  category: 'digestive',
  searchTerms: [
    'baby meckel diverticulum',
    'meckel diverticulum baby',
    'baby painless rectal bleeding',
    'meckel diverticulum child symptoms',
    'baby dark red rectal bleeding',
    'meckel diverticulum infant',
    'toddler meckel diverticulum',
    'baby significant rectal bleeding',
    'meckel diverticulum diagnosis baby',
    'baby bleeding from intestine',
  ],
  quickAnswer:
    'Meckel diverticulum is a congenital outpouching of the small intestine present in about 2% of the population. Most people never know they have it. When symptomatic, it most commonly causes painless but significant rectal bleeding (usually dark red or maroon) in children under 2 years. It can also cause bowel obstruction or inflammation mimicking appendicitis.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Meckel diverticulum can rarely cause symptoms in newborns, including intestinal obstruction or bleeding. Significant painless rectal bleeding in a young infant should prompt evaluation for Meckel diverticulum among other causes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Bleeding from Meckel diverticulum may begin at this age. The blood is typically dark red or maroon (brick-colored) because it originates from acid-secreting tissue within the diverticulum that ulcerates nearby intestinal lining. The bleeding can be significant and episodic.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a common age for Meckel-related bleeding to present. The classic presentation is painless, significant rectal bleeding in an otherwise healthy child. A Meckel scan (technetium nuclear medicine scan) can help diagnose it. If positive, surgical removal of the diverticulum is curative.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Most symptomatic Meckel diverticulum presents before age 2. In addition to bleeding, it can cause obstruction (from intussusception around the diverticulum) or inflammation similar to appendicitis. Any significant painless rectal bleeding in a toddler should be evaluated.',
    },
  ],
  whenNormal: [
    'Having a Meckel diverticulum is common (2% of people) and most never have symptoms',
  ],
  whenToMention: [
    'Your child has had an episode of painless rectal bleeding that resolved on its own',
  ],
  whenToActNow: [
    'Significant painless rectal bleeding (dark red or maroon stools) in a child',
    'Signs of bowel obstruction: bilious vomiting, abdominal distension, and pain',
    'Pallor or signs of anemia from recurrent bleeding episodes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Gastrointestinal Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Meckel Diverticulum. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470383/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Meckel Diverticulum.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/meckel-diverticulum',
    },
  ],
  relatedConcernSlugs: ['baby-gi-bleeding-causes', 'bloody-stool', 'baby-blood-in-stool-dark', 'intussusception-signs'],
};
