import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-high-palate',
  title: 'High Arched Palate Concerns in Newborns',
  category: 'medical',
  searchTerms: [
    'baby high palate',
    'newborn high arched palate',
    'baby narrow palate',
    'high palate breastfeeding problems',
    'newborn palate shape',
    'baby roof of mouth high',
    'high palate feeding difficulties',
    'newborn arched palate concerns',
    'baby palate and latch',
    'high palate causes baby',
  ],
  quickAnswer:
    'A high arched palate (roof of the mouth) in a newborn can sometimes contribute to feeding difficulties because the baby may have trouble compressing the breast or bottle nipple effectively. Many babies with a high palate feed successfully with positioning adjustments, and the palate shape often changes as the baby grows. In some cases, a high palate is associated with other conditions that your pediatrician may evaluate.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'A high arched palate may be noticed during a newborn exam or when breastfeeding difficulties arise. Babies with a high palate may have difficulty creating the suction needed for effective breastfeeding because the tongue cannot compress the nipple against the roof of the mouth as easily. This can result in a shallow latch, clicking sounds, and poor milk transfer. A lactation consultant can help with positioning and latch techniques. Some babies benefit from nipple shields or special bottle nipples designed for palate variations.',
    },
    {
      ageRange: '1-3 months',
      context:
        'As your baby grows, the palate may gradually change shape and feeding may improve. Continue working with a lactation consultant if breastfeeding is challenging. Some babies with a high palate do well with a combination of breast and bottle feeding. Weight gain and adequate output (wet and dirty diapers) are the most important indicators that feeding is going well.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The palate continues to develop and may become less arched as the oral cavity grows. Feeding typically becomes easier as your baby\'s oral motor skills improve. If feeding difficulties persist, your pediatrician may refer to a feeding specialist or evaluate for associated conditions.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solid foods are introduced, a high palate rarely causes significant difficulties. The palate shape continues to change with growth. In rare cases where a high palate is associated with a genetic condition, your pediatrician may recommend genetic consultation.',
    },
  ],
  whenNormal: [
    'A slightly high or arched palate that does not significantly affect feeding',
    'Baby is feeding well, gaining weight, and producing adequate wet diapers',
    'Mild initial feeding challenges that improve with positioning support',
    'The palate is smooth and intact with no cleft or opening',
  ],
  whenToMention: [
    'Persistent feeding difficulties that may be related to palate shape',
    'You notice your baby\'s palate appears very narrow or unusually arched',
    'Feeding is not improving despite lactation support and technique adjustments',
  ],
  whenToActNow: [
    'Baby is not gaining weight or is losing weight due to feeding difficulties',
    'You notice a cleft, opening, or unusual appearance in the palate that could indicate a submucous cleft palate',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Oral Health and Feeding. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/mouth-teeth/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Palatal Variations in Infants. Archives of Disease in Childhood.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
  relatedConcernSlugs: ['newborn-tongue-tie-feeding-issues', 'newborn-lip-tie-concerns', 'cleft-lip-palate-baby'],
};
