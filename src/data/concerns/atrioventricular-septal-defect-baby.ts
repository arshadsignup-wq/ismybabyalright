import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'atrioventricular-septal-defect-baby',
  title: 'Atrioventricular Septal Defect (AV Canal) in Babies',
  category: 'medical',
  searchTerms: [
    'atrioventricular septal defect baby',
    'av canal defect baby',
    'avsd infant',
    'endocardial cushion defect baby',
    'av canal down syndrome',
    'complete av canal defect',
    'baby hole all four heart chambers',
    'av canal heart surgery baby',
    'atrioventricular canal defect',
    'avsd repair baby',
  ],
  quickAnswer:
    'An atrioventricular septal defect (AVSD), also called an AV canal defect or endocardial cushion defect, is a heart defect involving holes between the upper and lower chambers of the heart and abnormalities of the valves between the chambers. In a complete AVSD, there is essentially one large hole in the center of the heart with a single common valve. AVSD is strongly associated with Down syndrome -- about 40-50% of babies with Down syndrome have some form of heart defect, and AVSD is the most common type. Symptoms include rapid breathing, poor feeding, poor weight gain, and frequent respiratory infections. Surgical repair is typically performed between 3-6 months of age.',
  byAge: [
    {
      ageRange: 'Prenatal',
      context:
        'AVSD may be detected during a fetal echocardiogram, particularly if Down syndrome is suspected or confirmed. Prenatal diagnosis allows for planning delivery at a facility with pediatric cardiac services. Parents will typically meet with a pediatric cardiologist before birth to discuss the defect, expected course, and surgical plan. Prenatal counseling helps families prepare for what to expect after delivery.',
    },
    {
      ageRange: '0-3 months',
      context:
        'Babies with a complete AVSD may initially appear well, but as the normal drop in pulmonary vascular resistance occurs in the first weeks of life, increasing blood flow to the lungs leads to symptoms. Signs include rapid or labored breathing, poor feeding, sweating during feeds, and poor weight gain. The baby may have a heart murmur detected by the pediatrician. An echocardiogram confirms the diagnosis. Medications such as diuretics may be started to manage symptoms while awaiting surgical repair.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Surgical repair of a complete AVSD is usually performed between 3-6 months of age, before irreversible damage to the lung blood vessels can occur. The surgery involves closing the holes with patches and reconstructing the two AV valves (mitral and tricuspid) from the single common valve. Surgery is performed under general anesthesia with cardiopulmonary bypass. Hospital recovery typically takes 1-2 weeks. Most children do very well after repair.',
    },
    {
      ageRange: '6-12 months post-repair',
      context:
        'After successful AVSD repair, most babies show significant improvement in feeding, weight gain, and breathing. Regular cardiology follow-up monitors for residual holes, valve leakage (especially the mitral valve), and heart rhythm problems. Some children may need additional procedures later if valve leakage becomes significant. Growth and development typically improve dramatically after repair.',
    },
    {
      ageRange: 'Long-term',
      context:
        'Most children who have had AVSD repair live active, normal lives. Long-term follow-up with a cardiologist is needed to monitor valve function, as the reconstructed mitral valve may develop leakage over time and occasionally requires reoperation. Children with Down syndrome and repaired AVSD receive integrated care addressing both their cardiac needs and developmental support. Endocarditis prophylaxis may be recommended for dental procedures in the first 6 months after surgery.',
    },
  ],
  whenNormal: [
    'Your baby has been evaluated with echocardiography and the heart structure is normal',
    'Your baby with Down syndrome has had cardiac screening and no defect was identified',
    'Your child has had successful AVSD repair and their cardiologist reports the heart is functioning well',
    'Your baby has a small, partial (incomplete) AVSD that the cardiologist is monitoring and says does not yet require intervention',
  ],
  whenToMention: [
    'Your baby with Down syndrome has not yet had an echocardiogram -- all babies with Down syndrome should be screened for heart defects',
    'Your baby seems to tire during feeds, gains weight slowly, or breathes faster than other babies',
    'Your child after AVSD repair is having more respiratory infections or seems less active than expected',
  ],
  whenToActNow: [
    'Your baby has rapid or labored breathing, poor feeding, sweating during feeds, and is not gaining weight -- these signs suggest heart failure and require urgent evaluation',
    'Your baby\'s lips or skin appear blue or gray, especially during feeds or at rest -- this is a medical emergency',
    'Your child after AVSD repair develops new rapid breathing, swelling, or sudden decline in activity level -- seek emergency care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'congenital-heart-defect-signs',
    'down-syndrome-baby-development',
    'baby-heart-murmur',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Atrioventricular Septal Defect. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/avsd.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Atrioventricular Canal Defect. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Atrioventricular-Canal-Defect.aspx',
    },
    {
      org: 'AHA',
      citation:
        'American Heart Association. Atrioventricular Canal Defect. AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects/atrioventricular-canal-defect',
    },
  ],
};
