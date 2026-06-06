import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rash-on-chest',
  title: 'Baby Chest Rash',
  category: 'skin',
  searchTerms: [
    'baby rash on chest',
    'infant chest rash',
    'baby red spots on chest',
    'baby bumps on chest',
    'rash on baby torso',
    'baby chest rash after eating',
    'baby heat rash chest',
    'baby eczema chest',
    'newborn chest rash',
    'baby chest rash not itchy',
  ],
  quickAnswer:
    'Chest rashes in babies are common and usually harmless. Common causes include heat rash, eczema, viral rashes, and contact irritation from clothing or drool. Most chest rashes resolve on their own or with simple care like keeping the skin cool and moisturized.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns frequently develop rashes on the chest, including erythema toxicum (harmless red blotches with tiny white bumps), neonatal acne, and heat rash from being overdressed. These are all normal and typically resolve without treatment. If your newborn has a widespread rash on the chest and seems well otherwise, it is usually nothing to worry about.',
    },
    {
      ageRange: '3-6 months',
      context:
        'At this age, drool can drip down and irritate the chest, especially when babies are on their tummies. Eczema may appear as dry, rough patches on the chest. Heat rash is common if babies are dressed too warmly. Using soft, breathable cotton clothing and a gentle moisturizer can help prevent and treat most chest rashes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Viral rashes are common at this age as babies are exposed to more germs. Roseola, for example, classically produces a pink rash on the chest and trunk after a fever breaks. Food-related rashes may also appear on the chest after trying new foods. Most viral rashes fade within a few days without treatment.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop chest rashes from viral illnesses, eczema flares, heat, or contact irritation from new clothes or detergents. Scarlet fever can cause a sandpaper-like rash that often starts on the chest. If a chest rash is accompanied by fever and sore throat, have your child evaluated by a doctor.',
    },
  ],
  whenNormal: [
    'A mild rash on the chest of a newborn who is eating, sleeping, and behaving normally',
    'Pink spots that appear after a fever breaks, consistent with a viral rash like roseola',
    'Small bumps that come and go with heat and resolve when the baby is cooled down',
  ],
  whenToMention: [
    'The chest rash is persistent, spreading, or not responding to basic skin care',
    'Your baby seems itchy or uncomfortable due to the rash',
    'The rash appeared after starting a new food, medication, or product',
  ],
  whenToActNow: [
    'The chest rash is non-blanching, meaning the redness does not fade when you press on it with a glass, as this could indicate petechiae or purpura',
    'Your baby has a widespread rash with difficulty breathing, swelling, or signs of a severe allergic reaction',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Rashes and Skin Conditions in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Rashes-and-Skin-Conditions.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Roseola. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Roseola.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Common Newborn Dermatologic Conditions. Pediatric Clinics of North America.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30213356/',
    },
  ],
  relatedConcernSlugs: ['viral-rash-baby', 'heat-rash', 'eczema', 'erythema-toxicum'],
};
