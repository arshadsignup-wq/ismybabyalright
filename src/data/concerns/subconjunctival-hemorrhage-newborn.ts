import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'subconjunctival-hemorrhage-newborn',
  title: 'Subconjunctival Hemorrhage in Newborns',
  category: 'medical',
  searchTerms: [
    'subconjunctival hemorrhage newborn',
    'blood in baby eye white',
    'red spot on baby eye',
    'broken blood vessel baby eye',
    'newborn eye bleeding',
    'red patch on baby eye',
    'baby born with blood in eye',
    'blood on white of eye newborn',
  ],
  quickAnswer:
    'A subconjunctival hemorrhage is a bright red patch on the white of the eye caused by a small broken blood vessel under the conjunctiva (the clear membrane covering the eye). This is very common in newborns, occurring in up to 30-40% of vaginal deliveries due to pressure during birth. It is painless, does not affect vision, and resolves completely on its own within 1-3 weeks without any treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Subconjunctival hemorrhages are most often noticed in the first few days after birth. They appear as a flat, bright red patch on one part of the white of the eye. The baby is not bothered by it and the eye is otherwise normal with no discharge, swelling, or tearing. The blood slowly reabsorbs over 1-3 weeks and may turn yellow or brownish as it fades, similar to how a bruise changes color.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Birth-related subconjunctival hemorrhages should have resolved by now. New hemorrhages at this age are uncommon but can occur after a bout of hard crying, coughing, or vomiting. They remain harmless and resolve on their own. If hemorrhages are occurring repeatedly without an obvious cause, discuss this with your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'A subconjunctival hemorrhage at this age might result from a minor eye injury, forceful coughing or vomiting, or rubbing the eyes. A single episode is not concerning and does not require treatment. Multiple or recurrent episodes may prompt your doctor to check for bleeding disorders, though this is rare.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers may develop subconjunctival hemorrhages from minor trauma, coughing, or straining. The appearance can be alarming, but the condition is benign and self-resolving. If your child has a subconjunctival hemorrhage associated with an eye injury, ensure there is no deeper damage by having the eye evaluated if there is pain, vision changes, or discharge.',
    },
  ],
  whenNormal: [
    'A bright red flat patch appears on the white of a newborn\'s eye within the first few days after vaginal delivery',
    'The red patch is not raised, the eye is not swollen, and there is no discharge',
    'The baby shows no signs of discomfort and the eye functions normally',
    'The red patch gradually fades over 1-3 weeks without treatment',
  ],
  whenToMention: [
    'The hemorrhage does not resolve within 3 weeks',
    'Your baby develops recurrent subconjunctival hemorrhages without an obvious cause like hard crying or coughing',
    'The hemorrhage occurs in an older infant or toddler alongside easy bruising elsewhere on the body',
  ],
  whenToActNow: [
    'The red eye is accompanied by eye pain, significant swelling, discharge, or the baby cannot open the eye, which could indicate a more serious eye injury or infection',
    'A subconjunctival hemorrhage occurs after head trauma, especially if the baby also has other bruising, vomiting, or behavioral changes, as this could indicate non-accidental injury or other serious conditions',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Your Newborn\'s Physical Appearance. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Your-Babys-Head.aspx',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Subconjunctival Hemorrhage.',
      url: 'https://www.aao.org/eye-health/diseases/subconjunctival-hemorrhage',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Subconjunctival Hemorrhage. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK551666/',
    },
  ],
};
