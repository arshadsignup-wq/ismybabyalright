import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-harlequin-color-change',
  title: 'Harlequin Color Change in Newborns',
  category: 'medical',
  searchTerms: [
    'newborn half body different color',
    'baby one side red one side pale',
    'harlequin color change newborn',
    'baby half body pink half white',
    'newborn split color',
    'baby two-toned skin',
    'harlequin phenomenon baby',
    'newborn body color difference sides',
    'baby half flush',
    'newborn color change lying on side',
  ],
  quickAnswer:
    'Harlequin color change is a harmless phenomenon where one half of your newborn\'s body turns red or pink while the other half appears pale, often when lying on their side. It is caused by immature blood vessel regulation and typically resolves within minutes. It is most common in the first few days of life and has no medical significance.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Harlequin color change most commonly occurs in the first week of life and is seen in up to 10% of newborns. It typically happens when the baby is lying on one side - the dependent (lower) side becomes red while the upper side appears pale. The line of demarcation is usually sharp, running down the midline of the body. The color change resolves within seconds to minutes when the baby is repositioned. It is caused by immature autonomic regulation of blood vessels and is completely benign.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Harlequin color change becomes increasingly rare after the first few weeks as your baby\'s vascular system matures. If you still see occasional episodes, they remain harmless and will resolve on their own. The phenomenon has no association with heart, lung, or neurological problems.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, harlequin color change should no longer occur. Your baby\'s autonomic nervous system and blood vessel tone have matured. Any new or persistent color changes at this age should be discussed with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Harlequin color change does not occur at this age. If you notice unusual color changes in your baby\'s skin, consult your pediatrician to rule out other causes.',
    },
  ],
  whenNormal: [
    'One half of the body turns red or pink while the other half appears pale, especially when baby is on their side',
    'The color change resolves within seconds to minutes when baby is moved',
    'Baby is otherwise well, feeding normally, and breathing comfortably',
    'The phenomenon occurs in the first few weeks of life',
  ],
  whenToMention: [
    'The color change happens frequently or lasts longer than a few minutes',
    'You are unsure whether what you are seeing is harlequin color change or something else',
    'The color change persists beyond the first month of life',
  ],
  whenToActNow: [
    'Your baby appears unwell, lethargic, or has difficulty breathing along with skin color changes',
    'Blue or purple discoloration of the lips, tongue, or entire body that does not resolve with repositioning',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Skin Variations. Textbook of Neonatal Resuscitation (NRP).',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Harlequin Color Change. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK534235/',
    },
  ],
  relatedConcernSlugs: ['newborn-mottled-skin', 'newborn-acrocyanosis-blue-hands-feet'],
};
