import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-gentle-sleep-training',
  title: 'Gentle and No-Cry Sleep Training Methods',
  category: 'sleep',
  searchTerms: ['gentle sleep training','no cry sleep training','sleep training without crying','gentle sleep methods baby','no tears sleep training','pick up put down sleep training','chair method sleep','gradual retreat sleep training','fading method sleep training','low cry sleep training'],
  quickAnswer: 'Gentle sleep training methods minimize or avoid extended crying by using gradual approaches with ongoing parental presence. Methods include the chair method, gradual retreat, pick-up-put-down, and fading. These tend to take longer than extinction methods (2-4 weeks vs. 3-7 days) but may feel more comfortable for some families. Research supports their effectiveness.',
  byAge: [
    { ageRange: '0-4 months', context: 'Formal sleep training is not recommended yet, but gentle habits can start early. Practice putting your baby down when drowsy, offer a moment to settle before picking up, and establish consistent sleep cues. These gentle foundations make formal training easier later if you choose to do it.' },
    { ageRange: '4-6 months', context: 'Gentle methods that work well at this age include: Pick-up-put-down (PUPD) where you pick baby up when crying, calm them, then put them back down; the chair method where you sit by the crib and gradually move further away over days; and shush-pat where you comfort with voice and touch without picking up. Be patient - these methods typically take 2-3 weeks.' },
    { ageRange: '6-12 months', context: 'The gradual retreat method is especially effective at this age. Start by lying next to the crib, then sitting, then moving the chair toward the door, then outside the door over 1-2 weeks. Your consistent but gradually decreasing presence teaches your baby they can fall asleep with less help. Some gentle methods include fading sleep associations slowly - for example, reducing rocking time by a minute each night.' },
    { ageRange: '12-24 months', context: 'Gentle methods are often preferred for toddlers because they involve less intense protest. The gradual retreat works well because your toddler can see you and knows you are there. You can also use the excuse-me drill: sit by the bed, then periodically leave briefly ("I need to check something, I will be right back"), gradually extending the time you are gone.' },
  ],
  whenNormal: ['Gentle methods take 2-4 weeks to see full results','There is still some crying or fussing even with gentle approaches','Progress is gradual and not always linear','Some nights are better than others during the process'],
  whenToMention: ['You have been consistently implementing a gentle method for 3-4 weeks with no improvement','Your baby becomes more distressed rather than less over time','You need guidance on which gentle method might work best for your baby\'s temperament'],
  whenToActNow: ['Sleep deprivation is affecting your safety or mental health','You are so exhausted that you are falling asleep while holding your baby in unsafe positions'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Mindell JA et al. Behavioral treatment of bedtime problems and night wakings. Sleep. 2006;29(10):1263-1276.', url: 'https://pubmed.ncbi.nlm.nih.gov/17068979/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Helping Your Child Learn to Sleep.', url: 'https://www.zerotothree.org/resource/toddlers-and-sleep/' },
  ],
  relatedConcernSlugs: ['baby-sleep-training-methods-comparison','baby-cry-it-out-safety','baby-ferber-method-concerns','sleep-training-guilt-methods'],
};
