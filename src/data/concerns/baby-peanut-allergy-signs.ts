import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-peanut-allergy-signs',
  title: 'Baby Allergic Reaction to Peanuts',
  category: 'feeding',
  searchTerms: ['baby peanut allergy', 'baby reaction to peanut butter', 'peanut allergy signs baby', 'introducing peanuts to baby', 'baby hives from peanut butter', 'baby allergic to peanuts symptoms', 'when to introduce peanuts baby', 'peanut allergy test baby', 'LEAP study peanuts baby', 'peanut butter rash baby'],
  quickAnswer: 'Peanut allergy affects about 2% of children and is one of the most common food allergies. Current AAP guidelines recommend introducing peanut-containing foods early (around 4-6 months) to reduce allergy risk, especially for high-risk babies (those with severe eczema or egg allergy). Signs of an allergic reaction include hives, facial swelling, vomiting, or difficulty breathing within minutes to 2 hours after eating peanut. Always introduce peanuts as a thin puree or dissolved peanut puff - never whole peanuts or chunks of peanut butter, which are choking hazards.',
  byAge: [
    { ageRange: '4-6 months', context: 'For high-risk babies (severe eczema and/or egg allergy), the AAP recommends allergy testing before introducing peanut, and then introducing peanut-containing foods as early as 4-6 months under medical guidance. The landmark LEAP study showed that early introduction reduced peanut allergy by 80% in high-risk infants. Mix a small amount of smooth peanut butter or peanut powder with breast milk, formula, or a pureed food.' },
    { ageRange: '6-12 months', context: 'For babies without severe eczema or egg allergy, introduce peanut-containing foods around 6 months along with other solids. Start with a small amount (half a teaspoon of thinned peanut butter mixed into puree) and wait at home for 2 hours to watch for a reaction. Mild reactions (a few hives near the mouth) are different from severe reactions (widespread hives, vomiting, swelling, breathing difficulty). Once tolerated, continue offering peanut-containing foods regularly (2-3 times per week) to maintain tolerance.' },
    { ageRange: '1-3 years', context: 'If your child has been eating peanut-containing foods without reaction, continue offering them regularly. New peanut allergy can develop at any age but is less likely if regular exposure has been maintained. If your child has a reaction to peanuts for the first time, stop giving them and see an allergist. Peanut allergies are managed with strict avoidance and carrying an epinephrine auto-injector.' },
  ],
  whenNormal: ['A small area of redness or a few hives around the mouth that resolve quickly (contact irritation, not allergy)', 'Your baby making a face or spitting out peanut butter because of the strong taste or texture', 'No reaction after introducing peanuts - most babies tolerate them fine'],
  whenToMention: ['Hives appearing on the body (not just the mouth) after eating peanut-containing food', 'Vomiting within 1-2 hours after eating peanut', 'Your baby has severe eczema or an egg allergy and you want guidance on peanut introduction', 'You want allergy testing before introducing peanuts due to family history'],
  whenToActNow: ['Widespread hives, facial or lip swelling, or swelling of the tongue after eating peanut', 'Vomiting, difficulty breathing, wheezing, or coughing after peanut exposure', 'Your child becomes pale, limp, or unresponsive after eating peanut (anaphylaxis - call 911 and use epinephrine if available)', 'Any combination of skin symptoms (hives) with breathing or GI symptoms (vomiting, diarrhea)'],
  relatedMilestones: ['6-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['anaphylaxis-signs-in-baby', 'baby-allergic-reaction-to-food', 'food-allergy-signs', 'hives'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Peanut Allergy Prevention Guidelines.', url: 'https://www.healthychildren.org/English/health-issues/conditions/allergies-asthma/Pages/Peanut-Allergies.aspx' },
    { org: 'NIH', citation: 'National Institute of Allergy and Infectious Diseases. Guidelines for Peanut Allergy Prevention.', url: 'https://www.niaid.nih.gov/diseases-conditions/peanut-allergy-prevention-guidelines' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Early Allergen Introduction. Pediatrics.', url: 'https://publications.aap.org/pediatrics' },
  ],
};
