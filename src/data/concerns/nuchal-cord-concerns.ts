import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nuchal-cord-concerns',
  title: 'Nuchal Cord (Cord Around Neck)',
  category: 'medical',
  searchTerms: [
    'cord around baby neck',
    'nuchal cord danger',
    'umbilical cord wrapped around neck',
    'cord around neck ultrasound',
    'nuchal cord birth risk',
    'baby cord around neck safe',
    'cord entanglement pregnancy',
    'nuchal cord c-section needed',
    'cord around baby neck delivery',
  ],
  quickAnswer:
    'A nuchal cord, where the umbilical cord is wrapped around the baby\'s neck, is found in about 20-30% of all deliveries and is very common. In the vast majority of cases, a nuchal cord causes no harm to the baby. The cord is usually loose enough that it can be slipped over the baby\'s head during delivery, and experienced providers manage this routinely.',
  byAge: [
    {
      ageRange: 'First trimester',
      context:
        'In the first trimester, babies are very active and move freely in a relatively large amount of amniotic fluid. The cord can easily loop around and unwrap itself many times without any concern. Nuchal cords at this stage are rarely identified and are not clinically significant because the baby has plenty of room to move.',
    },
    {
      ageRange: 'Second trimester',
      context:
        'A nuchal cord may be noted on ultrasound during the second trimester, but this finding alone is not cause for alarm. Babies continue to move actively, and a cord seen around the neck at one ultrasound may no longer be there at the next. Providers typically do not recommend any specific intervention or additional monitoring based solely on this finding.',
    },
    {
      ageRange: 'Third trimester',
      context:
        'As the baby grows larger and has less room to move, a nuchal cord identified in the third trimester is more likely to remain. However, even at this stage, most nuchal cords are loose and well-tolerated by the baby. The cord is surrounded by Wharton\'s jelly, which protects the blood vessels from compression. Your provider will monitor fetal heart rate patterns and movement as usual.',
    },
    {
      ageRange: 'During labor and delivery',
      context:
        'During labor, fetal heart rate monitoring will detect any signs of cord compression. Most babies with nuchal cords tolerate labor well. The provider will check for a nuchal cord when the baby\'s head is delivered and simply slip it over the head or, in rare cases, clamp and cut it before the body is delivered. A nuchal cord alone is almost never a reason for a cesarean section.',
    },
  ],
  whenNormal: [
    'A nuchal cord is found incidentally on a routine ultrasound and the baby appears active and healthy',
    'Your baby has normal fetal movement patterns and reassuring heart rate tracings',
    'The cord is loosely draped around the neck with normal Doppler flow',
    'Your provider is not concerned and has not recommended any changes to your care plan',
  ],
  whenToMention: [
    'You notice a marked decrease in your baby\'s typical fetal movement pattern',
    'You are anxious about an ultrasound finding of nuchal cord and want to discuss the delivery plan',
    'Your baby has multiple loops of cord around the neck identified on ultrasound',
  ],
  whenToActNow: [
    'You experience a sudden and significant decrease or complete absence of fetal movement',
    'During labor, the fetal heart rate monitor shows persistent abnormal patterns such as deep or prolonged decelerations',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Management of Intrapartum Fetal Heart Rate Tracings. ACOG Practice Bulletin No. 116, 2010.',
      url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2010/11/management-of-intrapartum-fetal-heart-rate-tracings',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Nuchal cord and perinatal outcomes. PubMed, 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28559178/',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. Umbilical cord conditions. March of Dimes, 2023.',
      url: 'https://www.marchofdimes.org/complications/umbilical-cord-conditions.aspx',
    },
  ],
};
