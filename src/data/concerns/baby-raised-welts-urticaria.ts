import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-raised-welts-urticaria',
  title: 'Baby Raised Welts and Hives (Urticaria)',
  category: 'skin',
  searchTerms: [
    'baby raised welts',
    'baby urticaria',
    'baby welts on skin',
    'baby hives welts',
    'baby raised red bumps',
    'baby skin welts come and go',
    'infant urticaria causes',
    'toddler welts on body',
    'baby allergic reaction welts',
    'baby swollen red bumps skin',
  ],
  quickAnswer:
    'Raised welts (urticaria or hives) are swollen, red, itchy bumps that can appear suddenly and move around the body. They are usually caused by viral infections, allergic reactions, or unknown triggers. Individual welts typically last less than 24 hours. Hives are alarming to see but are usually harmless unless accompanied by breathing difficulty or swelling.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Hives are relatively uncommon in very young infants because they have limited exposure to allergens. If welts appear at this age, they may be related to a viral infection or, less commonly, to something in the mother\'s diet passed through breast milk. Any widespread welts in a newborn should be evaluated by your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies begin to have more environmental exposures, hives may occur in response to viral infections, new foods, or contact with irritants. Viral-induced hives are actually the most common cause in this age group, more so than food allergies. Antihistamines appropriate for this age, as recommended by your pediatrician, can help manage symptoms.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With the introduction of solid foods, food-triggered hives may become apparent. Common culprits include egg, milk, peanut, and wheat. Hives that appear within minutes to 2 hours of eating a new food suggest a food allergy. However, viral infections remain the most common cause of hives overall in this age group.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop hives from viral infections, food allergies, insect stings, medications, or unknown causes. Pressure urticaria from tight waistbands or car seat straps can also occur. If hives recur frequently, keeping a diary of foods, activities, and exposures before episodes can help identify triggers.',
    },
  ],
  whenNormal: [
    'Hives that come and go over a few hours during a viral illness, with each individual welt lasting less than 24 hours',
    'A few raised welts that appear after contact with grass, pet hair, or another known mild irritant',
    'Hives that respond well to antihistamine medication and resolve within a day or two',
  ],
  whenToMention: [
    'Hives that recur frequently and you cannot identify the trigger',
    'Hives that last more than 6 weeks, which is considered chronic urticaria',
    'Welts that appeared shortly after trying a new food, so you can discuss allergy testing',
  ],
  whenToActNow: [
    'Hives are accompanied by difficulty breathing, wheezing, drooling, facial or throat swelling, or vomiting, which suggests anaphylaxis',
    'Your baby has widespread hives with lethargy or a rapid change in behavior',
    'Hives appear after an insect sting with worsening swelling beyond the sting site',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hives (Urticaria). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hives.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Hives: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/hives-overview',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Urticaria in Children. Pediatric Clinics of North America.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24636195/',
    },
  ],
  relatedConcernSlugs: ['hives', 'baby-skin-rash-after-new-food', 'baby-rash-spreading-rapidly'],
};
