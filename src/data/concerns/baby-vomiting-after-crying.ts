import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-vomiting-after-crying',
  title: 'Baby Throws Up After Crying Hard',
  category: 'digestive',
  searchTerms: ['baby vomits after crying', 'baby throws up from crying', 'toddler vomiting after tantrum', 'baby crying so hard they vomit', 'toddler throws up when upset', 'baby gag reflex crying', 'baby coughing and vomiting from crying', 'toddler vomiting from screaming', 'baby cry vomit normal', 'toddler tantrum vomiting'],
  quickAnswer: 'It is surprisingly common for babies and toddlers to vomit after intense crying. The forceful abdominal contractions during hard crying, combined with a sensitive gag reflex, can trigger vomiting. While it is alarming to witness, it is not dangerous and does not mean your child is sick. It is not a manipulative behavior - young children cannot control their gag reflex. The vomiting should stop once the crying stops, and your child should otherwise appear well.',
  byAge: [
    { ageRange: '0-12 months', context: 'Young babies may spit up or vomit during intense crying because their stomach valve (lower esophageal sphincter) is still immature. The abdominal pressure from crying forces stomach contents back up. This is more common in babies who have reflux. If it happens occasionally during crying episodes and your baby is otherwise well, it is not concerning. Feed your baby again once they have calmed down if the vomited amount was significant.' },
    { ageRange: '1-3 years', context: 'Some toddlers vomit during intense tantrums or when very upset. This can become a pattern that worries parents, who may try to prevent crying to avoid the vomiting. It is important to know that this is a physical reflex, not intentional. Do not let the fear of vomiting change your parenting approach to tantrums. Clean up calmly, comfort your child, offer fluids, and continue with normal routines. Most children outgrow this tendency.' },
  ],
  whenNormal: ['Vomiting that only happens during or immediately after intense crying and not at other times', 'Your child acting completely normal and happy after the episode', 'Vomiting a small to moderate amount (roughly the contents of one feeding)', 'No fever, diarrhea, or other signs of illness'],
  whenToMention: ['Your child vomits with crying very frequently and it is affecting nutrition or weight', 'You are concerned that the vomiting pattern is reinforcing difficult behaviors', 'Your child also vomits at times unrelated to crying', 'The vomiting seems to cause significant discomfort beyond the initial upset'],
  whenToActNow: ['Vomiting is not related to crying and occurs repeatedly (suggests illness, not the crying reflex)', 'The vomit contains blood or bile (green)', 'Your child appears lethargic or unwell between crying episodes', 'Forceful vomiting is occurring with every feed regardless of crying (could indicate pyloric stenosis in young infants)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-vomiting-no-fever', 'tantrums', 'reflux', 'spitting-up'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Vomiting in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Treating-Vomiting.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Tantrums. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Vomiting in Infants and Children.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459149/' },
  ],
};
