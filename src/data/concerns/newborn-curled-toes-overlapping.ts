import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-curled-toes-overlapping',
  title: 'Overlapping or Curled Toes in Newborns',
  category: 'physical',
  searchTerms: [
    'newborn curled toes',
    'baby overlapping toes',
    'baby toes crossed over',
    'newborn toe curling',
    'infant overlapping toes normal',
    'baby toes turned under',
    'newborn crooked toes',
    'baby fifth toe overlapping',
    'curly toes baby',
    'newborn toe position',
  ],
  quickAnswer:
    'Overlapping or curled toes in newborns are very common and usually harmless. They are often caused by the baby\'s position in the womb and typically straighten out on their own as the child grows and begins walking. The fifth (pinkie) toe overlapping the fourth toe is particularly common and rarely requires treatment.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Overlapping, curled, or crooked toes are very common in newborns and are usually related to how the baby was positioned in the womb. The most common presentation is the fifth toe curling under or overlapping the fourth toe. These toe positions are flexible and can be gently straightened, which confirms they are positional rather than structural. No taping, splinting, or treatment is needed at this age.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The toes may still appear curled or overlapping, which continues to be normal. As your baby kicks and moves their feet more, the toes gradually begin to straighten. You do not need to do anything special to correct the position. Avoid tight-fitting socks or shoes that could restrict natural movement.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Toes typically continue to straighten as your baby grows. You may still notice some curling, especially when your baby flexes their feet. This remains a normal variation. If any toe appears rigid, fixed, or cannot be gently straightened, mention it to your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby begins to stand and bear weight, the toes usually straighten further. Most overlapping and curled toes resolve by the time your child is walking regularly. If toes remain significantly overlapping and are causing problems with shoe fit or walking, your pediatrician may refer to a pediatric orthopedist, though this is uncommon.',
    },
  ],
  whenNormal: [
    'Toes that curl or overlap but can be gently straightened (flexible)',
    'Both feet are affected similarly',
    'Baby does not appear to be in pain or bothered by the toe position',
    'Gradual improvement as baby grows and becomes more active',
  ],
  whenToMention: [
    'A toe is rigid and cannot be gently straightened',
    'The overlapping or curling seems to be getting worse rather than better',
    'You notice swelling, redness, or skin irritation between overlapping toes',
  ],
  whenToActNow: [
    'Sudden swelling, redness, or pain in any toe that could indicate injury or infection',
    'A toe appears discolored or has compromised blood flow',
  ],
  relatedMilestones: ['standing', 'walking'],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Foot Problems in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Congenital Curly Toes. Pediatric Orthopedics.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK430901/',
    },
  ],
  relatedConcernSlugs: ['baby-curling-toes', 'newborn-bowed-legs-normal', 'clubfoot-baby'],
};
