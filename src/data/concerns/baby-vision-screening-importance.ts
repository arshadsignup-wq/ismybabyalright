import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-vision-screening-importance',
  title: 'When Should My Baby Have Their Vision Screened?',
  category: 'medical',
  searchTerms: [
    'baby vision screening',
    'baby eye exam when',
    'infant vision test',
    'baby eye check schedule',
    'pediatric vision screening',
    'baby vision development check',
    'can babies have eye exams',
    'baby red reflex test',
    'photoscreening baby',
    'vision screening age recommendations',
  ],
  quickAnswer:
    'Vision screening starts at birth with the red reflex test and continues at every well-child visit. The AAP recommends formal instrument-based vision screening (photoscreening) starting at age 1-3 years and traditional visual acuity screening by age 4-5. Early detection of vision problems is critical because many conditions are most treatable when caught in infancy and early childhood.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Your pediatrician checks the red reflex at birth and at early well visits. The red reflex test shines a light into each eye looking for the normal reddish glow from the retina. An abnormal red reflex may indicate cataracts, retinoblastoma, or other conditions. Your pediatrician also checks for structural eye abnormalities and observes eye alignment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By 3-4 months, your baby should be able to follow moving objects and make eye contact. Your pediatrician assesses eye alignment and movement at well visits. Occasional eye crossing before 4 months can be normal, but constant or persistent crossing needs evaluation. By 6 months, eyes should be well-aligned.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Your pediatrician continues to check eye health at well visits. If there is any concern about eye alignment (strabismus), lazy eye (amblyopia), or other issues, a referral to a pediatric ophthalmologist is made. Treatment for these conditions is most effective when started early.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Instrument-based screening (photoscreening) can be performed starting at age 1 and is recommended by the AAP between ages 1-3. This involves taking a quick photo of your child\'s eyes that can detect focusing problems, strabismus, and other abnormalities. The test is painless and takes seconds.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Photoscreening should be performed if not already done. By age 3, some children can participate in visual acuity testing using pictures or shapes. The US Preventive Services Task Force recommends vision screening at least once between ages 3-5. If your child has risk factors (family history, prematurity, developmental delays), earlier or more frequent screening is recommended.',
    },
  ],
  whenNormal: [
    'Your baby has a normal red reflex at birth and subsequent visits',
    'Your baby follows faces and objects with their eyes by 3-4 months',
    'Both eyes move together and are aligned by 6 months of age',
    'Your baby passes photoscreening or other vision tests at recommended ages',
  ],
  whenToMention: [
    'Your baby does not seem to follow objects or make eye contact by 3 months',
    'You notice one eye turning in or out, even occasionally, after 4 months of age',
    'You notice your baby consistently tilting their head to one side when looking at things',
  ],
  whenToActNow: [
    'You notice a white or abnormal pupil reflex in your baby\'s eye, especially in photos (could indicate retinoblastoma or cataract)',
    'Your baby\'s eye is suddenly misaligned, bulging, or you notice sudden vision loss or behavior suggesting your baby cannot see',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-glasses-needed-infant',
    'baby-eye-patch-therapy',
    'eye-alignment-issues-infant',
    'baby-pediatric-ophthalmologist-when',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Visual System Assessment in Infants, Children, and Young Adults. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022058955/188236',
    },
    {
      org: 'NIH',
      citation:
        'National Eye Institute. Get a Comprehensive Dilated Eye Exam.',
      url: 'https://www.nei.nih.gov/learn-about-eye-health/healthy-vision',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Vision Health: Children.',
      url: 'https://www.cdc.gov/vision-health/about/children.html',
    },
  ],
};
