import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'perineal-healing-postpartum',
  title: 'Perineal Healing After Birth',
  category: 'maternal',
  searchTerms: [
    'perineal healing after birth',
    'perineal tear recovery',
    'stitches after birth',
    'episiotomy healing',
    'pain down below after delivery',
    'perineum sore after birth',
    'how long for stitches to heal after birth',
    'perineal care postpartum',
  ],
  quickAnswer:
    'Perineal soreness after vaginal delivery is nearly universal, whether or not you had a tear or episiotomy. Minor tears and episiotomies typically heal within two to three weeks, while more severe tears may take longer. Good perineal care with ice packs, sitz baths, and proper hygiene can significantly ease discomfort and promote healing.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'The perineal area will be at its most sore and swollen during this period. Ice packs applied for the first 24 to 48 hours can help reduce swelling, followed by warm sitz baths to promote blood flow and comfort. If you have stitches, they are dissolvable and do not need to be removed. Keeping the area clean by rinsing with warm water after using the bathroom and patting dry is important for preventing infection.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Discomfort should be gradually improving during this period. First- and second-degree tears are usually well healed by this point. You may still feel some tenderness, particularly with prolonged sitting. A donut-shaped cushion can help relieve pressure. Your stitches should dissolve on their own within a few weeks. If pain is worsening rather than improving, contact your provider.',
    },
    {
      ageRange: '6-12 weeks postpartum',
      context:
        'Most perineal wounds are fully healed by this stage. Your provider will assess the healing at your postpartum visit. Some women may still experience tenderness, especially with intercourse. Using a lubricant and taking things slowly when resuming sexual activity can help. If you had a third- or fourth-degree tear, full healing may take longer and your provider may recommend pelvic floor physiotherapy.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'The scar tissue from any tear or episiotomy continues to soften and become more flexible over time. Perineal massage can help desensitize the area and improve comfort during intercourse. If you continue to experience significant pain, tightness, or discomfort, a referral to a pelvic floor physical therapist can be very helpful.',
    },
  ],
  whenNormal: [
    'Soreness, swelling, and bruising in the perineal area for the first one to two weeks',
    'Discomfort when sitting, walking, or using the bathroom that gradually improves',
    'Mild itching as the wound heals, which is a sign of tissue repair',
    'Some tenderness with the first attempts at sexual intercourse',
  ],
  whenToMention: [
    'Pain is getting worse rather than better after the first week',
    'You notice a foul-smelling discharge from the stitches or wound area',
    'The wound edges appear to be separating or not closing properly',
    'Pain during intercourse persists beyond three months postpartum despite using lubricant and going slowly',
  ],
  whenToActNow: [
    'The perineal area becomes very red, swollen, hot, and increasingly painful, suggesting infection',
    'You develop a fever along with worsening perineal pain',
    'You notice pus or foul-smelling drainage from the wound site',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Prevention and Management of Obstetric Lacerations at Vaginal Delivery. ACOG Practice Bulletin, 2018.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/07/prevention-and-management-of-obstetric-lacerations-at-vaginal-delivery',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Perineal Care After Delivery. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/ency/patientinstructions/000624.htm',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Your Body After Baby. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/your-body-after-baby',
    },
  ],
};
