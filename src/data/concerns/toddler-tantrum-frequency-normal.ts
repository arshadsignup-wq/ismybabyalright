import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-tantrum-frequency-normal', title: 'How Many Tantrums Are Normal Per Day?', category: 'behavior',
  searchTerms: ['toddler tantrum frequency','how many tantrums normal','tantrums per day normal','toddler tantrums every day','too many tantrums toddler','normal number tantrums','toddler tantrum count','daily tantrums normal','how often toddler tantrums','frequency tantrums age'],
  quickAnswer: 'On average, toddlers ages 1-3 have about 1 tantrum per day, with the range being 0-4 per day depending on age, temperament, and circumstances. Research suggests that having up to 5 tantrums per day occasionally is within normal range, but consistently having 5+ tantrums daily warrants a conversation with your pediatrician.',
  byAge: [
    { ageRange: '12-18 months', context: 'Tantrums are just beginning. Average frequency is 0-2 per day, often brief and triggered by frustration from limited communication and mobility skills.' },
    { ageRange: '18-30 months', context: 'Peak tantrum frequency. Average 1-3 per day with some days having more, especially when tired, hungry, or overstimulated. This is the most challenging period but also the most developmentally expected.' },
    { ageRange: '2.5-3.5 years', context: 'Tantrums begin decreasing in frequency as language and emotional regulation develop. Average drops to 0-2 per day. If frequency is not decreasing, consider environmental factors and whether your child needs help developing coping skills.' },
    { ageRange: '3.5-5 years', context: 'By age 4, most children have significantly fewer tantrums (0-1 per day). If your child continues to have frequent daily tantrums with intense aggression, discuss with your pediatrician.' },
  ],
  whenNormal: ['1-3 tantrums per day during ages 18 months to 3 years','Tantrum frequency decreases as child gets older','More tantrums on tired, hungry, or stressful days','Your child is cooperative and happy between tantrums'],
  whenToMention: ['Consistently 5+ tantrums per day','Frequency is not decreasing with age','Tantrums are severe with significant aggression or self-harm','Your child seems unhappy most of the time, not just during tantrums'],
  whenToActNow: ['Your child is in danger during tantrums','You are struggling to cope and worried about your own reactions'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Wakschlag LS et al. Defining the developmental parameters of temper loss in early childhood. J Child Psychol Psychiatry. 2012;53(11):1099-1108.', url: 'https://pubmed.ncbi.nlm.nih.gov/22928674/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Temper Tantrums. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Toddler Tantrums.', url: 'https://www.zerotothree.org/resource/toddler-tantrums/' },
  ],
  relatedConcernSlugs: ['tantrums','toddler-tantrum-duration-normal','toddler-constant-meltdowns','toddler-emotional-dysregulation'],
};
