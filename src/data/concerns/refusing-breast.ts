import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'refusing-breast',
  title: 'Baby Refusing Breast',
  category: 'feeding',
  searchTerms: [
    'baby refusing breast',
    'baby won\'t nurse',
    'baby pulling away from breast',
    'baby screaming at breast',
    'baby latching and unlatching',
    'baby refusing one breast',
    'breast refusal baby',
    'baby fussy at breast',
    'baby pushing away from breast',
    'baby doesn\'t want to breastfeed',
    'why is my baby rejecting the breast',
  ],
  quickAnswer:
    'A baby refusing the breast can be stressful, but it is usually temporary and has a fixable cause. Common reasons include a stuffy nose, teething pain, an ear infection, change in milk taste, or overstimulation. This is different from weaning, which is gradual. Most breast refusal episodes resolve within a few days with patience, skin-to-skin contact, and addressing the underlying cause.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In very young babies, breast refusal often relates to latch difficulties, fast or slow milk flow, or positional discomfort. A tongue tie or lip tie can make latching painful for the baby. If your newborn consistently refuses to latch or is losing weight, an urgent lactation consultation is important. Skin-to-skin contact and offering the breast when your baby is drowsy can help.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies at this age become very distractible and may pop on and off the breast, which can look like refusal but is actually normal developmental curiosity. Try nursing in a dark, quiet room. If your baby is truly refusing, consider whether they might have an ear infection, nasal congestion, or oral thrush, all of which can make nursing uncomfortable.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Breast refusal at this age is sometimes triggered by teething pain, which makes sucking uncomfortable. It can also follow a negative experience at the breast, such as being bitten and the parent reacting sharply. If your baby bites and you yell, they may become temporarily wary of the breast. Respond calmly, offer teething relief before feeds, and they will usually return to nursing.',
    },
    {
      ageRange: '9-12 months',
      context:
        'Some parents worry that breast refusal at this age means their baby is self-weaning, but true self-weaning before 12 months is uncommon. More likely this is a temporary nursing strike caused by illness, teething, a schedule change, or a developmental leap. Continue offering the breast, try different nursing positions, and maintain your supply by pumping if needed.',
    },
  ],
  whenNormal: [
    'Your baby occasionally refuses one breast but feeds well on the other',
    'Breast refusal lasts a day or two and coincides with teething, a cold, or a schedule change',
    'Your baby is distracted during feeds but nurses well when drowsy or in a quiet room',
    'Your baby is eating well from solids and supplementing with some breast milk',
  ],
  whenToMention: [
    'Breast refusal has lasted more than a few days and your baby is also taking less from a bottle or cup',
    'Your baby seems to be in pain while attempting to nurse, such as pulling at their ears or crying',
    'You suspect thrush because you see white patches in your baby\'s mouth or you have nipple pain',
    'Your milk supply is dropping due to the feeding disruption and you need support maintaining it',
  ],
  whenToActNow: [
    'Your newborn is refusing all feeding sources and has fewer wet diapers than expected for their age',
    'Your baby shows signs of dehydration including dry mouth, no tears when crying, or sunken fontanelle',
    'Your baby has a fever along with breast refusal, suggesting a possible infection that needs treatment',
  ],
  relatedMilestones: [
    'feeding',
    'weight-gain',
    'social-emotional',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Breastfeeding Challenges. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding recommendations.',
      url: 'https://www.who.int/health-topics/breastfeeding',
    },
  ],
};
