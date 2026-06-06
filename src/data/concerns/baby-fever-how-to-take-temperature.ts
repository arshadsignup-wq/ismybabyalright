import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fever-how-to-take-temperature',
  title: 'How Do I Take My Baby\'s Temperature Correctly?',
  category: 'medical',
  searchTerms: [
    'how to take baby temperature',
    'baby rectal temperature how to',
    'best thermometer for baby',
    'baby temperature taking methods',
    'rectal thermometer baby',
    'forehead thermometer accuracy baby',
    'ear thermometer baby age',
    'axillary temperature baby',
    'baby temperature under arm',
    'what temperature is fever baby',
    'digital thermometer baby',
  ],
  quickAnswer:
    'Rectal temperature is the gold standard for babies under 3 months and the most accurate method for all infants. A rectal temperature of 100.4°F (38°C) or higher is considered a fever. Temporal artery (forehead) and tympanic (ear) thermometers can be used in older babies but are less accurate in very young infants.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Rectal temperature is the only recommended method for babies under 3 months because accuracy is critical at this age. A fever of 100.4°F (38°C) or higher in a newborn requires immediate medical evaluation. Use a digital rectal thermometer with petroleum jelly on the tip, insert gently about half an inch, and hold in place until it beeps. Never use a glass mercury thermometer.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Rectal temperature remains the most accurate method, though temporal artery (forehead) thermometers can be used as a screening tool. If a forehead reading suggests fever, confirm with a rectal temperature. Axillary (underarm) temperature can screen but may read 1-2 degrees lower than actual core temperature. Always report the method used when calling your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'You can now use temporal artery, tympanic (ear), or rectal thermometers. Ear thermometers are generally reliable after 6 months but can give inaccurate readings if there is earwax buildup or an ear infection. Forehead thermometers are convenient and reasonably accurate for this age. For the most precise reading, rectal remains best.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Multiple methods work well at this age. Many parents prefer temporal artery thermometers for convenience and less distress. Ear thermometers are also reliable. Rectal is still the most accurate but may be harder with an active toddler. Oral thermometers are not yet recommended as toddlers cannot hold them properly under their tongue.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Temporal artery and ear thermometers work well for toddlers. Some children this age may begin to cooperate with oral thermometers, but most do better with forehead or ear readings. Consistent use of the same method helps you track temperature trends. Always tell your doctor which method you used when reporting a temperature.',
    },
  ],
  whenNormal: [
    'A slight temperature variation of 0.5-1°F throughout the day, with higher readings in the late afternoon',
    'Temperature readings differ slightly between methods (underarm may read lower, rectal may read slightly higher)',
    'A brief temperature rise after bundling, physical activity, or a warm bath',
    'Your baby feels warm but the thermometer reads below 100.4°F rectally',
  ],
  whenToMention: [
    'You are unsure which thermometer method is best for your baby\'s age',
    'Your thermometer gives inconsistent readings and you want guidance on technique',
    'Your baby\'s temperature seems elevated but you are not sure if it is accurate',
  ],
  whenToActNow: [
    'Any rectal temperature of 100.4°F (38°C) or higher in a baby under 3 months old requires immediate medical evaluation',
    'A temperature of 104°F (40°C) or higher at any age, or any fever with lethargy, rash, difficulty breathing, or refusal to feed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-fever-acetaminophen-vs-ibuprofen',
    'baby-high-fever-over-104',
    'fever-management-without-medicine',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Take a Child\'s Temperature. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/How-to-Take-a-Childs-Temperature.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Thermometers: Understand the options.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/infant-and-toddler-health/in-depth/thermometer/art-20047410',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Fever or Chills. When to Seek Emergency Care.',
      url: 'https://www.cdc.gov/flu/symptoms/flu-vs-covid19.htm',
    },
  ],
};
