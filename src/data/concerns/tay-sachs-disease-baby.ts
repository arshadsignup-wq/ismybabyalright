import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'tay-sachs-disease-baby',
  title: 'Tay-Sachs Disease in Babies',
  category: 'medical',
  searchTerms: [
    'tay sachs disease baby',
    'tay sachs symptoms infant',
    'cherry red spot retina baby',
    'exaggerated startle response baby',
    'baby losing developmental skills',
    'tay sachs carrier screening',
    'tay sachs Ashkenazi Jewish',
    'GM2 gangliosidosis baby',
    'tay sachs diagnosis infant',
    'baby regression 6 months',
  ],
  quickAnswer:
    'Tay-Sachs disease is a rare, inherited genetic disorder caused by the absence of an enzyme (hexosaminidase A) needed to break down fatty substances called GM2 gangliosides in nerve cells. Babies with the infantile form appear healthy at birth and develop normally until about 3-6 months of age, then progressively lose skills and neurological function. It is most common in individuals of Ashkenazi Jewish, French-Canadian, and Cajun descent, and carrier screening is available before or during pregnancy.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Babies with Tay-Sachs disease appear completely healthy and develop normally during the first few months of life. There are typically no visible signs at birth. Newborn screening does not routinely test for Tay-Sachs in most states — diagnosis usually comes through carrier screening of parents before pregnancy or after symptoms develop. If both parents are known carriers, enzyme testing or genetic testing of the newborn can confirm the diagnosis early.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The earliest signs of infantile Tay-Sachs often appear between 3 and 6 months. Parents may notice an exaggerated startle response (the baby startles dramatically to sounds that would not typically bother them). The baby may begin to lose the ability to roll over, sit, or reach for objects — skills they had previously acquired. An eye exam may reveal a characteristic cherry-red spot on the retina, which is a hallmark of the disease. Decreased eye contact and reduced visual tracking may also develop.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Progressive loss of motor skills becomes more apparent. The baby may lose the ability to sit independently, have increasing difficulty with feeding, and develop muscle weakness or floppiness that progresses to stiffness and spasticity. Seizures often begin during this period. Vision and hearing continue to decline. Parents often describe the baby becoming less interactive and responsive. An MRI may show changes in the brain consistent with the disease.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Children with infantile Tay-Sachs experience continued neurological decline. Seizures may become frequent and difficult to control. Swallowing becomes increasingly difficult, and many children need a feeding tube to maintain nutrition. Head size may increase due to brain swelling. Care focuses on comfort, seizure management, nutrition, and quality of life. Most children with the infantile form of Tay-Sachs do not survive past early childhood, typically by age 3-5.',
    },
    {
      ageRange: 'Late-onset forms',
      context:
        'Juvenile and adult-onset Tay-Sachs are much rarer and milder than the infantile form. Symptoms may appear in childhood, adolescence, or adulthood and progress more slowly. They may include muscle weakness, difficulty with coordination and speech, and psychiatric symptoms. While serious, these forms do not have the same rapid course as infantile Tay-Sachs.',
    },
  ],
  whenNormal: [
    'Both parents have been tested and are not carriers of the Tay-Sachs gene',
    'Your baby startles at loud sounds in a typical way that does not seem exaggerated or prolonged',
    'Your baby is meeting developmental milestones on schedule and gaining new skills',
    'Carrier screening identified only one parent as a carrier — your child may be a carrier but will not have the disease',
  ],
  whenToMention: [
    'Both parents are known Tay-Sachs carriers and you want to discuss diagnostic testing for your baby',
    'You are of Ashkenazi Jewish, French-Canadian, or Cajun descent and have not had carrier screening',
    'Your baby seems to have an unusually strong startle response to everyday sounds',
    'Your baby seems to be losing skills they previously had, such as reaching for objects or rolling over',
  ],
  whenToActNow: [
    'Your baby was developing normally and is now losing multiple motor or cognitive skills over a period of weeks',
    'Your baby has seizures, a significant decrease in responsiveness, or difficulty swallowing',
    'An eye doctor has identified a cherry-red spot on your baby\'s retina',
    'Both parents are known Tay-Sachs carriers and your baby shows any signs of developmental regression',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-developmental-regression-signs',
    'baby-losing-words',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Tay-Sachs Disease. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/tay-sachs-disease/',
    },
    {
      org: 'ACMG',
      citation:
        'American College of Medical Genetics. Carrier Screening for Genetic Conditions. ACMG Practice Guidelines, 2021.',
      url: 'https://www.acmg.net/ACMG/Medical-Genetics-Practice-Resources/Practice-Guidelines.aspx',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Tay-Sachs Disease. NORD, 2023.',
      url: 'https://rarediseases.org/rare-diseases/tay-sachs-disease/',
    },
  ],
};
