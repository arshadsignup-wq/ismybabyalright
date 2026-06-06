import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cough-types-meaning',
  title: 'What Do Different Types of Coughs Mean in My Baby?',
  category: 'medical',
  searchTerms: [
    'baby cough types',
    'different cough sounds baby',
    'baby cough meaning',
    'barky cough vs wet cough baby',
    'baby cough sound identification',
    'wheezy cough baby',
    'whooping cough sound baby',
    'baby cough with stridor',
    'types of baby cough',
    'baby cough diagnosis by sound',
  ],
  quickAnswer:
    'Different cough types can give clues about what is causing your baby\'s illness. A barky, seal-like cough often suggests croup. A wet, productive cough indicates mucus in the airways. A dry, hacking cough may be from a cold or irritant. A whooping or gasping cough could indicate pertussis. While cough type helps guide evaluation, your pediatrician should assess any persistent or concerning cough.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any cough in a very young baby is noteworthy. Newborns do not normally cough frequently. A persistent cough in this age group needs medical evaluation, regardless of the type. Watch for whooping sounds, which could indicate pertussis (whooping cough), a potentially life-threatening infection in young infants. Also watch for gagging or choking during feeds, which may indicate aspiration.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Common cough types at this age include a wet cough from post-nasal drip during colds and occasional dry coughs from throat irritation. A barky cough is unusual before 6 months and should be evaluated. A cough that sounds like a wheeze may indicate bronchiolitis, especially during RSV season (fall through spring).',
    },
    {
      ageRange: '6-12 months',
      context:
        'Croup becomes more common in this age range, producing a distinctive barky, seal-like cough that often worsens at night. Wet coughs from colds are common. A persistent dry cough without cold symptoms could suggest asthma-like reactive airway disease or environmental irritants. Listen for wheezing sounds during breathing, not just coughing.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers develop a wide range of coughs. A tight, wheezy cough may suggest reactive airway disease. A barky cough at night is often croup. A wet, productive cough during a cold is the body clearing mucus. A sudden onset of coughing in a previously well toddler could indicate an inhaled foreign object, which is an emergency.',
    },
    {
      ageRange: '2-3 years',
      context:
        'As children grow, their coughs become more varied and complex. A persistent nighttime cough without daytime symptoms may suggest post-nasal drip or early asthma. A cough that is triggered by exercise, cold air, or laughing may indicate asthma. A cough lasting more than 4 weeks is considered chronic and should be evaluated.',
    },
  ],
  whenNormal: [
    'A mild wet cough accompanies a cold and resolves as the cold clears over 7-10 days',
    'Your baby coughs occasionally when mucus from a runny nose drips into the throat',
    'A brief barky cough resolves quickly and does not recur',
    'Your baby coughs briefly after laughing, eating, or drinking too quickly',
  ],
  whenToMention: [
    'A cough persists for more than 10 days without improvement',
    'Your baby has a persistent nighttime cough that disrupts sleep',
    'The cough is associated with wheezing or seems to be triggered by specific activities or environments',
  ],
  whenToActNow: [
    'Your baby has a barky croup-like cough with noisy breathing (stridor), difficulty breathing, or drooling',
    'Your baby has a sudden onset of coughing with no preceding illness (possible foreign body), a whooping or gasping cough, turns blue during coughing, or coughs up blood',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-cough-barky-croup-like',
    'baby-cough-wet-productive',
    'baby-cough-dry-persistent',
    'baby-coughing-a-lot',
    'croup-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Croup: Symptoms and causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/croup/symptoms-causes/syc-20350348',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Evaluation and Management of the Coughing Child. Pediatric Clinics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23452907/',
    },
  ],
};
