import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-choking-on-mucus',
  title: 'Choking on Mucus or Fluid in Newborns',
  category: 'medical',
  searchTerms: ['newborn choking on mucus', 'baby gagging on mucus', 'newborn choking spit up', 'baby choking on saliva', 'newborn choking episodes', 'baby gurgling choking', 'newborn mucus throat choking', 'baby choking during sleep mucus', 'newborn spitting up mucus choking', 'how to help choking newborn mucus'],
  quickAnswer: 'Newborns commonly gag or choke briefly on mucus, saliva, or spit-up because their airways are small and their swallowing coordination is still developing. Brief episodes that resolve on their own are usually normal. Turning baby on their side and gently clearing the mouth can help. Frequent or prolonged choking episodes should be evaluated.',
  byAge: [
    { ageRange: '0-1 month', context: 'Choking or gagging on mucus is especially common in the first few days after birth as your baby clears residual amniotic fluid and mucus from the lungs and throat. This is normal and usually self-resolving. If your baby gags or chokes, turn them onto their side, keep them calm, and allow them to clear the mucus on their own. You can gently suction the mouth with a bulb syringe if needed. Newborns have a strong cough reflex and a protective gag reflex that help them clear their airway. These episodes can be frightening but are usually brief and harmless.' },
    { ageRange: '1-3 months', context: 'Occasional gagging on spit-up or saliva may continue. Keeping baby elevated after feeds and proper burping can help. If choking episodes are frequent, occur during feeding, or are associated with color change (blue or gray), evaluate with your pediatrician for possible underlying causes like laryngomalacia, reflux, or swallowing dysfunction.' },
    { ageRange: '3-6 months', context: 'Choking episodes should be less common as swallowing coordination improves. Persistent episodes may need evaluation by a pediatric ENT or feeding specialist.' },
    { ageRange: '6-12 months', context: 'As solid foods are introduced, gagging (different from choking) is a normal part of learning to eat. True choking on non-food items or persistent feeding difficulties should be evaluated.' },
  ],
  whenNormal: ['Brief gagging or choking on mucus in the first few days of life that resolves quickly', 'Baby recovers color and resumes normal breathing within seconds', 'Occasional gagging on spit-up that self-resolves', 'Baby has a strong cough and gag reflex'],
  whenToMention: ['Choking episodes happen frequently or seem to be getting worse', 'Baby has noisy breathing between choking episodes', 'Choking consistently occurs during feeding'],
  whenToActNow: ['Baby turns blue or gray during a choking episode and does not recover color quickly', 'Choking episode where baby stops breathing or becomes limp, requiring stimulation or intervention', 'Persistent choking that prevents adequate feeding'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choking Prevention. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Choking-Prevention.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Neonatal Airway Reflexes. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/003300.htm' },
  ],
  relatedConcernSlugs: ['newborn-choking-during-feeding', 'newborn-gagging-reflex-strong', 'newborn-noisy-breathing-normal'],
};
