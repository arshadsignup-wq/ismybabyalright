import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-giving-up-easily', title: 'Toddler Gives Up Easily and Will Not Try', category: 'behavior',
  searchTerms: ['toddler gives up easily','toddler wont try','toddler no persistence','toddler quits immediately','toddler afraid to try','toddler avoids challenges','toddler no motivation try','toddler refuses to attempt','toddler scared of failing','toddler low persistence'],
  quickAnswer: 'Some toddlers give up quickly when faced with challenges. This can be related to temperament, fear of failure, low frustration tolerance, or having been helped too quickly in the past. Persistence is a skill that develops over time with encouragement, appropriate challenges, and a safe environment where mistakes are accepted. It is not a character flaw.',
  byAge: [
    { ageRange: '12-24 months', context: 'Young toddlers naturally have very short attention spans and low persistence. It is normal for them to move on quickly when something is difficult. Do not force tasks. Instead, gently encourage and offer just enough help to keep them engaged without doing it for them.' },
    { ageRange: '2-3 years', context: 'Persistence starts to develop but varies greatly between children. Some toddlers will try repeatedly while others give up after one attempt. Break tasks into tiny steps so your child can experience small successes. Say "You almost got it! Try one more time" rather than doing it for them.' },
    { ageRange: '3-4 years', context: 'If your child consistently avoids challenges, consider whether they have learned that someone will do it for them, or whether they fear failure. Create low-stakes opportunities to practice persistence. Puzzles, building activities, and age-appropriate chores build this skill.' },
    { ageRange: '4-5 years', context: 'Persistence should be developing. If your child refuses to try most things, shows anxiety about new tasks, or has very low confidence, discuss with your pediatrician. Focus on effort-based praise: "I love how hard you tried" rather than "You are so smart."' },
  ],
  whenNormal: ['Your toddler gives up on difficult tasks sometimes','Your child tries harder on things they enjoy','Persistence gradually improves with age and encouragement','Some temperaments are naturally less persistent than others'],
  whenToMention: ['Your child refuses to try almost anything new','Giving up is accompanied by significant distress or anxiety','Your child seems to have very low self-confidence','Lack of persistence is affecting learning and development'],
  whenToActNow: ['Your child shows signs of depression such as persistent sadness and loss of interest in everything','Avoidance of activities is paired with extreme anxiety'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. Developing Self-Regulation in Young Children.', url: 'https://www.zerotothree.org/resource/developing-self-regulation/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Building Resilience in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/Building-Resilience-in-Children.aspx' },
    { org: 'NIH', citation: 'Lucassen N et al. The association between paternal sensitivity and infant attachment security. Attach Hum Dev. 2011;13(6):531-554.', url: 'https://pubmed.ncbi.nlm.nih.gov/22011099/' },
  ],
  relatedConcernSlugs: ['toddler-frustration-tolerance-low','toddler-perfectionism-frustration','toddler-anxiety-signs-early','toddler-emotional-regulation-skills'],
};
