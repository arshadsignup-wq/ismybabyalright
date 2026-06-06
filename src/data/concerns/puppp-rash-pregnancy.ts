import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'puppp-rash-pregnancy',
  title: 'PUPPP Rash in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'PUPPP rash pregnancy',
    'pruritic urticarial papules plaques pregnancy',
    'itchy rash belly pregnant',
    'hives on belly pregnant',
    'red bumps stretch marks pregnant',
    'PUPPS rash pregnancy',
    'polymorphic eruption pregnancy',
    'itchy red rash third trimester',
    'pregnancy rash on stomach',
    'pregnancy rash treatment',
  ],
  quickAnswer:
    'PUPPP (Pruritic Urticarial Papules and Plaques of Pregnancy) is the most common pregnancy-specific skin rash, affecting about 1 in 160 pregnancies. It appears as itchy red bumps and hive-like patches that typically start in the stretch marks on the belly and may spread to the thighs, arms, and buttocks. It is not harmful to you or your baby.',
  byAge: [
    {
      ageRange: 'Third trimester',
      context:
        'PUPPP most commonly develops in the third trimester, particularly in first pregnancies or pregnancies with multiples. The rash typically starts within the stretch marks on the belly and does not affect the area around the belly button (periumbilical sparing). It can be intensely itchy. Cool compresses, oatmeal baths, calamine lotion, and fragrance-free moisturizers can help. Your provider may prescribe topical corticosteroids or oral antihistamines for relief.',
    },
    {
      ageRange: 'Labor & delivery',
      context:
        'PUPPP may persist up to delivery. The rash does not affect your ability to have a vaginal delivery. Let your care team know about the rash and any treatments you are using.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'PUPPP typically resolves within days to weeks after delivery. In some cases, it may flare briefly in the early postpartum period before fading. It rarely recurs in subsequent pregnancies. No special treatment for the baby is needed.',
    },
  ],
  whenNormal: [
    'Itchy red bumps and patches starting in stretch marks on the belly',
    'Rash spares the area immediately around the belly button',
    'Developed in the third trimester, especially in a first pregnancy',
    'Intense itching is the main symptom with no blisters or other lesions',
  ],
  whenToMention: [
    'The rash is spreading to other parts of your body beyond the belly',
    'Over-the-counter remedies are not controlling the itching',
    'You are losing sleep due to the severity of the itching',
  ],
  whenToActNow: [
    'The rash includes blisters, which could indicate pemphigoid gestationis, a rarer but more serious pregnancy skin condition',
    'You develop intense itching of the palms and soles without a rash, which could be cholestasis of pregnancy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Skin Conditions During Pregnancy. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/skin-conditions-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Pruritic Urticarial Papules and Plaques of Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK507898/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Dermatology. Rashes During Pregnancy. AAD, 2023.',
      url: 'https://www.aad.org/public/diseases/a-z/pregnancy-rash',
    },
  ],
  relatedConcernSlugs: ['pregnancy-itchy-skin', 'pregnancy-stretch-marks', 'cholestasis-of-pregnancy'],
};
