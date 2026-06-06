import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-perfectionism-frustration', title: 'Toddler Gets Frustrated When Things Are Not Perfect', category: 'behavior',
  searchTerms: ['toddler perfectionism','toddler wants things perfect','toddler frustrated imperfect','toddler redoes everything','toddler rigid about how things done','toddler melts down mistakes','toddler cant handle mistakes','toddler perfectionist tendencies','toddler everything has to be right','toddler upset by errors'],
  quickAnswer: 'Some toddlers show early perfectionist tendencies - becoming upset when a drawing does not look right, a tower is crooked, or something is not done exactly as they envisioned. This can be a temperament trait related to high internal standards. While some perfectionism is normal, extreme rigidity may be worth monitoring. The goal is to help your child develop a healthy relationship with mistakes and imperfection.',
  byAge: [
    { ageRange: '12-24 months', context: 'At this age, frustration with outcomes is usually about things not working as intended rather than true perfectionism. Your toddler may cry when blocks fall or a shape will not fit. This is normal frustration with developing skills, not perfectionism.' },
    { ageRange: '2-3 years', context: 'Early perfectionist tendencies may emerge: wanting to color inside the lines, becoming upset when something breaks, or insisting on doing things a specific way. Model imperfection: "Oops, my drawing is wobbly! That is okay - I like it anyway." Celebrate effort and process over outcome.' },
    { ageRange: '3-4 years', context: 'Perfectionism can become more pronounced. Your child may erase repeatedly, refuse to show work, or avoid activities they might not do well. Avoid excessive praise for outcomes ("What a perfect picture!") and instead praise effort and creativity ("You worked so hard on that!").' },
    { ageRange: '4-5 years', context: 'If perfectionism is causing significant distress, avoidance of new activities, or frequent meltdowns, it is worth discussing with your pediatrician. Teach that mistakes are how we learn. Read books about making mistakes. Share your own mistakes cheerfully.' },
  ],
  whenNormal: ['Some frustration when things do not turn out as expected','Occasional desire to redo things','Your child still tries new things despite some hesitation','Perfectionist moments are balanced by carefree play'],
  whenToMention: ['Perfectionism causes frequent intense meltdowns','Your child avoids activities due to fear of not doing them perfectly','Rigidity is increasing and affecting daily activities','Your child shows signs of anxiety related to performance'],
  whenToActNow: ['Your child expresses extreme distress about themselves as a person when things go wrong','Perfectionism is accompanied by other concerning rigid behaviors'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Shape and Manage Your Child\'s Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Temperament: Individual Differences.', url: 'https://www.zerotothree.org/resource/temperament-individual-differences/' },
    { org: 'NIH', citation: 'Affrunti NW, Woodruff-Borden J. Perfectionism in pediatric anxiety and depressive disorders. Clin Child Fam Psychol Rev. 2014;17(3):299-317.', url: 'https://pubmed.ncbi.nlm.nih.gov/24563219/' },
  ],
  relatedConcernSlugs: ['toddler-frustration-tolerance-low','toddler-giving-up-easily','toddler-ocd-like-behaviors','toddler-anxiety-signs-early'],
};
