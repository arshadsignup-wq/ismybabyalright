import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-molluscum-contagiosum',
  title: 'Molluscum Contagiosum on My Baby\'s Skin',
  category: 'skin',
  searchTerms: [
    'molluscum contagiosum baby',
    'baby skin bumps small round',
    'molluscum contagiosum toddler treatment',
    'water warts baby',
    'baby pearly bumps with dimple',
    'molluscum contagiosum contagious baby',
    'baby skin virus bumps',
    'molluscum contagiosum daycare baby',
    'how long does molluscum last baby',
    'molluscum contagiosum spread prevention',
  ],
  quickAnswer:
    'Molluscum contagiosum is a common, harmless viral skin infection that causes small, firm, dome-shaped bumps with a characteristic dimple (umbilication) in the center. It is caused by a poxvirus and is very common in children aged 1-10 years. The bumps are painless and usually resolve on their own within 6-18 months without treatment, though they can persist for up to 4 years. The virus is contagious through direct skin contact and shared items.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Molluscum contagiosum is less common in babies under 12 months but can occur, especially if they have older siblings with the infection. The bumps are typically 2-5 mm in diameter, skin-colored or pearly white, and have a small dent in the center. They can appear anywhere on the body but are common on the trunk, arms, and legs. In infants, the infection is usually acquired through skin-to-skin contact with an infected family member. Treatment is generally not recommended for infants because the bumps are harmless and treatments can be painful. Keep the affected areas clean and avoid picking at bumps.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers in daycare may contract molluscum from other children. The bumps can spread on your child\'s own body through scratching (autoinoculation), so keep nails trimmed short. The surrounding skin may become red or irritated, especially if your child has eczema (eczema can worsen around molluscum bumps — a condition called "molluscum dermatitis"). Do not share towels, bath items, or clothing with the affected child. Covering bumps with clothing or bandages can reduce spread. Most pediatricians recommend watchful waiting rather than active treatment.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Molluscum may spread or persist during this age. When bumps are about to resolve naturally, they may become red, swollen, and slightly tender — this is actually a good sign called the "BOTE" (Beginning of the End) reaction, meaning the immune system is fighting the virus. If treatment is desired (for extensive spread or cosmetic concerns), options include topical treatments (cantharidin applied in-office, tretinoin cream), cryotherapy (freezing), or curettage (scraping). These treatments can be uncomfortable and should be weighed against the option of waiting for natural resolution. Consult your dermatologist or pediatrician about the best approach.',
    },
  ],
  whenNormal: [
    'Your child has a few small, painless bumps with central dimples that are not growing rapidly or causing distress.',
    'The bumps have been present for weeks to months and are slowly increasing in number — molluscum often spreads before resolving.',
    'A bump becomes red and slightly tender before flattening — this is often a sign that it is about to resolve.',
  ],
  whenToMention: [
    'The bumps are spreading rapidly or you have questions about treatment options.',
    'The skin around the bumps is very red, itchy, or eczematous.',
    'You want to discuss whether treatment is appropriate for your child or if watchful waiting is preferred.',
  ],
  whenToActNow: [
    'The bumps become very red, warm, painful, and develop pus — this may indicate a secondary bacterial infection requiring antibiotics.',
    'Bumps appear on or very close to your baby\'s eyes, which could affect vision — see your pediatrician or an ophthalmologist.',
    'Your child has a widespread eruption of molluscum combined with high fever or seems systemically unwell — this is unusual and warrants medical evaluation.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['hives', 'baby-heat-rash', 'hand-foot-mouth'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Molluscum Contagiosum',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Molluscum-Contagiosum.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Molluscum Contagiosum',
      url: 'https://www.cdc.gov/poxvirus/molluscum-contagiosum/index.html',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology — Molluscum Contagiosum: Diagnosis and Treatment',
      url: 'https://www.aad.org/public/diseases/a-z/molluscum-contagiosum-treatment',
    },
  ],
};
