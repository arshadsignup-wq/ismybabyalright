import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-nasal-aspirator-frequency',
  title: 'How Often Can I Suction My Baby\'s Nose?',
  category: 'medical',
  searchTerms: [
    'how often suction baby nose',
    'nasal aspirator frequency baby',
    'too much nose suctioning baby',
    'bulb syringe baby how often',
    'baby nose suctioning limit',
    'nosefrida how often to use',
    'baby nasal suction irritation',
    'suctioning baby nose before feeding',
    'nasal aspirator best practice baby',
    'baby nose bleeding from suctioning',
  ],
  quickAnswer:
    'Limit nasal suctioning to 3-4 times per day, ideally before feedings and sleep when congestion interferes most. Over-suctioning can irritate and swell the nasal passages, actually making congestion worse. Always use saline drops first to loosen mucus before suctioning, and clean your suctioning device thoroughly after each use.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Gentle suctioning before feedings is most helpful because young babies need clear nasal passages to nurse or bottle feed. Use 1-2 saline drops per nostril, wait 30 seconds, then gently suction. Limit to 3-4 times per day. If you notice blood-tinged mucus from suctioning, you are being too aggressive or suctioning too frequently. Use less pressure and reduce frequency.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue the same approach: saline first, then gentle suction, limited to 3-4 times daily. The best times are before morning feed, before nap, before afternoon feed, and before bedtime. Some babies do well with just saline drops and no suctioning if the mucus is thin. Let gravity help by holding your baby slightly upright after saline drops.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies often resist suctioning vigorously. If suctioning becomes a battle, try using just saline drops or spray, which can be enough to thin mucus and trigger a sneeze that naturally clears the passages. Steam from a bathroom can also help. Only suction when congestion is clearly interfering with feeding or sleep.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Many toddlers strongly resist nasal suctioning. Focus on alternative methods like saline spray, humidifier, and steam. If suctioning is needed, doing it quickly and confidently (while another caregiver holds the child securely) is safer than a prolonged struggle. Begin encouraging nose-blowing attempts.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Transition away from suctioning and toward teaching nose-blowing. Most children can learn to blow their nose by age 2-3 with practice. In the meantime, saline spray and a humidifier are usually sufficient. Reserve suctioning for situations where the child is truly unable to clear thick mucus and it is interfering with breathing or sleeping.',
    },
  ],
  whenNormal: [
    'You suction your baby\'s nose 2-4 times per day during a cold, with saline drops used beforehand',
    'Your baby fusses during suctioning but recovers quickly and breathes better afterward',
    'The mucus is clear or slightly colored and comes out easily with gentle suction',
  ],
  whenToMention: [
    'You notice blood in the mucus after suctioning, suggesting irritation of the nasal passages',
    'Congestion does not improve despite regular suctioning and your baby is struggling to feed',
    'You are unsure about the best type of nasal aspirator or proper suctioning technique',
  ],
  whenToActNow: [
    'Your baby has significant nasal bleeding from suctioning that does not stop within 10 minutes of gentle pressure',
    'Your baby cannot breathe comfortably despite suctioning and shows signs of respiratory distress such as chest retractions, flaring nostrils, or blue-tinged skin',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-nasal-congestion-relief-methods',
    'baby-saline-drops-usage',
    'baby-nosebleed',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nasal Saline and Suctioning. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Caring-for-Your-Childs-Cold-or-Flu.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Common cold in babies.',
      url: 'https://www.mayoclinic.org/diseases-conditions/common-cold-in-babies/diagnosis-treatment/drc-20351657',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Nasal hygiene in infants. Italian Journal of Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25399407/',
    },
  ],
};
