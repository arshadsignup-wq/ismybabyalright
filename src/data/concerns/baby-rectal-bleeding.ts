import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rectal-bleeding',
  title: 'Blood in Baby\'s Diaper or Rectal Bleeding',
  category: 'digestive',
  searchTerms: ['baby blood in diaper', 'baby rectal bleeding', 'baby blood in stool', 'toddler blood in poop', 'baby bloody stool', 'toddler rectal bleeding', 'baby blood streaks in poop', 'baby blood on toilet paper', 'baby anal fissure', 'toddler blood after pooping'],
  quickAnswer: 'Finding blood in your baby\'s diaper can be alarming, but the most common cause is an anal fissure - a tiny tear in the skin around the anus caused by passing a hard stool. This produces small amounts of bright red blood on the outside of the stool or on the diaper. Other common causes include milk protein allergy (in breastfed babies whose mothers consume dairy), swallowed blood from a cracked nipple (in breastfed babies), and constipation. While small amounts of bright red blood from a fissure are common, any significant or persistent rectal bleeding should be evaluated by your pediatrician.',
  byAge: [
    { ageRange: '0-12 months', context: 'Blood in a young baby\'s stool is most commonly caused by: milk protein allergy or intolerance (small streaks of blood and mucus in otherwise normal stool), swallowed maternal blood from cracked nipples during breastfeeding, or a small anal fissure from constipation. In breastfed babies, blood-streaked mucousy stools that are otherwise normal in frequency may indicate a cow\'s milk protein sensitivity passed through breast milk. Always report blood in a young baby\'s stool to your pediatrician for proper evaluation.' },
    { ageRange: '1-3 years', context: 'The most common cause of rectal bleeding in toddlers is an anal fissure from constipation. Hard stools stretch and tear the delicate skin around the anus, causing bright red blood on the stool surface, in the diaper, or on toilet paper. The toddler may cry or resist having bowel movements due to pain. Treatment focuses on softening stools with adequate fluids, fiber, and sometimes stool softeners. Less common causes include bacterial infections, polyps, and inflammatory conditions. If blood is persistent, dark, or mixed into the stool, see your pediatrician.' },
  ],
  whenNormal: ['A tiny amount of bright red blood on the outside of a hard stool (likely anal fissure)', 'Blood that resolves once constipation is treated and stools soften', 'A one-time episode of streaky blood with an otherwise well baby'],
  whenToMention: ['Blood in stool occurs more than once or twice', 'Blood is mixed into the stool rather than just on the surface', 'Your breastfed baby has bloody mucousy stools (possible milk protein allergy)', 'Your child has recurrent anal fissures from chronic constipation'],
  whenToActNow: ['Large amounts of blood or blood clots in the stool', 'Dark, tarry, or black stools (suggests bleeding higher in the digestive tract)', 'Bloody stool with severe abdominal pain, especially if the pain comes in waves (possible intussusception)', 'Blood in stool with fever, diarrhea, and your child appearing very ill', '"Currant jelly" stool - dark red, jelly-like stool (possible intussusception - emergency)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['constipation', 'blood-in-stool', 'milk-allergy-baby', 'baby-diarrhea'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Blood in Infant Stool. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Blood-in-Stool.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Constipation in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Constipation.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Rectal Bleeding in Children. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK551697/' },
  ],
};
