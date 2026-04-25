import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'impetigo-baby',
  title: 'My Baby Has Impetigo',
  category: 'skin',
  searchTerms: [
    'baby impetigo',
    'honey colored crust baby',
    'impetigo toddler',
    'baby skin infection crusty',
    'impetigo around mouth baby',
    'staph infection baby skin',
    'baby sores on face',
    'impetigo treatment baby',
    'contagious skin infection baby',
    'blistering skin infection child',
  ],
  quickAnswer:
    'Impetigo is a common bacterial skin infection in babies and young children, caused by staph or strep bacteria. It appears as red sores that quickly develop into honey-colored crusts, most often around the nose, mouth, and hands. While it looks unpleasant, impetigo is very treatable with antibiotic ointment or oral antibiotics and clears up within a week or two of starting treatment.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Impetigo in young infants can occasionally present as a more serious bullous form, with larger blisters filled with clear or yellowish fluid. Newborns\' skin is more vulnerable to bacterial infections, and any skin infection in this age group warrants a visit to the pediatrician. The bacteria can enter through tiny breaks in the skin, diaper rash, or eczema patches. Keep the affected area clean and avoid touching it without washing your hands.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies explore the world by putting everything in their mouths, impetigo often develops around the mouth, nose, and chin where drool and food create a moist environment that bacteria love. It typically starts as small red spots that quickly turn into blisters, which then burst and form characteristic honey-colored or golden crusts. Impetigo is very contagious, so wash your hands frequently and keep your baby\'s towels and bedding separate from other family members.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers are particularly prone to impetigo because minor cuts, scrapes, insect bites, and eczema patches provide entry points for bacteria, and they frequently touch their faces. Impetigo often spreads from one area to another on your child\'s body through scratching. Your pediatrician will likely prescribe a topical antibiotic ointment (such as mupirocin) for mild cases or an oral antibiotic for more widespread infection. Your child is usually no longer contagious after 24-48 hours of antibiotic treatment.',
    },
    {
      ageRange: '2-3 years',
      context:
        'At this age, impetigo can spread easily in daycare and play group settings through direct contact or shared toys. If your child develops impetigo, keep them home from daycare until they have been on antibiotics for at least 24 hours and the sores are no longer weeping. Gently clean the crusted areas with warm water and soap before applying prescription ointment. Impetigo rarely leaves scars, and recurrence is common but preventable with good hand hygiene.',
    },
  ],
  whenNormal: [
    'A few small sores around the nose or mouth with honey-colored crusts that are responding to prescribed antibiotic treatment',
    'Mild redness around the sores without significant swelling or pain',
    'The crusts gradually clearing and new skin appearing within 7-10 days of starting antibiotics',
  ],
  whenToMention: [
    'The sores are spreading despite 2-3 days of topical antibiotic treatment',
    'New sores are appearing in areas away from the original patch',
    'Your baby has recurring episodes of impetigo',
  ],
  whenToActNow: [
    'The skin around the sores becomes deeply red, very swollen, warm, and painful, or your baby develops a fever, which could indicate the infection is spreading deeper into the skin (cellulitis)',
    'Your baby\'s urine becomes dark or cola-colored in the weeks following impetigo, which rarely can indicate post-streptococcal glomerulonephritis, a kidney complication that needs immediate medical attention',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Impetigo. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Impetigo.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Impetigo: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/impetigo-overview',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Impetigo. Symptoms & Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/impetigo/symptoms-causes/syc-20352352',
    },
  ],
};
