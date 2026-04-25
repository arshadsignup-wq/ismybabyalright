import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hip-dysplasia',
  title: 'Baby Hip Dysplasia (Hip Click)',
  category: 'medical',
  searchTerms: [
    'baby hip click',
    'baby hip dysplasia',
    'developmental dysplasia of the hip',
    'DDH baby',
    'baby hip popping',
    'baby legs uneven folds',
    'baby hip clunk',
    'baby hip ultrasound',
    'Pavlik harness baby',
    'baby hip dislocation',
    'baby hips not developing properly',
  ],
  quickAnswer:
    'Developmental dysplasia of the hip (DDH) is a condition where the hip joint does not form properly, ranging from mild looseness to complete dislocation. It occurs in about 1 in 1,000 births and is more common in firstborns, girls, breech babies, and those with a family history. When caught early, treatment with a soft brace (Pavlik harness) is highly effective.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Your pediatrician checks the hips at every newborn exam by gently moving the legs. A "clunk" (not a click, which is usually normal) during the Ortolani or Barlow maneuver may indicate hip instability. Risk factors include breech position, family history of DDH, firstborn status, and female sex. If there is any concern, a hip ultrasound is typically ordered at 4-6 weeks of age. Early detection in the first weeks leads to the best treatment outcomes.',
    },
    {
      ageRange: '2-6 months',
      context:
        'If DDH is confirmed, treatment usually begins with a Pavlik harness, a soft brace that holds the baby\'s hips in a flexed, slightly spread position to encourage proper joint development. Babies typically wear the harness full-time for 6-12 weeks, then part-time for several more weeks. The success rate of the Pavlik harness is approximately 85-95% when started early. Treatment does not cause pain and most babies adjust to the harness within a few days.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If DDH is diagnosed later or the Pavlik harness was not successful, other treatments may be needed, including a rigid brace or closed reduction (repositioning the hip under anesthesia followed by a cast). Late-detected DDH may present as asymmetric skin folds on the thighs, limited ability to spread the legs during diaper changes, or one leg appearing shorter. Hip X-rays replace ultrasound as the preferred imaging after about 4-6 months of age.',
    },
    {
      ageRange: '12 months+',
      context:
        'DDH detected after walking age may present as a limp or waddling gait. Late diagnosis requires more involved treatment, potentially including surgery. This is why pediatricians check the hips at every well-child visit during the first year. Even after successful early treatment, follow-up imaging is important to confirm the hip continues to develop normally.',
    },
  ],
  whenNormal: [
    'Soft clicking sounds from your baby\'s hips, knees, or other joints, which are common and usually caused by ligament snapping and are not the same as a hip clunk',
    'Your baby\'s skin folds on the thighs are slightly asymmetric, which is common and not always a sign of DDH',
    'Your baby was screened for DDH and the examination and any imaging were normal',
    'Your baby completed Pavlik harness treatment and follow-up imaging shows good hip development',
  ],
  whenToMention: [
    'You notice that one leg seems shorter than the other or that your baby\'s thigh skin folds are markedly uneven',
    'Your baby seems unable to spread their legs equally when you open them during diaper changes',
    'There is a family history of hip dysplasia and you want to ensure your baby has been properly screened',
    'Your baby was breech and has not had a hip ultrasound',
  ],
  whenToActNow: [
    'Your pediatrician detects a hip clunk during examination and recommends urgent imaging or referral to a pediatric orthopedist',
    'Your baby or toddler develops a sudden limp, refuses to bear weight on one leg, or seems to be in pain when moving their hip, which could indicate dislocation or another hip condition needing prompt evaluation',
  ],
  relatedMilestones: [
    'walking',
    'standing',
    'crawling',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Clinical Practice Guideline: Early Detection of Developmental Dysplasia of the Hip. Pediatrics, 2000 (reaffirmed 2014).',
      url: 'https://publications.aap.org/pediatrics/article/105/4/896/64588/Clinical-Practice-Guideline-Early-Detection-of',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Hip Dysplasia.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/orthopedic/Pages/Hip-Dysplasia.aspx',
    },
    {
      org: 'AAP',
      citation:
        'International Hip Dysplasia Institute. Parent Guide to Hip Dysplasia.',
      url: 'https://hipdysplasia.org/developmental-dysplasia-of-the-hip/',
    },
  ],
};
