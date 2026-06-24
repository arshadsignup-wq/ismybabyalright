import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'whooping-cough-resurgence-infant',
  title: 'Whooping Cough (Pertussis) and My Infant',
  category: 'medical',
  searchTerms: [
    'whooping cough baby',
    'pertussis infant symptoms',
    'whooping cough resurgence',
    'baby whooping cough risk',
    'pertussis vaccine baby',
    'whooping cough newborn danger',
    'baby coughing until vomiting pertussis',
    'whooping cough sound baby',
    'Tdap pregnancy pertussis',
    'pertussis outbreak infant',
  ],
  quickAnswer:
    'Whooping cough (pertussis) is a highly contagious bacterial respiratory infection that is especially dangerous for infants under 12 months, particularly those under 6 months who are too young to be fully vaccinated. Pertussis has been resurging in recent years despite vaccination efforts. The best protection for newborns is maternal Tdap vaccination during pregnancy (ideally at 27-36 weeks) and ensuring all caregivers are up to date on their Tdap boosters. Infants with pertussis often need hospitalization.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'This is the most dangerous period for pertussis. Infants this young may not have the classic "whoop" sound and instead may have episodes of apnea (pauses in breathing), turning blue, or simply stopping breathing. They are too young to have received their first DTaP vaccine dose. Protection comes from maternal antibodies (if the mother received Tdap during pregnancy) and from "cocooning" — ensuring everyone who comes in close contact with the baby is vaccinated. If your newborn has a persistent cough, especially with vomiting or any breathing difficulties, seek medical evaluation immediately.',
    },
    {
      ageRange: '2-6 months',
      context:
        'Babies receive their first DTaP vaccine dose at 2 months, with additional doses at 4 and 6 months. Protection increases with each dose but is not considered reliable until after the third dose at 6 months. Symptoms of pertussis in infants include severe coughing fits that may end in vomiting, the characteristic "whoop" sound when gasping for air between coughs (though this is often absent in very young infants), turning red or blue during coughing fits, and exhaustion after coughing episodes. Pertussis can last 6-10 weeks and is sometimes called the "100-day cough."',
    },
    {
      ageRange: '6-12 months',
      context:
        'After the third DTaP dose at 6 months, infants have better but not complete protection. A booster at 15-18 months provides additional immunity. If your older infant develops a cough that worsens over 1-2 weeks, occurs in intense fits, is followed by vomiting or a whooping sound, and does not improve with typical cold treatments, contact your pediatrician. Pertussis is diagnosed through a nasopharyngeal swab and is treated with antibiotics (usually azithromycin), which are most effective when started early in the illness.',
    },
  ],
  whenNormal: [
    'Your baby has a mild cold with a light cough that is improving over a few days',
    'Your baby coughs occasionally during feeding — this can be related to swallowing and is usually not pertussis',
    'Your baby received their DTaP vaccines on schedule and has no known pertussis exposure',
  ],
  whenToMention: [
    'Your baby has a cough that is worsening over 1-2 weeks rather than improving',
    'Your baby has coughing fits followed by vomiting or difficulty catching their breath',
    'Your baby has been exposed to someone diagnosed with pertussis',
  ],
  whenToActNow: [
    'Your baby turns blue or stops breathing during or after a coughing fit — call 911 immediately',
    'Your baby is under 3 months with any persistent cough, especially with vomiting or breathing difficulties',
    'Your baby has a whooping sound after coughing fits or has severe coughing episodes that leave them exhausted and unable to eat or drink',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'vaccine-side-effects-baby',
    'rsv-baby',
    'baby-breathing-fast',
    'wheezing',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Pertussis (Whooping Cough).',
      url: 'https://www.cdc.gov/pertussis/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Whooping Cough. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Whooping-Cough.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Pertussis in Infants. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK519008/',
    },
  ],
};
