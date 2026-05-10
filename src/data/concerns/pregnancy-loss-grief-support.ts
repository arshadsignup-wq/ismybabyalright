import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'pregnancy-loss-grief-support',
  title: 'Pregnancy Loss Grief and Support',
  category: 'behavior',
  searchTerms: [
    'miscarriage grief',
    'stillbirth support',
    'pregnancy loss depression',
    'coping with miscarriage',
    'grief after losing baby',
    'pregnancy loss and rainbow baby',
    'how long does miscarriage grief last',
    'husband does not understand miscarriage grief',
  ],
  quickAnswer:
    'Pregnancy loss — whether miscarriage, stillbirth, ectopic pregnancy, or termination for medical reasons — is a profound loss. The grief you are feeling is entirely valid, regardless of how early or late the loss occurred. There is no "right" way or timeline to grieve. Your baby mattered, and your pain deserves acknowledgment and compassionate support.',
  byAge: [
    {
      ageRange: 'First trimester loss',
      context:
        'Early miscarriage is devastatingly common (affecting roughly 1 in 4 known pregnancies) and yet profoundly isolating because many people had not yet shared the news. The dismissive "at least it was early" response from others can deepen your pain. Your grief is proportional to your hopes and love, not to gestational age. Physical recovery compounds emotional pain, and hormonal shifts can intensify mood symptoms.',
    },
    {
      ageRange: 'Second trimester loss',
      context:
        'Loss in the second trimester often comes after you have heard a heartbeat, seen ultrasounds, and perhaps shared the news. The physical process of loss at this stage can be traumatic in itself. You may need to deliver or have a procedure, making the medical experience part of the trauma. Allow yourself whatever time and support you need.',
    },
    {
      ageRange: 'Stillbirth or late loss',
      context:
        'Stillbirth (loss after 20 weeks) is one of the most devastating losses a parent can experience. You may have held your baby, named them, and have a lifetime of dreams to mourn. The grief is often compounded by the need to make immediate decisions about arrangements during the worst moment of your life. Specialized bereavement support can provide invaluable guidance during this time.',
    },
    {
      ageRange: 'Weeks and months after loss',
      context:
        'Grief after pregnancy loss does not follow a linear path. You may have days that feel manageable and then be blindsided by a pregnancy announcement, a due date, or the sight of a baby. Anxiety about future pregnancies is common. Many people find that support groups — connecting with others who truly understand — provide comfort that well-meaning friends and family cannot.',
    },
  ],
  whenNormal: [
    'Intense grief, crying, anger, or emotional numbness in the days and weeks following the loss — all of these are normal grief responses',
    'Feeling triggered by pregnancy announcements, baby showers, or seeing pregnant people',
    'Wondering "what if" or "why me" — searching for a reason is a natural part of grief',
    'Grief that ebbs and flows over months — there is no set timeline for healing',
  ],
  whenToMention: [
    'Grief that persists at the same intensity for months and is preventing you from functioning in daily life',
    'Intense guilt or self-blame that will not ease despite reassurance — most pregnancy losses are not preventable',
    'Anxiety about a subsequent pregnancy that is so severe it prevents you from seeking prenatal care or causes panic attacks',
  ],
  whenToActNow: [
    'You are having thoughts of ending your life or harming yourself — call 988 (Suicide and Crisis Lifeline) immediately',
    'You are unable to eat, sleep, or get out of bed for an extended period — please call your healthcare provider or the Postpartum Support International helpline at 1-800-944-4773',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'secondary-infertility-emotional-impact',
    'parenting-anxiety-constant-worry',
    'postpartum-ptsd-birth-trauma',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coping With Miscarriage. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/Pages/Coping-With-Miscarriage.aspx',
    },
    {
      org: 'NIMH',
      citation:
        'National Institute of Mental Health. Perinatal Depression.',
      url: 'https://www.nimh.nih.gov/health/publications/perinatal-depression',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Pregnancy and Postpartum Loss.',
      url: 'https://www.postpartum.net/learn-more/pregnancy-postpartum-loss/',
    },
  ],
};
