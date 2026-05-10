import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-favoritism-one-parent',
  title: 'Baby Showing Favoritism to One Parent',
  category: 'behavior',
  searchTerms: [
    'baby only wants mom',
    'baby cries when dad holds them',
    'toddler prefers one parent over the other',
    'baby rejects father',
    'toddler only wants mommy',
    'baby screams when mom leaves the room',
    'parent preference in toddlers normal',
    'baby won\'t go to dad',
  ],
  quickAnswer:
    'It is extremely common for babies and toddlers to show a strong preference for one parent, usually the primary caregiver. This is not a reflection of love or bonding quality — it is driven by attachment patterns, routine, and comfort-seeking. The preference often shifts back and forth over time. While it can be painful for the less-preferred parent, it is a normal part of development and typically balances out.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very young babies may seem to prefer whichever parent feeds and holds them most, but this is more about familiarity with scent, voice, and feeding routine than a true preference. Both parents should have regular holding, feeding (if possible), and skin-to-skin time.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies begin to show clearer preferences as they recognize faces and voices. A baby who is primarily cared for by one parent may fuss when handed to the other. This is about familiarity and comfort, not rejection. The less-preferred parent should continue regular caregiving without taking it personally.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Separation anxiety peaks around 8-10 months, and babies often become intensely attached to their primary caregiver. They may cry when that parent leaves the room and resist being comforted by anyone else. This is a healthy sign of secure attachment and is temporary.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers may loudly declare their preference ("I want Mommy, not Daddy!") which can be hurtful. Preferences often shift — a child who was "all about mom" may suddenly prefer dad. Building special routines between the less-preferred parent and the child (a special game, bedtime routine, or outing) helps strengthen that bond.',
    },
  ],
  whenNormal: [
    'Your baby or toddler cries when the preferred parent leaves the room or hands them to the other parent',
    'Your toddler says they only want one parent for certain activities like bedtime, bath, or comfort',
    'The preferred parent shifts over time or in different contexts',
    'Your child is happy and engaged with both parents during calm, unstressed moments',
  ],
  whenToMention: [
    'Your child shows fear or anxiety around one parent that seems disproportionate and does not improve with time and positive interaction',
    'Favoritism is so extreme that the child becomes inconsolable for extended periods when the preferred parent is unavailable, and this is not improving',
    'You notice your child avoids or flinches from one specific adult in their life consistently',
  ],
  whenToActNow: [
    'Your child shows sudden, unexplained fear of a specific caregiver, especially combined with behavioral changes like sleep disruption, regression, or fearfulness — this warrants immediate discussion with your pediatrician',
    'Either parent is experiencing significant emotional distress from the favoritism that is affecting their mental health or the family dynamic',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-jealousy-new-baby',
    'toddler-social-anxiety-playgroups',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Bowlby, J. Attachment and Loss. National Library of Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
