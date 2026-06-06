import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-acting-like-baby-again', title: 'Toddler Acting Like a Baby Again', category: 'behavior',
  searchTerms: ['toddler acting like baby','toddler baby talk regression','toddler wants bottle again','toddler wants to be carried like baby','toddler pretending to be baby','toddler wanting baby things','toddler regression baby behavior','toddler crawling again','toddler sucking thumb again','toddler wanting pacifier again'],
  quickAnswer: 'When a toddler reverts to baby-like behaviors - wanting a bottle, using baby talk, asking to be carried, crawling, or wanting diapers - they are communicating an emotional need. This often happens after a new sibling arrives, during stressful transitions, or when they feel they need extra nurturing. Meeting this need (within reason) typically resolves the behavior faster than fighting it. Your child is not "going backwards" - they are seeking comfort.',
  byAge: [
    { ageRange: '18-24 months', context: 'At this age, your child may not be regressing so much as not yet having fully moved past baby behaviors. Some back-and-forth between baby and toddler behaviors is normal during this transition period. Be patient with the inconsistency.' },
    { ageRange: '2-3 years', context: 'Baby-like regression is very common after a new sibling arrives. Your toddler sees the baby getting attention through crying, being held, and being fed, and experiments with whether those behaviors will work for them too. Let them "be the baby" sometimes in play. Also celebrate their big-kid abilities.' },
    { ageRange: '3-4 years', context: 'Your child may talk in baby talk, want to be fed, or ask for diapers. Some parents find it helpful to offer "baby time" - 5 minutes where you hold them like a baby, rock them, and give them undivided attention. This fills the need and often reduces the behavior outside of that special time.' },
    { ageRange: '4-5 years', context: 'Brief baby-like regression during stress is normal even at this age. If it is persistent and your child seems stuck in baby behaviors, address the underlying stress. Ensure your child feels valued for who they are. "I love you at every age, and I especially love being your mom/dad right now."' },
  ],
  whenNormal: ['Baby-like behavior after a new sibling or stressful event','Your child can access age-appropriate skills when motivated','The regression is temporary and improves within weeks','Your child alternates between baby behavior and age-appropriate behavior'],
  whenToMention: ['Regression lasts months without improvement','Your child seems unable to access previously mastered skills even when calm','Baby-like behavior is accompanied by genuine skill loss','Regression occurs without any identifiable trigger'],
  whenToActNow: ['Your child loses multiple developmental skills suddenly','Regression is accompanied by other concerning symptoms like seizures or changes in consciousness'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. The New Baby: Helping Your Older Child Adjust.', url: 'https://www.zerotothree.org/resource/the-new-baby/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Preparing Your Child for a New Sibling. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Preparing-Your-Child-for-a-New-Sibling.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
  ],
  relatedConcernSlugs: ['toddler-new-baby-adjustment-timeline','toddler-regression-behavior-general','toddler-regression-potty-new-sibling','toddler-aggressive-toward-baby'],
};
