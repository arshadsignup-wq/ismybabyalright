import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-comfort-object-dependency', title: 'Toddler Attached to a Comfort Object (Lovey, Blanket)', category: 'behavior',
  searchTerms: ['toddler comfort object','toddler attached blanket','toddler lovey dependency','toddler security blanket','toddler cant be without blanket','toddler transitional object','toddler attached stuffed animal','toddler needs lovey everywhere','when to take away comfort object','toddler blanket attachment'],
  quickAnswer: 'Attachment to a comfort object (often called a lovey, blankie, or transitional object) is completely normal and healthy. About 60% of children develop an attachment to a special object, typically between 6-12 months, peaking around age 2-3. These objects provide genuine comfort and security, helping your child self-soothe and manage separations. There is no need to take it away - most children naturally reduce their dependence on their own timeline.',
  byAge: [
    { ageRange: '6-18 months', context: 'This is when comfort object attachment typically forms. Your baby may gravitate toward a specific blanket, stuffed animal, or cloth. This is a positive sign of healthy emotional development. Tip: buy a duplicate of the comfort object now, before it becomes irreplaceable.' },
    { ageRange: '18-36 months', context: 'Peak attachment to comfort objects. Your toddler may need it everywhere - daycare, car rides, bed, restaurants. This is healthy self-regulation in action. Your child is using the object to manage anxiety and transitions. Do not take it away or limit it harshly during this peak period.' },
    { ageRange: '3-4 years', context: 'Many children begin naturally limiting their comfort object use to bedtime and stressful situations. You can gently encourage this: "Your blankie will wait for you in the car while we are in the store." But do not force it. Let your child set the pace.' },
    { ageRange: '4-6 years', context: 'Most children reduce comfort object use significantly. Some keep it for bedtime through elementary school, which is perfectly fine. If your child is still heavily dependent on the object for all daily activities by age 5-6, gently encourage expanding their coping strategies while still respecting the attachment.' },
  ],
  whenNormal: ['Strong attachment to a comfort object through toddlerhood','Needing the object during transitions, bedtime, and stressful situations','Dependence gradually decreasing with age','Your child can function briefly without it even if they prefer to have it'],
  whenToMention: ['Your child cannot function at all without the comfort object at age 4-5+','Attachment seems to be increasing rather than gradually decreasing','Your child has no other coping strategies beyond the comfort object','The comfort object is the only way your child can regulate emotions at any age'],
  whenToActNow: ['Your child is in extreme distress without the comfort object and cannot be calmed by any other means','The comfort object is causing a hygiene or safety concern'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Comfort Objects. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Comfort-Objects.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Security Objects.', url: 'https://www.zerotothree.org/resource/security-objects/' },
    { org: 'NIH', citation: 'Winnicott DW. Transitional objects and transitional phenomena. Int J Psychoanal. 1953;34:89-97.', url: 'https://pubmed.ncbi.nlm.nih.gov/13061115/' },
  ],
  relatedConcernSlugs: ['toddler-pacifier-weaning-difficulty','toddler-self-regulation-timeline','separation-anxiety','toddler-emotional-regulation-skills'],
};
