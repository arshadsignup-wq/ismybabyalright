import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bloody-stool',
  title: 'Blood in Baby\'s Stool',
  category: 'digestive',
  searchTerms: [
    'blood in baby poop',
    'baby bloody stool',
    'red streaks in baby poop',
    'baby stool has blood',
    'blood in infant stool',
    'baby poop blood mucus',
    'breastfed baby blood in stool',
    'baby rectal bleeding',
    'is blood in baby poop normal',
    'baby poop red spots',
  ],
  quickAnswer:
    'Seeing blood in your baby\'s stool is understandably alarming, but the most common cause in young babies is a small anal fissure (a tiny tear from passing stool) or swallowed maternal blood from cracked nipples during breastfeeding. However, blood in stool always deserves medical evaluation to rule out less common but important causes like a cow\'s milk protein allergy or infection.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In newborns, the most common causes of blood in stool are swallowed maternal blood from breastfeeding and cow\'s milk protein intolerance, which can cause tiny streaks of blood mixed with mucus. Anal fissures from passing stool can also cause small bright red streaks on the outside of the stool. Any blood in a newborn\'s stool should be evaluated by your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Cow\'s milk protein allergy remains a common cause in this age range, affecting about 2-3% of infants. Blood may appear as small flecks or streaks mixed with mucus. If your breastfed baby has bloody stools, your doctor may suggest you eliminate dairy from your diet for 2-4 weeks to see if symptoms improve.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solids, constipation may lead to hard stools that cause anal fissures and bright red blood on the surface of the stool or on the diaper. Infections from bacteria like Salmonella can also cause bloody diarrhea. Intussusception, though rare, can cause currant jelly-like stools and is a medical emergency requiring immediate attention.',
    },
    {
      ageRange: '12-36 months',
      context:
        'In toddlers, the most common causes of bloody stool continue to be constipation-related fissures and infectious gastroenteritis. Allergic colitis may persist or emerge. Recurrent painless rectal bleeding could indicate a Meckel diverticulum or juvenile polyp, both of which your doctor can evaluate.',
    },
  ],
  whenNormal: [
    'You see a single small streak of bright red blood on the outside of a hard stool, likely from a small fissure',
    'Your breastfed baby has a small amount of blood in stool and you have cracked or bleeding nipples',
    'Your baby recently ate beets, red gelatin, or tomatoes and the stool appears reddish but is not actually blood',
  ],
  whenToMention: [
    'You notice small streaks or flecks of blood in your baby\'s stool, even if your baby seems well',
    'Blood in stool is accompanied by mucus, suggesting possible allergic colitis or infection',
    'Your baby has recurring episodes of blood in stool, even if small amounts',
    'Your breastfed baby has persistent blood-streaked stools and you want to discuss a potential dairy elimination trial',
  ],
  whenToActNow: [
    'Your baby has large amounts of blood in the stool, bloody diarrhea, or dark red currant jelly-like stools, which could indicate intussusception or another serious condition',
    'Your baby has bloody stool along with vomiting, severe abdominal pain with episodes of inconsolable screaming, or lethargy',
    'Your baby passes black, tarry stools (not from iron supplements) which can indicate bleeding higher in the digestive tract',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Blood in Infant\'s Stool. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Blood-in-Infants-Stool.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Many Colors of Poop. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/The-Many-Colors-of-Poop.aspx',
    },
    {
      org: 'NASPGHAN',
      citation:
        'North American Society for Pediatric Gastroenterology, Hepatology, and Nutrition. Rectal Bleeding in Infants.',
      url: 'https://www.naspghan.org/',
    },
  ],
};
