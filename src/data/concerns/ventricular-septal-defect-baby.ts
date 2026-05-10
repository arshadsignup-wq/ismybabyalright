import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ventricular-septal-defect-baby',
  title: 'Ventricular Septal Defect (VSD) in Babies',
  category: 'medical',
  searchTerms: [
    'ventricular septal defect baby',
    'VSD baby',
    'baby heart hole',
    'hole in baby heart',
    'baby heart murmur VSD',
    'VSD close on its own',
    'ventricular septal defect symptoms baby',
    'baby heart murmur loud',
  ],
  quickAnswer:
    'A ventricular septal defect (VSD) is a hole in the wall between the heart\'s lower chambers and is the most common congenital heart defect, occurring in about 1 in 240 to 500 babies. Small VSDs often cause no symptoms and close on their own within the first few years of life. Larger VSDs may cause heart failure symptoms and require surgical repair. With appropriate management, the long-term outlook is excellent.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A VSD is usually detected by a heart murmur heard during a newborn exam or early well-child visit. Paradoxically, the murmur of a small VSD is often louder than a large one. Small VSDs typically cause no symptoms. Larger VSDs may not cause symptoms right away because pulmonary pressure is still high in the first weeks of life, but as pressure drops, excess blood flow to the lungs increases and symptoms begin to appear — rapid breathing, difficulty feeding, and poor weight gain.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is when moderate to large VSDs often become symptomatic. Babies may breathe rapidly (especially during feeding), sweat on the forehead while eating, tire before finishing feedings, and gain weight slowly. Medications such as diuretics may be used to manage symptoms. If the VSD is large and the baby is struggling despite medication, surgical repair is typically planned during this period.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Small VSDs continue to be monitored and many show signs of getting smaller. Babies with large VSDs that have been surgically repaired typically show dramatic improvement in feeding and growth after surgery. The murmur may change or get quieter as a small VSD shrinks. Regular echocardiograms track the size of the defect.',
    },
    {
      ageRange: '12 months+',
      context:
        'Many small VSDs close completely by age 2-5, though some persist as tiny, hemodynamically insignificant holes. Children with closed or small VSDs typically have no restrictions or long-term effects. Children who had surgical repair usually lead completely normal lives with periodic cardiac check-ups. The repair is considered a long-term success in the vast majority of cases.',
    },
  ],
  whenNormal: [
    'Your baby has a small VSD detected by murmur, but is feeding well, gaining weight normally, and has no symptoms',
    'Your baby\'s VSD is getting smaller on follow-up echocardiograms',
    'Your baby had VSD repair and is growing and developing well',
    'Your pediatrician describes the murmur as loud but the echocardiogram shows only a tiny hole',
  ],
  whenToMention: [
    'Your baby has a heart murmur that has not been evaluated with an echocardiogram',
    'Your baby with a known VSD is starting to breathe faster, sweat during feedings, or gain weight slowly',
    'Your baby\'s murmur has changed in character or you have noticed new symptoms',
  ],
  whenToActNow: [
    'Your baby is breathing very rapidly (more than 60 breaths per minute at rest), refusing to eat, or appears gray or blue',
    'Your baby who had VSD surgery develops fever, wound redness, or drainage from the surgical site',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Ventricular Septal Defects. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/ventricularseptaldefect.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Heart Murmurs. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Heart-Murmurs.aspx',
    },
  ],
};
