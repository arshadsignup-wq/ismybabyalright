import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-daycare-separation-crying',
  title: 'My Baby Cries at Daycare Drop-Off',
  category: 'behavior',
  searchTerms: [
    'baby crying at daycare',
    'daycare separation anxiety',
    'baby screams at daycare drop off',
    'toddler daycare adjustment',
    'baby wont stop crying daycare',
    'separation anxiety daycare tips',
    'how long does daycare adjustment take',
    'baby cries when I leave daycare',
    'toddler refusing daycare',
    'daycare drop off tips',
    'baby daycare transition',
  ],
  quickAnswer:
    'Crying at daycare drop-off is one of the most common and developmentally normal behaviors in babies and toddlers. Separation anxiety typically peaks between 8-18 months and is actually a sign of healthy attachment. Most children stop crying within 5-15 minutes of a parent leaving. The adjustment to daycare typically takes 2-4 weeks. A consistent, confident, and brief goodbye routine is the most effective approach.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Very young babies may have minimal separation distress at daycare since stranger anxiety has not yet developed. Some babies this age may initially be more fussy or have disrupted sleep patterns as they adjust to a new environment, different caregivers, and new routines. Consistency is key - maintaining similar feeding and napping schedules between home and daycare helps the transition. Most infants in this age group adjust within 1-2 weeks.',
    },
    {
      ageRange: '6-18 months',
      context:
        'This is when separation anxiety is at its strongest, and daycare drop-offs can be particularly challenging. Your baby\'s distress is a healthy sign that they have formed a secure attachment to you. Create a short, consistent goodbye ritual - say goodbye warmly, give a hug or kiss, and leave confidently. Lingering or sneaking out tends to make things worse. Most babies calm down quickly after the parent leaves. Ask your daycare provider to send you a photo or text after drop-off showing your baby has settled.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers can have a resurgence of separation anxiety and may verbally protest going to daycare. They may cling, cry, or say they do not want to go. This is developmentally normal and does not mean there is a problem at daycare. Toddlers can understand simple explanations: "I always come back after nap time." A transitional object (a special stuffed animal or a family photo) can provide comfort. If drop-off tears persist beyond 4-6 weeks or are accompanied by behavioral changes at home, discuss with the provider and your pediatrician.',
    },
  ],
  whenNormal: [
    'Your baby cries at drop-off but calms down within 5-15 minutes and is happy and engaged for the rest of the day.',
    'Crying at drop-off is worst during the first 2-4 weeks and gradually improves.',
    'Your baby has occasional regression in drop-off behavior during illness, after vacations, or during developmental leaps.',
    'Your toddler says they do not want to go to daycare but is happy and engaged once there.',
  ],
  whenToMention: [
    'Your baby is still extremely distressed at drop-off after 4-6 weeks with no improvement.',
    'Your child\'s behavior at home has changed significantly since starting daycare - increased aggression, sleep problems, or developmental regression.',
    'Your child has stopped eating or sleeping at daycare consistently.',
  ],
  whenToActNow: [
    'Your child has unexplained injuries or bruises from daycare.',
    'Your child shows fear reactions to specific caregivers or becomes extremely distressed at the mention of a specific person.',
    'Your child\'s behavior has dramatically changed - new fears, withdrawal, sexualized behavior, or severe aggression that was not present before.',
  ],
  relatedMilestones: [
    'social-emotional-attachment',
    'social-emotional-engagement',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'attachment-concerns',
    'adopted-baby-attachment-bonding-timeline',
    'defiant-toddler',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Coping with Separation at Child Care.',
      url: 'https://www.zerotothree.org/resource/coping-with-separation/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers.',
      url: 'https://www.cdc.gov/child-development/positive-parenting/toddlers.html',
    },
  ],
};
