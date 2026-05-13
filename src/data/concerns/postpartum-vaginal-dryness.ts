import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-vaginal-dryness',
  title: 'Postpartum Vaginal Dryness',
  category: 'maternal',
  searchTerms: [
    'vaginal dryness after birth',
    'postpartum dryness',
    'dry down there after having baby',
    'breastfeeding vaginal dryness',
    'low estrogen after birth',
    'vaginal dryness breastfeeding',
    'postpartum lubricant',
    'dryness during sex after baby',
  ],
  quickAnswer:
    'Vaginal dryness after childbirth is extremely common and is primarily caused by the drop in estrogen levels that occurs after delivery, especially in breastfeeding mothers. This hormonal shift can make the vaginal tissue thinner, drier, and more sensitive. The condition is temporary and improves as hormone levels normalize, typically after breastfeeding ends or significantly decreases.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'Immediately after delivery, estrogen levels drop sharply. You may not notice vaginal dryness yet, as the body is still processing lochia and initial healing. However, the hormonal changes that cause dryness are already underway. This is not a time when intercourse is recommended, so dryness may not be noticeable yet.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'As your body continues to heal and hormone levels remain low, vaginal dryness may become more apparent. If you are breastfeeding, prolactin levels remain elevated, which suppresses estrogen and contributes to continued dryness. Using a water-based lubricant during any sexual activity is recommended. Avoid scented products near the vaginal area, as they can cause further irritation.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'This is when many couples resume sexual activity, and vaginal dryness is often most noticeable. A generous amount of water-based lubricant can make a significant difference. If lubricant alone is not sufficient, talk to your provider about topical vaginal estrogen or a vaginal moisturizer, both of which are safe during breastfeeding. Longer foreplay also helps, as it gives your body more time to produce natural lubrication.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'If you are still breastfeeding, vaginal dryness may persist throughout this period. This is normal and does not mean something is wrong. Continue using lubricant and moisturizers as needed. If dryness is causing significant discomfort or pain, your provider may prescribe a low-dose topical estrogen cream, which delivers estrogen locally without significant systemic absorption.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'As breastfeeding frequency decreases or weaning begins, estrogen levels gradually rise and vaginal dryness typically improves. If you have fully weaned and continue to experience significant dryness, mention it to your provider, as other factors such as thyroid issues or perimenopause may be contributing.',
    },
  ],
  whenNormal: [
    'Vaginal dryness that corresponds with breastfeeding and gradually improves as feeding frequency decreases',
    'Needing lubricant during intercourse when you did not need it before pregnancy',
    'Mild vaginal discomfort or irritation that responds well to lubricant and moisturizer use',
  ],
  whenToMention: [
    'Vaginal dryness is causing significant pain during intercourse despite consistent lubricant use',
    'You experience burning, itching, or irritation that does not improve with lubricant or moisturizer',
    'Dryness persists for more than two to three months after you have fully stopped breastfeeding',
    'You notice changes in urinary frequency or recurrent urinary tract infections along with vaginal dryness',
  ],
  whenToActNow: [
    'You develop a foul-smelling discharge, severe itching, or abnormal bleeding, which could indicate infection rather than simple dryness',
    'You experience severe pain that prevents any sexual activity or causes significant distress',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Having Sex After Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/having-sex-after-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'Wisniewski PM, Wilkinson EJ. Postpartum Vaginal Atrophy. American Journal of Obstetrics and Gynecology, 1991.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/2035573/',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Breastfeeding Your Baby. ACOG FAQ, 2023.',
      url: 'https://www.acog.org/womens-health/faqs/breastfeeding-your-baby',
    },
  ],
};
