import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-bath-frequency',
  title: 'How Often to Bathe a Newborn',
  category: 'medical',
  searchTerms: ['how often bathe newborn', 'newborn bath frequency', 'baby first bath', 'how many times bath baby week', 'newborn bath too much', 'sponge bath newborn', 'baby bath before cord falls off', 'newborn bathing schedule', 'overbathing baby dry skin', 'when to give baby first bath'],
  quickAnswer: 'Newborns do not need daily baths. Bathing 2-3 times per week is sufficient, as more frequent bathing can dry out their sensitive skin. Until the umbilical cord stump falls off, give sponge baths only. After the stump falls off, you can give gentle tub baths. Focus on keeping the diaper area, skin folds, and face clean between baths.',
  byAge: [
    { ageRange: '0-1 month', context: 'The WHO recommends delaying the first bath until at least 24 hours after birth to protect the skin barrier and promote temperature stability. Until the umbilical cord stump falls off (usually 1-3 weeks), give sponge baths using a warm, damp washcloth. Focus on the face, neck folds, diaper area, and any skin creases. Use warm (not hot) water and minimal soap (fragrance-free, gentle baby wash). Bathing 2-3 times per week is sufficient. Do not submerge the cord stump. Keep the vernix (waxy coating) on the skin as long as possible, as it is a natural moisturizer and protectant.' },
    { ageRange: '1-3 months', context: 'Once the cord stump has fallen off and healed, you can give gentle tub baths. Continue bathing 2-3 times per week. Use only a small amount of fragrance-free baby wash. Moisturize with a gentle, fragrance-free cream after bath if skin appears dry. Bath time should be brief (5-10 minutes) to prevent chilling.' },
    { ageRange: '3-6 months', context: 'Continue 2-3 baths per week. As your baby becomes more active and starts solid foods around 6 months, you may increase bath frequency slightly. Always supervise your baby in the bath.' },
    { ageRange: '6-12 months', context: 'Baths may become more frequent as baby gets messier with food and more active. Daily baths are fine if skin is not becoming dry. Always use gentle products and moisturize afterward.' },
  ],
  whenNormal: ['Bathing 2-3 times per week with gentle, fragrance-free products', 'Sponge baths only until the umbilical cord stump falls off', 'Baby\'s skin is soft, hydrated, and not flaky', 'Spot-cleaning between baths for diaper area and skin folds'],
  whenToMention: ['Baby\'s skin appears very dry, cracked, or rashy despite gentle bathing practices', 'You are unsure about proper bathing technique or water temperature', 'Skin seems to react to products you are using'],
  whenToActNow: ['Signs of skin infection: spreading redness, warmth, pus, or fever', 'Severe skin breakdown or blistering'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bathing Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Bathing-Your-Newborn.aspx' },
    { org: 'WHO', citation: 'World Health Organization. WHO Recommendations on Newborn Health.', url: 'https://www.who.int/publications/i/item/WHO-MCA-17.07' },
  ],
  relatedConcernSlugs: ['newborn-skin-peeling-normal', 'newborn-dry-skin-eczema-early', 'newborn-cord-stump-smell'],
};
