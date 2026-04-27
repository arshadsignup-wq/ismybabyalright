import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pertussis-whooping-cough-baby',
  title: 'Whooping Cough (Pertussis) in Babies',
  category: 'medical',
  searchTerms: [
    'whooping cough baby',
    'pertussis in infants',
    'baby whooping cough symptoms',
    'baby coughing until vomiting',
    'baby cough with whoop sound',
    'pertussis signs in baby',
    'baby whooping cough dangerous',
    'baby coughing fits turning red',
    'pertussis vaccine baby',
    'DTaP vaccine and whooping cough',
    'baby 100 day cough',
    'baby coughing so hard they can\'t breathe',
  ],
  quickAnswer:
    'Whooping cough (pertussis) is a serious bacterial respiratory infection that is most dangerous for babies under 12 months who have not completed their vaccine series. It begins like a mild cold but progresses to severe coughing fits that can last for weeks. Babies may not "whoop" - instead they may gasp, turn red or blue, or stop breathing briefly during coughing episodes. Pertussis in young infants is a medical emergency. It is preventable through vaccination (DTaP for babies, Tdap for pregnant women and caregivers).',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Babies under 2 months are at the highest risk for severe pertussis because they have not yet received their first DTaP vaccine dose (given at 2 months). Protection depends on maternal Tdap vaccination during pregnancy (which passes antibodies) and cocooning (all close contacts being vaccinated). In very young infants, pertussis may not present with the classic cough - instead watch for episodes of apnea (pauses in breathing), feeding difficulty, and turning blue. Hospitalization is often required.',
    },
    {
      ageRange: '2-6 months',
      context:
        'Babies begin their DTaP vaccine series at 2 months, with additional doses at 4 and 6 months. They are not fully protected until they have had multiple doses. Pertussis in this age group typically starts as a cold (runny nose, mild cough) for 1-2 weeks, then progresses to severe coughing fits. These fits can cause the baby to turn red or purple, vomit after coughing, or make a "whoop" sound when gasping for air between coughs. Contact your pediatrician immediately if you suspect pertussis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With continued vaccination, babies become better protected but are still vulnerable. The characteristic coughing fits can last 1-6 weeks even with antibiotic treatment. Antibiotics (typically azithromycin) do not cure the cough but prevent the infected child from spreading pertussis to others. During coughing episodes, keep your baby calm and upright. Frequent small feeds help maintain nutrition since babies often vomit during or after coughing fits.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Pertussis in older babies and toddlers who have received most of their DTaP doses is generally less severe but can still cause weeks of miserable coughing. The classic pattern is paroxysms of rapid coughing followed by a high-pitched "whoop" when inhaling. This can persist for 6-10 weeks, earning pertussis the nickname "the 100-day cough." Close contacts should be treated with prophylactic antibiotics regardless of vaccination status.',
    },
  ],
  whenNormal: [
    'Your baby has a mild cold with runny nose and no coughing fits - most colds are not pertussis',
    'Your baby coughs occasionally during a cold but can feed normally and does not have coughing paroxysms',
    'Your fully vaccinated toddler has a lingering cough after a cold that is gradually improving',
  ],
  whenToMention: [
    'Your baby has a cough that is getting worse after the first week rather than better',
    'Your baby has coughing fits that end with vomiting, even if the fits are not yet severe',
    'You or someone in close contact with your baby has been diagnosed with or exposed to pertussis',
  ],
  whenToActNow: [
    'Your baby has severe coughing episodes where they cannot catch their breath, turn blue or red, or gasp with a "whoop" sound - seek emergency care',
    'Your baby stops breathing during or after a coughing fit (apnea), even briefly',
    'Your baby under 3 months has any persistent cough that is worsening, especially if not yet vaccinated',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-coughing-a-lot', 'baby-coughing-at-night', 'baby-breathing-fast'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Pertussis (Whooping Cough).',
      url: 'https://www.cdc.gov/pertussis/about/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Whooping Cough (Pertussis). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Whooping-Cough.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Pertussis Vaccines: WHO Position Paper.',
      url: 'https://www.who.int/publications/i/item/who-wer-9035',
    },
  ],
};
