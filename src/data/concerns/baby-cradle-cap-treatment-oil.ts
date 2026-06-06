import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cradle-cap-treatment-oil',
  title: 'Cradle Cap Treatment and Oil Removal Methods',
  category: 'skin',
  searchTerms: [
    'cradle cap treatment oil',
    'how to remove cradle cap',
    'baby cradle cap coconut oil',
    'cradle cap removal methods',
    'baby cradle cap olive oil',
    'how to get rid of cradle cap',
    'cradle cap brush',
    'cradle cap shampoo baby',
    'baby scalp flakes removal',
    'best oil for cradle cap',
  ],
  quickAnswer:
    'The most effective way to treat cradle cap is to apply a small amount of oil (mineral oil, coconut oil, or petroleum jelly) to the scalp, let it sit for 10 to 15 minutes to soften the scales, then gently loosen them with a soft brush or fine-tooth comb and wash out with a gentle baby shampoo. This process may need to be repeated several times.',
  byAge: [
    { ageRange: '0-3 months', context: 'Cradle cap often first appears in the first few weeks of life. Start with gentle oil massage: apply a thin layer of mineral oil or coconut oil to the scalp, wait 10 to 15 minutes, then use a soft-bristled brush to gently loosen flakes before washing with a mild baby shampoo. Do not pick or scratch at the scales as this can irritate the skin.' },
    { ageRange: '3-6 months', context: 'If cradle cap persists, you may need to repeat the oil and brush routine more frequently, perhaps before every bath. A medicated cradle cap shampoo containing selenium sulfide or ketoconazole may be recommended by your pediatrician for stubborn cases. Always rinse thoroughly and avoid getting medicated shampoo in your baby\'s eyes.' },
    { ageRange: '6-12 months', context: 'Most cradle cap resolves by this age with consistent gentle treatment. If thick, persistent scales remain, your pediatrician may prescribe a mild topical corticosteroid or antifungal cream. Continued use of a soft brush during bath time helps keep new flakes from building up.' },
    { ageRange: '12-24 months', context: 'Cradle cap that persists beyond the first year may need stronger treatment. Your pediatrician may recommend a medicated shampoo used once or twice weekly. Persistent scalp scaling in toddlers should be evaluated to ensure it is seborrheic dermatitis and not another condition like scalp psoriasis or tinea capitis.' },
  ],
  whenNormal: [
    'Yellowish, greasy scales on the scalp that loosen with oil treatment and gentle brushing',
    'Cradle cap that gradually improves with consistent treatment over days to weeks',
    'Mild flaking that does not bother the baby',
  ],
  whenToMention: [
    'Cradle cap is not improving despite consistent home treatment',
    'The scalp is becoming red, inflamed, or spreading beyond the scalp',
    'You want guidance on whether a medicated shampoo is appropriate',
  ],
  whenToActNow: [
    'The scalp becomes infected with oozing, crusting, increased redness, or swelling',
    'Hair loss is occurring along with the scalp condition',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Cradle-Cap.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. How to Treat Cradle Cap.', url: 'https://www.aad.org/public/diseases/a-z/cradle-cap-treatment' },
    { org: 'NIH', citation: 'National Library of Medicine. Infantile Seborrheic Dermatitis: Treatment. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK531461/' },
  ],
  relatedConcernSlugs: ['cradle-cap', 'baby-cradle-cap-eyebrows', 'baby-scalp-cradle-cap-persistent', 'baby-seborrheic-dermatitis-body'],
};
