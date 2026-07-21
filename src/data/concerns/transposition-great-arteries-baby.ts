import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'transposition-great-arteries-baby',
  title: 'Transposition of the Great Arteries (TGA) in Babies',
  category: 'medical',
  searchTerms: [
    'transposition great arteries baby',
    'tga heart defect',
    'switched arteries heart baby',
    'dextro transposition baby',
    'd-tga newborn',
    'arterial switch operation baby',
    'baby blue at birth heart',
    'transposition great vessels',
    'baby aorta pulmonary artery switched',
    'cyanotic heart defect newborn',
  ],
  quickAnswer:
    'Transposition of the great arteries (TGA) is a critical congenital heart defect where the two major blood vessels leaving the heart are switched -- the aorta connects to the right ventricle and the pulmonary artery connects to the left ventricle. This means oxygen-poor blood circulates to the body while oxygen-rich blood recirculates to the lungs, causing severe cyanosis (blue coloring) shortly after birth. TGA requires an urgent procedure called a balloon atrial septostomy to mix blood, followed by corrective surgery (the arterial switch operation), usually within the first 1-2 weeks of life. With modern surgical techniques, outcomes are excellent and most children lead normal, active lives.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'TGA may be detected on a fetal echocardiogram, though it can be more difficult to identify on routine prenatal ultrasound than some other heart defects. When diagnosed prenatally, delivery is planned at a hospital with a pediatric cardiac surgery program. This allows for immediate stabilization of the baby after birth. Prenatal diagnosis significantly improves outcomes by ensuring the right team and resources are ready.',
    },
    {
      ageRange: '0-48 hours',
      context:
        'Babies with TGA typically develop cyanosis (blue skin, lips, and nails) within the first hours of life, as the ductus arteriosus begins to close. Oxygen saturation levels will be low despite the baby otherwise appearing vigorous. The baby will be started on prostaglandin to keep the ductus open and may need a balloon atrial septostomy (a catheter-based procedure to create or enlarge a hole between the atria to allow mixing of blood). This stabilizes the baby until definitive surgery.',
    },
    {
      ageRange: '1-2 weeks',
      context:
        'The arterial switch operation (ASO), also known as the Jatene procedure, is typically performed within the first 1-2 weeks of life. During this surgery, the aorta and pulmonary artery are moved to their correct positions and the coronary arteries are reimplanted. This is open-heart surgery requiring cardiopulmonary bypass. Recovery in the hospital typically takes 2-4 weeks. The arterial switch operation has a success rate exceeding 95% at experienced centers.',
    },
    {
      ageRange: '1-12 months post-surgery',
      context:
        'After the arterial switch operation, babies are monitored closely for complications including narrowing at the surgical connection sites and coronary artery issues. Most babies recover well, feed normally, and gain weight appropriately. Regular cardiology follow-up with echocardiography is essential. Parents may be reassured that the repaired heart is now structurally very close to normal, with two pumping chambers and correctly connected great arteries.',
    },
    {
      ageRange: 'Long-term',
      context:
        'Most children after a successful arterial switch operation lead normal, active lives with no significant restrictions. Long-term follow-up with a cardiologist is recommended, typically annually, to monitor for late complications such as aortic valve regurgitation or coronary artery stenosis. Most children can participate fully in sports and physical activities. Developmental outcomes are generally excellent.',
    },
  ],
  whenNormal: [
    'Your baby has been evaluated and their heart anatomy is confirmed to be normal',
    'Your child had a successful arterial switch operation and their cardiologist confirms the heart is functioning well at follow-up',
    'Your baby briefly appeared bluish around the hands and feet in the first day of life but pulse oximetry screening was normal (acrocyanosis)',
  ],
  whenToMention: [
    'A prenatal ultrasound raises any concern about the position of the great arteries or heart anatomy',
    'Your baby after TGA repair seems to tire more easily during feeds or activities than expected',
    'Your child after TGA repair has not had a cardiology follow-up in over a year',
  ],
  whenToActNow: [
    'Your newborn is blue or gray, especially around the lips, tongue, and trunk -- this is a medical emergency, call 911',
    'Your baby after TGA repair develops new breathing difficulty, poor feeding, swelling, or blue coloring',
    'Your baby has a low pulse oximetry reading (below 95% in both hands and feet) -- seek immediate medical evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'congenital-heart-defect-signs',
    'cyanosis-baby',
    'baby-heart-murmur',
    'tetralogy-of-fallot-baby',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about d-Transposition of the Great Arteries. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/d-tga.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Transposition of the Great Arteries. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Transposition-of-the-Great-Arteries.aspx',
    },
    {
      org: 'AHA',
      citation:
        'American Heart Association. Transposition of the Great Arteries. AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects/d-transposition-of-the-great-arteries',
    },
  ],
};
