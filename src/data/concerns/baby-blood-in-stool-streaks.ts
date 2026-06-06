import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-blood-in-stool-streaks',
  title: 'Blood Streaks in Baby\'s Stool',
  category: 'digestive',
  searchTerms: [
    'baby blood streaks in stool',
    'baby poop blood streaks',
    'baby stool blood on surface',
    'baby bright red blood poop',
    'baby blood in diaper stool',
    'baby poop streak of blood',
    'infant blood in stool streaks',
    'baby small amount blood poop',
    'baby hematochezia streaks',
    'toddler blood streaks stool',
  ],
  quickAnswer:
    'Bright red blood streaks on the surface of stool or on the diaper are most commonly caused by a small anal fissure (tear) from passing hard stools. This is very common and usually heals on its own when constipation is treated. Other causes include cow\'s milk protein allergy in young infants or minor rectal irritation. While usually benign, blood in stool should always be mentioned to your pediatrician.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Blood streaks in a young infant\'s stool can be from swallowed maternal blood (if breastfed with cracked nipples) or from cow\'s milk protein allergy (CMPA). CMPA can cause bloody, mucousy stools in breastfed babies whose mothers consume dairy or in formula-fed babies. Your pediatrician can guide testing and dietary changes.',
    },
    {
      ageRange: '3-6 months',
      context:
        'An anal fissure from hard stools is the most common cause of blood streaks at this age. You may see bright red blood on the surface of the stool or on the diaper when wiping. Treating constipation with softer stools allows the fissure to heal. CMPA should also be considered if stools are mucousy.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting solids can cause constipation and hard stools that lead to fissures. Dietary fiber and adequate hydration help keep stools soft. If blood streaks persist despite soft stools, or if blood is mixed throughout the stool rather than on the surface, have your pediatrician evaluate further.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Hard stools during potty training can cause recurrent fissures. Keep stools soft with fiber-rich foods and adequate fluids. Applying a small amount of petroleum jelly to the anal area can help fissures heal. If blood streaks recur frequently, your pediatrician may check for other causes.',
    },
  ],
  whenNormal: [
    'A small streak of bright red blood on the outside of a hard stool, consistent with an anal fissure',
    'Blood that stops once constipation is resolved and stools become soft',
  ],
  whenToMention: [
    'Any blood in your baby\'s stool should be reported to your pediatrician',
    'Blood streaks continue despite treatment of constipation',
    'Blood is accompanied by mucus or changes in stool pattern',
  ],
  whenToActNow: [
    'Large amounts of blood in the stool',
    'Blood mixed throughout the stool rather than just on the surface',
    'Dark, tarry, or black stool suggesting upper GI bleeding',
    'Bloody stool with severe abdominal pain, vomiting, or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Blood in Infant Stool. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Blood-in-Stool.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Rectal Bleeding in Children. Pediatric Clinics of North America.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28779993/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Anal Fissure. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Anal-Fissure.aspx',
    },
  ],
  relatedConcernSlugs: ['bloody-stool', 'baby-rectal-bleeding', 'anal-fissure-baby', 'baby-blood-in-stool-dark'],
};
