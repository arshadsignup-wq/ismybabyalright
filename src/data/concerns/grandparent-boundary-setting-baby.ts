import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'grandparent-boundary-setting-baby',
  title: 'Setting Boundaries with Grandparents About Your Baby',
  category: 'behavior',
  searchTerms: [
    'setting boundaries with grandparents',
    'grandparents overstepping boundaries baby',
    'grandparents won\'t listen to parents',
    'grandparents ignoring parenting rules',
    'grandparents undermining parents',
    'how to set boundaries with in-laws baby',
    'grandparents spoiling baby too much',
    'grandparents giving baby unsafe food',
    'grandparents not following safe sleep rules',
    'overbearing grandparents new baby',
  ],
  quickAnswer:
    'Setting boundaries with grandparents is one of the most common sources of conflict for new parents, but it is essential for your baby\'s safety and your family\'s wellbeing. Research shows that clear, consistent boundaries actually improve the grandparent-grandchild relationship long-term by reducing conflict and resentment. The most critical boundaries involve safety issues such as safe sleep practices, car seat use, food choices, and respecting your parenting decisions.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period is when boundary conflicts often peak because grandparents may have strong opinions about feeding, sleep, and visitors. Key safety boundaries to enforce include: always placing baby on their back to sleep, no loose bedding or pillows in the crib, no honey, following your pediatrician\'s guidance on visitors and illness exposure, and not kissing the baby on the face during RSV and flu season. Frame these as medical requirements, not personal preferences, to reduce pushback.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As your baby becomes more interactive, grandparents may want to introduce foods, screen time, or activities before you are ready. Common boundary issues include giving juice or solid foods before 6 months, propping bottles, forward-facing car seats too early, and using outdated sleep aids like bumpers or positioners. Present updated AAP guidelines directly and explain that recommendations have changed since they raised children. Many grandparents respond well to being included in learning new safety standards.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler-age boundary issues often shift to discipline styles, screen time limits, sugar and junk food, and spoiling. While some flexibility on non-safety issues (an extra cookie at grandma\'s house) can strengthen family bonds, safety boundaries remain non-negotiable. If grandparents consistently undermine your discipline approach, it can confuse your toddler and create behavioral problems. Have calm, private conversations about expectations and be willing to limit unsupervised visits if safety boundaries are repeatedly violated.',
    },
  ],
  whenNormal: [
    'Grandparents occasionally offer unsolicited advice but ultimately respect your decisions when you explain your reasoning.',
    'There are minor disagreements about non-safety issues like clothing choices or how much to hold the baby.',
    'Grandparents need reminders about updated safety guidelines but are willing to follow them.',
  ],
  whenToMention: [
    'Conflict with grandparents is causing significant stress or anxiety that affects your ability to enjoy parenting.',
    'Grandparents repeatedly violate safety rules (sleep position, car seat use, food restrictions) despite clear communication.',
    'You and your partner disagree about how to handle grandparent boundary issues, creating relationship tension.',
  ],
  whenToActNow: [
    'Grandparents are engaging in behavior that puts your baby at immediate physical risk and refuse to stop (such as co-sleeping with the baby while impaired, driving without a car seat, or giving known allergens).',
    'The boundary conflict is contributing to postpartum depression or anxiety symptoms such as persistent hopelessness, inability to sleep, or thoughts of self-harm.',
    'You suspect a grandparent is physically or emotionally harming your child.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'grandparent-outdated-advice-handling',
    'partner-disagreement-parenting-style',
    'parental-decision-fatigue-conflicting-advice',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Grandparents\' Role in Child Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Grandparents-Role.aspx',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. Family Boundaries and Relationship Health.',
      url: 'https://www.apa.org/topics/families',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Setting Limits with Love: Helping Families Manage Relationships.',
      url: 'https://www.zerotothree.org/resource/setting-limits-with-love/',
    },
  ],
};
