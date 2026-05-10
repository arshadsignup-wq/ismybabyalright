import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'newborn-not-latching-at-all',
  title: 'Newborn Not Latching',
  category: 'feeding',
  searchTerms: [
    'newborn not latching',
    'baby won\'t latch breastfeeding',
    'newborn refuses breast',
    'baby can\'t latch properly',
    'breastfeeding problems newborn',
    'baby screams at breast',
    'newborn latching difficulty',
    'baby won\'t open mouth to latch',
    'newborn not breastfeeding',
  ],
  quickAnswer:
    'Difficulty latching is one of the most common breastfeeding challenges for new parents and newborns. Many factors can contribute, including the baby\'s positioning, tongue tie, flat or inverted nipples, engorgement, or the baby being sleepy or overstimulated. Most latching problems can be resolved with proper support from a lactation consultant. In the meantime, expressing colostrum or milk by hand or pump ensures the baby receives adequate nutrition.',
  byAge: [
    {
      ageRange: '0-24 hours',
      context:
        'In the first hours after birth, skin-to-skin contact is the most powerful tool to encourage latching. Many babies will instinctively crawl toward the breast and self-attach (the "breast crawl") when placed skin-to-skin. Some babies, especially those born by cesarean, after a medicated labor, or slightly premature, may be sleepy and less interested in feeding. Colostrum is produced in very small amounts (teaspoons) but is rich in antibodies and perfectly sufficient. If the baby is not latching, hand-express colostrum into a spoon or syringe and feed it to the baby. Request a lactation consultant before discharge.',
    },
    {
      ageRange: '1-3 days',
      context:
        'Persistent difficulty latching during the first few days can be related to positioning (try different holds such as cross-cradle, football, or laid-back breastfeeding), engorgement as milk begins to come in (making the breast too firm for the baby to grasp), tongue tie (a tight frenulum restricting tongue movement), or flat/inverted nipples. A nipple shield may be recommended temporarily by a lactation consultant. It is critical to continue removing milk by pumping or hand expression at least 8-12 times per day to establish supply. Monitor wet and dirty diapers to ensure the baby is getting enough.',
    },
    {
      ageRange: '3-7 days',
      context:
        'By now, your milk should be transitioning from colostrum to mature milk. If latching is still not happening, continue pumping every 2-3 hours and feeding expressed milk by bottle, cup, or syringe. A formal evaluation by a lactation consultant (IBCLC) is strongly recommended. They can assess for oral anatomy issues (tongue tie, lip tie, high palate), evaluate your baby\'s suck pattern, and create a personalized feeding plan. Many babies who do not latch in the first week go on to breastfeed successfully with proper support.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'If tongue tie was identified, a frenotomy (minor procedure to release the tie) may significantly improve latching. After treatment, tongue exercises and practice at the breast are important. If the baby has been exclusively bottle-fed, transitioning back to the breast can take time and patience. Try offering the breast when the baby is calm and not frantically hungry. Paced bottle feeding can help prevent a strong bottle preference from developing. Some babies who would not latch initially begin latching well around 3-4 weeks as they grow and their mouth gets larger.',
    },
  ],
  whenNormal: [
    'Your newborn is learning to latch and is successfully feeding with some positioning adjustments and assistance',
    'Your baby latches well sometimes but struggles at other times, particularly when very hungry or sleepy',
    'You are supplementing with expressed breast milk while working on latching with a lactation consultant',
    'Your baby initially had difficulty but is now latching and breastfeeding successfully after tongue tie treatment or other intervention',
  ],
  whenToMention: [
    'Your baby has not latched at all within the first 24 hours and you have not yet seen a lactation consultant',
    'You suspect tongue tie because the baby\'s tongue appears heart-shaped when extended or does not extend past the lower gum',
    'You are struggling emotionally with breastfeeding difficulties and need support or guidance on your options',
  ],
  whenToActNow: [
    'Your baby is not feeding at all (by breast, bottle, cup, or syringe), is producing fewer wet diapers than expected, or shows signs of dehydration (dry mouth, sunken fontanelle, no tears, lethargy), as newborns need to feed frequently to maintain blood sugar and hydration',
    'Your baby has lost more than 10% of birth weight, is excessively sleepy and difficult to wake for feeds, or has developed a yellowish skin color (jaundice), as these signs require urgent medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Getting Your Baby to Latch. American Academy of Pediatrics.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Ensuring-Proper-Latch-On.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding: Positioning and Attachment.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Breastfeeding Challenges. NICHD.',
      url: 'https://www.nichd.nih.gov/health/topics/breastfeeding/conditioninfo/challenges',
    },
  ],
};
