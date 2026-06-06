import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-only-at-night',
  title: 'Baby Rash That Appears Only at Night',
  category: 'skin',
  searchTerms: [
    'baby rash only at night',
    'baby rash worse at night',
    'baby nighttime rash',
    'baby rash appears at bedtime',
    'baby red blotchy at night',
    'baby skin worse at night',
    'baby itchy at night rash',
    'baby hives at night',
    'baby rash comes and goes evening',
    'toddler rash worse nighttime',
  ],
  quickAnswer:
    'Rashes that appear or worsen at night are often related to warmth from bedding, dust mite exposure, or the body\'s natural increase in itch sensation during the evening hours. Eczema and hives are particularly known for being worse at night. Ensuring a cool sleeping environment and washing bedding frequently can help.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns who are overdressed or heavily swaddled may develop heat rash at night. Eczema may also appear more pronounced at night due to warmth from blankets and sleepwear. Keep the room cool (68 to 72 degrees F) and dress your baby in breathable layers for sleep.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, dust mite allergy can begin contributing to nighttime eczema flares. The natural circadian rhythm of cortisol drops in the evening, which can make eczema itch worse at night. Applying moisturizer before bed and using dust mite covers on the crib mattress may help reduce nighttime symptoms.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies who are itchy at night may scratch more because there are fewer distractions. Hives can appear primarily at night in response to food allergens consumed at dinner. If you notice a pattern of nighttime rashes after certain foods, discuss it with your pediatrician. Using mittens or long sleeves can protect skin from scratching.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with eczema often have significantly worse symptoms at night, which can disrupt sleep for the whole family. Nighttime-only hives may suggest an environmental trigger in the bedroom. Less commonly, scabies causes intense itching that is characteristically worse at night. If nighttime itching is severe and not responding to eczema treatment, have your pediatrician evaluate for scabies.',
    },
  ],
  whenNormal: [
    'Mild eczema that seems slightly redder at night due to warmth from bedding',
    'Heat rash that appears when the baby is overdressed for sleep and resolves when cooled down',
    'Occasional hives that appear in the evening and are gone by morning',
  ],
  whenToMention: [
    'Nighttime rashes are disrupting your baby\'s sleep regularly',
    'The itch is so severe that your baby is scratching until the skin breaks',
    'You suspect the rash may be related to something in the sleeping environment',
  ],
  whenToActNow: [
    'Nighttime hives are accompanied by breathing difficulty, wheezing, or facial swelling',
    'Intense nighttime itching with burrow-like tracks between fingers or toes, suggesting scabies, which needs prescription treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Eczema: Tips for Managing.',
      url: 'https://www.aad.org/public/diseases/eczema/childhood/treating/tips',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Circadian Rhythm of Pruritus. Journal of Clinical Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/33918085/',
    },
  ],
  relatedConcernSlugs: ['eczema', 'hives', 'heat-rash', 'scabies-baby', 'eczema-flare-triggers'],
};
