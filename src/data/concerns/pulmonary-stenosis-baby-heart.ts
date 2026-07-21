import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pulmonary-stenosis-baby-heart',
  title: 'Pulmonary Valve Stenosis in Babies',
  category: 'medical',
  searchTerms: [
    'pulmonary stenosis baby',
    'pulmonary valve stenosis infant',
    'narrowed pulmonary valve baby',
    'baby heart murmur pulmonary',
    'pulmonic stenosis child',
    'baby right ventricle obstruction',
    'pulmonary valve balloon baby',
    'pulmonary stenosis murmur',
    'mild pulmonary stenosis baby',
    'severe pulmonary stenosis newborn',
  ],
  quickAnswer:
    'Pulmonary valve stenosis is a congenital heart defect where the pulmonary valve (the valve that controls blood flow from the heart to the lungs) is narrowed, making the right ventricle work harder to pump blood to the lungs. It accounts for about 8-10% of all congenital heart defects. Mild stenosis may cause no symptoms and only be detected as a heart murmur. Moderate to severe stenosis can cause rapid breathing, poor feeding, cyanosis, and heart failure in newborns. Mild cases often just need monitoring, while moderate to severe cases are typically treated with balloon valvuloplasty, a minimally invasive catheter procedure with excellent results.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Severe pulmonary stenosis (called critical pulmonary stenosis) in newborns can cause cyanosis, rapid breathing, and heart failure shortly after birth as the ductus arteriosus closes. These babies need urgent prostaglandin infusion and early balloon valvuloplasty. Moderate stenosis may present with a heart murmur detected at the newborn exam. Mild stenosis is often an incidental finding on echocardiogram and may not produce any symptoms. Newborn pulse oximetry screening can help detect severe cases.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Infants with mild pulmonary stenosis typically have no symptoms, grow normally, and are simply monitored with periodic echocardiograms. Those with moderate stenosis may show subtle signs such as tiring slightly more with feeds. The characteristic murmur of pulmonary stenosis is a systolic ejection murmur best heard at the upper left sternal border. If the degree of stenosis worsens on follow-up echo, balloon valvuloplasty may be recommended.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with mild pulmonary stenosis typically have no exercise limitations and lead completely normal lives. Moderate stenosis may cause some exercise intolerance, where the child tires more quickly than peers. The cardiologist will monitor the pressure gradient across the valve with periodic echocardiograms. If the gradient increases above approximately 40-50 mmHg, intervention is typically recommended. Balloon valvuloplasty remains the treatment of choice.',
    },
    {
      ageRange: '3+ years',
      context:
        'Older children with mild pulmonary stenosis generally need no treatment and can participate fully in sports and activities. Those who have undergone successful balloon valvuloplasty typically have excellent long-term outcomes with minimal residual stenosis. Some children may develop mild pulmonary valve regurgitation (leakage) after valvuloplasty, which is usually well tolerated. Long-term follow-up with a cardiologist is recommended, though visits may be spaced to every 1-2 years for mild cases.',
    },
  ],
  whenNormal: [
    'Your baby has mild pulmonary stenosis that the cardiologist is monitoring, and your baby feeds well, grows normally, and has no symptoms',
    'A heart murmur was found at a well-baby visit and an echocardiogram showed only trivial or mild pulmonary stenosis',
    'Your child had successful balloon valvuloplasty and follow-up echocardiogram shows excellent results',
    'Your child with mild pulmonary stenosis participates in normal activities without any limitations',
  ],
  whenToMention: [
    'Your baby has a heart murmur that has not been evaluated with an echocardiogram',
    'Your child with known pulmonary stenosis seems to tire more easily during physical activity than before',
    'Your child with pulmonary stenosis has not had a follow-up echocardiogram in over a year',
  ],
  whenToActNow: [
    'Your newborn is blue or gray, breathing rapidly, or feeding very poorly -- these may be signs of critical pulmonary stenosis and require emergency evaluation',
    'Your baby or child with known pulmonary stenosis develops new cyanosis, fainting, or severe shortness of breath',
    'Your child with pulmonary stenosis loses consciousness during exercise or physical activity -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'congenital-heart-defect-signs',
    'baby-heart-murmur',
    'tetralogy-of-fallot-baby',
    'cyanosis-baby',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Pulmonary Valve Stenosis. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/pulmonarystenosis.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pulmonary Stenosis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/heart/Pages/Pulmonary-Stenosis.aspx',
    },
    {
      org: 'AHA',
      citation:
        'American Heart Association. Pulmonary Valve Stenosis. AHA, 2024.',
      url: 'https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects/pulmonary-valve-stenosis',
    },
  ],
};
