import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'aortic-stenosis-baby-heart',
  title: 'Aortic Stenosis in Babies',
  category: 'medical',
  searchTerms: [
    'aortic stenosis baby',
    'aortic valve stenosis infant',
    'narrowed aortic valve baby',
    'baby heart murmur aortic',
    'bicuspid aortic valve baby',
    'aortic stenosis murmur child',
    'aortic valve balloon baby',
    'baby exercise intolerance heart',
    'critical aortic stenosis newborn',
    'aortic stenosis symptoms child',
  ],
  quickAnswer:
    'Aortic stenosis is a congenital heart defect where the aortic valve (the valve that controls blood flow from the heart to the body) is narrowed, making the left ventricle work harder to pump blood. It can range from mild (requiring only monitoring) to critical (requiring urgent intervention in newborns). Many cases are caused by a bicuspid aortic valve, where the valve has two leaflets instead of the normal three. Mild aortic stenosis may cause only a heart murmur with no symptoms, while severe cases can cause poor feeding, rapid breathing, chest pain, exercise intolerance, or fainting. Treatment options include balloon valvuloplasty, surgical valve repair, or valve replacement.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Critical aortic stenosis in newborns is a medical emergency. As the ductus arteriosus closes, the baby may develop heart failure with rapid breathing, poor feeding, pallor, weak pulses, and grayish skin. These babies require prostaglandin infusion to keep the ductus open and urgent balloon valvuloplasty or surgery. Less severe stenosis may present as a heart murmur detected at the newborn exam. A systolic ejection murmur heard best at the upper right sternal border with radiation to the neck is characteristic.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infants with mild to moderate aortic stenosis usually have no symptoms and grow normally. The murmur may become more prominent during illness or fever. Echocardiography is used to measure the pressure gradient across the valve and assess left ventricular function. Infants who had balloon valvuloplasty in the newborn period are monitored for residual stenosis or development of aortic valve leakage (regurgitation). Regular cardiology follow-up is important because stenosis can worsen as the child grows.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with mild aortic stenosis typically have no activity restrictions and lead normal lives. Moderate stenosis may cause subtle exercise intolerance. The cardiologist monitors the gradient across the valve with periodic echocardiograms. If the gradient increases significantly (typically above 50 mmHg mean gradient or 70 mmHg peak gradient), intervention is considered. Toddlers with bicuspid aortic valve are also monitored for aortic root dilation.',
    },
    {
      ageRange: '3+ years',
      context:
        'Older children with moderate to severe aortic stenosis may experience chest pain, dizziness, or fainting during exercise. These symptoms indicate that intervention is needed. Children with significant aortic stenosis typically have activity restrictions, particularly avoiding competitive or strenuous sports. Treatment may include balloon valvuloplasty, surgical valve repair (Ross procedure), or valve replacement. The Ross procedure uses the patient\'s own pulmonary valve to replace the aortic valve and is preferred in growing children.',
    },
  ],
  whenNormal: [
    'Your baby has mild aortic stenosis with a low gradient and the cardiologist recommends only periodic monitoring',
    'A heart murmur was evaluated and echocardiogram showed a bicuspid aortic valve with no significant narrowing',
    'Your child with mild aortic stenosis is active, growing well, and has no symptoms',
    'Your child had successful intervention for aortic stenosis and follow-up shows good valve function',
  ],
  whenToMention: [
    'Your baby has a heart murmur that has not been evaluated with echocardiography',
    'Your child with known aortic stenosis seems to tire more quickly during physical activity or complains of chest discomfort',
    'Your child with aortic stenosis has not had a cardiology follow-up in over a year',
    'You have a family history of bicuspid aortic valve or aortic stenosis',
  ],
  whenToActNow: [
    'Your newborn has rapid breathing, poor feeding, pallor, weak pulses, or grayish skin -- these may indicate critical aortic stenosis and require immediate emergency care',
    'Your child with known aortic stenosis faints or loses consciousness during exercise or physical activity -- call 911',
    'Your child complains of severe chest pain or becomes very short of breath during physical activity -- seek emergency evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'congenital-heart-defect-signs',
    'baby-heart-murmur',
    'coarctation-of-aorta-baby',
    'cyanosis-baby',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Aortic Stenosis. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/aorticstenosis.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Aortic Stenosis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Aortic-Stenosis.aspx',
    },
    {
      org: 'AHA',
      citation:
        'American Heart Association. Aortic Valve Stenosis. AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects/aortic-valve-stenosis',
    },
  ],
};
