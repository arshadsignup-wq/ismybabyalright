import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-tongue-tie-feeding-issues',
  title: 'Tongue Tie Affecting Feeding (Ankyloglossia)',
  category: 'medical',
  searchTerms: [
    'tongue tie baby',
    'ankyloglossia newborn',
    'baby tongue tie breastfeeding',
    'tongue tie feeding problems',
    'baby can\'t latch tongue tie',
    'newborn tongue tie release',
    'frenotomy baby',
    'tongue tie symptoms baby',
    'baby tongue restricted',
    'tongue tie painful breastfeeding',
  ],
  quickAnswer:
    'Tongue tie (ankyloglossia) occurs when the tissue connecting the tongue to the floor of the mouth (frenulum) is too short or tight, potentially restricting tongue movement. It affects about 4-10% of newborns and can sometimes cause difficulty with breastfeeding. Not all tongue ties require treatment, but if feeding is significantly affected, a simple procedure called a frenotomy can help.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Tongue tie is typically identified in the first days to weeks of life, often when breastfeeding difficulties arise. Signs that tongue tie may be affecting feeding include: painful latch for the mother, baby sliding off the breast frequently, poor weight gain, clicking sounds during feeding, and prolonged feeding sessions. However, many babies with tongue tie breastfeed successfully. If feeding difficulties are present, a lactation consultant can help assess whether tongue tie is contributing. Treatment (frenotomy) is a quick procedure where the frenulum is clipped, usually with minimal bleeding and immediate improvement in latch.',
    },
    {
      ageRange: '1-3 months',
      context:
        'If tongue tie was treated early, feeding should improve within days. If untreated, some babies compensate and feeding improves as they grow and develop better oral motor control. If feeding difficulties persist, it is still possible to perform a frenotomy at this age. Working with a lactation consultant can help optimize feeding technique regardless of whether the tie is released.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, feeding is usually well-established. Residual tongue tie that did not affect feeding in the newborn period is unlikely to cause problems now. As your baby begins exploring solid foods around 6 months, a significant tongue tie could potentially affect eating, though this is less common.',
    },
    {
      ageRange: '6-12 months',
      context:
        'A tongue tie may become relevant again as solid foods are introduced. In some cases, tongue tie can affect speech development later on, though many children with tongue tie speak normally. If you have concerns, your pediatrician can evaluate and refer to a specialist if needed.',
    },
  ],
  whenNormal: [
    'A visible frenulum under the tongue that does not restrict tongue movement or feeding',
    'Successful breastfeeding or bottle-feeding despite a visible tongue tie',
    'Baby gaining weight well and producing adequate wet and dirty diapers',
    'Mother not experiencing persistent nipple pain during feeding',
  ],
  whenToMention: [
    'Baby is having difficulty latching or maintaining a latch during breastfeeding',
    'Feeding sessions are consistently prolonged (over 30-40 minutes) and baby seems frustrated',
    'You notice clicking sounds during feeding or baby\'s tongue cannot extend past the lower gum',
  ],
  whenToActNow: [
    'Baby is not gaining weight or is losing weight due to feeding difficulties potentially related to tongue tie',
    'Mother has severely damaged nipples, mastitis, or is considering stopping breastfeeding due to pain from poor latch',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Tongue-Tie (Ankyloglossia). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Ankyloglossia in Infants. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK542271/',
    },
  ],
  relatedConcernSlugs: ['newborn-lip-tie-concerns', 'newborn-not-latching-at-all', 'newborn-high-palate'],
};
