import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-tantrum-duration-normal', title: 'How Long Should a Toddler Tantrum Last?', category: 'behavior',
  searchTerms: ['toddler tantrum duration','how long tantrums last','normal tantrum length','toddler tantrum 30 minutes','long tantrum toddler','tantrum won\'t stop','extended tantrum toddler','when tantrum too long','average tantrum time','toddler meltdown duration'],
  quickAnswer: 'Most toddler tantrums last 2-15 minutes, with the average being about 5-10 minutes. Tantrums that regularly last 20+ minutes or that include aggressive self-harm may warrant discussion with your pediatrician. The key is not the duration of a single tantrum but the overall pattern and your child\'s ability to recover afterward.',
  byAge: [
    { ageRange: '12-18 months', context: 'Early tantrums tend to be shorter (1-5 minutes) and are often triggered by frustration or inability to communicate a need. They may involve crying, brief flailing, or going limp. Recovery is usually quick.' },
    { ageRange: '18-24 months', context: 'Tantrums increase in intensity and may last 5-15 minutes. Your toddler is experiencing bigger emotions with limited coping tools. Staying calm and present (without feeding into the tantrum) helps them regulate.' },
    { ageRange: '2-3 years', context: 'Peak tantrum age. Average duration is 5-10 minutes but some tantrums may run 15-20 minutes during the most intense phases. If you engage, argue, or give in, tantrums tend to last longer. Remaining calm, ensuring safety, and waiting it out teaches your child that tantrums do not achieve their goal.' },
    { ageRange: '3-4 years', context: 'Tantrums should become shorter and less frequent as emotional regulation improves. If tantrums are still long (20+ minutes), very frequent (5+ per day), or involve significant aggression, it may be worth evaluating for underlying issues.' },
  ],
  whenNormal: ['Tantrums last 2-15 minutes and your child recovers well afterward','Tantrums are triggered by identifiable causes like frustration, hunger, or tiredness','Your child can be comforted after the tantrum passes','Tantrum frequency decreases as your child gets older'],
  whenToMention: ['Tantrums regularly exceed 25 minutes','Your child has 10+ tantrums per day or is tantruming for hours total','Tantrums involve self-harm like head banging on hard surfaces or biting themselves','Your child cannot recover from tantrums and remains distressed for extended periods'],
  whenToActNow: ['Your child injures themselves during tantrums','Tantrums are accompanied by breath-holding until loss of consciousness','You feel you are losing control of your own reactions'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Temper Tantrums. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx' },
    { org: 'NIH', citation: 'Belden AC et al. Temper tantrums in healthy versus depressed and disruptive preschoolers. J Pediatr. 2008;152(1):117-122.', url: 'https://pubmed.ncbi.nlm.nih.gov/18154912/' },
    { org: 'Zero to Three', citation: 'Zero to Three. Toddler Tantrums: Surviving the Storm.', url: 'https://www.zerotothree.org/resource/toddler-tantrums/' },
  ],
  relatedConcernSlugs: ['tantrums','toddler-tantrum-frequency-normal','toddler-tantrum-public-handling','toddler-tantrum-vs-meltdown'],
};
