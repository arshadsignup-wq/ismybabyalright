import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-preferring-one-parent',
  title: 'My Baby Only Wants One Parent',
  category: 'behavior',
  searchTerms: [
    'baby only wants mom',
    'baby only wants dad',
    'baby rejects one parent',
    'baby screams when dad holds them',
    'toddler prefers one parent',
    'baby won\'t go to dad',
    'baby cries with one parent',
    'why does my baby prefer one parent',
    'baby rejecting mom',
    'toddler parent preference phase',
  ],
  quickAnswer:
    'Parent preference is one of the most common and emotionally painful behaviors in babies and toddlers. It is a completely normal part of attachment development and is not a reflection of who is the "better" parent. Babies and toddlers typically cycle through phases of preferring one parent, and the "rejected" parent\'s consistent, loving presence during these phases actually strengthens their bond over time.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies may show a natural inclination toward the parent who does the majority of feeding and caregiving, often the nursing mother. This is driven by scent, voice familiarity, and association with food  -  not by love. The other parent can strengthen their bond through skin-to-skin contact, being the one to do baths or bedtime, and spending focused one-on-one time with the baby. Preference at this age is about familiarity, not rejection.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As separation anxiety develops around 6-9 months, parent preference often becomes more intense and obvious. A baby may cry or reach for one parent when the other tries to hold them. This can feel devastating for the non-preferred parent, but it is actually a sign of healthy attachment development. The baby is demonstrating that they understand who their primary attachment figure is. The non-preferred parent should continue to be present, warm, and involved  -  not withdraw.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are famous for parent preference that can change suddenly and without warning. Your toddler may insist only mommy can give baths for three months, then switch to demanding daddy exclusively. This is normal and driven by their developing sense of independence and control. Allowing the preferred parent to handle some tasks while the other parent builds their own special routines and rituals helps maintain both relationships.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Parent preference may continue but often becomes less absolute. Toddlers in this age range can begin to understand that both parents are available and each offers something special. If one parent is consistently rejected despite being consistently available and loving, and the child seems genuinely distressed (not just preferential) with that parent, it is worth discussing with your pediatrician to rule out contributing factors.',
    },
  ],
  whenNormal: [
    'Your baby or toddler goes through phases of preferring one parent and it shifts over time',
    'Your child prefers the parent who is more available or who handles most caregiving tasks like feeding and bedtime',
    'The preference is stronger when your child is tired, sick, or in an unfamiliar environment',
    'The "rejected" parent can still comfort the child when the preferred parent is not available',
  ],
  whenToMention: [
    'Your child seems genuinely fearful or distressed with one parent (not just preferential), showing signs of anxiety such as trembling, freezing, or avoiding eye contact with that parent specifically',
    'Parent preference is so extreme that the non-preferred parent cannot provide any care even when the preferred parent is unavailable, and this has persisted for many months',
    'The "rejected" parent is experiencing significant depression, feelings of inadequacy, or is withdrawing from the child as a result',
  ],
  whenToActNow: [
    'Your child shows sudden fear or avoidance of a parent or caregiver they were previously comfortable with, especially if accompanied by changes in behavior, sleep, or mood',
    'The family situation has become so strained by parent preference that it is affecting the mental health of one or both parents or the overall family dynamic',
  ],
  relatedMilestones: [
    'social-emotional-attachment',
    'social-emotional-regulation',
    'cognitive-object-permanence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Separation-Anxiety.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. When Your Child Prefers One Parent Over the Other.',
      url: 'https://www.zerotothree.org/resource/when-your-child-prefers-one-parent/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dad\'s Role in Infant Bonding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Dads-Role.aspx',
    },
  ],
};
