import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-intimacy-timeline',
  title: 'Intimacy After Birth: When and How',
  category: 'maternal',
  searchTerms: [
    'when can I have sex after giving birth',
    'intimacy after baby',
    'how long to wait for sex after delivery',
    'sex after birth timeline',
    'resuming intercourse postpartum',
    'postpartum sex when is it safe',
    'six week rule sex after birth',
    'intimacy after c section',
  ],
  quickAnswer:
    'Most healthcare providers recommend waiting at least four to six weeks after delivery before resuming sexual intercourse, to allow time for healing. However, every person\'s recovery is different, and there is no universal timeline. Physical readiness, emotional readiness, and personal comfort should all guide your decision, and there is no rush.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'During this time, your body is in the earliest phase of recovery. The cervix is still closing, and you are likely experiencing lochia (postpartum bleeding). Sexual intercourse is not recommended during this period due to the risk of infection. Focus on rest, bonding with your baby, and physical recovery. Non-sexual intimacy like holding hands, cuddling, and emotional closeness can help maintain your connection with your partner.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Most providers give clearance for sexual activity at the four- to six-week postpartum visit after confirming that any tears or incisions have healed and bleeding has slowed or stopped. However, being medically cleared does not mean you must feel ready. Fatigue, hormonal changes, breastfeeding, and the demands of a newborn can all reduce desire. Communicate openly with your partner about where you are emotionally and physically.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'Many couples begin to explore intimacy during this period, though it is completely normal if you are not ready yet. If you do resume intercourse, go slowly, use plenty of water-based lubricant (hormonal changes often cause dryness), and stop if anything is painful. It is common for the first few times to feel different than before. Choose a time when you are not exhausted and there is no pressure.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'By this time, most physical healing is complete, though breastfeeding hormones can continue to cause vaginal dryness and reduced libido. If sex is still painful at this point, it is worth mentioning to your provider, as you may benefit from pelvic floor physical therapy, topical estrogen, or other treatments. Intimacy often looks different after having a baby, and that is okay.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Most couples have found a new normal for their intimate life by this point, though it may be different from before the baby. If you continue to experience significant pain, low desire, or emotional difficulty around intimacy, professional support from a pelvic floor therapist, sex therapist, or your OB/GYN can be very helpful. There is no timeline by which you "should" feel back to normal.',
    },
  ],
  whenNormal: [
    'Feeling little to no interest in sex for several weeks or months after giving birth',
    'Experiencing some discomfort or sensitivity the first few times you resume intercourse',
    'Needing more lubricant and foreplay than before pregnancy',
    'Feeling "touched out" from caring for a baby and wanting physical space',
  ],
  whenToMention: [
    'Pain during intercourse persists beyond three months postpartum despite using lubricant and taking things slowly',
    'You have no interest in intimacy and it is causing significant distress in your relationship',
    'You experience anxiety or flashbacks related to your birth experience when attempting intimacy',
  ],
  whenToActNow: [
    'You are experiencing heavy bleeding after intercourse that soaks more than one pad per hour',
    'You develop a fever, foul-smelling discharge, or severe pelvic pain after resuming sexual activity, which could indicate infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Sex After Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/having-sex-after-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'McDonald EA, et al. Resumption of Intercourse and the Postpartum Consultation. Australian and New Zealand Journal of Obstetrics and Gynaecology, 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25688816/',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Your Body After Baby. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/your-body-after-baby',
    },
  ],
};
