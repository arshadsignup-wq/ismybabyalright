import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-bowel-obstruction-signs',
  title: 'Bowel Obstruction Signs in Baby',
  category: 'digestive',
  searchTerms: [
    'baby bowel obstruction',
    'baby intestinal obstruction signs',
    'baby bowel blockage symptoms',
    'infant bowel obstruction',
    'baby can\'t pass stool blockage',
    'baby intestinal blockage',
    'baby vomiting green blockage',
    'baby distended belly obstruction',
    'baby bowel obstruction emergency',
    'toddler bowel obstruction signs',
  ],
  quickAnswer:
    'Bowel obstruction is a medical emergency where something blocks the intestine, preventing food and gas from passing through. Key signs include bilious (green) vomiting, progressive abdominal distension, absence of stool and gas, severe abdominal pain, and the baby becoming increasingly unwell. If you suspect a bowel obstruction, go to the emergency department immediately.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Bowel obstruction in newborns can be caused by intestinal atresia, malrotation with volvulus, meconium ileus, or Hirschsprung disease. Bilious vomiting (green vomit) in a newborn is a surgical emergency until proven otherwise. Delayed passage of meconium beyond 48 hours of life should also raise concern.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Intussusception (one section of intestine telescoping into another) can cause obstruction. Signs include intermittent severe crying with legs drawn up, vomiting, lethargy between episodes, and eventually bloody "currant jelly" stools. An incarcerated inguinal hernia is another cause of obstruction at this age.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Intussusception peaks between 6 and 18 months. Foreign body ingestion becomes possible as babies put objects in their mouths. A swallowed object can cause obstruction if it gets stuck in the intestine. Any sudden onset of bilious vomiting and abdominal distension needs emergency evaluation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are at higher risk for foreign body ingestion causing obstruction. Adhesive bands from previous abdominal surgery can also cause obstruction. Severe constipation can occasionally mimic obstruction. The key distinguishing features of true obstruction are bilious vomiting, progressive distension, and complete absence of stool.',
    },
  ],
  whenNormal: [
    'There is no "normal" version of bowel obstruction; any suspected obstruction is an emergency',
  ],
  whenToMention: [
    'Your baby has persistent vomiting with abdominal distension and you are concerned',
  ],
  whenToActNow: [
    'Green (bilious) vomiting at any age',
    'Progressive abdominal distension with vomiting and no passage of stool or gas',
    'Intermittent severe abdominal pain with vomiting and lethargy',
    'A baby with a known hernia that becomes hard, painful, and cannot be pushed back in',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Intestinal Obstruction. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Intestinal-Obstruction.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Intestinal Obstruction in Children. Pediatric Surgery.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29136697/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Intussusception. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Intussusception.aspx',
    },
  ],
  relatedConcernSlugs: ['intussusception-signs', 'baby-volvulus-malrotation-signs', 'baby-vomiting-bile', 'baby-hernia-strangulation-signs'],
};
