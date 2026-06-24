import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preschool-vision-screening-2025-update',
  title: 'Preschool Vision Screening: Updated Guidelines',
  category: 'medical',
  searchTerms: [
    'preschool vision screening',
    'toddler eye exam',
    'child vision test age',
    'when to get child eyes checked',
    'preschool eye screening guidelines',
    'vision screening 3 year old',
    'lazy eye screening age',
    'amblyopia screening children',
    'photoscreening toddler eyes',
    'child vision problems signs',
  ],
  quickAnswer:
    'The AAP and the US Preventive Services Task Force recommend vision screening for all children between ages 3 and 5. Updated guidelines emphasize instrument-based screening (photoscreening) as a valid and often more practical alternative to traditional eye chart testing for young children. Early detection of conditions like amblyopia (lazy eye), strabismus (crossed eyes), and refractive errors is critical because treatment is most effective before age 7 when the visual system is still developing.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Pediatricians perform basic vision assessments at well-child visits during the first year, including checking for the red reflex (which screens for cataracts and retinoblastoma), evaluating eye alignment, and assessing whether the baby fixates on and follows objects. Instrument-based screening with a photoscreener can be used as early as 6-12 months in some practices. If there is a family history of childhood eye disease, early referral to a pediatric ophthalmologist is recommended.',
    },
    {
      ageRange: '12-36 months',
      context:
        'During this age range, your pediatrician continues to assess visual development at well-child visits. Instrument-based screening (photoscreening) is increasingly used and can detect risk factors for amblyopia such as significant refractive errors, strabismus, and media opacities. This technology is particularly useful for toddlers who cannot cooperate with a standard eye chart. If your child consistently tilts their head, squints, holds objects very close to their face, or has a wandering eye, mention this to your pediatrician.',
    },
    {
      ageRange: '3-5 years',
      context:
        'This is the critical window for formal vision screening. The AAP recommends screening at least once between ages 3 and 5 using either visual acuity testing (eye chart with pictures or letters for preschoolers) or instrument-based screening. Photoscreeners can take an image of both eyes simultaneously and detect issues within seconds, making them ideal for preschool-age children. Children who fail screening should be referred to a pediatric ophthalmologist or optometrist for a comprehensive exam. Treatment for amblyopia is most effective when started before age 7.',
    },
    {
      ageRange: '5+ years',
      context:
        'Vision screening should continue at school entry and throughout childhood. Many schools perform screening, but do not rely solely on school screenings. If your child complains of headaches, squints at the board, loses their place while reading, or brings books very close to their face, schedule an eye exam. Children who passed early screenings can still develop vision problems as they grow. Annual eye exams are recommended for children who wear glasses or have known eye conditions.',
    },
  ],
  whenNormal: [
    'Your pediatrician performs a brief eye assessment at well-child visits',
    'Your preschooler has some difficulty cooperating with eye chart testing',
    'Your child passes photoscreening at their well-child visit',
  ],
  whenToMention: [
    'Your child consistently squints, tilts their head, or closes one eye to see',
    'You notice one eye turning in or out, even if it is intermittent',
    'Your child complains of headaches, eye pain, or blurry vision',
    'Your child holds books or screens very close to their face',
    'There is a family history of amblyopia, strabismus, or childhood eye disease',
  ],
  whenToActNow: [
    'You notice a white pupil (white reflex) in your child\'s eye, which can indicate cataracts or retinoblastoma and requires urgent evaluation',
    'Your child has sudden vision loss, eye pain with redness, or an eye injury',
    'Your child\'s eye suddenly turns inward or outward and stays that way',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'amblyopia-signs',
    'crossed-eyes',
    'nystagmus-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Visual System Assessment in Infants, Children, and Young Adults by Pediatricians. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022058955/188218/Visual-System-Assessment-in-Infants-Children-and',
    },
    {
      org: 'USPSTF',
      citation:
        'US Preventive Services Task Force. Vision Screening in Children Aged 6 Months to 5 Years. JAMA, 2023.',
      url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/vision-in-children-ages-6-months-to-5-years-screening',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Eye Screening for Children. AAO, 2024.',
      url: 'https://www.aao.org/eye-health/tips-prevention/children-eye-screening',
    },
  ],
};
