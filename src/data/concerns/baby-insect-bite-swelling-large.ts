import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-insect-bite-swelling-large',
  title: 'Large Insect Bite Reaction in Baby',
  category: 'skin',
  searchTerms: ['baby insect bite swelling', 'baby bug bite swollen', 'baby large insect bite reaction', 'baby bee sting swelling', 'baby bite allergic reaction', 'baby insect bite very swollen', 'skeeter syndrome baby', 'baby bug bite red swollen', 'toddler insect bite reaction', 'baby big bug bite'],
  quickAnswer: 'It is common for babies and young children to have larger reactions to insect bites than adults. A large local reaction with significant swelling, redness, and firmness around a bite is usually not an allergy but rather a normal immune response to the insect\'s saliva. True allergic reactions involve hives, swelling away from the bite, or breathing difficulty.',
  byAge: [
    { ageRange: '0-3 months', context: 'Insect bites in very young infants are less common if proper protective measures are used. If a newborn is bitten and develops significant swelling with fever, seek medical evaluation to ensure the swelling is from the bite and not an infection. Avoid insect repellents containing DEET in babies under 2 months.' },
    { ageRange: '3-6 months', context: 'Large local reactions to insect bites are common at this age because babies\' immune systems overreact to insect proteins. A mosquito bite may swell to the size of a quarter or larger. Cool compresses and age-appropriate antihistamines recommended by your pediatrician can help reduce swelling and itch.' },
    { ageRange: '6-12 months', context: 'Babies may develop "skeeter syndrome," an exaggerated local reaction to mosquito bites with large red, swollen, warm areas. This looks alarming but is not a systemic allergy. It can be difficult to distinguish from cellulitis. If the swelling has a clear bite mark in the center and appeared shortly after being outdoors, it is likely a reaction.' },
    { ageRange: '12-24 months', context: 'Toddlers spending more time outdoors may get many bites. Over time, the severity of reactions often decreases as the immune system becomes tolerant. Bee and wasp stings can cause significant pain and swelling. Remove stingers promptly by scraping sideways. Apply ice and monitor for signs of anaphylaxis for 30 minutes after a sting.' },
  ],
  whenNormal: ['Swelling and redness around a bite that gradually improves over 2 to 3 days', 'A large local reaction to a mosquito bite that is not accompanied by fever', 'Mild itching and redness that responds to cool compresses'],
  whenToMention: ['The swelling is very large and you want guidance on treatment', 'A bite site becomes increasingly red and warm over 24 to 48 hours and you are unsure if it is infected', 'Your child has had large reactions to insect bites repeatedly and you want to discuss prevention'],
  whenToActNow: ['Hives appearing away from the bite site, facial or throat swelling, difficulty breathing, or vomiting after an insect sting, suggesting anaphylaxis', 'A bite with spreading redness, red streaks, increasing warmth, and fever suggesting cellulitis', 'A bite or sting inside the mouth or throat causing swelling'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Insect Bites and Stings. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Insect-Bites-and-Stings.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Bug Bites and Stings.', url: 'https://www.aad.org/public/everyday-care/injured-skin/bites/bug-bites-stings' },
    { org: 'NIH', citation: 'National Library of Medicine. Skeeter Syndrome. Allergy, Asthma & Clinical Immunology.', url: 'https://pubmed.ncbi.nlm.nih.gov/22339817/' },
  ],
  relatedConcernSlugs: ['hives', 'baby-mosquito-bite-reaction', 'baby-cellulitis-spreading-redness'],
};
