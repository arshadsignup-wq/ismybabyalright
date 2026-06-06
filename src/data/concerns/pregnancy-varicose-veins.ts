import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-varicose-veins',
  title: 'Varicose Veins in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'varicose veins pregnancy',
    'bulging veins legs pregnant',
    'spider veins pregnancy',
    'leg veins swollen pregnant',
    'vulvar varicosities',
    'varicose veins vulva pregnancy',
    'painful veins legs pregnant',
    'veins getting bigger pregnancy',
    'compression stockings pregnancy',
    'vein problems pregnant',
  ],
  quickAnswer:
    'Varicose veins are swollen, twisted veins that commonly appear in the legs during pregnancy. They affect up to 40% of pregnant people and are caused by increased blood volume, hormonal changes that relax vein walls, and pressure from the growing uterus on pelvic veins. They are usually a cosmetic concern but can cause aching or discomfort.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'Varicose veins rarely appear this early, but rising progesterone begins to relax vein walls. If you had varicose veins in a previous pregnancy, they may appear earlier. Wearing graduated compression stockings and staying active can help prevent them.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'Varicose veins often become noticeable in the second trimester as blood volume increases by up to 50%. They may appear in the legs, vulva, or rectum (hemorrhoids). Elevating your legs when resting, avoiding standing for long periods, sleeping on your left side, and wearing compression stockings can help manage symptoms.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Varicose veins are typically most prominent in the third trimester. Vulvar varicosities may cause pressure and discomfort. Continue with compression stockings, leg elevation, and regular gentle exercise. Most pregnancy-related varicose veins improve significantly within 3-12 months after delivery.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Varicose veins usually improve after delivery but may not disappear completely, especially after multiple pregnancies. If veins remain bothersome after recovery, treatment options like sclerotherapy or laser therapy can be discussed with your provider.',
    },
  ],
  whenNormal: [
    'Visible blue or purple veins in the legs that may be twisted or bulging',
    'Mild aching, heaviness, or itching around affected veins, especially after standing',
    'Spider veins (smaller, flat, web-like veins) appearing on legs or face',
    'Symptoms improve with elevation, compression stockings, or exercise',
  ],
  whenToMention: [
    'Varicose veins are causing significant pain, throbbing, or swelling',
    'You develop vulvar varicosities that cause discomfort',
    'Skin over the veins becomes discolored, dry, or irritated',
  ],
  whenToActNow: [
    'A varicose vein becomes hard, hot, red, and very painful, which could indicate a blood clot (superficial thrombophlebitis)',
    'You develop sudden swelling, pain, and warmth in one leg, especially the calf, which could indicate deep vein thrombosis (DVT)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Skin Conditions During Pregnancy. ACOG, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/skin-conditions-during-pregnancy',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Varicose Veins. MedlinePlus, 2023.',
      url: 'https://medlineplus.gov/varicoseveins.html',
    },
    {
      org: 'NICE',
      citation:
        'National Institute for Health and Care Excellence. Varicose Veins in the Legs. NICE CKS, 2023.',
      url: 'https://cks.nice.org.uk/topics/varicose-veins/',
    },
  ],
  relatedConcernSlugs: ['pregnancy-hemorrhoids', 'pregnancy-swelling-edema', 'pregnancy-blood-clot-risk'],
};
