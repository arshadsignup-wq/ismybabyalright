import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'eczema-and-food-allergy-link',
  title: 'Eczema and Food Allergy Link',
  category: 'skin',
  searchTerms: [
    'eczema food allergy baby',
    'baby eczema and allergies',
    'atopic march baby',
    'eczema allergy connection infant',
    'baby eczema worse after eating',
    'food allergy causing eczema baby',
    'early allergen introduction eczema',
    'baby eczema and peanut allergy risk',
    'preventing food allergy eczema baby',
  ],
  quickAnswer:
    'Research shows a strong connection between eczema (atopic dermatitis) and food allergies in babies. Babies with moderate-to-severe eczema, especially appearing before 6 months, have a significantly higher risk of developing food allergies. Current guidelines recommend early introduction of allergenic foods (particularly peanut) starting around 4-6 months for high-risk babies with eczema, as early exposure may actually help prevent food allergies.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Eczema that appears early and is moderate to severe is a major risk factor for food allergy development. The current understanding is that allergens may sensitize babies through broken skin from eczema, while oral exposure through food may build tolerance. Aggressive eczema treatment to restore the skin barrier is important. Discuss allergy prevention strategies with your pediatrician early.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is a critical window for allergy prevention. The landmark LEAP study showed that introducing peanut protein to high-risk babies (those with severe eczema or egg allergy) between 4-6 months reduced peanut allergy by about 80%. Talk to your pediatrician about whether your baby should see an allergist before introducing peanut, egg, and other common allergens.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Continue introducing common allergens regularly once started. If eczema flares seem related to specific foods, keep a food diary and discuss it with your pediatrician. Not all eczema flares are food-related -- infections, dry air, and irritants are more common triggers. Allergy testing (skin prick or blood IgE) can help determine whether a specific food allergy is present.',
    },
    {
      ageRange: '12 months+',
      context:
        'Children with persistent eczema and confirmed food allergies are at higher risk for developing other allergic conditions like asthma and allergic rhinitis (the "atopic march"). Regular follow-up with an allergist is important. Some food allergies (milk, egg, wheat, soy) are commonly outgrown, while others (peanut, tree nut, shellfish) tend to persist longer.',
    },
  ],
  whenNormal: [
    'Baby has mild eczema that responds well to moisturizers without clear food triggers',
    'Baby tolerates new foods without worsening eczema or other allergic symptoms',
    'Eczema flares with seasonal changes, dry weather, or after bathing without moisturizer',
    'Baby has mild eczema and no family history of severe food allergies',
  ],
  whenToMention: [
    'Baby has moderate-to-severe eczema before 6 months of age and you want to discuss early allergen introduction',
    'Eczema consistently worsens within 24-48 hours of eating specific foods',
    'Baby has eczema plus a strong family history of food allergies, asthma, or hay fever',
  ],
  whenToActNow: [
    'Baby develops hives, vomiting, or difficulty breathing within minutes to hours of eating a new food -- call 911 if breathing is affected',
    'Baby has an acute allergic reaction with facial swelling or widespread hives after food exposure',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIAID',
      citation:
        'National Institute of Allergy and Infectious Diseases. Addendum Guidelines for the Prevention of Peanut Allergy in the United States. NIH, 2017.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/guidelines-clinicians-and-patients-food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eczema in Babies and Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema.aspx',
    },
  ],
};
