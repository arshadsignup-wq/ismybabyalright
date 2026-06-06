import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bottle-sterilization-frequency',
  title: 'How Often Should I Sterilize Baby Bottles?',
  category: 'feeding',
  searchTerms: ['bottle sterilization frequency', 'how often sterilize bottles', 'sterilize baby bottles every time', 'bottle sanitizing', 'when to sterilize bottles', 'new bottle sterilize', 'bottle sterilizer necessary', 'dishwasher sterilize bottles', 'boiling bottles how often', 'baby bottle hygiene'],
  quickAnswer: 'The CDC recommends sterilizing new bottles before first use and sanitizing at least once daily for babies under 3 months, premature babies, or immunocompromised babies. For healthy babies over 3 months, thorough washing with hot soapy water after each use is sufficient. You do not need to sterilize before every feed if baby is healthy and bottles are washed properly.',
  byAge: [
    { ageRange: '0-3 months', context: 'Sterilize all new bottles and parts before first use. For babies under 3 months, sanitize once daily by boiling for 5 minutes, using a steam sterilizer, or using a dishwasher sanitize cycle. Wash thoroughly after each use.' },
    { ageRange: '4-6 months', context: 'For healthy babies, thorough washing with hot soapy water and air drying is sufficient. You can continue to sanitize daily if you prefer, but it is not medically necessary for healthy full-term babies.' },
    { ageRange: '6-9 months', context: 'Continue regular washing after each use. Inspect bottle parts for damage, cracks, or discoloration and replace as needed.' },
    { ageRange: '9-12 months', context: 'Same washing guidelines. As baby puts everything in their mouth and explores the world, the strict sterilization of bottles becomes less critical than general hygiene.' },
    { ageRange: '12-24 months', context: 'If still using bottles, regular washing is sufficient. Focus on transitioning to cups. Replace bottle nipples if they show signs of wear.' },
  ],
  whenNormal: ['You wash bottles with hot soapy water after each use', 'You sterilize new bottles before first use', 'You sanitize daily for babies under 3 months'],
  whenToMention: ['Baby frequently has digestive issues and you wonder if bottle hygiene is a factor', 'You are unsure about proper cleaning techniques for your bottle type', 'Your water supply may not be safe and you need guidance'],
  whenToActNow: ['Baby has symptoms of a serious infection and you suspect contaminated bottles', 'You notice mold or buildup in bottles that cannot be removed with normal washing'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['formula-preparation-temperature', 'preparing-formula-safely', 'formula-storage-guidelines'],
  sources: [
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. How to Clean, Sanitize, and Store Infant Feeding Items. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cleaning and Sterilizing Baby Bottles. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/default.aspx' },
  ],
};
