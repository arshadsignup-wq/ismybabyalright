import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-blue-lips-when-cold',
  title: 'Baby Has Blue Lips or Blue Skin (Cyanosis)',
  category: 'medical',
  searchTerms: ['baby blue lips', 'baby cyanosis', 'baby blue around mouth', 'baby blue hands', 'baby lips turning blue', 'baby blue skin', 'baby blue fingertips', 'baby purple lips', 'baby blue lips when cold', 'baby blue mouth'],
  quickAnswer: 'Blue coloring of the lips, face, or body (cyanosis) in a baby can be a sign of low oxygen and should always be taken seriously. However, there are also harmless causes: acrocyanosis (bluish hands and feet in newborns due to immature circulation) is very common and normal in the first 48 hours of life, and brief blueness of the hands and feet in cold environments is generally normal in young babies. The critical distinction is WHERE the blue coloring appears: blue hands and feet alone are usually benign, while blue lips, tongue, or face (central cyanosis) is potentially serious and needs immediate medical evaluation.',
  byAge: [
    { ageRange: '0-12 months', context: 'Acrocyanosis (blue hands and feet with a pink body and face) is normal in newborns and can occur intermittently in young babies when cold. This is harmless. Central cyanosis (blue lips, tongue, face, or body) is NOT normal and requires immediate evaluation - it can indicate a heart defect, respiratory problem, or other serious condition. If your baby\'s lips or tongue turn blue, check if they are breathing normally and call 911 immediately. Brief blueness around the mouth during a hard cry that resolves immediately is common and usually benign. Persistent or worsening blue color is always an emergency.' },
    { ageRange: '1-3 years', context: 'Toddlers may develop blue lips temporarily when very cold (swimming in cold water, playing outside in winter) - this resolves with warming and is not concerning. However, blue lips during normal activity, during exertion (running, climbing), or at rest is abnormal and should be evaluated promptly. Blue or purple discoloration around the mouth that occurs with difficulty breathing, choking, or coughing warrants immediate medical attention. Some toddlers who have breath-holding spells may turn blue briefly before resuming breathing - while frightening, this is usually benign but should be discussed with your pediatrician.' },
  ],
  whenNormal: ['Blue hands and feet in a newborn with a pink body and face (acrocyanosis)', 'Briefly blue hands and feet when cold that pink up with warming', 'Momentary blue tinge around the mouth during a very hard cry that resolves immediately'],
  whenToMention: ['Frequent episodes of blueness around the mouth, even if brief', 'Blue hands and feet that seem to occur more than expected', 'Your child turns blue during breath-holding spells (discuss with pediatrician)', 'You notice any blue coloring that concerns you'],
  whenToActNow: ['Blue lips, tongue, or face at any time - call 911', 'Blue coloring with difficulty breathing, gasping, or choking', 'Blue or gray skin color over the body', 'Blue coloring that does not improve with warming or that worsens', 'Your baby becomes limp, unresponsive, or stops breathing', 'Blue coloring during feeding or during physical activity in a toddler (possible heart issue)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-breathing-fast', 'breath-holding-spells', 'baby-choking-on-liquids', 'baby-heart-murmur'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cyanosis. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Cyanosis in Neonates. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK559178/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. When to Call the Doctor for Newborns. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx' },
  ],
};
