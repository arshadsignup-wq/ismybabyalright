import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-allergic-to-pet-dander',
  title: 'Baby Allergic to Pets (Cat and Dog Allergies)',
  category: 'medical',
  searchTerms: ['baby allergic to cat', 'baby allergic to dog', 'baby pet allergy', 'toddler pet dander allergy', 'baby allergic to pets', 'toddler cat allergy', 'toddler dog allergy', 'baby sneezing around pets', 'baby hives from pet', 'baby wheezing around animals'],
  quickAnswer: 'Pet allergies in babies and toddlers are caused by proteins found in animal dander (skin flakes), saliva, and urine - not the fur itself. Symptoms include sneezing, runny nose, itchy/watery eyes, coughing, and sometimes hives or eczema flares after contact with animals. Interestingly, early exposure to pets (especially dogs) in the first year of life may actually reduce the risk of developing allergies and asthma. If your child has confirmed pet allergies, reducing exposure (keeping pets out of the bedroom, using HEPA filters, frequent vacuuming) can help manage symptoms.',
  byAge: [
    { ageRange: '0-12 months', context: 'Pet allergies rarely manifest in babies under 6 months because it takes time for the immune system to become sensitized. If your baby consistently has nasal congestion, sneezing, or eczema flares that seem worse around pets, mention it to your pediatrician. However, research suggests that early exposure to pets (particularly dogs) may actually be protective against developing allergies and asthma later. You do not need to rehome pets preemptively unless your child is having significant symptoms. Keep pets out of the baby\'s sleep area and wash hands after handling animals before touching the baby.' },
    { ageRange: '1-3 years', context: 'Pet allergies become more apparent in toddlers who show consistent symptoms around animals: sneezing, runny or stuffy nose, itchy or watery eyes, coughing, hives where an animal licked them, or eczema flares. If you suspect a pet allergy, your pediatrician can refer you to an allergist for testing (skin prick or blood test). If your toddler is allergic: keep pets out of the bedroom, use HEPA air purifiers, wash pet bedding frequently, vacuum with a HEPA filter, and bathe pets regularly. Antihistamines can help manage symptoms. Allergen immunotherapy may be an option for older children.' },
  ],
  whenNormal: ['Mild sneezing when first meeting a pet that resolves quickly', 'Enjoying time with pets without any symptoms', 'Occasional congestion that is not consistently linked to pet exposure'],
  whenToMention: ['Your child consistently has allergy symptoms (sneezing, runny nose, itchy eyes) around specific animals', 'Your child\'s eczema consistently worsens after pet contact', 'You want allergy testing to determine if your child is pet-allergic', 'You are considering getting a pet and have a family history of allergies'],
  whenToActNow: ['Wheezing, difficulty breathing, or an asthma attack after pet exposure', 'Severe hives or facial swelling after contact with an animal', 'Your child is having persistent breathing difficulties that may be related to pet allergens in the home'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-seasonal-allergies', 'eczema', 'chronic-congestion', 'baby-wheezing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Allergies in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institute of Allergy and Infectious Diseases. Pet Allergies.', url: 'https://www.niaid.nih.gov/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pets and Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Pets-and-Children.aspx' },
  ],
};
