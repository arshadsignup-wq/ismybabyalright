import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-nursing-strike-refusing-breast',
  title: 'My Baby Is Refusing to Breastfeed (Nursing Strike)',
  category: 'feeding',
  searchTerms: [
    'baby refusing breast nursing strike',
    'baby suddenly wont breastfeed',
    'nursing strike baby',
    'baby refusing to nurse',
    'baby pushing away from breast',
    'baby wont latch anymore',
    'baby screams at breast',
    'sudden breast refusal baby',
    'baby breast refusal not weaning',
    'nursing strike vs weaning',
  ],
  quickAnswer:
    'A nursing strike is when a baby who was previously breastfeeding well suddenly refuses to nurse. This is different from natural weaning, which is gradual. Nursing strikes typically last 2-5 days but can continue for up to 2 weeks. Common causes include ear infections, teething, a cold or stuffy nose, a change in the taste of milk, a new soap or lotion, or the baby being startled during a previous feeding. Most babies return to breastfeeding with patience and gentle persistence.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'True nursing strikes are uncommon in very young babies, but breast refusal at this age can indicate issues with latch, milk supply, or bottle preference (if bottles have been introduced). Young babies may also refuse the breast if they are in pain from oral thrush, tongue tie, or an ear infection. If your newborn suddenly refuses to breastfeed, check for signs of illness and contact your pediatrician and a lactation consultant. In the meantime, express milk (by hand or pump) and offer it via cup, syringe, or bottle to maintain your baby\'s nutrition and your milk supply.',
    },
    {
      ageRange: '3-8 months',
      context:
        'This is the most common age for nursing strikes. Triggers include: ear infections (nursing causes pressure changes that hurt infected ears), stuffy noses (making it hard to breathe while nursing), teething pain, reaction to mother\'s new soap, perfume, or deodorant, a bite that caused the mother to yell (startling the baby), reduced milk supply, or changes in the taste of milk (from hormonal changes, new foods, or medication). Strategies to help: offer the breast in a calm, quiet, dimly lit room; try nursing when the baby is very drowsy or just waking from sleep; offer lots of skin-to-skin contact; try different positions; and avoid pressuring the baby.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Nursing strikes at this age can be confused with self-weaning, but most babies do not voluntarily wean before 12 months. A nursing strike is typically sudden, while true weaning is gradual. Babies at this age may refuse the breast because they are distracted by their environment, going through a developmental leap, or reacting to a change. Continue offering the breast without forcing, maintain your supply by pumping, and keep the baby well-nourished with expressed milk and solid foods. Most strikes resolve within a few days to 2 weeks. If you want to continue breastfeeding, do not give up — most babies return to the breast.',
    },
  ],
  whenNormal: [
    'Your baby refuses the breast for 1-2 feeds but then nurses again — occasional refusal is not a nursing strike.',
    'Your baby is going through a distracted phase around 4-5 months and is more interested in the environment than nursing during wakeful periods but nurses well when drowsy.',
    'Your baby refuses one breast but accepts the other — this is common and not usually concerning unless persistent.',
  ],
  whenToMention: [
    'The nursing strike has lasted more than 2-3 days and your baby is not taking the breast at all.',
    'You suspect an ear infection, illness, or oral problem may be causing the strike.',
    'You are struggling to maintain your milk supply during the strike and want guidance.',
  ],
  whenToActNow: [
    'Your baby is refusing all feeding (breast, bottle, and cup) and is showing signs of dehydration: fewer than 6 wet diapers in 24 hours, dry mouth, no tears, sunken fontanelle, or lethargy — seek medical care immediately.',
    'Your baby has a fever, is tugging at their ear, or appears to be in pain, which may be driving the breast refusal — see your pediatrician.',
    'You notice white patches in your baby\'s mouth (possible thrush) or your baby seems to be in oral pain — contact your pediatrician for treatment.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['bottle-preference', 'baby-irritable-during-feeding-fussy', 'tongue-tie'],
  sources: [
    {
      org: 'La Leche League',
      citation:
        'La Leche League International — Nursing Strikes',
      url: 'https://www.llli.org/breastfeeding-info/nursing-strikes/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Common Breastfeeding Challenges',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Breastfeeding: Common Concerns',
      url: 'https://www.cdc.gov/breastfeeding/breastfeeding-challenges/index.html',
    },
  ],
};
