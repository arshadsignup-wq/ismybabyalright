import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nipple-shield-use-concerns',
  title: 'Using a Nipple Shield: Benefits and Concerns',
  category: 'feeding',
  searchTerms: [
    'nipple shield breastfeeding',
    'nipple shield concerns',
    'weaning off nipple shield',
    'nipple shield reducing supply',
    'when to use nipple shield',
    'nipple shield pros and cons',
    'baby won\'t latch without nipple shield',
    'nipple shield and milk transfer',
  ],
  quickAnswer:
    'A nipple shield is a thin silicone cover placed over the nipple during breastfeeding, often used to help babies who struggle to latch due to prematurity, flat or inverted nipples, or tongue tie. When used correctly and with proper sizing, nipple shields can be a valuable tool that allows breastfeeding to continue. Many concerns about decreased milk supply are related to improper use rather than the shield itself.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Nipple shields are most commonly introduced in the early weeks when latch difficulties are identified. If your baby is premature or has trouble latching, a shield can make the difference between breastfeeding and not. It is important to work with a lactation consultant to ensure proper fit, as an incorrectly sized shield can reduce milk transfer. Monitor your baby\'s weight gain closely during this time.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Many families begin working on weaning off the nipple shield during this period as the baby\'s mouth grows and their latch strengthens. Try offering the breast without the shield when your baby is drowsy or calm, and use the shield as a backup. Some babies transition easily while others need a more gradual approach. There is no rush to stop using a shield if it is working well for your family.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If you are still using a nipple shield at this age, there is no medical reason you must stop as long as your baby is gaining weight well and your supply is maintained. Some babies naturally refuse the shield as they get older and their latch improves. If you want to wean off the shield, a lactation consultant can help develop a strategy.',
    },
  ],
  whenNormal: [
    'Your baby latches and feeds well through the shield with audible swallowing and good weight gain',
    'You were advised to use a shield by a lactation consultant due to latch difficulties or nipple shape',
    'Your baby occasionally feeds without the shield but prefers it for most sessions',
    'You find the shield helpful for managing nipple pain while a latch issue is being addressed',
  ],
  whenToMention: [
    'Your baby\'s weight gain has slowed since starting the nipple shield',
    'You notice your milk supply seems to be decreasing and feeds feel less effective',
    'You want guidance on the correct shield size or help weaning off the shield',
    'Your baby becomes very distressed when you attempt to feed without the shield',
  ],
  whenToActNow: [
    'Your baby is not gaining weight or is losing weight while using the nipple shield',
    'You notice signs of dehydration such as fewer wet diapers, dry mouth, or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Breastfeeding Challenges. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Nipple Shields.',
      url: 'https://llli.org/breastfeeding-info/nipple-shields/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding recommendations.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};
