import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'turner-syndrome-signs',
  title: 'Turner Syndrome Signs in Babies',
  category: 'medical',
  searchTerms: [
    'turner syndrome baby signs',
    'baby girl short stature',
    'turner syndrome infant',
    'baby swollen hands feet lymphedema',
    'baby girl webbed neck',
    'monosomy X baby',
    'turner syndrome newborn signs',
    'baby girl puffy hands and feet at birth',
  ],
  quickAnswer:
    'Turner syndrome is a chromosomal condition that affects only girls, occurring when one X chromosome is missing or partially missing. It affects about 1 in 2,500 female births. Signs at birth may include swollen hands and feet (lymphedema), a wide or webbed neck, and heart defects. With appropriate medical care including growth hormone therapy and hormone replacement, girls with Turner syndrome can lead healthy, fulfilling lives.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Turner syndrome may be diagnosed prenatally or at birth. Newborn signs can include puffy or swollen hands and feet (lymphedema), a broad chest with widely spaced nipples, a short or webbed neck, low hairline at the back of the neck, and low birth weight. About 30% of girls have a heart defect, most commonly coarctation of the aorta or bicuspid aortic valve, requiring cardiac evaluation. An initial comprehensive workup is important.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The lymphedema (swelling) in the hands and feet often improves over time. Feeding difficulties may occur due to a high-arched palate or mild jaw abnormalities. Hearing should be evaluated, as ear infections and hearing problems are more common. Developmental milestones are usually on track, though some babies may have mild motor delays related to hypotonia.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies with Turner syndrome develop normally intellectually and meet cognitive milestones. Growth may begin to slow compared to peers. Regular monitoring of kidney function (renal ultrasound), hearing, and thyroid levels becomes part of routine care. Early intervention services can help if any developmental delays are identified.',
    },
    {
      ageRange: '12 months+',
      context:
        'Growth hormone therapy is often started in early childhood to help maximize height. Girls with Turner syndrome typically have normal intelligence, though some may have difficulty with spatial reasoning or math. Social development is usually typical. Ongoing cardiac monitoring, hearing checks, thyroid screening, and later estrogen replacement therapy at the age of puberty are standard parts of care.',
    },
  ],
  whenNormal: [
    'Your baby girl with Turner syndrome is meeting cognitive and social milestones on time',
    'The lymphedema (swelling) in your baby\'s hands and feet is gradually improving',
    'Your baby is feeding well and gaining weight, even if growth velocity is on the lower side',
    'Your baby\'s cardiac evaluation came back normal or a mild finding is being monitored',
  ],
  whenToMention: [
    'Your baby girl has puffy hands and feet at birth combined with a broad or webbed neck',
    'Your baby girl\'s growth is consistently falling below her growth curve',
    'Your baby has frequent ear infections or you have concerns about hearing',
  ],
  whenToActNow: [
    'Your baby shows signs of heart problems such as difficulty breathing, poor feeding, blue or gray color, or weak pulses in the legs',
    'Your baby has sudden severe swelling, high blood pressure, or signs of cardiac distress',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Turner Syndrome. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/turner-syndrome/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Turner Syndrome — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/turner-syndrome/symptoms-causes/syc-20360782',
    },
  ],
};
