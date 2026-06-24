import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-chronic-diarrhea-no-infection',
  title: 'My Baby Has Chronic Diarrhea with No Infection',
  category: 'digestive',
  searchTerms: [
    'baby chronic diarrhea no infection',
    'toddler diarrhea normal',
    'baby loose stools months',
    'functional diarrhea toddler',
    'baby watery poop not sick',
    'chronic diarrhea baby causes',
    'toddler diarrhea diet',
    'baby persistent loose stools',
    'malabsorption baby signs',
    'baby diarrhea but happy',
  ],
  quickAnswer:
    'Chronic diarrhea in babies and toddlers without infection is relatively common and is often due to functional causes like toddler\'s diarrhea (functional diarrhea), dietary factors, or food sensitivities. Toddler\'s diarrhea is the most common cause of chronic diarrhea in children ages 1-5 and typically resolves on its own. However, persistent diarrhea should be evaluated to rule out less common causes like celiac disease, food allergies, or malabsorption conditions.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Breastfed babies normally have frequent, loose, mustard-colored stools that can look like diarrhea to concerned parents. A breastfed baby may have a stool after every feeding, or go several days without one - both patterns can be normal. Formula-fed babies tend to have firmer, less frequent stools. True diarrhea in young babies - watery, frequent stools that are a significant change from their normal pattern - should always be evaluated, especially if it persists beyond a few days. Cow\'s milk protein allergy and lactose overload can cause persistent loose stools in this age group.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, stool patterns change. Some foods (particularly fruits with high sorbitol content like pears, prunes, and apple juice) can cause loose stools. If your baby has persistent loose stools after starting solids, consider whether any new food correlates with the symptoms. Food protein-induced enterocolitis syndrome (FPIES) can cause diarrhea reactions to certain foods. If your baby is growing well and is otherwise happy and healthy, the loose stools may simply reflect dietary composition.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler\'s diarrhea (functional diarrhea) is the most common cause of chronic loose stools in this age group. Affected children typically have 3-6 loose stools per day but are growing well and have no other symptoms. Common dietary contributors include excess juice, fruit, or sugar-free sweeteners. Increasing dietary fat and fiber while limiting juice intake often helps. If your toddler has diarrhea with poor weight gain, blood in stool, or persistent abdominal pain, further workup including celiac disease screening may be warranted.',
    },
  ],
  whenNormal: [
    'Your breastfed baby has frequent, loose, seedy stools but is growing well and seems content.',
    'Your toddler has 3-5 loose stools per day but is happy, active, and gaining weight normally.',
    'Loose stools improve when you adjust diet by reducing juice or increasing fat and fiber.',
  ],
  whenToMention: [
    'Diarrhea has persisted for more than 2-3 weeks without an identified infection.',
    'Your child has loose stools and is not gaining weight as expected.',
    'You notice undigested food frequently in your child\'s stools (beyond occasional recognizable pieces, which is normal).',
    'There is a family history of celiac disease, inflammatory bowel disease, or food allergies.',
  ],
  whenToActNow: [
    'Your baby shows signs of dehydration - dry mouth, sunken fontanelle, fewer than 4 wet diapers in 24 hours, lethargy.',
    'There is blood or mucus in the diarrhea, especially if accompanied by fever or abdominal distension.',
    'Your baby is losing weight or has fallen off their growth curve significantly.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-diarrhea-when-to-worry',
    'baby-failure-to-thrive-signs',
    'antibiotic-use-infant-gut-damage',
    'baby-dehydration-hot-weather',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Chronic Diarrhea in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Chronic-Diarrhea-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Chronic Diarrhea in Children. NIDDK.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/chronic-diarrhea-children',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toddler\'s Diarrhea. Pediatrics in Review, 2020.',
      url: 'https://publications.aap.org/pediatricsinreview/article/41/2/82/35245',
    },
  ],
};
