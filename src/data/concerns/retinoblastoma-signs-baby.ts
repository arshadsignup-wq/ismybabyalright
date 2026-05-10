import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'retinoblastoma-signs-baby',
  title: 'Retinoblastoma Signs in Babies',
  category: 'medical',
  searchTerms: [
    'retinoblastoma baby',
    'white glow baby eye photo',
    'baby white pupil',
    'leukocoria baby',
    'baby eye cancer signs',
    'white reflex baby eye',
    'cat eye reflex baby photo',
    'retinoblastoma symptoms infant',
    'baby eye looks white in flash photos',
  ],
  quickAnswer:
    'Retinoblastoma is a rare eye cancer that develops in the retina, primarily affecting children under age 5, with most cases diagnosed before age 3. It affects about 1 in 15,000 to 20,000 children. The most common sign is a white glow (leukocoria) in the pupil, often first noticed in flash photographs. When detected and treated early, survival rates exceed 95%, and many children retain useful vision.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Retinoblastoma can be present at birth, especially in the hereditary bilateral form (affecting both eyes). The most important early sign is leukocoria — a white pupil reflex instead of the normal red reflex, which may be noticed in photographs or by a doctor during the red reflex test at well-child visits. Babies with a family history of retinoblastoma should have a dilated eye exam by a pediatric ophthalmologist within the first weeks of life.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the tumor grows, leukocoria may become more noticeable. Other signs can include strabismus (a crossed or misaligned eye), a red or irritated eye, or poor vision in one eye (the baby may not track objects equally). Regular red reflex screening at well-child visits is a critical screening tool. If you notice a white glow in your baby\'s eye in photographs, bring this to your pediatrician\'s attention immediately.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Retinoblastoma can be diagnosed at any point in this age range. Treatment depends on the size, location, and whether one or both eyes are affected. Options include laser therapy, cryotherapy, chemotherapy (systemic, intra-arterial, or intravitreal), and in some cases, removal of the eye (enucleation) when necessary to save the child\'s life. The goal is always to save life first, preserve the eye second, and maintain vision third.',
    },
    {
      ageRange: '12 months+',
      context:
        'Children treated for retinoblastoma need long-term follow-up with regular eye exams, particularly during the first 5 years of life when recurrence risk is highest. Children with the hereditary form (bilateral or with a family history) have a higher risk of second cancers later in life and need ongoing surveillance. With successful treatment, most children adapt well and lead full, active lives, even if vision in one eye is reduced or one eye was removed.',
    },
  ],
  whenNormal: [
    'Your baby has a normal red reflex in both eyes at well-child visits',
    'A single photo showed an unusual reflection but your pediatrician confirmed a normal red reflex exam',
    'Your baby tracks objects equally with both eyes and has no white pupil visible',
    'Your baby with a family history of retinoblastoma has normal dilated eye exams',
  ],
  whenToMention: [
    'You notice a white glow or reflection in one of your baby\'s eyes in flash photographs',
    'Your baby\'s eyes appear misaligned or one eye turns inward or outward',
    'You have a family history of retinoblastoma and want to ensure proper screening',
  ],
  whenToActNow: [
    'You consistently see a white pupil (leukocoria) in your baby\'s eye in photos or in person — request an urgent referral to a pediatric ophthalmologist',
    'Your baby has a rapidly changing eye appearance with redness, swelling, or apparent pain combined with a white pupil',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Cancer Institute. Retinoblastoma Treatment (PDQ) — Patient Version. NCI, 2024.',
      url: 'https://www.cancer.gov/types/retinoblastoma/patient/retinoblastoma-treatment-pdq',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Red Reflex Examination in Neonates, Infants, and Children. Pediatrics, 2008.',
      url: 'https://publications.aap.org/pediatrics/article/122/6/1401/72573/Red-Reflex-Examination-in-Neonates-Infants-and',
    },
  ],
};
