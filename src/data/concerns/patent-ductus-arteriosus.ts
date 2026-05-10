import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'patent-ductus-arteriosus',
  title: 'Patent Ductus Arteriosus (PDA) in Babies',
  category: 'medical',
  searchTerms: [
    'patent ductus arteriosus baby',
    'PDA baby',
    'PDA premature baby',
    'baby heart murmur PDA',
    'ductus arteriosus not closing',
    'PDA closure baby',
    'PDA treatment baby',
    'premature baby heart PDA',
  ],
  quickAnswer:
    'Patent ductus arteriosus (PDA) occurs when the ductus arteriosus — a blood vessel that normally closes shortly after birth — remains open. It is very common in premature babies, occurring in about 60% of babies born before 28 weeks. In full-term babies, a PDA is less common but can occur. Small PDAs may close on their own. Larger PDAs can be closed with medication, catheter procedures, or surgery, with excellent outcomes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In premature babies, a PDA is often detected in the first days of life by echocardiogram, especially if the baby requires respiratory support. A characteristic "machinery-like" continuous heart murmur may be heard. Treatment options for premature babies include medications (indomethacin or ibuprofen) to promote closure, catheter-based closure, or surgical ligation. In full-term babies, a small PDA may be detected as an incidental murmur and often closes on its own within the first few months.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, many small PDAs in full-term babies have closed spontaneously. If the PDA remains open but is small and causing no symptoms, watchful waiting continues. A moderate or large PDA that is causing symptoms — rapid breathing, difficulty feeding, poor weight gain, or bounding pulses — may need intervention. Catheter-based closure with an occluder device is now a preferred approach in many centers.',
    },
    {
      ageRange: '6-12 months',
      context:
        'A persistent PDA that has not closed spontaneously is typically recommended for closure to prevent long-term complications such as pulmonary hypertension and heart failure. Even if the baby is asymptomatic, closure is generally recommended for moderate to large PDAs. The catheter-based closure procedure has a very high success rate and minimal recovery time.',
    },
    {
      ageRange: '12 months+',
      context:
        'After PDA closure — whether spontaneous, by catheter, or by surgery — children are expected to have a completely normal heart and no activity restrictions. Follow-up echocardiograms confirm successful closure. Very small PDAs that are hemodynamically insignificant may be monitored rather than closed, but most pediatric cardiologists recommend closure to eliminate the small risk of endocarditis.',
    },
  ],
  whenNormal: [
    'Your baby\'s PDA was small and closed on its own within the first few months',
    'Your premature baby\'s PDA closed with medication (indomethacin or ibuprofen)',
    'Your baby had a successful PDA closure procedure and is growing and developing normally',
    'Your baby has a tiny PDA that the cardiologist considers hemodynamically insignificant',
  ],
  whenToMention: [
    'Your baby has a heart murmur that was described as continuous or "machinery-like"',
    'Your baby with a known PDA is breathing fast, sweating with feeds, or not gaining weight',
    'Your premature baby\'s PDA did not close with medication and further treatment is being discussed',
  ],
  whenToActNow: [
    'Your baby is breathing very rapidly, appears in distress, or has a blue or gray color',
    'Your premature baby with a PDA develops worsening respiratory status requiring increased oxygen or ventilator support',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Facts about Patent Ductus Arteriosus. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/heartdefects/patentductusarteriosus.html',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Patent Ductus Arteriosus. NHLBI, 2023.',
      url: 'https://www.nhlbi.nih.gov/health/patent-ductus-arteriosus',
    },
  ],
};
