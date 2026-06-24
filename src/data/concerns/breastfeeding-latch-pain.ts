import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-latch-pain',
  title: 'Pain During Breastfeeding Latch',
  category: 'feeding',
  searchTerms: [
    'breastfeeding pain when latching',
    'breastfeeding hurts',
    'nipple pain breastfeeding',
    'painful latch',
    'breastfeeding toe curling pain',
    'latch pain not getting better',
    'breastfeeding sharp pain',
    'nursing pain every feed',
    'breastfeeding supposed to hurt',
    'stabbing pain breastfeeding',
    'painful let-down reflex',
  ],
  quickAnswer:
    'While mild tenderness during the first few seconds of a latch is common in the early days of breastfeeding, breastfeeding should not be consistently painful. Ongoing pain during latch usually indicates a shallow latch, which can be corrected with positioning adjustments. Other causes include tongue tie, thrush, vasospasm, or infection. Seeking help from a lactation consultant early can prevent pain from worsening and protect your breastfeeding goals.',
  byAge: [
    {
      ageRange: '0-1 week',
      context:
        'Some nipple sensitivity at the start of each feed is common during the first few days as your nipples adjust. This initial tenderness should improve within the first 30-60 seconds of a feed and should lessen day by day. If pain is severe, persists throughout the entire feeding, or your nipples are cracked, blistered, or bleeding, the latch likely needs correction. Early help from a lactation consultant can make a significant difference.',
    },
    {
      ageRange: '1-6 weeks',
      context:
        'Pain that continues beyond the first week is not normal and should not be "pushed through." Common causes include a persistently shallow latch, tongue tie restricting your baby\'s tongue movement, or thrush (a yeast infection that causes burning or shooting pain). Nipple damage from poor latch can lead to vasospasm, causing blanching and throbbing pain after feeds. Each of these has specific solutions, so accurate diagnosis is important.',
    },
    {
      ageRange: '6 weeks - 6 months',
      context:
        'If pain has been present since birth and is still ongoing, there is almost certainly a correctable cause. New-onset pain at this stage may be due to thrush (especially after antibiotic use), biting as your baby explores, or a change in latch as your baby grows. Mastitis or a blocked duct can also cause pain during feeding, usually accompanied by a tender lump or redness on the breast. Do not ignore new pain that develops after pain-free nursing.',
    },
    {
      ageRange: '6+ months',
      context:
        'Pain during nursing in older babies is sometimes related to teething, where babies may clamp down or change their latch. Distracted feeding, where babies turn their head while still latched, can also cause sudden pain. Gently removing your baby from the breast and relatching when you notice a poor latch is important. New pain at any stage warrants evaluation to rule out infection, plugged ducts, or other treatable causes.',
    },
  ],
  whenNormal: [
    'You experience brief tenderness (less than 30 seconds) at the start of a latch during the first few days that improves over the first week.',
    'A strong let-down sensation that is intense but not painful.',
    'Occasional mild discomfort that resolves with a position adjustment.',
  ],
  whenToMention: [
    'Pain persists throughout the entire feeding or is getting worse rather than better.',
    'Your nipples are cracked, blistered, or misshapen (lipstick-shaped or creased) after feeds.',
    'You experience burning, shooting, or deep breast pain during or between feeds, which may suggest thrush or vasospasm.',
  ],
  whenToActNow: [
    'You develop a red, hot, painful area on your breast with fever or flu-like symptoms, which may indicate mastitis requiring antibiotic treatment.',
    'The pain is so severe you are unable to feed your baby and no alternative feeding method is available.',
    'You notice pus or unusual discharge from your nipple, suggesting infection.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-latch-difficulty-ongoing', 'breastfeeding-nipple-pain-not-improving', 'tongue-tie', 'sore-cracked-nipples-breastfeeding'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Solutions to Common Breastfeeding Problems. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Breastfeeding Challenges. ACOG.',
      url: 'https://www.acog.org/womens-health/faqs/breastfeeding-your-baby',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Nipple Pain in Breastfeeding Mothers. BMC Pregnancy and Childbirth.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26272503/',
    },
  ],
};
