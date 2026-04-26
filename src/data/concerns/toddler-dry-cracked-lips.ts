import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-dry-cracked-lips',
  title: 'Toddler Dry Cracked Lips',
  category: 'skin',
  searchTerms: [
    'toddler dry cracked lips',
    'baby chapped lips',
    'toddler peeling lips',
    'baby lips dry and cracking',
    'toddler lip balm safe',
    'child licking lips constantly',
    'toddler cracked lip corners',
    'baby dry lips causes',
    'toddler split lip from dryness',
    'cheilitis toddler',
  ],
  quickAnswer:
    'Dry, cracked lips in toddlers are common, especially during cold or dry weather. Frequent lip licking, mouth breathing, and dehydration can all contribute. Regular application of a gentle, unflavored lip balm or petroleum jelly helps protect and heal the lips. If cracking is severe or persistent, especially at the corners of the mouth, mention it to your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Newborn lips may appear dry or peeling as part of the normal skin adjustment after birth. Breastfed babies sometimes develop a "nursing blister" on the upper lip, which is harmless. If lips seem persistently dry, check that baby is feeding well and hydrated (adequate wet diapers). A tiny amount of breast milk or lanolin can be applied to dry lips.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Increased drooling from teething can irritate the lips and surrounding skin. The cycle of moisture from drool followed by drying can cause chapping. Apply petroleum jelly to protect lips before meals and before sleep. Make sure baby is getting enough fluids through breast milk, formula, or water (for babies over 6 months).',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers often develop a lip-licking habit that creates a cycle of drying and irritation. Flavored lip balms can actually worsen this by encouraging more licking. Use unflavored petroleum jelly or a gentle, unscented lip balm. Mouth breathing (from congestion or habit) can also dry out lips. Offer water frequently and use a humidifier in dry weather.',
    },
    {
      ageRange: '2-3 years',
      context:
        'If your toddler has persistent cracking at the corners of the mouth (angular cheilitis), it could be related to drool pooling, a yeast infection, or occasionally a nutritional factor like iron or B vitamin deficiency. Mention it to your pediatrician if it does not improve with regular moisturizing. Allergic reactions to toothpaste or food can also cause lip irritation.',
    },
  ],
  whenNormal: [
    'Mild lip dryness during winter or dry weather that improves with lip balm',
    'Temporary chapping from wind exposure or a cold',
    'Slight peeling on a newborn\'s lips in the first few weeks',
    'Brief lip dryness during a mild illness when fluid intake may be lower',
  ],
  whenToMention: [
    'Cracking at the corners of the mouth that persists despite regular moisturizing',
    'Lips are chronically cracked, bleeding, or painful',
    'Dry lips are accompanied by signs of dehydration like fewer wet diapers, dry eyes, or lethargy',
  ],
  whenToActNow: [
    'Lips are severely swollen, blistered, or show signs of a severe allergic reaction',
    'Your child has signs of significant dehydration - no tears when crying, very dry mouth, sunken eyes, or markedly decreased urine output',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Winter Health Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/prevention/Pages/Winter-Health-Tips.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Dehydration in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/dehydration-heat-illness/Pages/Dehydration.aspx',
    },
  ],
};
