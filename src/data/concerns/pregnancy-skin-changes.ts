import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-skin-changes',
  title: 'Skin Darkening, Linea Nigra, and Melasma in Pregnancy',
  category: 'maternal',
  searchTerms: [
    'skin darkening pregnancy',
    'linea nigra',
    'dark line on belly pregnant',
    'melasma pregnancy',
    'mask of pregnancy',
    'chloasma pregnancy',
    'skin pigmentation pregnancy',
    'dark patches face pregnant',
    'areola darkening pregnancy',
    'skin color changes pregnant',
    'hyperpigmentation pregnancy',
  ],
  quickAnswer:
    'Skin darkening (hyperpigmentation) during pregnancy is very common and affects up to 90% of pregnant people. It is caused by increased melanin production driven by pregnancy hormones. Common changes include the linea nigra (dark line on the belly), melasma (dark patches on the face), and darkening of the areolas, freckles, and moles.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'You may notice your areolas starting to darken and existing freckles or moles becoming more pronounced. This is normal and caused by hormonal stimulation of melanin-producing cells. Start using broad-spectrum sunscreen daily, as sun exposure can worsen pigmentation changes.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'The linea nigra (a dark vertical line running from the navel to the pubic bone) typically appears in the second trimester. Melasma - brown or grayish patches on the forehead, cheeks, nose, and upper lip - may also develop. Sun protection with SPF 30+ sunscreen and a wide-brimmed hat can help minimize melasma.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'Pigmentation changes may become more pronounced. The linea nigra may darken further. These changes are cosmetic and harmless. Most hyperpigmentation fades gradually after delivery, though melasma may persist and require treatment if desired.',
    },
    {
      ageRange: 'Postpartum',
      context:
        'Most pregnancy-related skin darkening fades within months of delivery. The linea nigra gradually fades but may never completely disappear. Melasma may take longer to improve and can recur with sun exposure or hormonal contraceptives. If melasma is bothersome, talk to a dermatologist about safe treatment options while breastfeeding.',
    },
  ],
  whenNormal: [
    'Gradual darkening of the linea nigra, areolas, and existing moles or freckles',
    'Symmetric brown patches on the face (melasma) that developed during pregnancy',
    'Darkening in skin folds like the armpits and groin',
    'Changes appeared gradually alongside other pregnancy changes',
  ],
  whenToMention: [
    'A mole has changed in shape, size, color, or borders, or is bleeding',
    'New skin growths or lesions that look unusual',
    'Melasma is causing significant distress and you want to discuss treatment options',
  ],
  whenToActNow: [
    'A mole is growing rapidly, has irregular borders, multiple colors, or is bleeding - these warrant prompt dermatologic evaluation',
    'Widespread skin changes accompanied by severe itching, which could indicate a different condition like cholestasis',
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
        'National Library of Medicine. Physiologic Skin Changes in Pregnancy. StatPearls, 2023.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK537182/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Dermatology. Melasma: Overview. AAD, 2023.',
      url: 'https://www.aad.org/public/diseases/a-z/melasma-overview',
    },
  ],
  relatedConcernSlugs: ['pregnancy-stretch-marks', 'pregnancy-itchy-skin'],
};
