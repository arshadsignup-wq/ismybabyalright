import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sore-cracked-nipples-breastfeeding',
  title: 'Sore and Cracked Nipples',
  category: 'maternal',
  searchTerms: [
    'sore nipples breastfeeding',
    'cracked nipples nursing',
    'bleeding nipples breastfeeding',
    'painful breastfeeding',
    'nipple pain when nursing',
    'how to heal cracked nipples',
    'breastfeeding hurts',
    'raw nipples from breastfeeding',
    'nipple cream breastfeeding',
  ],
  quickAnswer:
    'Sore and cracked nipples are one of the most common breastfeeding challenges, particularly in the early weeks. While mild tenderness is normal as you and your baby learn to breastfeed, significant pain, cracking, or bleeding usually indicates a latch issue that can be corrected. With proper latch technique and nipple care, most women find relief within days to a couple of weeks.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'Some nipple tenderness when your baby first latches is common during these early days as your nipples adjust to frequent nursing. However, pain that continues throughout the feeding or causes you to dread nursing is usually a sign that the latch needs adjustment. Working with a lactation consultant early can make a tremendous difference. Applying expressed breast milk or medical-grade lanolin to nipples after feeding can support healing.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'As breastfeeding becomes more established, nipple soreness should be improving significantly. If you are still experiencing pain, cracking, or bleeding, a deeper assessment of latch, tongue tie, or other oral anatomy issues may be needed. Nipple shields can provide temporary relief while you work on the underlying cause, but they should be used under the guidance of a lactation consultant.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'Persistent nipple pain at this stage is not typical and warrants investigation. Possible causes include thrush (a yeast infection that can develop on the nipples and in the baby\'s mouth), vasospasm (blanching of the nipples after feeding), or ongoing latch issues. Your provider or a lactation consultant can help identify and treat the specific cause.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'New nipple soreness after a period of comfortable breastfeeding can occur when your baby begins teething or changes their feeding pattern. Biting can be addressed by briefly unlatching the baby when they bite and offering a teething toy before feeding. If you develop sudden nipple pain with white patches, thrush should be considered.',
    },
  ],
  whenNormal: [
    'Mild tenderness at the beginning of a feeding during the first week that eases as the feeding continues',
    'Temporary sensitivity as your nipples adjust to the new demands of breastfeeding',
    'Brief discomfort when the baby first latches that resolves within the first 30 seconds of nursing',
  ],
  whenToMention: [
    'Pain that persists throughout the entire feeding or gets worse rather than better over the first two weeks',
    'Cracks, blisters, or bleeding on the nipples that are not healing despite improved latch',
    'Nipple pain accompanied by white patches on your nipples or in your baby\'s mouth, which may indicate thrush',
    'You are avoiding or dreading feedings because of pain',
  ],
  whenToActNow: [
    'You develop signs of a breast infection (mastitis) such as a red, hot, painful area on the breast along with fever and flu-like symptoms',
    'A cracked nipple shows signs of infection with increasing redness, warmth, swelling, or pus',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Sore Nipples. LLLI Resource Library.',
      url: 'https://llli.org/breastfeeding-info/sore-nipples/',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Breastfeeding Your Baby. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/breastfeeding-your-baby',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Breastfeeding Challenges. Office on Women\'s Health, U.S. Department of Health and Human Services, 2023.',
      url: 'https://www.womenshealth.gov/breastfeeding/breastfeeding-challenges',
    },
  ],
};
