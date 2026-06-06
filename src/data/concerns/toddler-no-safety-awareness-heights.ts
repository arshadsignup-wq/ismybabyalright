import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-no-safety-awareness-heights',
  title: 'My Toddler Has No Fear of Heights',
  category: 'physical',
  searchTerms: ['toddler no fear of heights', 'toddler no danger awareness', 'toddler safety awareness missing', 'toddler fearless climbing', 'toddler no sense of danger', 'toddler risk awareness', 'when do toddlers develop fear', 'toddler walks off edges', 'toddler no fear falling', 'toddler impulsive dangerous'],
  quickAnswer: 'Some lack of safety awareness is normal in toddlers, as the ability to assess risk develops gradually between ages 1-4. However, complete absence of appropriate fear responses, especially combined with other developmental differences, may warrant discussion with your pediatrician. Most toddlers need constant supervision around heights regardless of their fear response.',
  byAge: [
    { ageRange: '12-18 months', context: 'Very limited safety awareness is normal at this age. Your toddler is focused on exploring and has not yet developed the cognitive ability to understand danger. This is why constant supervision is essential. Lack of fear at this age is developmentally appropriate.' },
    { ageRange: '18-24 months', context: 'Some fear of heights and edges should begin to develop. Your toddler may start to hesitate at edges or look to you for reassurance. If your toddler shows absolutely zero caution in dangerous situations, note this for your pediatrician.' },
    { ageRange: '2-3 years', context: 'Risk awareness continues developing. Your child should show some caution around heights and dangerous situations. If your child has absolutely no sense of danger, runs toward edges without hesitation, and cannot learn from falls, discuss this with your pediatrician.' },
    { ageRange: '3-4 years', context: 'Most children have developing risk awareness by now. If your child continues to show no fear in dangerous situations and this is accompanied by other impulsive behaviors, evaluation may be helpful.' },
  ],
  whenNormal: ['Your toddler is under 2 and lacks fear in most situations.', 'Your toddler shows some caution in new situations.', 'Your toddler is gradually developing risk awareness.', 'Your toddler is adventurous but can be redirected from danger.'],
  whenToMention: ['Your child is over 2 with absolutely no sense of danger or caution.', 'Your child repeatedly puts themselves in dangerous situations.', 'Lack of safety awareness is combined with difficulty understanding rules.', 'Your child shows no distress after getting hurt.'],
  whenToActNow: ['Your child has had repeated injuries due to lack of safety awareness.', 'Your child shows sudden loss of previously developed caution.'],
  relatedMilestones: ['cognitive-safety-awareness', 'gross-motor-climbing'],
  showSelfReferral: true,
  relatedConcernSlugs: ['toddler-climbing-everything', 'toddler-playground-fear'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics - Safety for Your Child: 1 to 2 Years', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Safety-for-Your-Child-1-to-2-Years.aspx' },
    { org: 'CDC', citation: 'CDC - Important Milestones: Your Child By 2 Years', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html' },
    { org: 'NIH', citation: 'Adolph KE, Tamis-LeMonda CS. The Costs and Benefits of Development. Child Dev Perspect. 2014;8(1)', url: 'https://pubmed.ncbi.nlm.nih.gov/25400665/' },
  ],
};
