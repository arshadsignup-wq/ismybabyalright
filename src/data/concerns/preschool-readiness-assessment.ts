import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'preschool-readiness-assessment',
  title: 'Preschool Readiness Assessment',
  category: 'behavior',
  searchTerms: [
    'is my toddler ready for preschool',
    'preschool readiness skills checklist',
    'when to start preschool age',
    'toddler not ready for preschool signs',
    'preschool readiness developmental skills',
    'should I hold my child back from preschool',
    'preschool social skills needed',
    'potty training required for preschool',
  ],
  quickAnswer:
    'Most children are developmentally ready for preschool between ages 2.5 and 4, but readiness depends on the individual child, not just their age. Key readiness indicators include the ability to separate from parents (even if with tears), some basic self-help skills (eating independently, beginning potty training), the ability to follow simple instructions, and an interest in other children. Most preschool programs are designed to build these skills, so your child does not need to have them perfected before starting.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Not applicable. This concern is relevant for toddlers approaching preschool age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Not applicable. Focus on the current developmental stage rather than planning for preschool years away.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Not applicable. Social-emotional and self-help skills needed for preschool develop gradually through the toddler years.',
    },
    {
      ageRange: '12 months+',
      context:
        'Between ages 2 and 4, look for these signs of growing readiness: your child can follow 2-step directions, shows interest in other children, can communicate basic needs (verbally or non-verbally), is beginning to develop self-help skills (feeding themselves, attempting to dress), and can participate in brief group activities. Many preschools accept children who are still potty training. If your child has developmental delays, early intervention preschool programs may be especially beneficial.',
    },
  ],
  whenNormal: [
    'Your child meets some but not all typical preschool readiness skills — no child arrives at preschool with everything mastered',
    'Your child is nervous about starting preschool but curious about other children',
    'Your toddler is not fully potty trained — many preschool programs accommodate children in pull-ups',
    'Your child can separate from you with some distress but is comforted by other caring adults',
  ],
  whenToMention: [
    'Your child is over 3 and shows limited interest in other children, has very few words, or cannot follow basic instructions — a developmental screening may be helpful before starting preschool',
    'You are unsure whether your child needs a typical preschool or a program that offers additional developmental support',
    'Your child has been asked to leave a preschool program due to behavioral challenges and you need guidance on next steps',
  ],
  whenToActNow: [
    'Your child has significant developmental delays that have not been evaluated — language delays, limited social interaction, or motor difficulties — early intervention can provide critical support',
    'Your child has severe separation anxiety that prevents them from functioning in any setting without you, and this has not improved over time',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'daycare-readiness-signs',
    'toddler-social-anxiety-playgroups',
    'parallel-play-vs-interactive-play',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Is Your Child Ready for Preschool? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Is-Your-Child-Ready-for-Preschool.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Magnuson, K. et al. Preschool and School Readiness. Child Development. 2007.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17381791/',
    },
  ],
};
