import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pet-allergy-management-with-baby',
  title: 'Pet Allergy Management with Baby',
  category: 'medical',
  searchTerms: [
    'pet allergy baby',
    'baby allergic to cat',
    'baby allergic to dog',
    'pet dander allergy infant',
    'keeping pets with allergic baby',
    'baby sneezing around pets',
    'cat allergy baby symptoms',
    'dog allergy baby wheezing',
    'managing pet allergy newborn',
  ],
  quickAnswer:
    'Pet allergies are caused by proteins found in animal dander (skin flakes), saliva, and urine, not fur itself. Symptoms in babies include nasal congestion, sneezing, itchy watery eyes, coughing, wheezing, and eczema flares. If your baby is allergic to your pet, you do not necessarily need to rehome the animal. Environmental control measures like keeping pets out of the baby\'s bedroom, using HEPA air purifiers, and frequent cleaning can significantly reduce allergen exposure.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'True pet allergy is uncommon in very young infants because sensitization takes time. However, a family history of allergies increases risk. Interestingly, some research suggests that early exposure to pets may actually reduce allergy risk in some children. If your newborn has persistent congestion or eczema, the cause is more likely to be other factors at this age. Keep the nursery a pet-free zone as a general precaution.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Pet sensitization can begin developing in the first six months. If your baby has worsening eczema, persistent nasal congestion, or respiratory symptoms that improve when away from pets for several days, mention this to your pediatrician. Note that pet dander can linger in a home for months even after a pet is removed, so short trips away may not show improvement.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Crawling babies have increased contact with pet dander on floors and carpets. If your baby develops sneezing, congestion, or wheezing that worsens after crawling on carpeted areas or after close contact with pets, a pet allergy evaluation may be warranted. HEPA vacuuming, hard floor surfaces, and washing hands after pet contact can reduce symptoms.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with pet allergies may have chronic nasal congestion, coughing, or wheezing that is worse at home than at other locations. An allergist can confirm pet allergy through skin testing. Environmental controls include HEPA air purifiers in the bedroom and living areas, washing pet bedding weekly, bathing the pet regularly, and keeping the child\'s bedroom strictly pet-free. Allergy medications may be recommended for symptom management.',
    },
  ],
  whenNormal: [
    'Baby sneezes occasionally around pets but has no persistent symptoms',
    'Baby has mild congestion that correlates with viral illnesses, not pet exposure',
    'Baby interacts with pets without developing rash, hives, or respiratory symptoms',
    'Baby has mild eczema that is well-controlled and not worse around pets',
  ],
  whenToMention: [
    'Baby has chronic congestion, sneezing, or watery eyes that seem worse around pets',
    'Baby\'s eczema consistently flares after close contact with your pet',
    'Baby develops wheezing or coughing that improves when away from home for extended periods',
  ],
  whenToActNow: [
    'Baby has significant wheezing, difficulty breathing, or chest retractions after pet exposure',
    'Baby develops severe hives or facial swelling after a pet scratch or lick -- seek immediate medical care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. Pet Allergy. ACAAI.',
      url: 'https://acaai.org/allergies/allergic-conditions/pet-allergy/',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Environmental Health Sciences. Pet Allergens. NIH.',
      url: 'https://www.niehs.nih.gov/health/topics/agents/allergens/pets',
    },
  ],
};
