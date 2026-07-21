import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hypoplastic-left-heart-syndrome',
  title: 'Hypoplastic Left Heart Syndrome (HLHS)',
  category: 'medical',
  searchTerms: [
    'hypoplastic left heart syndrome',
    'hlhs baby',
    'underdeveloped left heart baby',
    'baby left ventricle too small',
    'hlhs prenatal diagnosis',
    'norwood surgery baby',
    'single ventricle heart defect baby',
    'hlhs treatment options',
    'baby critical heart defect',
    'hlhs stages surgery',
  ],
  quickAnswer:
    'Hypoplastic left heart syndrome (HLHS) is a critical congenital heart defect where the left side of the heart is severely underdeveloped and cannot effectively pump blood to the body. It is one of the most serious heart defects but can be managed with a series of three surgeries (Norwood, Glenn, and Fontan) or, in some cases, heart transplantation. HLHS is often detected prenatally on fetal echocardiogram or shortly after birth when the baby develops cyanosis, rapid breathing, and poor feeding. Babies with HLHS require immediate specialized care at a pediatric cardiac center.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'HLHS is often detected during a routine prenatal ultrasound, typically at the 18-20 week anatomy scan, or on a fetal echocardiogram. Prenatal diagnosis allows parents to plan for delivery at a hospital with a pediatric cardiac surgery program. When diagnosed prenatally, the delivery can be coordinated with a neonatal and cardiac surgical team, which improves outcomes. Genetic counseling may be offered, and parents will meet with the pediatric cardiology team before birth.',
    },
    {
      ageRange: '0-2 weeks',
      context:
        'If not detected prenatally, HLHS typically becomes apparent within the first few hours to days of life as the ductus arteriosus (a fetal blood vessel) begins to close. Symptoms include cyanosis (blue or gray skin), rapid or difficult breathing, poor feeding, weak pulse, and lethargy. The baby will be started on prostaglandin medication to keep the ductus arteriosus open and will need the first surgery (Norwood procedure) within the first 1-2 weeks of life.',
    },
    {
      ageRange: '2 weeks - 6 months',
      context:
        'After the Norwood surgery, babies are closely monitored. Parents learn to monitor oxygen saturations, feeding, weight gain, and signs of distress. Between feeds, the baby may need supplemental oxygen or tube feeding. The second surgery (Glenn or hemi-Fontan procedure) is typically performed between 4-6 months of age. This period requires frequent cardiology visits and careful monitoring of growth and heart function.',
    },
    {
      ageRange: '6 months - 4 years',
      context:
        'After the Glenn procedure, babies often show improvement in oxygen levels and feeding. The third and final surgery (Fontan procedure) is typically performed between ages 2-4 years. Between surgeries, children need regular cardiology follow-up, may be on multiple medications, and require monitoring for complications. Despite their heart condition, many children achieve developmental milestones, though some may experience developmental delays.',
    },
    {
      ageRange: 'Long-term',
      context:
        'Children who have completed the three-stage surgical palliation for HLHS require lifelong cardiology care. They live with a single-functioning ventricle and may face long-term complications including arrhythmias, protein-losing enteropathy, liver problems, and decreased exercise tolerance. Despite these challenges, many children with HLHS attend school, participate in modified activities, and live meaningful lives. Heart transplant may be needed if the single ventricle begins to fail.',
    },
  ],
  whenNormal: [
    'Your baby has been evaluated by a pediatric cardiologist and the heart structure is normal',
    'Mild variations in heart size seen on prenatal ultrasound that the obstetrician or maternal-fetal medicine specialist determines are within normal limits',
    'Your child with HLHS is meeting expected post-surgical milestones and their cardiologist is satisfied with their progress',
  ],
  whenToMention: [
    'A prenatal ultrasound raised any question about the size or structure of the left side of your baby\'s heart',
    'Your baby with known HLHS seems to be feeding less well than usual or gaining weight more slowly',
    'Your child with HLHS is more tired than usual or has changes in their typical behavior or activity level',
    'You have a family history of congenital heart defects and want to discuss prenatal screening',
  ],
  whenToActNow: [
    'Your newborn has blue or gray skin, rapid breathing, poor feeding, and is lethargic -- these are signs of a critical heart defect and require immediate emergency care (call 911)',
    'Your baby with HLHS who has had surgery develops new breathing difficulty, is unable to feed, turns blue, or seems very unwell -- go to the emergency room immediately',
    'Your child with HLHS has a sudden change in their oxygen saturation readings below the range specified by their cardiologist',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'congenital-heart-defect-signs',
    'cyanosis-baby',
    'newborn-oxygen-saturation-screening',
    'baby-heart-murmur',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Hypoplastic Left Heart Syndrome. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/hlhs.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hypoplastic Left Heart Syndrome. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Hypoplastic-Left-Heart-Syndrome.aspx',
    },
    {
      org: 'AHA',
      citation:
        'American Heart Association. Single Ventricle Defects. AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects/single-ventricle-defects',
    },
  ],
};
