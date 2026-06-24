import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-excessive-hiccups-after-every-feed',
  title: 'My Baby Gets Hiccups After Every Feed',
  category: 'feeding',
  searchTerms: [
    'baby hiccups after every feeding',
    'baby hiccups after bottle',
    'baby hiccups after breastfeeding',
    'excessive hiccups newborn feeding',
    'hiccups after every meal baby',
    'stop baby hiccups after feeding',
    'baby hiccups reflux connection',
    'hiccups during feeding baby',
    'baby hiccups overeating',
    'hiccups overfeeding baby',
  ],
  quickAnswer:
    'Hiccups after feeding are one of the most common concerns parents have, and they are almost always completely harmless. They occur because feeding fills your baby\'s stomach, which sits next to the diaphragm, causing it to contract involuntarily. Hiccups are especially common in babies under 6 months. They typically do not bother your baby even though they may bother you. Frequent post-feeding hiccups can occasionally be associated with reflux, but only if accompanied by other symptoms.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Post-feeding hiccups are extremely common at this age and are usually caused by a full stomach pressing on the diaphragm or by swallowed air during feeding. To minimize hiccups, try feeding your baby before they become frantically hungry (frantic feeding leads to more air swallowing), burp during and after feeds, and keep your baby upright for 10-15 minutes after feeding. If bottle feeding, try a slow-flow nipple to reduce air intake. Hiccups at this age are almost never a cause for concern.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Hiccups after feeding should gradually decrease in frequency as your baby\'s digestive system matures. If hiccups are still occurring after every feed and are accompanied by frequent spitting up, arching during feeds, or fussiness, this combination may suggest gastroesophageal reflux. Mention this pattern to your pediatrician. If your baby hiccups after feeds but is otherwise happy and gaining weight well, the hiccups alone are not a concern.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, post-feeding hiccups should be much less frequent. As your baby starts solid foods, their stomach capacity increases and the diaphragm is less easily triggered by feeding. If your older baby is still hiccupping after every feed and also has persistent reflux symptoms, feeding aversion, or poor weight gain, your pediatrician may want to evaluate for underlying issues. For most babies, occasional hiccups after large meals or fast feeding remain completely normal throughout the first year and beyond.',
    },
  ],
  whenNormal: [
    'Your baby gets hiccups after most feeds but does not seem bothered by them and continues to eat well.',
    'Hiccups last a few minutes and then stop on their own.',
    'Your baby is under 6 months and hiccups frequently - this is one of the most common newborn experiences.',
    'Your baby occasionally spit up during hiccups but is otherwise happy and gaining weight.',
  ],
  whenToMention: [
    'Hiccups after feeding are consistently accompanied by significant spitting up, arching, or crying.',
    'Your baby seems uncomfortable during hiccups - pulling their legs up, grimacing, or fussing.',
    'Hiccups are still happening after every feed past 6 months of age.',
  ],
  whenToActNow: [
    'Your baby has hiccups that last for hours and seem to cause distress or interfere with feeding.',
    'Hiccups are accompanied by choking, gagging, or difficulty breathing.',
    'Your baby is not gaining weight adequately and has persistent hiccups and vomiting after feeds.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-hiccups',
    'hiccups-wont-stop',
    'baby-gulping-air',
    'baby-colic-gut-microbiome-link',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Burping, Hiccups, and Spitting Up. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Burping-Hiccups-and-Spitting-Up.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Hiccups in Neonates and Infants. Archives of Disease in Childhood, 2012.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22611062/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. GER and GERD in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx',
    },
  ],
};
