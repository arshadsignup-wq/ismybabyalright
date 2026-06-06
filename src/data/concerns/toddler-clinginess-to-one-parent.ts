import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-clinginess-to-one-parent', title: 'Toddler Only Wants One Parent', category: 'behavior',
  searchTerms: ['toddler only wants mommy','toddler prefers one parent','toddler rejects dad','toddler clingy to mom','toddler wont go to dad','toddler parent preference','toddler screams for mommy','toddler pushes away one parent','toddler only wants one parent','parent preference toddler'],
  quickAnswer: 'Strong preference for one parent is completely normal in toddlers and is one of the most common parenting complaints. It does not mean your child loves the other parent less or that the rejected parent has done something wrong. It is usually about security - your child gravitates toward the parent they feel most regulated by. This preference often shifts back and forth over time. The rejected parent should not withdraw but should keep engaging warmly.',
  byAge: [
    { ageRange: '6-18 months', context: 'Babies often prefer their primary caregiver because of attachment security. This is biologically normal. The preferred parent represents safety. The other parent should spend regular one-on-one time with the baby to build their own attachment bond.' },
    { ageRange: '18-30 months', context: 'Parent preference intensifies. Your toddler may scream "No daddy!" or push the non-preferred parent away. This is heartbreaking for the rejected parent but is temporary. The rejected parent should not take it personally. Keep trying, keep connecting, and do not disappear.' },
    { ageRange: '2.5-4 years', context: 'Preferences may shift. The child who only wanted mommy may suddenly only want daddy. This often happens when a new sibling arrives or when one parent changes their schedule. Maintain the non-preferred parent\'s role in routines like bedtime to prevent the preference from becoming entrenched.' },
    { ageRange: '4-5 years', context: 'Parent preferences become less extreme. Your child can articulate what they want from each parent. Some preference is normal even in older children, but extreme rejection of one parent that causes significant family disruption may benefit from family support.' },
  ],
  whenNormal: ['Strong preference for one parent in toddlers and preschoolers','Preference shifts over time','Your child accepts the non-preferred parent when the preferred one is unavailable','Both parents maintain a warm relationship with the child overall'],
  whenToMention: ['Your child is terrified of one parent (not just preferring the other)','The rejected parent is unable to do any caregiving at all','Parent preference is causing significant relationship strain','Your child rejects the non-preferred parent in all situations including when the preferred parent is absent'],
  whenToActNow: ['Your child shows fear responses toward one parent that may indicate a safety concern','Parent preference is so extreme it is affecting your child\'s wellbeing'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Family Dynamics. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/default.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Playing Favorites: Why Toddlers Prefer One Parent.', url: 'https://www.zerotothree.org/resource/playing-favorites/' },
    { org: 'NIH', citation: 'Bowlby J. Attachment and Loss. Basic Books; 1969.', url: 'https://pubmed.ncbi.nlm.nih.gov/28683573/' },
  ],
  relatedConcernSlugs: ['separation-anxiety','toddler-separation-from-primary-caregiver','toddler-attention-seeking-behavior','toddler-shyness-vs-social-anxiety'],
};
