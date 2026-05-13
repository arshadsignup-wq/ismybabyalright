import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breast-asymmetry-supply-difference',
  title: 'Breast Asymmetry and Uneven Milk Supply',
  category: 'feeding',
  searchTerms: [
    'one breast produces more milk',
    'uneven milk supply',
    'breast asymmetry breastfeeding',
    'lopsided breasts breastfeeding',
    'one breast bigger while nursing',
    'baby prefers one breast supply',
    'uneven breast size milk production',
    'one breast engorged other not',
  ],
  quickAnswer:
    'It is completely normal for one breast to produce more milk than the other, and many breastfeeding mothers notice their breasts become noticeably different in size. This asymmetry is usually caused by differences in the number of milk ducts, the baby\'s latch preference, or nursing habits that favor one side. While it can be cosmetically bothersome, uneven supply rarely affects your ability to adequately nourish your baby.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'During the early weeks, slight differences in production between breasts are common and may become more pronounced as supply establishes. If your baby tends to latch better on one side, that breast will receive more stimulation and produce more milk. To help even things out, try starting feeds on the lower-producing side when your baby is hungriest and most eager to nurse.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this stage, the difference in breast size and output may become more noticeable. If the asymmetry bothers you, continue offering the smaller breast first at each feeding session. Some mothers also add a short pumping session on the lower-producing side after feeds. However, if your baby is gaining weight well, the asymmetry is not a medical concern.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby begins eating solids and nursing less frequently, the asymmetry may naturally lessen. Some mothers find that one breast essentially becomes the primary feeder while the other produces significantly less. This is a normal variation and does not mean anything is wrong with the less productive breast.',
    },
  ],
  whenNormal: [
    'One breast consistently produces more milk than the other during pumping sessions',
    'Your breasts are noticeably different sizes during the breastfeeding period',
    'Your baby has a slight preference for one breast but will nurse from both',
    'The size difference gradually resolves after weaning',
  ],
  whenToMention: [
    'One breast has stopped producing milk entirely and you want to try to reestablish supply',
    'The asymmetry developed suddenly and is accompanied by a lump, pain, or skin changes on one breast',
    'Your baby absolutely refuses one breast despite multiple attempts and different positions',
    'You are concerned the lower-producing breast is not providing enough milk overall',
  ],
  whenToActNow: [
    'You notice a new, hard lump in one breast that does not resolve with nursing or massage',
    'One breast becomes very red, hot, and painful with fever, suggesting mastitis that requires treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Lopsided! What Can I Do?',
      url: 'https://llli.org/breastfeeding-info/lopsided/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Breastfeeding challenges. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK148955/',
    },
  ],
};
