import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'posterior-tongue-tie',
  title: 'Could My Baby Have a Posterior Tongue Tie?',
  category: 'feeding',
  searchTerms: [
    'posterior tongue tie baby',
    'hidden tongue tie',
    'submucosal tongue tie',
    'tongue tie not visible',
    'posterior tongue tie breastfeeding',
    'tongue tie missed by pediatrician',
    'baby clicking while nursing tongue tie',
    'posterior tongue tie symptoms',
    'type 3 type 4 tongue tie',
    'posterior tongue tie diagnosis',
  ],
  quickAnswer:
    'A posterior tongue tie is a restriction of the tissue under the tongue that is not easily visible and must be felt by an experienced provider. It can cause breastfeeding difficulties including a painful or shallow latch, clicking sounds during nursing, and poor weight gain. Diagnosis and treatment recommendations vary among healthcare providers, so getting an evaluation from a lactation consultant experienced with tongue ties is often a helpful first step.',
  byAge: [
    {
      ageRange: '0-4 weeks',
      context:
        'Posterior tongue ties are most commonly identified in the early weeks when breastfeeding problems become apparent. Signs include a painful latch despite appearing correct, clicking or popping sounds during nursing, baby sliding off the breast repeatedly, excessive gassiness from swallowing air, and nipple damage that does not improve with positioning changes. Unlike anterior tongue ties, a posterior tie is not visible when your baby cries or lifts the tongue.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If breastfeeding remains difficult despite working with a lactation consultant on positioning and latch, a posterior tongue tie may be worth investigating. Signs that persist include poor weight gain, long exhausting feeds, baby falling asleep at the breast from fatigue rather than fullness, and continued nipple pain. Some providers recommend a frenotomy (release procedure), while others prefer conservative management with bodywork and feeding therapy.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, some babies with mild posterior ties have compensated and feeding has improved on its own. For those still struggling, a comprehensive evaluation by a pediatric dentist or ENT experienced with tongue ties can clarify whether a release would be beneficial. If considering a procedure, discuss the expected benefits versus risks with your provider.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Posterior tongue ties can sometimes affect the transition to solid foods, causing difficulty managing textures or gagging more than expected. If your baby had feeding difficulties as a newborn and continues to struggle with solids, mention the history to your pediatrician. Speech and feeding therapists can help with oral motor skills regardless of whether a tie is released.',
    },
  ],
  whenNormal: [
    'Your baby has a visible thin membrane under the tongue but is breastfeeding well, gaining weight, and you are not in pain — not all tongue ties need treatment',
    'Your baby occasionally clicks during feeding but is otherwise transferring milk effectively and gaining weight',
    'Breastfeeding was difficult initially but has improved significantly with positioning adjustments and lactation support',
  ],
  whenToMention: [
    'Breastfeeding is consistently painful despite multiple attempts to correct latch and positioning with professional help',
    'Your baby is not gaining weight adequately or feeds take longer than 40-45 minutes consistently',
    'You hear frequent clicking or see milk leaking from the sides of the mouth during feeds',
    'Your baby seems frustrated at the breast and has excessive gas or reflux symptoms',
  ],
  whenToActNow: [
    'Your baby is losing weight or not gaining weight despite frequent feeds',
    'You are developing recurrent mastitis, severe nipple damage, or considering stopping breastfeeding due to pain — seek an urgent lactation consultation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ankyloglossia in Breastfeeding Infants. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/146/5/e2020029603/79760',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Tongue and Lip Ties.',
      url: 'https://llli.org/breastfeeding-info/tongue-lip-ties/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Ankyloglossia and Breastfeeding. Journal of Human Lactation, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30849272/',
    },
  ],
};
