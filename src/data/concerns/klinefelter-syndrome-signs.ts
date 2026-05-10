import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'klinefelter-syndrome-signs',
  title: 'Klinefelter Syndrome Signs in Babies',
  category: 'medical',
  searchTerms: [
    'klinefelter syndrome baby',
    'XXY syndrome infant signs',
    'klinefelter syndrome newborn',
    'baby boy low muscle tone',
    'baby boy slow motor development',
    'klinefelter diagnosis baby',
    'XXY baby development',
    'klinefelter syndrome early signs',
  ],
  quickAnswer:
    'Klinefelter syndrome (47,XXY) is a chromosomal condition affecting males, where a boy is born with an extra X chromosome. It occurs in about 1 in 500 to 1,000 male births, making it one of the most common chromosomal conditions. Many boys are not diagnosed until puberty or adulthood. With early support, boys with Klinefelter syndrome can lead healthy, full lives.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Klinefelter syndrome is often not apparent at birth, and many cases are found incidentally during prenatal testing or later in life. When detected early, newborns may be noted to have slightly lower muscle tone, undescended testes (cryptorchidism), or a smaller penis (micropenis). However, many babies with Klinefelter syndrome appear entirely typical at birth. Early diagnosis allows for proactive developmental support.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies with Klinefelter syndrome usually develop normally in infancy. Some may have mild hypotonia (low muscle tone) that can lead to slightly delayed motor milestones like rolling over. Feeding and growth are usually normal. If the condition was detected prenatally or at birth, regular developmental monitoring ensures early intervention if needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most infants with Klinefelter syndrome continue to develop typically. Some may show mild delays in sitting or crawling due to low muscle tone. Speech and language development may also be slightly delayed. If any delays are noticed, early intervention services including physical and speech therapy can be very beneficial.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with Klinefelter syndrome may have mild speech and language delays, which are among the most common early challenges. Cognitive development is usually within the normal range, though some boys may need extra support with reading and language skills. Testosterone replacement therapy becomes important later at puberty. Early speech therapy and educational support make a meaningful difference in outcomes.',
    },
  ],
  whenNormal: [
    'Your baby boy with Klinefelter syndrome is meeting most developmental milestones within a typical range',
    'Your baby has mild low muscle tone but is gaining motor skills gradually',
    'Your baby is social, responsive, and feeding well',
    'Your baby was diagnosed prenatally and shows no obvious signs at birth — this is common',
  ],
  whenToMention: [
    'Your baby boy has undescended testes that have not resolved by 6 months of age',
    'Your baby or toddler has noticeable speech and language delays',
    'You received a prenatal or newborn diagnosis of Klinefelter syndrome and want to discuss developmental monitoring and early intervention',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing, poor feeding, or other urgent symptoms — these are not specific to Klinefelter syndrome but require immediate medical attention',
    'Your baby is losing previously achieved skills or is significantly behind in multiple developmental areas',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Klinefelter Syndrome. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/klinefelter-syndrome/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Klinefelter Syndrome — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/klinefelter-syndrome/symptoms-causes/syc-20353949',
    },
  ],
};
