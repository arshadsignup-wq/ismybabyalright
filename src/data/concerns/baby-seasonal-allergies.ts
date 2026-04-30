import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-seasonal-allergies',
  title: 'Seasonal Allergies (Hay Fever) in Baby or Toddler',
  category: 'medical',
  searchTerms: ['baby seasonal allergies', 'toddler hay fever', 'baby pollen allergy', 'toddler allergies spring', 'baby sneezing allergies', 'toddler allergic rhinitis', 'baby outdoor allergies', 'toddler allergy symptoms', 'baby grass allergy', 'toddler itchy eyes pollen'],
  quickAnswer: 'Seasonal allergies (allergic rhinitis or hay fever) are uncommon before age 2 because children need at least 1-2 seasons of pollen exposure to become sensitized. Most seasonal allergies develop between ages 2-5. Symptoms include sneezing, runny nose with clear discharge, itchy and watery eyes, nasal congestion, and the "allergic salute" (pushing the nose upward with the palm). Unlike a cold, seasonal allergies do not cause fever, and symptoms last as long as pollen exposure continues (weeks to months) rather than resolving in 7-10 days.',
  byAge: [
    { ageRange: '0-12 months', context: 'True seasonal allergies in babies under 1 year are very rare because the immune system needs multiple seasons of exposure to develop sensitization. If your baby has congestion and sneezing in spring or fall, it is much more likely a viral cold than allergies. Babies can have up to 8-10 colds per year, which can easily be mistaken for allergies. If your baby has persistent congestion that does not resolve and seems worse outdoors or in certain environments, mention it to your pediatrician, but allergies are an unlikely diagnosis at this age.' },
    { ageRange: '1-3 years', context: 'Seasonal allergies can develop as early as 18 months to 2 years, though they are more common after age 3. Clues that symptoms are allergies rather than a cold include: clear (not colored) nasal discharge, symptoms that last weeks and recur at the same time each year, itchy nose and eyes (a child may rub their nose frequently), no fever, and worsening of symptoms on high-pollen days. Treatment for toddlers includes: limiting outdoor time on high-pollen days, bathing after outdoor play, keeping windows closed, non-drowsy antihistamines (cetirizine is approved for children 2+), and nasal saline rinses. Consult your pediatrician before starting any allergy medication.' },
  ],
  whenNormal: ['Clear runny nose and sneezing during spring or fall that does not include fever', 'Symptoms that improve indoors and worsen outdoors', 'Itchy, watery eyes during high-pollen days'],
  whenToMention: ['You suspect your toddler has seasonal allergies and want to discuss treatment options', 'Your child\'s allergy symptoms are affecting sleep or daily activities', 'Over-the-counter antihistamines are not providing adequate relief', 'You want to discuss allergy testing for your child'],
  whenToActNow: ['Wheezing or difficulty breathing during allergy season (allergies can trigger asthma)', 'Persistent thick green nasal discharge with facial pain (possible sinus infection complicating allergies)', 'Severe allergic reaction with swelling of the face or throat'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['chronic-congestion', 'baby-allergic-to-pet-dander', 'eczema', 'baby-conjunctivitis-viral-vs-bacterial'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Seasonal Allergies in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Seasonal-Allergies-in-Children.aspx' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Allergies and Asthma. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institute of Allergy and Infectious Diseases. Allergic Rhinitis.', url: 'https://www.niaid.nih.gov/diseases-conditions/allergic-rhinitis' },
  ],
};
