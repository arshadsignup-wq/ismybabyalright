import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-empathy-development-timeline', title: 'When Do Toddlers Develop Empathy?', category: 'behavior',
  searchTerms: ['toddler empathy','when do toddlers feel empathy','toddler no empathy','toddler doesnt care about others feelings','toddler empathy development','toddler lacks empathy','toddler compassion','toddler understanding others feelings','toddler cold no feelings others','empathy milestones children'],
  quickAnswer: 'Empathy develops gradually through childhood and is not fully mature until adolescence. Toddlers show the earliest signs of empathy around 18-24 months when they may become upset seeing someone else cry or offer their own comfort object to a distressed person. True cognitive empathy - understanding how someone else feels and why - does not develop until around age 4-5. Your toddler is not lacking empathy; it simply has not developed yet.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies show "emotional contagion" - they cry when they hear other babies cry. This is a precursor to empathy but is not true empathy. They are responding to the distress signal, not understanding the other baby\'s feelings.' },
    { ageRange: '12-24 months', context: 'Early empathy emerges. Your toddler may look concerned when someone cries, bring their own blanket to comfort you, or pat a crying friend. They are beginning to recognize distress in others but respond with what comforts them, not what might comfort the other person.' },
    { ageRange: '2-3 years', context: 'Empathy develops further. Your child starts to understand that others have different feelings than they do. They may say "sad" when they see someone crying. Help by narrating: "Your friend is crying because she fell down. She feels sad. What could we do to help?"' },
    { ageRange: '3-5 years', context: 'Cognitive empathy begins to develop. Your child can start imagining how someone else feels and may adjust their behavior accordingly. They can comfort others more effectively. Continue building empathy through books, role-play, and conversations about feelings.' },
  ],
  whenNormal: ['Toddlers show limited empathy - it is still developing','Your child comforts others using their own comfort strategies','Empathy is inconsistent - sometimes present, sometimes absent','Your child shows more empathy toward familiar people'],
  whenToMention: ['Your child shows no signs of empathy by age 3','Your child seems to enjoy causing distress in others','There is a complete lack of emotional response to others\' pain or crying','Your child does not seem to recognize basic emotions in others by age 3-4'],
  whenToActNow: ['Your child deliberately hurts others and shows pleasure in their distress','Complete absence of emotional connection with caregivers'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. How Empathy Develops.', url: 'https://www.zerotothree.org/resource/how-empathy-develops/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Emotional Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Emotional-Development-2-Year-Olds.aspx' },
    { org: 'NIH', citation: 'Decety J, Svetlova M. Putting together phylogenetic and ontogenetic perspectives on empathy. Dev Cogn Neurosci. 2012;2(1):1-24.', url: 'https://pubmed.ncbi.nlm.nih.gov/22682726/' },
  ],
  relatedConcernSlugs: ['toddler-sharing-age-appropriate','toddler-emotional-intelligence-building','toddler-gentle-hands-teaching','toddler-lying-age-appropriate'],
};
