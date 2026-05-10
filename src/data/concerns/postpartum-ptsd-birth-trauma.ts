import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'postpartum-ptsd-birth-trauma',
  title: 'Postpartum PTSD and Birth Trauma',
  category: 'behavior',
  searchTerms: [
    'birth trauma',
    'traumatic birth experience',
    'postpartum PTSD',
    'flashbacks from delivery',
    'cannot stop thinking about birth',
    'scared to have another baby after traumatic birth',
    'nightmares about labor',
    'traumatic c-section recovery',
  ],
  quickAnswer:
    'Up to 45% of new parents describe their birth experience as traumatic, and approximately 4-6% develop full postpartum PTSD. If you are experiencing flashbacks, nightmares, hypervigilance, or emotional numbness related to your birth, your experience is valid. Birth trauma is not about what happened — it is about how you felt during it. Effective, evidence-based treatments are available.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'In the early weeks after a traumatic birth, it is normal to replay the experience mentally. You may have vivid flashbacks, difficulty sleeping beyond what newborn care demands, or feel emotionally numb. Some parents avoid reading birth stories or feel intense distress around medical settings. If these symptoms persist beyond one month or intensify, they may indicate postpartum PTSD.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'By this point, acute traumatic stress should be improving. If you are still experiencing intrusive memories, avoiding reminders of the birth, feeling disconnected from your baby or partner, or experiencing heightened startle responses, professional support can make a significant difference. EMDR and trauma-focused CBT are both evidence-based treatments for birth trauma.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Unresolved birth trauma can affect your relationship with your baby, your partner, and your willingness to consider future pregnancies. Some parents develop anxiety about their baby\'s health or become hypervigilant about safety as a way to compensate for the helplessness they felt during birth. Treatment at any point is effective.',
    },
    {
      ageRange: '12 months+',
      context:
        'Birth trauma does not have an expiration date. Many parents seek help around the first birthday or when contemplating another pregnancy. Anniversary reactions — feeling worse around the date of the traumatic birth — are common. Healing is possible at any stage, and you deserve support regardless of how much time has passed.',
    },
  ],
  whenNormal: [
    'Processing and talking about a difficult birth experience in the early weeks — this is a healthy way of making sense of what happened',
    'Feeling disappointed or sad about a birth that did not go as planned',
    'Some anxiety about medical appointments in the weeks after a difficult birth',
    'Temporary heightened protectiveness of your newborn that gradually eases',
  ],
  whenToMention: [
    'Intrusive flashbacks or nightmares about the birth that persist beyond one month postpartum',
    'Avoiding things that remind you of the birth (hospitals, certain people, birth stories) in ways that limit your daily life',
    'Feeling emotionally disconnected from your baby, partner, or daily life since the birth',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or ending your life — call 988 (Suicide and Crisis Lifeline) immediately',
    'You are unable to care for your baby because trauma symptoms are so severe — call the Postpartum Support International helpline at 1-800-944-4773 or go to your nearest emergency room',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'nicu-parent-trauma',
    'bonding-difficulty-with-baby',
    'postpartum-ocd-intrusive-thoughts',
  ],
  sources: [
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Postpartum Post-Traumatic Stress Disorder.',
      url: 'https://www.postpartum.net/learn-more/postpartum-post-traumatic-stress-disorder/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Birth Trauma and Postpartum PTSD. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/understanding-motherhood-and-mood-baby-blues-and-beyond.aspx',
    },
    {
      org: 'NIMH',
      citation:
        'National Institute of Mental Health. Post-Traumatic Stress Disorder.',
      url: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd',
    },
  ],
};
