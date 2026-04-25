import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'spitting-up',
  title: 'Baby Spitting Up Frequently',
  category: 'feeding',
  searchTerms: [
    'baby spitting up a lot',
    'baby spit up after every feeding',
    'baby spitting up curdled milk',
    'how much spit up is too much',
    'baby projectile spit up',
    'newborn spitting up',
    'baby keeps spitting up',
    'spit up vs vomiting baby',
    'baby spit up through nose',
    'is it normal for baby to spit up so much',
  ],
  quickAnswer:
    'Spitting up is extremely common in healthy babies and is rarely a sign of anything serious. About half of all babies spit up regularly in the first few months, peaking around 4 months and typically resolving by 12 months. If your baby is gaining weight well, seems comfortable, and is a "happy spitter," the spit-up is usually more of a laundry problem than a medical one.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have an immature lower esophageal sphincter, which means the valve between the stomach and esophagus does not close tightly yet. This makes spit-up after feeds very common and expected. Small, frequent feeds and keeping your baby upright for 20 to 30 minutes after feeding can help reduce the amount.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Spit-up often peaks around 4 months as babies take in larger volumes of milk. You may notice your baby spitting up what looks like a large amount, but it usually looks like more than it actually is. As long as your baby is gaining weight along their curve and seems content, this is normal developmental spitting up.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Many babies start to spit up less frequently once they begin sitting upright on their own and starting solid foods. Gravity helps keep food down. If spit-up increases significantly after starting solids, it could occasionally signal a food sensitivity worth discussing with your pediatrician.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Most babies have largely outgrown spitting up by this age. If your baby is still spitting up frequently and especially if it seems forceful or painful, it is worth a conversation with your doctor to rule out reflux or other causes.',
    },
  ],
  whenNormal: [
    'Your baby spits up small amounts after most feeds but is happy, comfortable, and gaining weight',
    'The spit-up is effortless and your baby does not seem bothered by it',
    'Spit-up occasionally comes through the nose, which looks alarming but is harmless',
    'The amount seems large but your baby continues to have plenty of wet diapers and good weight gain',
  ],
  whenToMention: [
    'Your baby seems uncomfortable or arches their back during or after feeds, which may suggest reflux',
    'Spit-up is consistently forceful or projectile, traveling several inches',
    'Your baby is not gaining weight as expected or seems hungry again immediately after spitting up a large amount',
  ],
  whenToActNow: [
    'Spit-up is green or yellow (bile-stained), which can indicate a bowel obstruction',
    'There is blood in the spit-up or it looks like coffee grounds',
    'Your baby has projectile vomiting after every feed and is not gaining weight, especially in the first few weeks, as this could indicate pyloric stenosis',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
    'sitting',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Why Babies Spit Up. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Spitting-Up-Reflux.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. GERD (Reflux) in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Infant and Toddler Nutrition.',
      url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/index.html',
    },
  ],
};
