import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'night-weaning',
  title: 'Night Weaning: Dropping Nighttime Feeds',
  category: 'feeding',
  searchTerms: [
    'night weaning',
    'dropping night feeds',
    'baby still feeding at night',
    'how to stop night feeds',
    'nighttime breastfeeding when to stop',
    'toddler still nursing at night',
    'night weaning without crying',
    'when to stop feeding baby at night',
    'night weaning gentle methods',
  ],
  quickAnswer:
    'Night weaning means gradually eliminating nighttime breastfeeding or bottle feeds. Most healthy babies can go without nighttime feeds somewhere between 6 and 12 months, though the exact timing varies. Night weaning does not necessarily mean your baby will sleep through the night, as waking and feeding are separate habits. A gradual approach that reduces the length or volume of night feeds over one to two weeks tends to work best.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Night feeds are biologically necessary at this age. Young babies have small stomachs and need to eat frequently, including overnight. Attempting to night wean before 4 to 6 months is not recommended, as it can affect weight gain and milk supply. Follow your baby\'s hunger cues and know that this frequent feeding phase is temporary.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some babies naturally begin to stretch their longest sleep period and may drop one night feed on their own. However, many babies still need one to two feeds overnight at this age, and that is normal. If your baby is gaining weight well and your pediatrician confirms they are developmentally ready, you can begin gently reducing night feeds by offering slightly less milk or nursing for a shorter duration.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By 6 months, many babies are physiologically capable of going through the night without feeding, especially if they are eating solid foods and taking full feeds during the day. You can gradually reduce night feeds by shortening nursing time by a minute or two each night, or by reducing bottle volumes by half an ounce every few days. Having a partner offer comfort instead of a feed can also help break the feeding-to-sleep association.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who still nurse at night are often doing so for comfort rather than hunger. Night weaning at this age may involve more verbal reassurance and alternative comfort strategies. Some parents find that telling their toddler the milk is sleeping or that nursing will happen when the sun comes up works well. Consistency and patience are key, and it may take one to two weeks for new patterns to establish.',
    },
  ],
  whenNormal: [
    'Your baby wakes briefly during the night weaning process but can be settled with patting, rocking, or a pacifier',
    'There are a few harder nights followed by gradual improvement over one to two weeks',
    'Your baby compensates by eating more during the day once night feeds are dropped',
    'Your child regresses temporarily during illness, teething, or travel but returns to the new pattern afterward',
  ],
  whenToMention: [
    'Your baby is over 6 months, eating well during the day, but still waking every one to two hours to feed at night',
    'Night feeding is significantly affecting your mental or physical health and you need a plan',
    'You are unsure whether your baby is developmentally ready to drop night feeds',
    'Your baby has not gained weight well and you are concerned about reducing feeds',
  ],
  whenToActNow: [
    'Your baby is under 6 months and showing signs of poor weight gain or dehydration, in which case night feeds should not be dropped',
    'Your baby or toddler is suddenly feeding much more at night than usual, which could signal illness or pain that needs evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Infant Sleep and Night Feeding Patterns. NCBI.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4459553/',
    },
  ],
};
