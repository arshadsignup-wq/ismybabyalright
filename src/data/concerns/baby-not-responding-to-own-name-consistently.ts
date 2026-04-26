import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-responding-to-own-name-consistently',
  title: 'Baby Not Responding to Own Name Consistently',
  category: 'communication',
  searchTerms: [
    'baby not responding to name',
    'baby ignores name',
    'baby doesn\'t look when I call name',
    'when should baby respond to name',
    'baby not turning when called',
    'baby sometimes responds to name sometimes doesn\'t',
    'inconsistent name response baby',
    'baby ignores me when I call',
    'baby not recognizing own name',
    'is it normal baby doesn\'t always respond to name',
  ],
  quickAnswer:
    'Most babies start recognizing and responding to their own name between 5 and 7 months, though consistent response may take until 9 months. It\'s common for babies to sometimes ignore their name when they\'re focused on something interesting - this is normal. However, if your baby rarely or never turns when you say their name by 9 months, it\'s worth discussing with your pediatrician to check hearing and development.',
  byAge: [
    {
      ageRange: '0-5 months',
      context:
        'Very young babies respond to voices in general rather than their specific name. They may turn toward any voice or sound. Your baby is still learning that they have a name that\'s different from other words. At this age, the important thing is whether they respond to your voice and to sounds in general, not specifically to their name.',
    },
    {
      ageRange: '5-7 months',
      context:
        'Around 5 to 7 months, most babies begin recognizing their name and will turn to look at you when you say it. This response may be inconsistent at first - they might respond in a quiet room but not when the TV is on or when they\'re engaged with a toy. This inconsistency is normal as the skill develops. Keep using their name often during positive interactions.',
    },
    {
      ageRange: '7-9 months',
      context:
        'By 7 to 9 months, name response should be becoming more reliable. Your baby should turn or look at you when you say their name clearly, at least most of the time. If they rarely respond to their name at this age - and it\'s not explained by being deeply focused on something - mention it to your pediatrician. A hearing check can rule out the most common cause.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By 9 to 12 months, babies should consistently respond to their name. If your baby almost never responds when you call their name - especially if they also aren\'t making good eye contact, aren\'t pointing or waving, and seem uninterested in social interaction - a developmental evaluation is recommended. Name response is one of the early social-communication milestones that pediatricians watch closely.',
    },
    {
      ageRange: '12+ months',
      context:
        'After 12 months, a child who doesn\'t respond to their name should be evaluated. While toddlers can certainly be defiant and sometimes ignore you on purpose (you can usually tell by their expression), a genuine lack of recognition or response to their name is different and should be assessed by a professional.',
    },
  ],
  whenNormal: [
    'Your baby is under 7 months and responds to your voice but doesn\'t consistently respond to their specific name yet.',
    'Your baby responds to their name in quiet settings but doesn\'t always turn when there\'s background noise or when they\'re absorbed in play.',
    'Your baby responds to their name most of the time but occasionally ignores you - babies, like adults, can be focused on other things.',
    'Your baby is in the 5-7 month range and name response is emerging but not consistent yet - this skill is still developing.',
  ],
  whenToMention: [
    'Your baby is 9 months or older and rarely responds to their name, even in a quiet room with no distractions.',
    'Your baby used to respond to their name and has stopped doing so.',
    'Your baby responds to sounds in general but not specifically to their name being called.',
  ],
  whenToActNow: [
    'Your baby is 12 months or older and almost never responds to their name, combined with limited eye contact, no pointing or waving, and limited social engagement - this combination warrants a prompt developmental evaluation.',
    'Your baby doesn\'t respond to their name AND doesn\'t seem to respond to sounds in general - hearing needs to be tested urgently.',
  ],
  relatedMilestones: [
    'language-responds-to-name',
    'social-emotional-joint-attention',
    'language-babbling',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'CDC',
      citation:
        'CDC - Important Milestones: Your Baby By Nine Months',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Language Development: Speech Milestones for Babies',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Language-Development-1-to-2-Year-Olds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute on Deafness and Other Communication Disorders - Your Baby\'s Hearing and Communicative Development Checklist',
      url: 'https://www.nidcd.nih.gov/health/your-babys-hearing-and-communicative-development-checklist',
    },
  ],
};
