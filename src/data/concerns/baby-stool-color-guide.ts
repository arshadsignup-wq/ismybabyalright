import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-stool-color-guide',
  title: 'Complete Stool Color Guide for Baby',
  category: 'digestive',
  searchTerms: [
    'baby stool color guide',
    'baby poop color chart',
    'baby poop color meaning',
    'what color baby poop normal',
    'baby poop color when to worry',
    'infant stool color guide',
    'baby poop color changes',
    'breastfed baby poop color',
    'formula fed baby poop color',
    'baby poop red orange yellow green',
  ],
  quickAnswer:
    'Baby stool color varies widely and most colors are normal. Yellow, green, brown, and tan are all normal stool colors. Red may indicate blood or food coloring. The two colors that always need immediate medical attention are white or pale grey (which could indicate a liver problem) and black after the newborn period (which could indicate upper GI bleeding, unless explained by iron supplements).',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn stools progress from black meconium to transitional green-brown to yellow (breastfed) or tan-brown (formula-fed) within the first week. Breastfed baby poop is typically yellow, seedy, and loose. Formula-fed poop is usually tan, thicker, and more formed. Green stool is common and almost always normal.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Stool color may vary day to day and is influenced by what the baby (or breastfeeding mother) eats. Green stools can occur with fast gut transit, foremilk-hindmilk imbalance, or mild illness. Orange stool is often from beta-carotene in formula or breast milk. All of these are normal.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With the introduction of solids, stool colors change dramatically based on foods eaten. Orange from carrots and sweet potatoes, green from peas and green vegetables, red from beets and tomatoes, and dark from blueberries are all normal food-related changes.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler stool colors continue to reflect dietary intake. The two stool colors that always warrant medical attention are white/chalky/pale grey stool (call your pediatrician the same day) and persistently black, tarry stool not explained by diet or iron.',
    },
  ],
  whenNormal: [
    'Yellow, green, brown, tan, or orange stool in a baby who is eating and growing well',
    'Stool color changing based on foods recently eaten',
    'Green stool from fast gut transit during a mild illness',
  ],
  whenToMention: [
    'Red stool that is not explained by red foods eaten in the past 24 hours',
    'Persistent changes in stool color that concern you',
    'Very pale or clay-colored stool',
  ],
  whenToActNow: [
    'White, chalky, or pale grey stool, which can indicate a bile duct obstruction (biliary atresia) and needs urgent evaluation',
    'Black, tarry stool after the newborn meconium period that is not from iron supplements',
    'Red or maroon stool with abdominal pain suggesting GI bleeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby\'s First Bowel Movements. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Babys-First-Bowel-Movements.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Biliary Atresia.',
      url: 'https://www.niddk.nih.gov/health-information/liver-disease/biliary-atresia',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stool Colors. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Poops-Many-Colors.aspx',
    },
  ],
  relatedConcernSlugs: ['green-poop', 'black-poop', 'white-poop', 'orange-poop', 'baby-poop-color-changes-with-solids'],
};
