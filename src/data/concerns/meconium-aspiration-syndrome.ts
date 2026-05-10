import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'meconium-aspiration-syndrome',
  title: 'Meconium Aspiration Syndrome',
  category: 'medical',
  searchTerms: [
    'meconium aspiration syndrome',
    'baby swallowed meconium',
    'meconium in amniotic fluid',
    'baby inhaled meconium during birth',
    'meconium stained amniotic fluid',
    'MAS newborn',
    'baby breathing problems after birth meconium',
    'green amniotic fluid baby',
  ],
  quickAnswer:
    'Meconium aspiration syndrome (MAS) occurs when a baby inhales a mixture of meconium (first stool) and amniotic fluid before or during delivery. It can cause breathing difficulties that range from mild to severe. Most babies with MAS recover fully with appropriate medical care, but it requires close monitoring in the hospital.',
  byAge: [
    {
      ageRange: '0-24 hours',
      context:
        'MAS is diagnosed at or shortly after birth. If meconium-stained amniotic fluid is observed during delivery, the medical team will assess the baby immediately. Symptoms can include rapid or labored breathing, a barrel-shaped chest, grunting sounds, and a bluish skin color (cyanosis). Mild cases may only require supplemental oxygen and observation, while severe cases can require mechanical ventilation or even extracorporeal membrane oxygenation (ECMO). Suctioning of the airway at birth is performed if the baby is not vigorous.',
    },
    {
      ageRange: '1-3 days',
      context:
        'During this period, babies with MAS are typically monitored in the NICU. Chest X-rays may show patchy or streaky areas in the lungs. Complications to watch for include pneumothorax (air leak), persistent pulmonary hypertension of the newborn (PPHN), and secondary infection. Treatment may include antibiotics, surfactant therapy, and respiratory support. Most mild to moderate cases begin improving within 48-72 hours.',
    },
    {
      ageRange: '3-7 days',
      context:
        'Babies who responded well to initial treatment often show significant improvement by this point. Supplemental oxygen may be weaned, and feeding can usually begin or resume. Some infants may still require respiratory support if the aspiration was severe. Doctors will continue to monitor oxygen saturation and watch for signs of infection or ongoing lung inflammation.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'Most babies with MAS are discharged home within 1-2 weeks. After discharge, some infants may have increased susceptibility to respiratory infections during the first year of life. Follow-up appointments will assess breathing, feeding, and overall development. Parents should watch for any signs of respiratory distress such as fast breathing, nasal flaring, or chest retractions and contact their pediatrician immediately if they occur.',
    },
  ],
  whenNormal: [
    'Meconium-stained amniotic fluid was noted at delivery but the baby was vigorous, cried immediately, and has normal breathing',
    'Baby was briefly observed after meconium exposure and cleared by the medical team with no respiratory symptoms',
    'Baby had mild MAS, received treatment, and is now breathing normally with stable oxygen levels',
    'Baby has been discharged from the hospital with a clear follow-up plan and no ongoing respiratory symptoms',
  ],
  whenToMention: [
    'Your baby had MAS and you notice occasional fast breathing or mild retractions after discharge',
    'Your baby seems to tire easily during feedings or takes longer than expected to finish a feed',
    'You are concerned about your baby catching respiratory illnesses after a history of MAS',
  ],
  whenToActNow: [
    'Your baby is breathing very fast (more than 60 breaths per minute), has nasal flaring, grunting, or visible rib retractions, as these are signs of significant respiratory distress',
    'Your baby has a bluish color around the lips or fingertips (cyanosis), is limp, or is not responding normally, as these may indicate a life-threatening emergency',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Meconium Aspiration. Pediatrics In Review.',
      url: 'https://publications.aap.org/pediatricsinreview/article/26/11/e72/32684/Meconium-Aspiration',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Meconium Aspiration Syndrome. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001596.htm',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Meconium Aspiration.',
      url: 'https://www.marchofdimes.org/find-support/topics/birth/meconium-aspiration',
    },
  ],
};
