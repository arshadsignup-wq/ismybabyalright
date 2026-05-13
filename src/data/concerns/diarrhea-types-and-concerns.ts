import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'diarrhea-types-and-concerns',
  title: 'Types of Diarrhea: When to Worry',
  category: 'digestive',
  searchTerms: [
    'baby diarrhea when to worry',
    'baby watery poop',
    'toddler diarrhea types',
    'baby diarrhea how long too long',
    'green diarrhea baby',
    'mucus diarrhea baby',
    'chronic diarrhea toddler',
    'baby loose stools normal or diarrhea',
    'diarrhea in baby dehydration',
  ],
  quickAnswer:
    'Diarrhea in babies and toddlers is very common and is usually caused by a viral infection that resolves on its own within a few days. The main danger of diarrhea is dehydration, not the diarrhea itself. Knowing the difference between normal loose stools (common in breastfed babies), mild viral diarrhea, and more concerning types of diarrhea can help you know when to call your pediatrician and when to simply focus on keeping your child hydrated.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Breastfed newborns naturally have very loose, watery stools that can look like diarrhea to new parents. True diarrhea in a young baby is a sudden increase in frequency and wateriness beyond their normal pattern. Because young babies dehydrate quickly, even mild diarrhea in this age group deserves a call to your pediatrician. Watch closely for signs of dehydration: fewer wet diapers, no tears when crying, sunken fontanelle, or dry mouth.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Viral gastroenteritis becomes more common as babies begin to put everything in their mouths. Rotavirus and norovirus are common culprits. Diarrhea from a stomach virus is usually watery, may be green or yellow, and is often accompanied by vomiting and sometimes a low-grade fever. Most viral diarrhea lasts 3-7 days. The priority is maintaining hydration with breast milk, formula, or a pediatric electrolyte solution.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting solids can cause temporary changes in stool consistency. True diarrhea at this age is often viral but can also be caused by a food sensitivity or intolerance. "Toddler\'s diarrhea," characterized by multiple loose stools per day in an otherwise healthy, thriving child, can begin in this age range. If your baby has diarrhea after introducing a specific food, it may indicate a sensitivity to that food.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler\'s diarrhea (functional diarrhea) is the most common cause of chronic loose stools in children ages 1-3. Children have multiple loose, sometimes mucusy stools per day but are otherwise well, growing normally, and have good appetites. This is benign and usually resolves by age 4. Acute diarrhea from infections, dietary changes, or antibiotics is also common in this age group.',
    },
  ],
  whenNormal: [
    'Your breastfed baby has frequent loose, seedy stools which is their normal pattern, not true diarrhea',
    'Your baby has a stomach virus with watery stools for a few days but is still taking fluids and producing wet diapers',
    'Your toddler has loose stools after eating certain fruits, juice, or high-sugar foods, which resolves when the diet is adjusted',
    'Your otherwise healthy, growing toddler has 3-6 loose stools per day but no other symptoms (toddler\'s diarrhea)',
  ],
  whenToMention: [
    'Diarrhea lasts more than 7 days without improvement, especially if your child is losing weight or not growing well',
    'You consistently see blood or mucus in diarrhea stools',
    'Diarrhea seems to be triggered by specific foods and you suspect a food allergy or intolerance',
    'Your child has chronic loose stools and you want to confirm it is benign toddler\'s diarrhea rather than something else',
  ],
  whenToActNow: [
    'Your baby shows signs of dehydration: fewer than 3 wet diapers in 24 hours, no tears, sunken fontanelle, dry mouth, or unusual lethargy',
    'Diarrhea contains significant amounts of blood, is accompanied by high fever (over 102F/39C), or your baby is unable to keep any fluids down',
    'Your baby under 3 months has diarrhea of any kind, as young babies dehydrate quickly and need prompt medical evaluation',
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
        'Centers for Disease Control and Prevention. Rotavirus and Norovirus in Infants and Children.',
      url: 'https://www.cdc.gov/rotavirus/index.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Diarrhoeal Disease: Key Facts.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
    },
  ],
};
