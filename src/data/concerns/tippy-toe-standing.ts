import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'tippy-toe-standing',
  title: 'My Baby Stands on Tippy Toes',
  category: 'physical',
  searchTerms: [
    'baby stands on tiptoes',
    'baby standing on toes',
    'baby on tippy toes when held up',
    'baby always on toes when standing',
    'baby won\'t put feet flat when standing',
    'baby toe standing',
    'is standing on tiptoes normal',
    'baby points toes when held upright',
    'baby feet not flat when standing',
    'tippy toe standing infant',
  ],
  quickAnswer:
    'Many babies stand on their tiptoes when they are first learning to bear weight, and this is usually a normal part of development. Babies are experimenting with balance and leg position, and most will begin to put their feet flat as they gain experience and strength. If your baby can put their feet flat but chooses to stand on tiptoes, this is less concerning than a baby who seems unable to flatten their feet.',
  byAge: [
    {
      ageRange: '5-8 months',
      context:
        'When held in a supported standing position, many babies at this age stand on their tiptoes. This is extremely common and is considered a normal phase of weight-bearing development. Babies are discovering how their legs and feet work, and toe standing is part of that exploration. As long as your baby can relax their feet when not bearing weight and their ankles do not feel rigid, there is no cause for concern.',
    },
    {
      ageRange: '9-11 months',
      context:
        'As babies begin to pull to stand and cruise along furniture, tippy-toe standing often decreases. However, some babies continue to stand on their toes intermittently, especially when they are excited or trying to reach something. If your baby can and sometimes does stand with flat feet but often chooses tiptoes, this is typically normal. If they exclusively stand on tiptoes and never seem able to get their heels down, mention it to your pediatrician.',
    },
    {
      ageRange: '12-15 months',
      context:
        'Babies who are taking their first steps may stand and walk on tiptoes intermittently. This is part of learning to walk and usually resolves as their walking pattern matures. The key concern is whether your baby can flatten their feet. Try observing them when standing still and relaxed rather than during active play. If their ankles seem tight and they cannot get their heels to the ground even when calm, evaluation is appropriate.',
    },
    {
      ageRange: '15+ months',
      context:
        'Persistent tippy-toe standing after 15 months, especially if your child cannot flatten their feet when asked or when standing relaxed, should be evaluated. Your pediatrician will check ankle range of motion and may refer to a pediatric orthopedist or neurologist. Common causes include tight Achilles tendons (which respond well to stretching), sensory preferences, or increased muscle tone. Most causes are very treatable with physical therapy.',
    },
  ],
  whenNormal: [
    'Your baby stands on tiptoes when excited but can and does put feet flat when calm.',
    'Your baby is under 12 months and alternates between tiptoe standing and flat-footed standing during supported play.',
    'Your baby stands on tiptoes when reaching for objects but bears weight on flat feet at rest.',
    'Your baby briefly stands on tiptoes on cold or unfamiliar surfaces as a sensory response.',
  ],
  whenToMention: [
    'Your baby always stands on tiptoes and never seems to put their feet flat, even when calm and relaxed.',
    'Your baby\'s ankles seem stiff and resist gentle stretching toward a flat-foot position.',
    'Tippy-toe standing is getting more pronounced over time rather than improving.',
  ],
  whenToActNow: [
    'Your baby has rigid ankles that cannot be gently moved to a flat-foot position, combined with stiffness in the legs or other motor concerns.',
    'Your baby was previously standing with flat feet and has started standing exclusively on tiptoes, especially if combined with other changes in movement or behavior.',
  ],
  relatedMilestones: [
    'gross-motor-standing',
    'gross-motor-pulling-to-stand',
    'gross-motor-cruising',
    'gross-motor-walking',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Toe Walking in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Toe-Walking.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By 12 Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-12mo.html',
    },
    {
      org: 'AAP',
      citation:
        'Engstrom P, Tedroff K. Idiopathic Toe-Walking: Prevalence and Natural History. Pediatrics. 2018.',
      url: 'https://publications.aap.org/pediatrics/article/142/Supplement_4/S356/37318',
    },
  ],
};
