import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-gi-bleeding-causes',
  title: 'GI Bleeding Causes in Baby',
  category: 'digestive',
  searchTerms: [
    'baby gi bleeding',
    'baby gastrointestinal bleeding',
    'baby bleeding in gut',
    'infant gi bleed causes',
    'baby internal bleeding stomach',
    'baby upper gi bleeding',
    'baby lower gi bleeding',
    'causes blood in baby stool',
    'baby rectal bleeding causes',
    'toddler gi bleeding',
  ],
  quickAnswer:
    'Gastrointestinal bleeding in babies has many possible causes, most of which are benign. The most common cause of rectal bleeding is an anal fissure from constipation. Other causes include cow\'s milk protein allergy, infectious colitis, Meckel diverticulum, and intussusception. The color and amount of blood, along with associated symptoms, help determine the urgency and cause.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In newborns, bloody stool is most commonly from swallowed maternal blood, anal fissure, or cow\'s milk protein allergy. Necrotizing enterocolitis is a serious cause in premature infants. Any significant rectal bleeding in a young infant should be evaluated promptly.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Anal fissures and CMPA remain common causes. If blood is mixed with mucus in an otherwise well infant, CMPA is likely. If the baby is ill with fever and bloody diarrhea, infectious colitis should be considered. Intussusception, though more common after 6 months, can occur.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Intussusception (telescoping of the intestine) can present with intermittent severe abdominal pain, currant jelly stool (blood and mucus), and vomiting. This is a surgical emergency. Meckel diverticulum can cause painless, significant rectal bleeding. Infectious causes from stomach bugs are also common.',
    },
    {
      ageRange: '12-24 months',
      context:
        'In toddlers, anal fissures from constipation remain the most common cause. Juvenile polyps can cause painless bright red rectal bleeding and are usually benign. Inflammatory bowel disease is rare at this age but should be considered with chronic bloody diarrhea and poor growth.',
    },
  ],
  whenNormal: [
    'A small streak of bright red blood on a hard stool from an anal fissure in a constipated baby',
  ],
  whenToMention: [
    'Any blood in your baby\'s stool should be reported to your pediatrician',
    'Recurrent small amounts of blood in stool',
    'Blood mixed with mucus in stool, especially in a young infant',
  ],
  whenToActNow: [
    'Large amounts of blood in stool or bloody diarrhea',
    'Currant jelly stool (dark red, mucousy) with intermittent severe pain and vomiting (possible intussusception)',
    'Black, tarry stool suggesting upper GI bleeding',
    'Any GI bleeding with pallor, rapid heart rate, or signs of shock',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Blood in Stool. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Blood-in-Stool.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. GI Bleeding in Children. Pediatric Clinics of North America.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28779993/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Intussusception. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Intussusception.aspx',
    },
  ],
  relatedConcernSlugs: ['bloody-stool', 'baby-blood-in-stool-streaks', 'baby-blood-in-stool-dark', 'intussusception-signs', 'baby-meckel-diverticulum-signs'],
};
