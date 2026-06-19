import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'gastrocolic-reflex-pooping-after-feeds',
  title: 'Baby Poops During or After Every Feed (Gastrocolic Reflex)',
  category: 'digestive',
  searchTerms: [
    'baby poops every time they eat',
    'baby poops during feeding',
    'gastrocolic reflex baby',
    'baby poops after every bottle',
    'newborn poops while breastfeeding',
    'baby always poops right after eating',
    'is it normal for baby to poop after every meal',
    'baby poops during every nursing session',
    'gastrocolic reflex newborn normal',
    'baby poop immediately after feeding',
  ],
  quickAnswer:
    'The gastrocolic reflex is a normal physiological response where the stomach stretching from a feeding triggers the colon to contract, often resulting in a bowel movement during or shortly after eating. This reflex is especially strong in newborns and young infants, and it is completely normal for a baby to poop during or after every single feeding. According to the AAP, breastfed newborns may have 8-12 stools per day in the early weeks. The reflex typically becomes less pronounced by 2-3 months of age as the digestive system matures, though some babies continue the pattern longer.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'The gastrocolic reflex is strongest during this period. Most newborns will poop during or within minutes of every feeding, which can mean 8-12 bowel movements per day for breastfed babies. This is a positive sign — frequent stooling indicates your baby is getting adequate nutrition. Formula-fed newborns may have fewer stools (3-4 daily) but the post-feeding pattern is still common.',
    },
    {
      ageRange: '6 weeks to 3 months',
      context:
        'The gastrocolic reflex begins to moderate. Many babies naturally decrease from pooping after every feed to 3-4 times daily. Some breastfed babies shift to very infrequent stools (every few days) while others continue the post-feed pattern. Both are normal. The key indicator of health is soft stool consistency, not frequency.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most babies have a more predictable stool pattern by this age. Some continue to poop after feedings, particularly the first feeding of the day. The reflex is still present but less likely to produce a stool every time. Average frequency is 1-3 times per day. If your baby still poops after every feeding and is comfortable, this is within the range of normal.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With the introduction of solid foods, stool patterns change further. The gastrocolic reflex may still trigger bowel movements after larger meals. Stools become more formed and less frequent. Most babies in this age range have 1-2 bowel movements per day. Continued post-meal stooling is normal and does not indicate malabsorption or digestive problems.',
    },
  ],
  whenNormal: [
    'Newborn pooping during or right after every feeding',
    'Baby making straining faces or grunting while the reflex triggers a stool',
    'Explosive or noisy stools during or after feeds in young infants',
    'Gradual decrease in post-feed stooling over the first 2-3 months',
    'Breastfed baby having more frequent post-feed stools than a formula-fed baby',
  ],
  whenToMention: [
    'Baby appears to be in pain (not just straining) during every bowel movement',
    'Stools are watery, excessive, or have an unusual odor that differs from your baby\'s baseline',
    'Baby is not gaining weight appropriately despite frequent stools',
    'Post-feed stools contain visible blood or mucus',
  ],
  whenToActNow: [
    'Frequent watery stools (more than 12/day) with signs of dehydration such as fewer wet diapers, sunken fontanelle, or lethargy',
    'Blood in stool accompanied by vomiting, fever, or refusal to feed',
    'Baby is losing weight or showing signs of failure to thrive despite frequent feeding and stooling',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-stool-frequency-changes',
    'frequent-pooping',
    'newborn-explosive-poop-normal',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pooping By the Numbers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Pooping-By-the-Numbers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Gastrocolic Reflex. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK551515/',
    },
    {
      org: 'Stanford Children\'s Health',
      citation:
        'Stanford Medicine Children\'s Health. Newborn Bowel Movements.',
      url: 'https://www.stanfordchildrens.org/en/topic/default?id=newborn-bowel-movements-90-P02876',
    },
  ],
};
