import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-with-fever',
  title: 'Baby Rash Accompanied by Fever',
  category: 'skin',
  searchTerms: [
    'baby rash with fever',
    'baby fever and rash',
    'infant rash fever',
    'baby rash after fever',
    'baby rash during fever',
    'toddler fever rash',
    'baby viral rash fever',
    'baby rash high temperature',
    'rash with fever in baby',
    'roseola rash fever baby',
  ],
  quickAnswer:
    'Rashes that occur with or after a fever are very common in babies and are most often caused by viral infections. Roseola is the classic example, where a rash appears after the fever breaks. While most causes are benign, a rash with fever should always be monitored carefully, and a non-blanching rash with fever needs immediate medical attention.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any fever (100.4 degrees F or higher) in a baby under 3 months requires immediate medical evaluation, regardless of whether a rash is present. Infections can progress quickly in very young infants. Do not wait to see if a rash develops or improves; contact your pediatrician or go to the emergency department right away.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Viral infections become more common as maternal antibodies wane. Roseola (HHV-6) often first occurs at this age, causing 3 to 5 days of high fever followed by a pink rash on the trunk. Other viral exanthems can also cause rash with fever. If your baby has a fever with rash but is feeding well and not lethargic, contact your pediatrician for guidance.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is the peak age for roseola and many other common viral illnesses that cause rash with fever. Hand-foot-and-mouth disease causes fever with blisters in the mouth and on hands and feet. Most of these are self-limiting. Watch for signs of dehydration if your baby is refusing to drink due to mouth sores.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are exposed to many viruses in daycare and social settings that can cause fever with rash. Scarlet fever, associated with strep throat, causes a sandpaper rash with high fever and requires antibiotic treatment. Fifth disease causes a characteristic slapped-cheek appearance with fever. Always check if the rash blanches.',
    },
  ],
  whenNormal: [
    'A pink rash that appears after the fever breaks and the child is acting well, consistent with roseola',
    'Mild rash with a low-grade fever and a known viral illness going around',
    'A rash that develops in the area of a recent vaccine injection with mild fever for 1 to 2 days',
  ],
  whenToMention: [
    'Rash with fever that persists for more than 3 days or is worsening',
    'Your baby has a rash with fever and seems more uncomfortable or fussy than usual',
    'A rash with fever develops and you are unsure of the cause',
  ],
  whenToActNow: [
    'Any fever in a baby under 3 months old, with or without a rash',
    'A non-blanching rash (does not fade when a glass is pressed against it) with fever, which could indicate meningococcal disease',
    'Your baby has a rash with high fever and is lethargic, not feeding, has a stiff neck, or is difficult to wake',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Roseola. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Roseola.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fever in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Hand, Foot, and Mouth Disease.',
      url: 'https://www.cdc.gov/hand-foot-mouth/index.html',
    },
  ],
  relatedConcernSlugs: ['viral-rash-baby', 'roseola-rash', 'hand-foot-mouth', 'fifth-disease-rash', 'petechiae-baby'],
};
