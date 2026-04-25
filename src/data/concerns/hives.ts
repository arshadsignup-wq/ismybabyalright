import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hives',
  title: 'Baby Hives (Urticaria)',
  category: 'skin',
  searchTerms: [
    'baby hives',
    'baby welts on skin',
    'urticaria baby',
    'baby allergic reaction rash',
    'raised red bumps on baby',
    'baby hives after eating',
    'hives on baby face',
    'baby hives treatment',
    'baby hives from formula',
    'baby breaking out in hives',
  ],
  quickAnswer:
    'Hives are raised, red, itchy welts that can appear suddenly on your baby\'s skin. They are most often caused by a viral infection or an allergic reaction to food, medication, or an insect bite. While they can look alarming, hives are usually harmless and resolve on their own, though any breathing difficulty needs immediate emergency care.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Hives in young infants are relatively uncommon but can occur. In this age group, they are most often triggered by a viral illness or, less commonly, a reaction to something in breast milk or formula. If your baby develops hives, watch closely for any signs of difficulty breathing, facial swelling, or persistent vomiting, and call your doctor promptly.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin eating solid foods, hives may appear as part of an allergic reaction to a new food. Common triggers include egg, milk, peanut, tree nuts, wheat, soy, fish, and shellfish. Hives that appear within minutes to a couple of hours after trying a new food should be reported to your pediatrician to discuss allergy testing.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Viral infections are the most common cause of hives in toddlers. It is very common for a child to develop hives during or shortly after a cold, stomach bug, or other viral illness. These viral-associated hives can come and go for days to weeks but are not dangerous. Antihistamines approved for your child\'s age can help with itching.',
    },
    {
      ageRange: '2-3 years',
      context:
        'In this age group, hives can be triggered by infections, food, insect bites or stings, medications, or sometimes environmental exposures. If hives recur frequently, keeping a diary of foods, activities, and exposures before each episode can help identify patterns to discuss with your pediatrician.',
    },
  ],
  whenNormal: [
    'A few scattered hives that appear during a viral illness and resolve within a day or two',
    'Hives that pop up, disappear, and move to different locations over the course of hours',
    'Mild hives that respond to an age-appropriate dose of antihistamine',
    'Individual hives that last less than 24 hours each, even if new ones keep appearing',
  ],
  whenToMention: [
    'Hives appear within minutes to hours of trying a new food and you want to discuss allergy testing',
    'Hives are recurring frequently and you cannot identify the trigger',
    'Your baby is very uncomfortable from itching despite antihistamine use',
    'Hives persist for more than a week without a clear viral illness',
  ],
  whenToActNow: [
    'Your baby develops swelling of the lips, tongue, or face along with hives, which could indicate anaphylaxis -- call 911',
    'Your baby has any difficulty breathing, wheezing, or a hoarse cry along with hives -- call 911 immediately',
    'Your baby is vomiting repeatedly or seems limp or unusually drowsy after developing hives',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hives (Urticaria) in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Hives.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Allergic Reactions: First Aid. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Allergic-Reactions-Treatment.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Food Allergies in Schools and Early Care and Education Programs.',
      url: 'https://www.cdc.gov/healthy-youth/food-allergies/index.htm',
    },
  ],
};
