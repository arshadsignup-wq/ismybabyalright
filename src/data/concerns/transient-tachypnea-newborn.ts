import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'transient-tachypnea-newborn',
  title: 'Transient Tachypnea of the Newborn',
  category: 'medical',
  searchTerms: [
    'transient tachypnea newborn',
    'TTN baby',
    'newborn breathing fast',
    'baby breathing fast after birth',
    'wet lung syndrome newborn',
    'rapid breathing newborn',
    'baby born by C-section breathing problems',
    'newborn respiratory distress',
    'baby grunting after birth',
  ],
  quickAnswer:
    'Transient tachypnea of the newborn (TTN), also called "wet lung," is a common condition where a newborn breathes faster than normal (more than 60 breaths per minute) because of retained fluid in the lungs. It is more common after cesarean delivery and typically resolves on its own within 24-72 hours. While it usually requires only supportive care, the baby needs monitoring to rule out other causes of fast breathing.',
  byAge: [
    {
      ageRange: '0-6 hours',
      context:
        'TTN typically presents within the first few hours of life. The baby breathes faster than 60 breaths per minute and may show nasal flaring, mild chest retractions, or grunting. The baby\'s oxygen levels may be slightly low. TTN is more common in babies delivered by cesarean section (because they miss the chest compression during vaginal delivery that helps squeeze fluid from the lungs), late preterm babies (34-37 weeks), and babies born to mothers with diabetes or asthma. The medical team will monitor the baby and may provide supplemental oxygen.',
    },
    {
      ageRange: '6-24 hours',
      context:
        'During this period, the baby is typically being monitored in the nursery or NICU. A chest X-ray may show fluid in the lung fissures or prominent blood vessels, which is characteristic of TTN. The baby may need supplemental oxygen via nasal cannula or an oxygen hood. Feeding may be delayed if the breathing rate is too high (above 60-80 breaths per minute), as fast breathing increases aspiration risk. IV fluids may be used for hydration until feeding is safe. Symptoms usually begin to improve by 12-24 hours.',
    },
    {
      ageRange: '24-72 hours',
      context:
        'Most cases of TTN resolve within 24-72 hours as the retained lung fluid is absorbed. The baby\'s breathing rate will gradually normalize, oxygen support can be weaned, and feeding can begin or progress. If symptoms have not improved significantly by 48-72 hours, the medical team will consider other diagnoses such as pneumonia, sepsis, or congenital heart disease. A resolved case of TTN has no long-term effects on the baby\'s lungs or health.',
    },
    {
      ageRange: '3-7 days',
      context:
        'If TTN has resolved, the baby should be breathing normally, feeding well, and ready for discharge. No specific follow-up is needed for TTN itself, as it leaves no lasting effects. However, if your baby was treated for TTN and you notice any return of fast breathing, difficulty feeding, or color changes after discharge, contact your pediatrician. These symptoms after a TTN diagnosis has resolved would suggest a different underlying issue.',
    },
  ],
  whenNormal: [
    'Your baby had TTN diagnosed in the hospital, received supportive care, and is now breathing normally',
    'The medical team has confirmed that lung fluid has cleared and oxygen levels are stable',
    'Your baby is feeding well and ready for or has been discharged home',
    'You were informed the TTN was likely related to cesarean delivery and resolved as expected',
  ],
  whenToMention: [
    'Your baby had TTN and you notice occasional episodes of slightly fast breathing after discharge',
    'You are concerned about your baby\'s breathing pattern during or after feeding',
    'Your baby was diagnosed with TTN and you want to understand if there are any long-term implications',
  ],
  whenToActNow: [
    'Your newborn is breathing faster than 60 breaths per minute at rest, has nasal flaring, grunting, or chest retractions, as these signs of respiratory distress require immediate medical evaluation',
    'Your baby has a bluish discoloration of the lips or skin, is excessively sleepy, or is refusing to feed, as these could indicate worsening respiratory compromise or another condition',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Transient Tachypnea of the Newborn. NeoReviews.',
      url: 'https://publications.aap.org/neoreviews/article/21/4/e228/979/Transient-Tachypnea-of-the-Newborn',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Transient Tachypnea of the Newborn. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/007233.htm',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Common Conditions in Newborns.',
      url: 'https://www.marchofdimes.org/find-support/topics/birth/common-conditions-newborns',
    },
  ],
};
