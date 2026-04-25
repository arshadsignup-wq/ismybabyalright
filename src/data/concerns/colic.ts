import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'colic',
  title: 'Baby Colic and Excessive Crying',
  category: 'behavior',
  searchTerms: [
    'baby colic',
    'baby won\'t stop crying',
    'baby cries for hours',
    'excessive crying newborn',
    'colic symptoms baby',
    'baby screaming inconsolably',
    'when does colic start',
    'how long does colic last',
    'baby cries every evening',
    'rule of 3s colic',
    'colicky baby help',
    'purple crying',
  ],
  quickAnswer:
    'Colic is defined by the Wessel criteria or "rule of 3s"  -  crying for more than 3 hours per day, more than 3 days per week, for more than 3 weeks in an otherwise healthy, well-fed infant. It affects about 1 in 5 babies, typically begins around 2-3 weeks of age, peaks at 6-8 weeks, and almost always resolves by 3-4 months. It is not caused by anything you are doing wrong.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Newborns generally cry 1-2 hours per day, which is normal. Colic has not typically set in yet at this stage. If your newborn seems to cry excessively in the first two weeks, it is important to rule out hunger, pain, illness, or feeding difficulties. Contact your pediatrician if your newborn seems inconsolable, especially if they have a fever, are not feeding, or seem unwell.',
    },
    {
      ageRange: '2-6 weeks',
      context:
        'This is when colic typically begins. Crying often follows a pattern  -  it tends to worsen in the late afternoon and evening (sometimes called the "witching hour"), is intense and high-pitched, and your baby may clench their fists, pull up their legs, or become red in the face. The baby is healthy, feeding well, and gaining weight normally between crying episodes. This is the hallmark of colic.',
    },
    {
      ageRange: '6-12 weeks',
      context:
        'Peak colic territory. Crying may reach 3 or more hours per day. This period is genuinely one of the hardest things parents go through, and it is okay to feel overwhelmed, frustrated, or even angry. If you feel you are reaching your limit, it is always safe to put your baby down in a safe place (like their crib) and step away for a few minutes to collect yourself. This is not failure  -  it is smart parenting.',
    },
    {
      ageRange: '3-5 months',
      context:
        'The vast majority of colic resolves by 3-4 months of age, and almost all cases resolve by 5 months. You may notice that the evening crying episodes gradually become shorter and less intense. If excessive, inconsolable crying persists beyond 4-5 months, or if your baby seems to be in pain during crying, talk to your pediatrician to explore other possible causes such as reflux, food intolerance, or other medical conditions.',
    },
  ],
  whenNormal: [
    'Your baby cries for extended periods but is otherwise healthy, feeding well, gaining weight, and having normal wet and dirty diapers',
    'Crying follows a predictable pattern, often peaking in the late afternoon or evening',
    'Your baby is between 2 weeks and 4 months old and the crying fits the "rule of 3s" pattern',
    'Your baby can be briefly soothed by motion, white noise, swaddling, or a pacifier, even if the crying returns',
    'Between crying episodes, your baby is calm, alert, and behaving normally',
  ],
  whenToMention: [
    'You are struggling to cope with the crying and need support or reassurance  -  your well-being matters too, and your pediatrician wants to help',
    'Crying is accompanied by frequent spitting up, arching the back, or refusing to feed, which could suggest gastroesophageal reflux',
    'Your baby has signs of a possible food sensitivity such as blood or mucus in stools, especially if breastfed',
    'Colic-like crying continues beyond 4-5 months without improvement',
  ],
  whenToActNow: [
    'Your baby has a fever (100.4F/38C or higher rectally) in addition to crying, especially if under 3 months  -  this always needs same-day evaluation',
    'Your baby is vomiting forcefully (not just spitting up), has a distended or hard belly, or has blood in their stool',
    'You feel you might harm your baby or yourself  -  call your pediatrician, a crisis line (988 Suicide and Crisis Lifeline), or go to your nearest emergency room immediately. Putting your baby in a safe place and walking away is always okay.',
  ],
  relatedMilestones: [
    'social-emotional-self-soothing',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Colic. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Wessel MA, Cobb JC, Jackson EB, et al. Paroxysmal fussing in infancy, sometimes called colic. Pediatrics. 1954;14(5):421-435.',
      url: 'https://publications.aap.org/pediatrics/article-abstract/14/5/421/47374',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Concerned About Your Child\'s Development? Learn the Signs. Act Early.',
      url: 'https://www.cdc.gov/ncbddd/actearly/concerned.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institute for Health and Care Excellence. Colic in Infants. NICE Clinical Knowledge Summary.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK586370/',
    },
  ],
};
