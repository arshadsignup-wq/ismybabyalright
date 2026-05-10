import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-first-dental-visit-timing',
  title: "Baby's First Dental Visit Timing",
  category: 'medical',
  searchTerms: [
    'when should baby first go to dentist',
    'baby first dentist visit age',
    'when to take baby to dentist',
    'first dental appointment baby',
    'baby dentist at 1 year old',
    'pediatric dentist first visit',
    'do babies need to see a dentist',
    'baby first dental checkup',
  ],
  quickAnswer:
    'The American Academy of Pediatric Dentistry recommends that a baby\'s first dental visit should occur by their first birthday or within six months of the eruption of their first tooth, whichever comes first. This early visit establishes a dental home and allows the dentist to check for early signs of decay and provide preventive guidance.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Even before teeth appear, parents should gently wipe the baby\'s gums with a clean, damp cloth after feedings. While a dental visit is not yet needed, this is a good time to research pediatric dentists in your area and plan for the upcoming visit.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Many babies get their first tooth around 6 months. Once the first tooth erupts, it is time to schedule the first dental appointment. If your baby gets a tooth earlier, you should schedule the visit within six months of that eruption.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the prime window for the first dental visit. The dentist will examine the baby\'s teeth, gums, jaw, and bite. They will also assess cavity risk, check for issues like tongue-tie, and advise on brushing techniques, fluoride use, and feeding practices that affect oral health.',
    },
    {
      ageRange: '12 months+',
      context:
        'If you have not yet taken your child to the dentist, schedule a visit as soon as possible. Early childhood cavities can develop quickly, especially in babies who fall asleep with a bottle. After the initial visit, the AAPD recommends dental checkups every six months or as recommended by your pediatric dentist.',
    },
  ],
  whenNormal: [
    'Your baby has no teeth yet and is under 6 months old, so a dental visit is not yet necessary',
    'Your baby had their first visit around age 1 and the dentist found no concerns',
    'Your child is on a regular 6-month dental checkup schedule',
    'Your baby\'s teeth appear healthy with no discoloration or visible spots',
  ],
  whenToMention: [
    'Your baby is over 12 months old and has not yet had a dental visit',
    'You notice white or brown spots on your baby\'s teeth',
    'Your baby has teeth that appear unusually shaped, discolored, or chipped',
  ],
  whenToActNow: [
    'Your baby has visible dark spots, holes, or crumbling on their teeth, which may indicate cavities requiring urgent treatment',
    'Your baby has swelling of the gums or face near a tooth, which could indicate an abscess or infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Periodicity of Examination, Preventive Dental Services, Anticipatory Guidance/Counseling, and Oral Treatment for Infants, Children, and Adolescents.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/periodicity-of-examination-preventive-dental-services-anticipatory-guidance-counseling-and-oral-treatment-for-infants-children-and-adolescents/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dental Care for Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/How-to-Prevent-Tooth-Decay-in-Your-Baby.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Dental and Craniofacial Research. Dental Caries (Tooth Decay) in Children (Age 2 to 11).',
      url: 'https://www.nidcr.nih.gov/research/data-statistics/dental-caries/children',
    },
  ],
};
