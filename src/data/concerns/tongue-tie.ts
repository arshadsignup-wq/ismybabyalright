import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tongue-tie',
  title: 'Baby Tongue Tie (Ankyloglossia)',
  category: 'medical',
  searchTerms: [
    'baby tongue tie',
    'tongue tie and breastfeeding',
    'baby can\'t stick tongue out',
    'ankyloglossia baby',
    'tongue tie symptoms in baby',
    'baby tongue tie release',
    'frenotomy baby',
    'baby tongue looks heart shaped',
    'tongue tie causing feeding problems',
    'posterior tongue tie baby',
    'should I get tongue tie clipped',
  ],
  quickAnswer:
    'Tongue tie occurs when the strip of tissue (frenulum) connecting the tongue to the floor of the mouth is shorter or tighter than usual, potentially restricting tongue movement. It is present in about 4-10% of newborns. Many tongue ties cause no problems at all, but when they do, feeding difficulties (especially breastfeeding) are the most common concern.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'This is when tongue tie most commonly presents as a breastfeeding challenge. Signs include painful latch for the mother, clicking sounds during feeding, poor milk transfer leading to slow weight gain, or the baby sliding off the breast repeatedly. A lactation consultant can help determine whether a tongue tie is actually contributing to feeding difficulties, as latch issues can have many causes.',
    },
    {
      ageRange: '1-6 months',
      context:
        'If breastfeeding has been going well, a tongue tie may not need treatment even if one is present. For babies struggling to feed, a frenotomy (a quick snip of the frenulum) can be performed, often in the pediatrician\'s office. Bottle-fed babies with tongue tie usually have fewer difficulties, though some may have trouble forming a seal around the nipple.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin solids, a significant tongue tie may occasionally affect their ability to move food around in their mouth. However, many babies with untreated tongue ties manage solids without any problems. If a frenotomy was not done earlier and your baby is feeding and growing well, treatment is generally not needed.',
    },
    {
      ageRange: '12 months+',
      context:
        'Tongue tie rarely affects speech development in toddlers, despite common misconceptions. Most children with tongue tie develop normal speech. If speech difficulties arise later, they can be evaluated at that time. The frenulum can also stretch and thin out over time, reducing any restriction.',
    },
  ],
  whenNormal: [
    'Your baby has a visible frenulum but can breastfeed or bottle-feed effectively and is gaining weight well',
    'Your baby\'s tongue can extend past the lower gum line and lift to the roof of the mouth',
    'A lactation consultant or pediatrician has assessed the tongue and determined it is not causing functional problems',
    'Your baby had a frenotomy and feeding has improved (it may take a few days to see full benefit)',
  ],
  whenToMention: [
    'Your baby has a visible tongue tie and you are experiencing persistent breastfeeding pain or latch difficulties despite working with a lactation consultant',
    'Your baby is not gaining weight adequately and tongue restriction is suspected as a contributing factor',
    'Your baby\'s tongue appears heart-shaped when they try to stick it out, or they cannot lift their tongue past the lower lip',
    'You want an evaluation to determine whether the tongue tie is contributing to feeding challenges',
  ],
  whenToActNow: [
    'Your baby is losing weight or not gaining weight and you suspect tongue tie is preventing effective feeding',
    'Your newborn is unable to latch at all and you are struggling to feed them by any method',
  ],
  relatedMilestones: [
    'feeding',
    'language-development',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics Section on Breastfeeding. Breastfeeding and the Use of Human Milk. Pediatrics, 2012.',
      url: 'https://publications.aap.org/pediatrics/article/129/3/e827/31785/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Tongue-Tie in Babies.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Tongue-Tie-in-Babies.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Srinivasan A, et al. Ankyloglossia in Breastfeeding Infants: The Effect of Frenotomy on Maternal Nipple Pain and Latch. Breastfeeding Medicine, 2006.',
      url: 'https://publications.aap.org/pediatrics/article/115/5/e591/67657/The-Effect-of-Frenotomy-on-Breastfeeding-Infants',
    },
  ],
};
