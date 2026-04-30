import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-showing-affection',
  title: 'Baby Not Showing Affection or Cuddling',
  category: 'behavior',
  searchTerms: ['baby not affectionate', 'baby doesn\'t cuddle', 'toddler not showing affection', 'baby pushes away', 'toddler won\'t hug', 'baby doesn\'t like being held', 'toddler not cuddly', 'baby not attached to parents', 'baby rejects kisses', 'toddler doesn\'t want to be held'],
  quickAnswer: 'Not all babies and toddlers are naturally cuddly, and this is usually a matter of temperament rather than a sign of a problem. Some children are more independent, more physically active, or more sensory-sensitive than others. A baby who does not enjoy being held for long periods but makes eye contact, smiles at caregivers, reaches for parents, and shows happiness when you return after an absence is showing healthy attachment in their own way. Affection looks different for every child - some prefer sitting next to you over being on your lap, or touching your face over being hugged.',
  byAge: [
    { ageRange: '0-12 months', context: 'By 6 months, most babies show clear social engagement: smiling at familiar faces, reaching to be picked up, and showing distress when separated from primary caregivers. Some babies are more content being put down and exploring than being held, which is a normal temperament variation. However, a baby who consistently avoids eye contact, does not smile socially, shows no preference for caregivers over strangers, and does not reach to be picked up should be evaluated. Sensory sensitivity can also make some babies dislike being held tightly.' },
    { ageRange: '1-3 years', context: 'Toddlers express affection in many ways beyond hugging and cuddling. Bringing you a toy, following you around, wanting to show you things, and checking in with you during play are all forms of secure attachment. Many toddlers are too busy exploring to sit still for cuddles. Independence and asserting boundaries (saying "no" to hugs) is actually a healthy developmental sign. Worry less about how your toddler shows affection and more about whether they seek you out for comfort, reference your reactions in new situations, and show happiness when you return.' },
  ],
  whenNormal: ['Your baby makes eye contact, smiles, and engages socially but does not enjoy being held for long', 'Your toddler is more interested in playing than cuddling but still checks in with you', 'Your child shows affection in non-physical ways (bringing you things, following you)', 'Your child\'s temperament is simply more independent or active'],
  whenToMention: ['Your baby consistently avoids eye contact with familiar people', 'Your baby or toddler shows no preference for parents or familiar caregivers over strangers', 'Your child does not seem to notice or care when you leave or return', 'There is no shared enjoyment - your child does not try to show you things or share experiences'],
  whenToActNow: ['No social smiling by 3 months', 'No reaching to be picked up by 9 months', 'No response to their name by 12 months combined with lack of social engagement', 'Loss of previously shown affection or social skills (regression)'],
  relatedMilestones: ['social-emotional'],
  showSelfReferral: true,
  relatedConcernSlugs: ['not-responding-to-name', 'no-pointing', 'no-eye-contact', 'sensory-seeking-behavior'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Social Development in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Social-Development-2-Year-Olds.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Child Development Milestones.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Attachment in Infancy and Early Childhood.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
