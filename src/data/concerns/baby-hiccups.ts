import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-hiccups',
  title: 'My Baby Gets Hiccups a Lot',
  category: 'physical',
  searchTerms: [
    'baby hiccups all the time',
    'newborn hiccups constantly',
    'baby gets hiccups after feeding',
    'baby hiccups throughout the day',
    'why does my baby hiccup so much',
    'baby hiccups normal',
    'too many hiccups baby',
    'infant hiccups frequently',
    'baby hiccups every day',
  ],
  quickAnswer:
    'Hiccups are extremely common in babies, especially newborns, and are almost always completely harmless. They happen because your baby\'s diaphragm is still developing and gets a little jumpy when their tiny stomach fills up or air gets swallowed. Most babies outgrow frequent hiccupping by 6-9 months.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Hiccups are incredibly common at this age  -  some babies hiccup multiple times a day. Your baby\'s nervous system is still maturing, and the diaphragm (the muscle that controls breathing) is especially sensitive to stimulation. Feeding often triggers hiccups because it fills the stomach, which sits right next to the diaphragm. This is completely normal and doesn\'t bother your baby nearly as much as it might bother you.',
    },
    {
      ageRange: '3-5 months',
      context:
        'You might notice hiccups becoming a bit less frequent as your baby\'s digestive and nervous systems mature. They may still hiccup after big feeds or when they swallow air during play or crying. Some babies keep hiccupping regularly until 6-9 months. If your baby is eating well, gaining weight, and doesn\'t seem distressed, there\'s nothing to worry about.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies hiccup much less often by this age, though occasional hiccups are still completely normal. If your baby is still hiccupping multiple times a day and also has frequent spitting up or seems uncomfortable after feeds, mention it to your pediatrician  -  sometimes persistent hiccups can be a sign of reflux, which is very treatable.',
    },
    {
      ageRange: '12+ months',
      context:
        'Hiccups become rare in toddlers, though they still happen occasionally, just like they do in adults. If your toddler is hiccupping frequently (several times a day, most days) and especially if they seem uncomfortable or are having trouble eating, it\'s worth talking to your doctor.',
    },
  ],
  whenNormal: [
    'Your baby hiccups after most feedings or when they drink quickly  -  this usually means they swallowed some air.',
    'Hiccups last anywhere from a few minutes to half an hour and then go away on their own.',
    'Your baby doesn\'t seem bothered by the hiccups  -  they might even keep eating or playing right through them.',
    'Your baby is under 6 months old and hiccups multiple times a day but is otherwise happy and growing well.',
  ],
  whenToMention: [
    'Your baby is older than 6 months and still hiccups several times a day, every day.',
    'Hiccups are frequently accompanied by spitting up, arching during feeds, or signs of discomfort  -  this could point to reflux.',
    'Hiccups seem to interfere with feeding or sleeping consistently.',
  ],
  whenToActNow: [
    'Hiccups last for hours at a time and your baby seems distressed or can\'t feed properly.',
    'Hiccups are accompanied by difficulty breathing, turning blue, or gasping for air.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics  -  Common Baby Concerns: Hiccups, Spitting Up, and Gas',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Burping-Hiccups-and-Spitting-Up.aspx',
    },
    {
      org: 'Stanford Children\'s Health',
      citation:
        'Stanford Children\'s Health  -  Infant Hiccups: Causes and When to Worry',
      url: 'https://www.stanfordchildrens.org/en/topic/default?id=hiccups-in-infants-90-P02672',
    },
  ],
};
