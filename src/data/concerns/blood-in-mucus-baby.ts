import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'blood-in-mucus-baby',
  title: 'There\'s Blood in My Baby\'s Mucus',
  category: 'medical',
  searchTerms: [
    'baby blood in mucus',
    'baby bloody nose mucus',
    'baby booger with blood',
    'baby red mucus',
    'baby blood in snot',
    'baby bloody nasal discharge',
    'baby blood streaked mucus',
    'baby nose bleed mucus',
    'toddler blood in snot',
    'baby pink mucus',
  ],
  quickAnswer:
    'Small amounts of blood in a baby\'s nasal mucus are very common and usually not a cause for concern. The delicate blood vessels inside a baby\'s nose can easily break from dry air, frequent suctioning, rubbing, or the irritation of a cold. A few red or pink streaks in mucus are typically harmless. However, frequent or heavy nosebleeds, blood in coughed-up mucus, or blood accompanied by other symptoms warrants medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns and young infants may have blood-tinged nasal mucus from dry indoor air (especially in winter with heating), frequent use of a bulb syringe or nasal aspirator, or irritation from saline drops. The nasal passages are very small and the blood vessels are fragile. Using a cool-mist humidifier and applying a small amount of saline before suctioning can help. If your newborn has persistent or heavy nasal bleeding, or blood in coughed-up mucus, contact your pediatrician.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies with frequent colds may have repeated episodes of blood-streaked mucus as the nasal lining becomes irritated and inflamed. This is the most common cause and is usually harmless. Vigorous nose wiping or suctioning can also cause minor bleeding. If the blood is consistently in the mucus your baby coughs up (not just nasal), this could indicate irritation in the throat or airways and should be evaluated. Rarely, bloody nasal discharge from one nostril only could indicate a foreign object lodged in the nose.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers are more prone to nosebleeds (epistaxis) because they may pick their nose, rub it forcefully, or bump their face during play. Blood mixed with mucus is common during and after nosebleeds. Dry air and frequent upper respiratory infections increase the likelihood. If your toddler has very frequent nosebleeds (several times per week), bruises easily, or has bleeding from other sites (gums, in stool), your pediatrician may want to check for a bleeding disorder.',
    },
  ],
  whenNormal: [
    'Small pink or red streaks in nasal mucus during a cold or after suctioning, with no heavy bleeding',
    'Occasional blood-tinged boogers in dry weather that resolve with humidifier use',
    'A brief nosebleed in a toddler that stops within 10-15 minutes with gentle pressure',
    'Your baby is otherwise well with no bruising, no bleeding from other sites, and normal energy',
  ],
  whenToMention: [
    'Blood in the nasal mucus is persistent or occurs frequently even without colds or dry air',
    'The bleeding seems heavier than just streaks and is difficult to control',
    'You notice blood in your baby\'s coughed-up mucus or spit-up, not just nasal secretions',
  ],
  whenToActNow: [
    'Your baby has heavy, uncontrolled nasal bleeding that does not stop after 15-20 minutes of gentle pressure, or bleeding is accompanied by unusual bruising, petechiae (tiny purple dots on the skin), or bleeding from the gums',
    'Your baby is coughing up significant amounts of blood, has blood in vomit, or appears pale and unwell along with bloody mucus',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Nosebleeds.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Nosebleeds.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Nosebleeds in Children: Causes and Treatment.',
      url: 'https://www.mayoclinic.org/symptoms/nosebleeds/basics/causes/sym-20050914',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Nasal Congestion in Infants and Children.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Stuffy-Nose.aspx',
    },
  ],
};
