import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-heart-murmur',
  title: 'Baby Heart Murmur - Innocent vs Concerning',
  category: 'medical',
  searchTerms: [
    'baby heart murmur',
    'heart murmur in infant',
    'innocent heart murmur baby',
    'pediatrician heard heart murmur',
    'baby heart murmur dangerous',
    'newborn heart murmur',
    'is a heart murmur in a baby serious',
    'baby heart murmur types',
    'what causes heart murmur in baby',
    'heart murmur at well check baby',
    'toddler heart murmur diagnosis',
    'baby heart murmur echocardiogram',
  ],
  quickAnswer:
    'Heart murmurs are very common in children - up to 75% of children will have an audible murmur at some point. The vast majority are "innocent" or "functional" murmurs, meaning there is no structural heart problem. These murmurs are simply the sound of blood flowing normally through the heart and are more audible during fever, illness, or excitement. A smaller number of murmurs indicate a structural heart difference that may need monitoring or treatment. Your pediatrician can usually distinguish between the two and will refer for an echocardiogram if there is any concern.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'In newborns, the heart is transitioning from fetal circulation to independent circulation. Murmurs heard in the first few days of life may be from normal transitional flow and often resolve. However, some murmurs detected in newborns can indicate congenital heart defects. If your newborn has a murmur along with poor feeding, rapid breathing, bluish skin, or failure to gain weight, evaluation is urgent. Most hospitals now screen newborns with pulse oximetry to detect critical heart defects before discharge.',
    },
    {
      ageRange: '1-6 months',
      context:
        'Murmurs first detected at well-baby visits during this period are common. Many are innocent and related to the rapid blood flow through a small heart. Your pediatrician will listen to the characteristics of the murmur - its timing, location, and quality. A soft, musical murmur in a baby who is feeding well, growing normally, and has no other symptoms is very likely innocent. If there are any questionable features, an echocardiogram is a painless, non-invasive ultrasound of the heart that gives definitive answers.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby grows, the heart grows too, and some murmurs that were audible earlier may become quieter. New murmurs can also appear at this age and are usually innocent. Your pediatrician will continue to monitor the murmur at each well visit. If the murmur has not changed and your baby is thriving, there is usually no need for additional testing. If a murmur is getting louder or your baby is showing any symptoms, further evaluation may be recommended.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Innocent murmurs remain common in toddlers and often become more noticeable during illness or fever because the heart pumps faster. Many parents first learn about their child\'s murmur during a sick visit. If your pediatrician tells you the murmur sounds innocent and was found incidentally, the reassurance is well-founded. Toddlers with innocent murmurs need no activity restrictions, no medications, and no special precautions. The murmur may persist for years and typically resolves by adolescence.',
    },
  ],
  whenNormal: [
    'Your pediatrician describes the murmur as "innocent," "functional," or "flow murmur" and your baby is growing and developing normally',
    'The murmur is soft and musical, only heard in certain positions, and comes and goes',
    'Your baby has had an echocardiogram that shows a structurally normal heart',
    'The murmur is more noticeable when your baby has a fever or is excited but absent at other times',
  ],
  whenToMention: [
    'A new murmur is heard that was not present at previous visits',
    'Your baby seems to tire easily during feeds or becomes sweaty while eating',
    'You want reassurance about a previously identified innocent murmur',
  ],
  whenToActNow: [
    'Your baby has a murmur along with bluish or gray skin color, rapid breathing, poor feeding, or failure to gain weight - these may indicate a significant heart problem',
    'Your baby is having episodes where they turn blue, especially around the lips and fingernails',
    'Your baby has a murmur with a rapid or irregular heartbeat that you can feel or see through the chest wall',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-breathing-fast', 'cyanosis-baby', 'failure-to-thrive-signs'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Heart Murmur. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Heart-Murmur.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Screening Tests. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Purpose-of-Newborn-Hearing-Screening.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Heart Murmurs.',
      url: 'https://www.nhlbi.nih.gov/health/heart-murmur',
    },
  ],
};
