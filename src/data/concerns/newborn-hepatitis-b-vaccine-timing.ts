import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-hepatitis-b-vaccine-timing',
  title: 'First Vaccine Questions (Hepatitis B at Birth)',
  category: 'medical',
  searchTerms: ['hepatitis B vaccine newborn', 'first vaccine baby', 'hep B shot at birth', 'newborn vaccine safe', 'why hepatitis B vaccine at birth', 'baby first immunization', 'hepatitis B vaccine timing', 'newborn vaccine schedule', 'hep B vaccine necessary', 'vaccine at birth when'],
  quickAnswer: 'The hepatitis B vaccine is recommended at birth (within 24 hours) for all newborns by the AAP and CDC. It protects against hepatitis B virus, which can cause chronic liver disease and liver cancer. The vaccine is very safe and has been given to millions of newborns. It is the first step in a 3-dose series that provides long-lasting protection.',
  byAge: [
    { ageRange: '0-1 month', context: 'The hepatitis B (HepB) vaccine is recommended within 24 hours of birth. Hepatitis B virus can be transmitted from mother to baby during delivery (even if the mother\'s status is unknown), through close household contact, or through contaminated blood or body fluids. Babies who become infected have a 90% chance of developing chronic infection, which can lead to liver failure or liver cancer later in life. The vaccine is extremely safe, with the most common side effects being mild soreness at the injection site and low-grade fever. The first dose starts the protection; two more doses complete the series.' },
    { ageRange: '1-3 months', context: 'The second dose of hepatitis B vaccine is typically given at 1 month of age. This dose builds on the protection started at birth. Other vaccines on the CDC schedule also begin at 2 months of age.' },
    { ageRange: '3-6 months', context: 'The third and final dose of the hepatitis B vaccine is given between 6-18 months, completing the series and providing long-lasting immunity.' },
    { ageRange: '6-12 months', context: 'The hepatitis B vaccine series is completed during this period. Your baby\'s immune system has built strong protection against hepatitis B. Regular well-child visits continue with the recommended vaccine schedule.' },
  ],
  whenNormal: ['Baby received the hepatitis B vaccine at birth with only mild side effects (slight fussiness, injection site redness)', 'No fever or only low-grade fever (under 100.4F) that resolves within 24-48 hours', 'Baby feeds and behaves normally after the vaccine'],
  whenToMention: ['You have questions about the vaccine schedule or want to understand why it is given at birth', 'You are concerned about vaccine safety and want to discuss evidence', 'Your baby is medically fragile and you want guidance on timing'],
  whenToActNow: ['Signs of a severe allergic reaction after vaccination (extremely rare): difficulty breathing, swelling of face or throat, hives, or rapid heartbeat - call 911', 'High fever (over 104F) or persistent inconsolable crying for more than 3 hours after vaccination'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Recommended Immunization Schedule. Pediatrics.', url: 'https://publications.aap.org/redbook' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Hepatitis B Vaccination.', url: 'https://www.cdc.gov/vaccines/vpd/hepb/index.html' },
  ],
  relatedConcernSlugs: ['newborn-vitamin-k-refusal-risks', 'newborn-eye-prophylaxis-concerns'],
};
