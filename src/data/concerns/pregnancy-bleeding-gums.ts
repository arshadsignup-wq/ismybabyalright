import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-bleeding-gums',
  title: 'Gum Bleeding During Pregnancy',
  category: 'maternal',
  searchTerms: [
    'bleeding gums pregnancy',
    'gums bleeding pregnant',
    'pregnancy gingivitis',
    'swollen gums pregnancy',
    'gum disease pregnant',
    'dental problems pregnancy',
    'teeth problems pregnant',
    'gum inflammation pregnancy',
    'periodontitis pregnancy risk',
    'sore gums pregnant',
  ],
  quickAnswer:
    'Pregnancy gingivitis (inflammation of the gums) affects 60-75% of pregnant people and is caused by hormonal changes that increase blood flow to the gums and alter the body\'s response to plaque bacteria. Bleeding, swollen, or tender gums are common but should be managed with good oral hygiene to prevent more serious gum disease.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Gum changes may begin as hormones rise. Brush your teeth twice daily with a soft-bristled toothbrush and floss daily. If morning sickness makes brushing difficult, rinse with water or a baking soda solution after vomiting to neutralize stomach acid before brushing.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Pregnancy gingivitis typically peaks between the second and third trimesters. Regular dental cleanings are safe and recommended during pregnancy. Some people develop a pregnancy tumor (pyogenic granuloma) on the gums - a benign, red growth that bleeds easily. These usually resolve after delivery.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Continue good oral hygiene and regular dental care. Untreated gum disease during pregnancy has been associated with preterm birth and low birth weight, though the link is not fully established. If you have significant gum issues, do not delay dental care - most dental treatments are safe during pregnancy.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Gum inflammation usually improves after delivery as hormone levels normalize. Continue regular dental care. If you noticed any pregnancy-related gum growths, they typically shrink or resolve after birth.',
    },
  ],
  whenNormal: [
    'Gums bleed slightly when brushing or flossing',
    'Gums appear redder or more swollen than before pregnancy',
    'Gum tenderness without severe pain',
    'Symptoms improve with gentle but thorough brushing and flossing',
  ],
  whenToMention: [
    'Gums bleed heavily or spontaneously without brushing',
    'You have persistent bad breath or a bad taste despite good oral hygiene',
    'Gums are pulling away from your teeth or teeth feel loose',
  ],
  whenToActNow: [
    'Severe gum or tooth pain with swelling of the face or jaw, suggesting possible dental abscess',
    'Fever accompanied by dental pain or swelling, which requires immediate medical or dental evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Oral Health Care During Pregnancy and Through the Lifespan. Committee Opinion No. 569, 2013 (Reaffirmed 2021).',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2013/08/oral-health-care-during-pregnancy-and-through-the-lifespan',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Pregnancy and Oral Health. CDC, 2023.',
      url: 'https://www.cdc.gov/oralhealth/publications/features/pregnancy-and-oral-health.html',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Dental Health During Pregnancy. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/pregnancy/dental-health-during-pregnancy.aspx',
    },
  ],
  relatedConcernSlugs: ['pregnancy-nosebleeds', 'pregnancy-dental-care'],
};
