import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'atrial-septal-defect-baby',
  title: 'My Baby Has a Hole in Their Heart (Atrial Septal Defect)',
  category: 'medical',
  searchTerms: [
    'atrial septal defect baby',
    'ASD heart baby',
    'hole in baby heart',
    'ASD murmur baby',
    'atrial septal defect close on its own',
    'baby heart murmur ASD',
    'ASD surgery baby',
    'ASD device closure baby',
    'PFO vs ASD baby',
    'secundum ASD baby',
  ],
  quickAnswer:
    'An atrial septal defect (ASD) is a hole in the wall (septum) between the two upper chambers of the heart. Small ASDs are very common — a patent foramen ovale (PFO), which is essentially a small ASD, is present in about 25% of all people. Many small ASDs close on their own during childhood. Moderate to large ASDs may need closure to prevent long-term complications like heart enlargement or pulmonary hypertension. Closure is done either through a catheter-based procedure (device closure) or surgery, both with excellent success rates.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Small ASDs are often discovered incidentally during evaluation of a heart murmur or during echocardiography performed for other reasons. Many small ASDs — particularly those under 5mm — close spontaneously in the first 1-2 years. Your pediatric cardiologist will monitor with periodic echocardiograms. Most babies with small ASDs have no symptoms and feed, grow, and develop normally.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If the ASD is small and your baby is asymptomatic, watchful waiting continues. Moderate to large ASDs may cause subtle symptoms — slightly faster breathing, difficulty with feeds, or slower weight gain — though many moderate ASDs are still asymptomatic in infancy. Your cardiologist will assess the amount of blood flow across the defect to determine if and when closure is needed.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Small ASDs that have not closed may continue to be monitored. Moderate to large ASDs with significant left-to-right blood flow are typically recommended for closure during this period, before they cause right heart enlargement. Catheter-based device closure (Amplatzer or similar device) is the preferred method for secundum ASDs and is performed in a cardiac catheterization lab without open-heart surgery. Recovery is quick — most children go home the next day.',
    },
    {
      ageRange: '5 years+',
      context:
        'If closure is performed, long-term outcomes are excellent — the heart returns to normal size, and there are typically no activity restrictions after recovery. Children who had device closure take aspirin for about 6 months and need endocarditis prophylaxis for 6 months after the procedure. If surgical closure was required (for large or non-secundum ASDs), recovery takes several weeks but outcomes are equally excellent.',
    },
  ],
  whenNormal: [
    'Your baby has a small ASD that your cardiologist says is likely to close on its own — monitoring with periodic echocardiograms is appropriate',
    'Your baby has a PFO (patent foramen ovale) — this is present in 25% of all people and rarely needs treatment',
    'Your child had ASD closure and has recovered with normal heart function',
  ],
  whenToMention: [
    'Your baby seems to tire easily during feeds or sweats during feeding',
    'Your baby is not gaining weight as expected',
    'You hear your baby breathing faster than usual, especially during feeding or activity',
    'You have questions about whether and when the ASD should be closed',
  ],
  whenToActNow: [
    'Your baby is having difficulty breathing, turning blue or grey, or is very lethargic — call 911',
    'Your baby has a sudden onset of rapid breathing, excessive sweating, and poor feeding — these may be signs of heart failure and need urgent evaluation',
    'After device or surgical closure, your child develops fever, chest pain, or sudden shortness of breath — seek immediate medical care',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'vacterl-association',
    'digeorge-syndrome-22q11',
    'noonan-syndrome-baby',
  ],
  sources: [
    {
      org: 'AHA',
      citation:
        'American Heart Association. Atrial Septal Defect (ASD).',
      url: 'https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects/atrial-septal-defect-asd',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Atrial Septal Defect (ASD).',
      url: 'https://www.mayoclinic.org/diseases-conditions/atrial-septal-defect/symptoms-causes/syc-20369715',
    },
    {
      org: 'NIH',
      citation:
        'National Heart, Lung, and Blood Institute. Atrial Septal Defect.',
      url: 'https://www.nhlbi.nih.gov/health/atrial-septal-defect',
    },
  ],
};
