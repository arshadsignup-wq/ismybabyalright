import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'how-often-babies-get-sick-normal',
  title: 'How Often Do Babies Get Sick? What\'s Normal',
  category: 'medical',
  searchTerms: [
    'how often do babies get sick',
    'normal number of colds for baby',
    'baby always sick from daycare',
    'how many times a year do babies get sick',
    'is it normal for baby to get sick every month',
    'baby immune system first year',
    'baby sick all the time normal',
    'first year daycare germ year',
    'how many colds is normal for infant',
    'baby keeps getting sick back to back',
  ],
  quickAnswer:
    'It is normal for babies and toddlers to get 6-8 upper respiratory infections (colds) per year, and children in daycare may have even more — up to 8-12 illnesses annually. According to the AAP, the average child will have experienced 80-100 viral infections by their 6th birthday. Babies in group childcare settings tend to get sick more frequently in their first 1-2 years (often called the "germ year") but research shows they have fewer infections in later childhood compared to children who were not in early group care, as their immune systems were exposed sooner. Each cold typically lasts 7-10 days, and with back-to-back infections, it can feel like your baby is sick continuously through the fall and winter months. This frequent illness, while exhausting for families, is a normal part of immune system development.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have some protection from maternal antibodies (passed through the placenta and breast milk), so they tend to get fewer infections in the first 2-3 months. However, any fever of 100.4°F (38°C) or higher in a baby under 3 months requires immediate medical evaluation because their immune system cannot reliably fight bacterial infections. Most pediatricians recommend limiting exposure to crowds and sick contacts during this period.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Maternal antibodies begin to wane while the baby\'s own immune system is still immature. This creates a vulnerability window where babies become more susceptible to infections. If your baby starts daycare during this period, expect the first illness within 2-4 weeks. First colds can be alarming — nasal congestion sounds dramatic in small babies. Most viral illnesses are self-limiting and manageable with saline drops, suctioning, and adequate feeding.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is often the peak illness period, especially for daycare-attending babies. A baby may have a cold every 2-3 weeks during fall and winter, with each cold lasting 7-10 days, creating the impression of being sick constantly. The baby\'s immune system is actively building its library of pathogen recognition. Ear infections are common secondary complications, affecting about 75% of children by age 3. Breastfeeding continues to provide some immune support during this time.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Illness frequency typically remains high but toddlers usually recover faster and handle infections with less distress. Studies show that children who were in group care starting in infancy tend to have fewer absences from school later due to illness. The immune system has now been exposed to many common viruses. However, each new germ encountered will still cause illness — the first exposure to RSV, hand-foot-mouth disease, or stomach bugs can feel severe even in an otherwise resilient toddler.',
    },
  ],
  whenNormal: [
    'Baby getting 6-8 or more colds per year, especially in fall and winter',
    'Each cold lasting 7-10 days with lingering cough for up to 2 weeks',
    'Seeming to be sick "all the time" during the first year of daycare',
    'Mild fevers (under 102°F/38.9°C) accompanying viral illnesses with good feeding and activity',
    'Runny nose that persists for weeks during cold season',
  ],
  whenToMention: [
    'Baby has had more than 8 ear infections in a year (may warrant ENT referral)',
    'Infections consistently require antibiotics rather than resolving on their own',
    'Baby is not gaining weight well due to frequent illness',
    'You are concerned about a possible immunodeficiency due to unusual severity or frequency of infections',
  ],
  whenToActNow: [
    'Fever of 100.4°F (38°C) or higher in a baby under 3 months — requires immediate evaluation',
    'Difficulty breathing, persistent high fever over 104°F (40°C), or signs of dehydration',
    'Unusual or severe infections (pneumonia, deep skin infections, recurrent thrush after infancy) that may suggest immune deficiency',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-daycare-illness-frequency',
    'immune-system-development-babies',
    'common-cold-duration-babies',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Children and Colds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Common Cold.',
      url: 'https://www.cdc.gov/common-cold/about/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Common Cold. NIAID.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/common-cold',
    },
  ],
};
