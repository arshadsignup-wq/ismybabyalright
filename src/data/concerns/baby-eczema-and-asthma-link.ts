import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eczema-and-asthma-link',
  title: 'Eczema and Asthma Link (Atopic March)',
  category: 'skin',
  searchTerms: [
    'baby eczema asthma link',
    'atopic march baby',
    'eczema leads to asthma baby',
    'baby eczema allergies later',
    'will my baby get asthma from eczema',
    'atopic triad baby',
    'eczema allergy progression baby',
    'baby eczema hay fever connection',
    'eczema and allergies baby risk',
    'preventing asthma after eczema baby',
  ],
  quickAnswer:
    'The "atopic march" describes a pattern where eczema in infancy is followed by food allergies, hay fever, and asthma later in childhood. While having eczema does increase the risk, it is not a certainty: most children with eczema do not develop all these conditions. Early, effective eczema treatment and allergen introduction may help reduce the risk.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Eczema is often the first sign of the atopic march, commonly appearing in the first few months of life. Research suggests that aggressive early treatment of eczema, including maintaining a strong skin barrier with consistent moisturizing, may help reduce the risk of developing food allergies and asthma later. This is an active area of ongoing research.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Studies suggest that food allergens may enter through broken eczema skin and trigger allergic sensitization. This is why some experts recommend early introduction of common allergens (like peanut) alongside proactive eczema management. The LEAP study showed that early peanut introduction reduced peanut allergy in high-risk infants with eczema.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If your baby has moderate to severe eczema, your pediatrician may recommend allergy testing before introducing high-risk foods, or may encourage early introduction under guidance. Not all babies with eczema will develop food allergies, but monitoring for reactions when introducing new foods is wise.',
    },
    {
      ageRange: '12-24 months',
      context:
        'By toddlerhood, some children with eczema begin to show signs of respiratory allergies or wheezing. About 30% of children with eczema go on to develop asthma, compared to about 10% of the general population. If your toddler has eczema and begins wheezing, coughing at night, or having breathing trouble, discuss this with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby has eczema but shows no signs of food allergies or breathing issues',
    'Eczema is well-controlled with moisturizing and your baby is thriving overall',
    'A family history of eczema, asthma, or allergies is present but your baby is developing normally',
  ],
  whenToMention: [
    'You want to discuss the atopic march and what you can do to reduce your baby\'s risk',
    'Your baby has moderate to severe eczema and you are starting solid foods',
    'You notice your baby wheezing, coughing repeatedly, or having breathing difficulty during colds',
    'You want to discuss allergy testing given your baby\'s eczema history',
  ],
  whenToActNow: [
    'Your baby has a severe allergic reaction (hives, vomiting, difficulty breathing) after eating a food',
    'Your baby is wheezing or having significant breathing difficulty',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. The Atopic March: From Eczema to Asthma.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/eczema-atopic-dermatitis',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Learning Early About Peanut Allergy (LEAP) Study. New England Journal of Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25705822/',
    },
  ],
  relatedConcernSlugs: ['eczema', 'eczema-and-food-allergy-link', 'baby-eczema-triggers-identification'],
};
