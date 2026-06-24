import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-fifth-disease-slapped-cheek',
  title: 'Fifth Disease (Slapped Cheek Syndrome) in Babies',
  category: 'medical',
  searchTerms: [
    'fifth disease baby',
    'slapped cheek syndrome baby',
    'parvovirus B19 baby',
    'red cheeks rash baby',
    'slapped cheek virus infant',
    'erythema infectiosum baby',
    'fifth disease contagious baby',
    'fifth disease pregnant exposure',
    'slapped face rash toddler',
    'parvovirus rash child',
  ],
  quickAnswer:
    'Fifth disease (erythema infectiosum) is a common, usually mild viral illness caused by parvovirus B19. It is characterized by bright red cheeks (the "slapped cheek" appearance) followed by a lacy, pink rash on the body and limbs. By the time the rash appears, the child is no longer contagious. Most children recover fully without treatment. The main concerns are for pregnant women exposed to the virus (it can cause complications in pregnancy) and for children with certain blood disorders.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Fifth disease is less common in very young babies, partly because maternal antibodies may provide some protection. If a young baby develops the characteristic rash, it is generally mild and self-limiting. However, in rare cases, parvovirus B19 can cause more significant anemia in young infants. If your baby under 6 months develops the classic slapped-cheek rash and seems unusually pale, lethargic, or is feeding poorly, contact your pediatrician for evaluation. The virus is spread through respiratory droplets and is contagious before the rash appears.',
    },
    {
      ageRange: '6-24 months',
      context:
        'This is a common age for fifth disease, especially in daycare settings. The illness typically starts with mild cold-like symptoms (low fever, runny nose, headache) for about a week, followed by the distinctive bright red rash on both cheeks. A few days later, a lacy, net-like rash may appear on the arms, legs, and trunk. The rash can come and go for weeks and may flare with heat, sun exposure, or bathing. No specific treatment is needed - the virus runs its course. Your child is no longer contagious once the rash appears.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Preschool and school-age children commonly get fifth disease. By the time the rash appears, the infectious period has already passed, so exclusion from school or daycare is not necessary once the rash is present. Older children may experience mild joint pain along with the rash. The rash can last 1-3 weeks and may wax and wane. Comfort measures like cool baths and appropriate hydration are sufficient. If you are pregnant and your child is diagnosed with fifth disease, contact your OB/GYN for guidance.',
    },
  ],
  whenNormal: [
    'Your child has the classic bright red rash on both cheeks and a lacy rash on the body but otherwise feels well.',
    'The rash comes and goes over several weeks - this is the typical pattern.',
    'Your child had mild cold symptoms a week or two before the rash appeared.',
  ],
  whenToMention: [
    'You are pregnant and have been exposed to a child with fifth disease.',
    'Your child seems unusually pale or tired in addition to the rash.',
    'Your child has a known blood disorder (such as sickle cell disease) and has been exposed to fifth disease.',
  ],
  whenToActNow: [
    'Your child with fifth disease becomes extremely pale, short of breath, or lethargic - this could indicate significant anemia (rare but possible complication).',
    'Your child with a blood disorder (sickle cell, thalassemia) develops fifth disease symptoms - they are at risk for aplastic crisis.',
    'Your child has a high fever, severe joint pain, or a rash that includes blistering or looks like it could be a different condition.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'hand-foot-mouth',
    'hives',
    'baby-first-cold-what-to-do',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Fifth Disease (Parvovirus B19).',
      url: 'https://www.cdc.gov/parvovirus-b19/about/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fifth Disease (Parvovirus B19). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Fifth-Disease-Parvovirus-B19.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Parvovirus B19 Infection. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000977.htm',
    },
  ],
};
