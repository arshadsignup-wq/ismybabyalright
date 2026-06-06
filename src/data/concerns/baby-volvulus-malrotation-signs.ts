import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-volvulus-malrotation-signs',
  title: 'Malrotation and Volvulus Signs in Baby',
  category: 'digestive',
  searchTerms: [
    'baby malrotation signs',
    'baby volvulus signs',
    'baby midgut volvulus',
    'malrotation baby symptoms',
    'volvulus baby emergency',
    'baby intestine twisted',
    'baby bile vomiting malrotation',
    'infant malrotation volvulus',
    'baby green vomit twisted gut',
    'baby malrotation diagnosis',
  ],
  quickAnswer:
    'Malrotation is a condition where the intestines did not rotate into their normal position during fetal development. Volvulus occurs when the intestine twists, cutting off blood supply, and is a life-threatening emergency. The hallmark sign is bilious (green) vomiting, especially in the first month of life. Any newborn with green vomiting needs immediate emergency evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Most cases of volvulus present in the first month of life. The classic presentation is sudden onset of bilious (green) vomiting in a previously healthy newborn. The baby may quickly become very ill with abdominal distension, bloody stools, and signs of shock. This is a surgical emergency requiring immediate intervention to save the bowel.',
    },
    {
      ageRange: '3-6 months',
      context:
        'While most cases present in the newborn period, volvulus can occur at any age in a child with malrotation. Sudden bilious vomiting, severe abdominal pain, and a rapidly worsening baby should prompt emergency evaluation. Do not wait to see if symptoms improve.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Malrotation may sometimes present with chronic, intermittent symptoms like recurrent vomiting, abdominal pain, or poor feeding rather than the acute emergency of volvulus. If your baby has unexplained recurrent vomiting, mention it to your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Malrotation with volvulus can present at any age, though it is less common in older children. Any sudden bilious vomiting with abdominal distension remains an emergency. Chronic malrotation without volvulus may cause intermittent abdominal pain and failure to thrive.',
    },
  ],
  whenNormal: [
    'There is no normal presentation of volvulus; it is always an emergency',
  ],
  whenToMention: [
    'Recurrent unexplained vomiting in an infant that you want evaluated',
  ],
  whenToActNow: [
    'Bilious (green) vomiting in any infant or child requires emergency evaluation',
    'A previously well baby who suddenly becomes very ill with vomiting and abdominal distension',
    'Bloody stool with bilious vomiting and signs of shock (pale, lethargic, rapid heart rate)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Intestinal Malrotation and Volvulus. Pediatric Surgery.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Intestinal-Obstruction.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Intestinal Malrotation and Volvulus in Infants. Archives of Disease in Childhood.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21296758/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Bilious Vomiting in the Newborn. NeoReviews.',
      url: 'https://publications.aap.org/neoreviews',
    },
  ],
  relatedConcernSlugs: ['baby-vomiting-bile', 'baby-bowel-obstruction-signs', 'intussusception-signs'],
};
