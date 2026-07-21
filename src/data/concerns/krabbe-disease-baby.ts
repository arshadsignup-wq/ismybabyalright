import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'krabbe-disease-baby',
  title: 'Krabbe Disease in Babies',
  category: 'medical',
  searchTerms: [
    'krabbe disease baby',
    'krabbe disease symptoms infant',
    'globoid cell leukodystrophy baby',
    'krabbe disease newborn screening',
    'extreme irritability baby krabbe',
    'baby stiffness and crying krabbe',
    'krabbe disease treatment stem cell',
    'galactosylceramidase deficiency baby',
    'krabbe disease diagnosis',
    'white matter disease baby',
  ],
  quickAnswer:
    'Krabbe disease (globoid cell leukodystrophy) is a rare inherited disorder that destroys the myelin coating on nerve cells in the brain. The infantile form typically begins between 3 and 6 months of age with extreme irritability, stiffness, feeding difficulty, and seizures, progressing to rapid neurological decline. Newborn screening can detect Krabbe disease before symptoms begin, and early hematopoietic stem cell transplant (before symptoms appear) is the only treatment that can significantly alter the disease course. Krabbe disease has been added to many state newborn screening panels.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies with infantile Krabbe disease typically appear normal at birth and in the first weeks of life. If Krabbe disease is detected through newborn screening before symptoms begin, hematopoietic stem cell transplant (HSCT) can be performed during this window, which is the best chance to preserve neurological function. A positive newborn screen requires rapid confirmatory testing including enzyme activity measurement and genetic testing, because false positives occur. If your baby has a positive screen, you will be referred to a metabolic or neurological specialist urgently.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is when symptoms of infantile Krabbe disease typically begin. Parents often notice extreme, inconsolable irritability that does not respond to normal soothing. The baby develops increasing stiffness (hypertonia), especially in the legs, and may arch backward. Feeding becomes difficult. The baby may become overly sensitive to stimulation — bright lights, sounds, or touch can trigger crying episodes. Developmental progress stalls and then begins to reverse. Seizures may begin. An MRI will show characteristic changes in the brain\'s white matter.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Rapid neurological decline occurs. Babies lose previously acquired motor skills and become increasingly stiff and unresponsive. Vision and hearing decline as the myelin destruction progresses. Seizures may become more frequent. Feeding often requires a gastrostomy tube. If stem cell transplant was not performed before symptoms began, it is generally not recommended at this stage because outcomes are poor once neurological damage has occurred. Care focuses on comfort, seizure management, and supportive care.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Children with infantile Krabbe disease who did not receive early transplant continue to experience progressive neurological decline. Most children with the infantile form do not survive beyond age 2-3. For children who received early HSCT, outcomes vary — many retain some motor and cognitive function, though delays and disabilities are common. These children require ongoing neurodevelopmental support, physical therapy, and regular monitoring by a multidisciplinary team.',
    },
    {
      ageRange: 'Late-onset forms',
      context:
        'Late-infantile, juvenile, and adult-onset forms of Krabbe disease exist and progress more slowly. Symptoms may include difficulty walking, muscle weakness, vision changes, and cognitive decline. These forms can be diagnosed through enzyme testing and genetic analysis. HSCT may be considered for some late-onset patients, particularly before significant neurological symptoms develop.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening came back normal for Krabbe disease',
    'An initial positive newborn screen was followed by confirmatory testing that showed normal enzyme levels — false positives do occur',
    'Your baby who received early stem cell transplant is meeting developmental milestones and is clinically stable',
    'Genetic testing confirmed carrier status only (one copy of the gene variant) — carriers do not develop the disease',
  ],
  whenToMention: [
    'Your baby received an abnormal Krabbe disease result on newborn screening — follow up immediately for confirmatory testing as time is critical',
    'Your baby has unexplained extreme irritability combined with increasing stiffness that is not responding to typical calming measures',
    'There is a family history of Krabbe disease and you want to discuss testing for your baby',
  ],
  whenToActNow: [
    'Your newborn has screened positive for Krabbe disease — confirmatory testing and specialist referral should happen within days, not weeks, because early transplant timing is critical',
    'Your baby who was previously developing normally now has extreme irritability, stiffness, feeding refusal, and possible seizures — seek urgent neurological evaluation',
    'Your baby with known Krabbe disease has new or worsening seizures, difficulty breathing, or inability to feed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'newborn-screening-abnormal-results',
    'stiff-baby-hypertonia',
    'baby-developmental-regression-signs',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Krabbe Disease. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/krabbe-disease/',
    },
    {
      org: 'HRSA',
      citation:
        'Health Resources and Services Administration. Krabbe Disease Fact Sheet. Baby\'s First Test, 2023.',
      url: 'https://www.babysfirsttest.org/newborn-screening/conditions/krabbe-disease',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Krabbe Disease. NORD, 2023.',
      url: 'https://rarediseases.org/rare-diseases/krabbe-disease/',
    },
  ],
};
