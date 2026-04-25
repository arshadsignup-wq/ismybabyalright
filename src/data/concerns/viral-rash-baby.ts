import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'viral-rash-baby',
  title: 'My Baby Has a Viral Rash',
  category: 'skin',
  searchTerms: [
    'baby viral rash',
    'rash after fever baby',
    'viral exanthem baby',
    'baby rash all over body',
    'baby rash with cold',
    'red spots all over baby',
    'rash after virus baby',
    'baby rash no fever',
    'non-specific viral rash baby',
    'baby rash during illness',
  ],
  quickAnswer:
    'Viral rashes are extremely common in babies and young children and appear as widespread pink or red spots, often during or after a viral illness like a cold. They are caused by the body\'s immune response to the virus, not by anything contagious on the skin itself. Most viral rashes are harmless and fade on their own within a few days without any treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Viral rashes in very young infants should always be evaluated by a pediatrician because newborns have immature immune systems and fevers or rashes in this age group can occasionally signal a more serious infection. Common viral rashes in newborns include erythema toxicum (a blotchy red rash with small white or yellow bumps that appears in the first week and is completely harmless) and viral exanthems from common cold viruses passed from family members.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As maternal antibodies begin to wane, babies start catching more viruses and viral rashes become more common. A typical viral rash appears as small pink or red flat spots or slightly raised bumps, often starting on the trunk and spreading to the arms and legs. The rash may appear during the illness or as the child is recovering. Your baby may have had a mild fever, runny nose, or fussiness before the rash appeared.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is prime time for viral rashes, especially for babies in daycare. Your baby may seem to have a rash with every cold. Specific viral rashes to be aware of include roseola (high fever for 3 days followed by a rash as the fever breaks) and hand, foot, and mouth disease (spots and blisters on the palms, soles, and inside the mouth). Most generic viral rashes do not need any treatment and resolve as the virus runs its course.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers continue to get frequent viral rashes. By this age, you may start to recognize the pattern: a few days of feeling unwell followed by a rash that appears as your child improves. A helpful clue that a rash is viral rather than allergic is that viral rashes tend to appear gradually and spread, while allergic rashes (hives) tend to appear suddenly and are raised and very itchy. Viral rashes typically do not need treatment, but you can apply a gentle moisturizer if the skin seems dry.',
    },
  ],
  whenNormal: [
    'A widespread pink or red rash that appears during or after a viral illness and your baby is otherwise improving',
    'Flat or slightly raised spots on the trunk that spread to the arms and legs over a day or two',
    'A rash that appears after a fever breaks, which is a classic sign of roseola or another benign viral exanthem',
    'Your baby is eating, drinking, and playing relatively normally despite the rash',
  ],
  whenToMention: [
    'The rash has been present for more than a week without improving',
    'Your baby has had recurrent fevers along with the rash, or the rash is accompanied by joint swelling or persistent fatigue',
    'You are unsure whether the rash is viral, allergic, or something else',
  ],
  whenToActNow: [
    'The rash includes dark purple or red spots that do not fade when you press on them (the glass test), which could indicate a serious condition like meningococcemia requiring immediate emergency care',
    'Your baby has a high fever, is difficult to rouse, has a stiff neck, or seems very unwell alongside the rash',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rashes and Skin Conditions in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rash. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Rash.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Viral Exanthems (Rashes). Overview.',
      url: 'https://www.mayoclinic.org/symptoms/skin-rashes-in-children/basics/causes/sym-20050382',
    },
  ],
};
