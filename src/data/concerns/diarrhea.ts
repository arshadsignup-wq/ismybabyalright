import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'diarrhea',
  title: 'Baby Diarrhea',
  category: 'digestive',
  searchTerms: [
    'baby diarrhea',
    'baby watery poop',
    'baby loose stools',
    'newborn diarrhea',
    'baby diarrhea how many poops',
    'baby diarrhea vs normal poop',
    'infant diarrhea when to worry',
    'baby diarrhea dehydration',
    'baby diarrhea after starting solids',
    'breastfed baby diarrhea',
    'baby diarrhea teething',
  ],
  quickAnswer:
    'Baby diarrhea is defined as a sudden increase in the frequency and wateriness of stools compared to your baby\'s normal pattern. Breastfed babies naturally have loose, seedy stools, which is not diarrhea. True diarrhea in babies is most often caused by a viral infection and usually resolves on its own, but preventing dehydration is the most important thing you can do.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Breastfed babies often have very loose, yellow, seedy stools multiple times per day, which is completely normal. Diarrhea in this age group means stools are significantly more watery and frequent than your baby\'s baseline. In young infants, diarrhea can lead to dehydration more quickly, so monitoring wet diapers closely is essential.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solid foods, their stool consistency normally changes and becomes more formed. Diarrhea at this age is often caused by viral gastroenteritis or a reaction to a new food. Continue breastfeeding or formula feeding as usual during diarrhea episodes, and offer small amounts of water if your baby is over 6 months.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler diarrhea, also called functional diarrhea, is a common condition where toddlers have multiple loose stools per day but are otherwise healthy and growing well. It is often related to excessive juice or fluid intake. True infectious diarrhea at this age is usually caused by rotavirus or norovirus and typically resolves within 5 to 7 days.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Persistent or chronic diarrhea in this age group may warrant investigation for food intolerances, celiac disease, or other digestive conditions. However, most episodes of diarrhea in toddlers are acute and viral. Keeping your child hydrated with an oral rehydration solution and a normal diet is the recommended approach.',
    },
  ],
  whenNormal: [
    'Your breastfed baby has frequent loose, seedy stools but is feeding well and gaining weight',
    'Your baby has a few loose stools after trying a new food but is otherwise happy and well',
    'Your toddler has loose stools but is active, eating, drinking, and growing normally',
    'Your baby has slightly looser stools during teething but no other signs of illness',
  ],
  whenToMention: [
    'Diarrhea lasts more than a few days without improvement',
    'Your baby has diarrhea along with a low-grade fever but is still drinking fluids',
    'You notice undigested food consistently appearing in watery stools',
    'Your baby has recurrent episodes of diarrhea that seem related to a specific food',
  ],
  whenToActNow: [
    'Your baby shows signs of dehydration: fewer than 6 wet diapers in 24 hours, no tears when crying, dry mouth, sunken fontanelle, or unusual drowsiness',
    'There is blood or mucus in the diarrhea, or stools are black and tarry',
    'Your baby under 3 months has diarrhea with fever above 100.4 degrees Fahrenheit (38 degrees Celsius)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diarrhea in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Diarrhea.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Diarrhea: Common Illness, Global Killer.',
      url: 'https://www.cdc.gov/healthywater/global/diarrhea-burden.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Diarrhoeal disease fact sheet.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
    },
  ],
};
