import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'anaphylaxis-signs-in-baby',
  title: 'Anaphylaxis Signs in Baby',
  category: 'medical',
  searchTerms: [
    'anaphylaxis baby',
    'anaphylaxis signs infant',
    'severe allergic reaction baby',
    'baby going into anaphylactic shock',
    'baby swelling throat',
    'baby epipen when to use',
    'baby difficulty breathing allergic reaction',
    'anaphylaxis symptoms infant',
    'baby turning blue allergic reaction',
    'baby limp after eating',
  ],
  quickAnswer:
    'Anaphylaxis is a severe, potentially life-threatening allergic reaction that affects multiple body systems. In babies, it can be caused by food (most commonly), insect stings, or medications. Signs include widespread hives, facial or throat swelling, difficulty breathing, persistent vomiting, and becoming limp or unresponsive. Anaphylaxis is a medical emergency. If you suspect anaphylaxis, use an epinephrine auto-injector if available and call 911 immediately. Early recognition and rapid treatment lead to excellent outcomes in the vast majority of cases.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Anaphylaxis is uncommon in young babies because their exposure to common allergens is limited. However, it can occur from cow\'s milk protein in formula, medications, or rarely through breast milk. In very young babies, signs may be subtle - sudden limpness, persistent vomiting, unusual pallor, or breathing changes. Any rapid-onset combination of skin, breathing, and digestive symptoms in a baby this age needs emergency evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin eating solid foods, the risk of food-triggered anaphylaxis increases. The most common triggers are peanuts, eggs, and cow\'s milk. Anaphylaxis in babies can look different from adults - they cannot tell you their throat feels tight. Watch for: widespread hives plus vomiting, sudden hoarse cry or cough, wheezing or noisy breathing, swelling of lips or face, and sudden limpness or unresponsiveness. React to any combination of these symptoms quickly.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers are being exposed to an expanding range of foods, which means new allergic reactions may still appear. A toddler experiencing anaphylaxis may suddenly become clingy, start drooling (if unable to swallow), develop a barky cough, rub or scratch at their face and body, or vomit repeatedly. If your child has a known allergy and has been prescribed an epinephrine auto-injector, carry it at all times and know how to use it.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Older toddlers and preschoolers may be able to tell you that their mouth feels funny, their tummy hurts, or something feels wrong. Take these complaints seriously after exposure to a known or potential allergen. Even if previous reactions have been mild, future reactions can be more severe. If your child has a known food allergy, ensure all caregivers, daycare providers, and family members know the signs of anaphylaxis and where the epinephrine auto-injector is kept.',
    },
  ],
  whenNormal: [
    'A contact rash limited to where the food touched the skin that goes away within 30-60 minutes',
    'A single episode of spitting up or gagging on a new food texture without other symptoms',
    'Mild flushing of the face during or after eating spicy or acidic foods',
  ],
  whenToMention: [
    'Your baby has had hives after eating a specific food - even if the reaction was mild, your pediatrician should be aware so they can provide guidance on allergen avoidance and whether allergy testing or an epinephrine prescription is appropriate',
    'You have a strong family history of food allergies and want to discuss a plan for introducing allergenic foods safely',
  ],
  whenToActNow: [
    'Your baby has hives combined with ANY of the following: difficulty breathing, wheezing, persistent vomiting, swelling of the face, lips, or tongue, sudden limpness, loss of consciousness, or turning blue - administer epinephrine if available and call 911 immediately',
    'Your baby has been exposed to a known allergen and develops any symptoms involving two or more body systems (skin plus breathing, skin plus digestive, etc.) - this is anaphylaxis until proven otherwise',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Anaphylaxis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Anaphylaxis.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Anaphylaxis.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/anaphylaxis',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Anaphylaxis. U.S. National Library of Medicine.',
      url: 'https://medlineplus.gov/anaphylaxis.html',
    },
  ],
};
