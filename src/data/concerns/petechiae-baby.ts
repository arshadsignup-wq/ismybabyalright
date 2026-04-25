import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'petechiae-baby',
  title: 'Petechiae (Tiny Red Dots) on My Baby',
  category: 'skin',
  searchTerms: [
    'petechiae baby',
    'tiny red dots on baby skin',
    'red pinpoint dots baby',
    'baby has red spots that don\'t blanch',
    'petechial rash newborn',
    'purple dots on baby',
    'baby broken blood vessels',
    'when to worry about petechiae',
    'petechiae vs rash',
    'red freckles on baby',
  ],
  quickAnswer:
    'Petechiae are tiny red, purple, or brown dots caused by broken blood vessels just under the skin. While they can appear after vigorous crying, coughing, or vomiting in healthy babies, they can also signal serious conditions. Always contact your pediatrician if you notice petechiae, especially if they appear suddenly or are widespread.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In newborns, petechiae sometimes appear on the face or upper body after a difficult delivery involving pushing or a tight nuchal cord. These birth-related petechiae typically fade within a few days. However, new or spreading petechiae in a newborn require immediate medical evaluation to rule out infection or blood disorders.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Babies in this age may develop petechiae around the eyes, face, or neck after intense crying, coughing episodes, or vomiting. These are usually harmless and confined to areas above the chest. If your baby is otherwise well and the dots remain isolated to one area, they typically fade in 2-3 days without treatment.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may get petechiae from straining during bowel movements, repeated coughing from colds, or forceful vomiting. Check if the dots blanch (turn white when pressed)  -  petechiae do not blanch. If your child is active, eating normally, and has no fever, isolated petechiae after a clear trigger are usually not concerning.',
    },
    {
      ageRange: '24+ months',
      context:
        'Older toddlers occasionally develop petechiae after prolonged crying tantrums or respiratory infections with severe coughing. However, widespread petechiae without an obvious cause, especially if accompanied by bruising, pallor, or fatigue, warrant urgent medical evaluation for bleeding disorders or serious infections.',
    },
  ],
  whenNormal: [
    'A few tiny red dots around the eyes, face, or neck after intense crying, coughing, or vomiting',
    'The dots are confined to one area and do not spread across the body',
    'Your baby is otherwise acting completely normal, feeding well, and has no fever',
    'The petechiae gradually fade over 2-3 days without new ones appearing',
    'No bruising, pale skin, or other concerning symptoms accompany the dots',
  ],
  whenToMention: [
    'Petechiae appear frequently or seem to develop without an obvious trigger like crying or coughing',
    'The dots are spreading slowly over several days or appearing in new areas',
    'Your baby has had recent viral illnesses or seems more tired than usual',
    'You notice easy bruising elsewhere on the body along with petechiae',
  ],
  whenToActNow: [
    'Widespread petechiae suddenly appear across multiple body areas, especially the trunk and legs',
    'Petechiae are accompanied by fever, lethargy, pale skin, vomiting, stiff neck, or difficulty breathing',
    'Large bruises or bleeding (nose, gums, stool) occur along with the petechiae',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Petechiae and Purpura. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Petechiae-and-Purpura.aspx',
    },
    {
      org: 'Seattle Children\'s',
      citation:
        'Seattle Children\'s Hospital. Petechiae (Blood Spots) Care Advice.',
      url: 'https://www.seattlechildrens.org/conditions/a-z/petechiae/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Petechiae. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003232.htm',
    },
  ],
};
