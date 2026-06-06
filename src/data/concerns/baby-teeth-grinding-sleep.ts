import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-teeth-grinding-sleep', title: 'Baby Grinding Teeth While Sleeping', category: 'sleep',
  searchTerms: ['baby grinding teeth sleep','baby bruxism night','toddler teeth grinding sleep','baby clenching teeth sleep','baby grating teeth night','sleep bruxism baby','baby tooth grinding at night','toddler grinding teeth while sleeping','baby teeth grinding sound sleep','night teeth grinding baby'],
  quickAnswer: 'Sleep bruxism (teeth grinding) is very common in babies and toddlers, affecting up to 50% of children at some point. It often starts when the first teeth appear and may increase around age 2-3. In most cases, it is harmless and resolves on its own without causing tooth damage. Children typically outgrow it by age 6.',
  byAge: [
    { ageRange: '6-12 months', context: 'Teeth grinding often begins when upper and lower teeth first meet. Your baby is exploring the new sensation. This is harmless and self-limiting. No treatment is needed.' },
    { ageRange: '12-24 months', context: 'Grinding may continue as more teeth appear. It is most common during sleep but can happen during the day too. Teething, ear pain, and stress can increase grinding. The primary teeth are designed to withstand some grinding.' },
    { ageRange: '2-3 years', context: 'This is peak grinding age. Some children grind loudly enough to be heard from another room. Despite the alarming sound, tooth damage from grinding in this age group is rare. Mention it at dental visits for monitoring.' },
    { ageRange: '3-6 years', context: 'Most children outgrow grinding as permanent teeth develop. If grinding persists and causes tooth wear, your dentist may recommend monitoring. Night guards are not typically used for children this young as their jaws are still growing.' },
  ],
  whenNormal: ['Grinding starts when teeth first appear','Grinding comes and goes','No visible tooth damage','Your child is otherwise healthy and sleeping well'],
  whenToMention: ['Grinding is accompanied by jaw pain or headaches','Visible wearing down of tooth enamel','Grinding is associated with snoring or mouth breathing suggesting sleep-disordered breathing'],
  whenToActNow: ['Your child has severe dental pain','Grinding is associated with difficulty breathing during sleep'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Teeth Grinding (Bruxism). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/default.aspx' },
    { org: 'NIH', citation: 'Machado E et al. Prevalence of sleep bruxism in children: a systematic review. J Oral Rehabil. 2014;41(4):299-311.', url: 'https://pubmed.ncbi.nlm.nih.gov/24483937/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Dental Health. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/default.aspx' },
  ],
  relatedConcernSlugs: ['baby-grinding-teeth-sleep','baby-grinding-teeth'],
};
