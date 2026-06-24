import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'macrolide-resistant-pertussis-infant',
  title: 'Macrolide-Resistant Pertussis (Whooping Cough) in Infants',
  category: 'medical',
  searchTerms: [
    'pertussis resistant to antibiotics baby',
    'whooping cough antibiotic resistance',
    'macrolide resistant pertussis',
    'pertussis treatment not working baby',
    'whooping cough azithromycin resistance',
    'pertussis baby serious',
    'whooping cough infant hospital',
    'pertussis vaccine baby protection',
    'whooping cough newborn danger',
    'erythromycin resistant pertussis',
  ],
  quickAnswer:
    'Macrolide-resistant pertussis (whooping cough) is an emerging concern, particularly in some Asian countries, though it remains uncommon in the United States. Standard treatment for pertussis is macrolide antibiotics (azithromycin, erythromycin, or clarithromycin), and resistance means these first-line drugs may be ineffective. Pertussis is most dangerous in infants under 6 months who are too young to be fully vaccinated. The Tdap vaccine during pregnancy (weeks 27-36) is the most effective way to protect newborns, as maternal antibodies transfer to the baby and provide protection until they can be vaccinated at 2 months.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'This is the highest-risk period for severe pertussis because babies have not yet received their first DTaP vaccine dose. Pertussis in very young infants can cause apnea (breathing pauses), pneumonia, seizures, brain damage, and death. If the mother received Tdap during pregnancy, the baby has some passive protection from maternal antibodies. If a young infant develops a persistent cough, especially with a "whoop" sound, post-cough vomiting, or apnea episodes, seek immediate medical evaluation. Hospitalization for monitoring is often necessary.',
    },
    {
      ageRange: '2-6 months',
      context:
        'Babies receive DTaP vaccine doses at 2, 4, and 6 months, with increasing protection after each dose. Until the series is complete, babies remain vulnerable. If pertussis is diagnosed and standard macrolide antibiotics are not effective (the baby is not improving or culture shows resistance), alternative antibiotics such as trimethoprim-sulfamethoxazole may be used, though options are limited for young infants. Close contacts of the baby should receive prophylactic antibiotics regardless of vaccination status to create a "cocoon" of protection.',
    },
    {
      ageRange: '6-36 months',
      context:
        'After completing the primary DTaP series (doses at 2, 4, 6, and 15-18 months), children have good but not complete protection against pertussis. Breakthrough infections can occur but are generally milder. The emergence of macrolide resistance globally underscores the importance of vaccination, hygiene, and prompt treatment. If your child develops a persistent cough lasting more than 2 weeks with paroxysms (coughing fits), see your pediatrician for evaluation. A booster dose at 15-18 months and again at 4-6 years maintains protection.',
    },
  ],
  whenNormal: [
    'Your baby has received age-appropriate DTaP vaccinations and you received Tdap during pregnancy.',
    'Your baby has a typical cold with cough that is improving and does not have coughing fits or vomiting after coughing.',
    'Your baby was treated for pertussis with antibiotics and is recovering as expected.',
  ],
  whenToMention: [
    'Your baby has a cough that has lasted more than 2 weeks and includes paroxysms (fits of rapid coughing).',
    'Your baby vomits after coughing episodes or makes a "whooping" sound when breathing in after coughing.',
    'You or a close contact of your baby has been diagnosed with pertussis.',
    'Your baby was treated for pertussis but is not improving on antibiotics.',
  ],
  whenToActNow: [
    'Your baby under 6 months has episodes of apnea (stops breathing), turns blue, or has extreme difficulty breathing.',
    'Your baby has uncontrollable coughing fits that prevent breathing or feeding.',
    'Your newborn has any signs of respiratory distress: grunting, nasal flaring, chest retractions, or persistent cough.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'rsv-baby',
    'baby-breathing-fast',
    'wheezing',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC. Pertussis (Whooping Cough): Treatment.',
      url: 'https://www.cdc.gov/pertussis/clinical/treatment.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Red Book: Pertussis (Whooping Cough). 2021.',
      url: 'https://publications.aap.org/redbook/book/347/chapter/5755283/Pertussis-Whooping-Cough',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Macrolide-Resistant Bordetella pertussis: Global Epidemiology and Clinical Implications. Journal of Clinical Microbiology, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31270178/',
    },
  ],
};
