import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-itchy-skin',
  title: 'Itchy Skin During Pregnancy (Non-Cholestasis)',
  category: 'maternal',
  searchTerms: [
    'itchy skin pregnancy',
    'itching during pregnancy',
    'itchy belly pregnant',
    'pruritus pregnancy',
    'skin itching pregnant',
    'dry itchy skin pregnancy',
    'itchy all over pregnant',
    'itchy breasts pregnancy',
    'pregnancy rash itchy',
    'itching pregnancy normal',
  ],
  quickAnswer:
    'Mild itching during pregnancy is very common and usually caused by the skin stretching, dry skin, or hormonal changes. It typically affects the belly, breasts, and thighs. While usually harmless, severe or widespread itching, especially on the palms and soles, should be evaluated to rule out cholestasis of pregnancy.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Mild itching may begin early due to hormonal changes and skin sensitivity. Keep skin moisturized with fragrance-free lotion, avoid very hot showers, and wear loose, breathable clothing. If itching is accompanied by a rash, mention it to your provider.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Itching often increases in the second trimester as the belly grows and skin stretches. Calamine lotion, oatmeal baths, and moisturizers can soothe itching. Avoid scratching, which can worsen irritation. If itching is intense or widespread, your provider may test for cholestasis.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Itching from skin stretching is most common in the third trimester. However, this is also when cholestasis of pregnancy typically develops (usually after 30 weeks). The key distinguishing feature is that cholestasis causes intense itching on the palms of the hands and soles of the feet, often worse at night, without a rash. Report this specific pattern to your provider promptly.',
    },
  ],
  whenNormal: [
    'Mild itching on the belly, breasts, or thighs where skin is stretching',
    'Itching is relieved by moisturizer, cool cloths, or oatmeal baths',
    'Itching is associated with dry skin or visible stretch marks',
    'No rash, jaundice, or other concerning symptoms',
  ],
  whenToMention: [
    'Itching is widespread and not relieved by moisturizers or home remedies',
    'You develop a rash or bumps along with itching',
    'Itching is persistent and worsening over time',
  ],
  whenToActNow: [
    'Intense itching on the palms of your hands and/or soles of your feet, especially worse at night - this could be intrahepatic cholestasis of pregnancy and needs prompt evaluation with bile acid testing',
    'Itching with jaundice (yellowing of skin or eyes), dark urine, or pale stools',
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
        'National Library of Medicine. Pruritus in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK539868/',
    },
    {
      org: 'NICE',
      citation:
        'National Institute for Health and Care Excellence. Obstetric Cholestasis. NICE, 2023.',
      url: 'https://cks.nice.org.uk/topics/obstetric-cholestasis/',
    },
  ],
  relatedConcernSlugs: ['cholestasis-of-pregnancy', 'puppp-rash-pregnancy', 'pregnancy-stretch-marks'],
};
