import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'chicken-pox-baby',
  title: 'Chicken Pox (Varicella) in Babies and Toddlers',
  category: 'medical',
  searchTerms: [
    'chicken pox baby',
    'varicella baby',
    'baby chicken pox symptoms',
    'chicken pox before vaccine age',
    'baby itchy blisters all over',
    'chicken pox toddler',
    'baby chicken pox stages',
    'baby chicken pox treatment',
    'chicken pox contagious baby',
    'what does chicken pox look like baby',
    'baby chicken pox vaccine age',
  ],
  quickAnswer:
    'Chicken pox (varicella) is a highly contagious viral infection that causes an itchy rash of small, fluid-filled blisters. Thanks to the varicella vaccine, it is much less common than in previous decades, but it can still occur in unvaccinated children or as a mild breakthrough case in vaccinated children. The rash typically appears in waves over 3-5 days, with bumps progressing from red spots to blisters to scabs. Most children recover fully at home within 1-2 weeks.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months are partially protected by maternal antibodies if the mother had chicken pox or was vaccinated. However, chicken pox in very young infants can be more serious. Neonatal varicella (if the mother develops chicken pox around the time of delivery) is a medical emergency. If a young baby is exposed to chicken pox, contact your pediatrician promptly as preventive treatment may be available.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies between 6 and 12 months have lost most maternal antibodies but are not yet old enough for the first dose of varicella vaccine (given at 12 months). This makes them vulnerable if exposed. If your baby develops chicken pox at this age, the rash typically starts on the trunk, face, and scalp and spreads outward. Oatmeal baths, calamine lotion, and keeping nails short can help manage itching. Do not give aspirin to children with chicken pox due to the risk of Reye syndrome.',
    },
    {
      ageRange: '1-3 years',
      context:
        'The first dose of varicella vaccine is given at 12-15 months. Vaccinated children can still get a mild case called "breakthrough varicella," which typically involves fewer than 50 lesions and milder symptoms. Unvaccinated toddlers tend to have more severe cases with 200-500 blisters. The rash appears in "crops" over several days, so you will see bumps at different stages (spots, blisters, and scabs) all at once. Children are contagious from 1-2 days before the rash until all blisters have crusted over.',
    },
  ],
  whenNormal: [
    'A rash that starts as small red bumps, becomes fluid-filled blisters, and then crusts over',
    'New crops of blisters appearing for 3-5 days while older ones are healing',
    'Low-grade fever, mild headache, and decreased appetite for the first few days',
    'Itchiness that peaks when blisters are forming and improves as they scab',
    'A milder case with fewer blisters in a vaccinated child',
  ],
  whenToMention: [
    'Your baby has been exposed to chicken pox and is under 12 months or unvaccinated',
    'The rash is very widespread with many blisters, especially in an unvaccinated child',
    'Your child has been itching severely and you need guidance on comfort measures',
    'You are unsure whether your child\'s rash is chicken pox or something else',
  ],
  whenToActNow: [
    'Your baby is under 4 weeks old and has been exposed to or develops chicken pox',
    'Blisters become very red, swollen, warm, or produce pus, indicating bacterial superinfection',
    'Your child develops a high fever (over 104F / 40C), especially one that returns after initially improving',
    'Your child seems very ill, confused, has a stiff neck, or has difficulty walking',
    'Your child has a weakened immune system and develops chicken pox',
    'Your child develops difficulty breathing or a persistent cough during chicken pox',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['fever-with-rash', 'hives', 'baby-blisters-on-skin', 'viral-rash-baby'],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Chickenpox (Varicella).',
      url: 'https://www.cdc.gov/chickenpox/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Chickenpox. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Chickenpox.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Varicella Vaccine Recommendations.',
      url: 'https://www.cdc.gov/chickenpox/vaccination/index.html',
    },
  ],
};
