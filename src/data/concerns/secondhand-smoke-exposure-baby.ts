import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'secondhand-smoke-exposure-baby',
  title: 'Secondhand Smoke Exposure',
  category: 'medical',
  searchTerms: [
    'secondhand smoke baby danger',
    'baby exposed to cigarette smoke',
    'thirdhand smoke baby',
    'grandparent smokes around baby',
    'smoking outside still harmful to baby',
    'vaping around baby safe',
    'cigarette smoke on clothes baby',
    'how to protect baby from secondhand smoke',
    'SIDS and smoking risk',
  ],
  quickAnswer:
    'Secondhand smoke is a serious health hazard for babies and children. It increases the risk of SIDS, respiratory infections, ear infections, asthma, and impaired lung development. Thirdhand smoke — the residue that clings to clothes, skin, furniture, and car interiors — also poses risks to babies who are held or who crawl on contaminated surfaces. The AAP strongly recommends that babies never be exposed to tobacco smoke, including vape aerosol. Smoking outside and changing clothes before holding the baby reduces but does not eliminate exposure.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are the most vulnerable to secondhand smoke. Exposure during this period is a significant SIDS risk factor. No level of secondhand smoke exposure is safe for newborns. If anyone in the household smokes, they should do so outdoors, wash hands, and change outer clothing before handling the baby. Ideally, smoking cessation should be pursued.',
    },
    {
      ageRange: '3-6 months',
      context:
        'SIDS risk from smoke exposure remains elevated. Babies exposed to secondhand smoke are more likely to develop bronchiolitis, pneumonia, and ear infections. Ensure the baby\'s sleep environment is completely smoke-free. Do not allow smoking in the car even with windows open.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile and mouth objects, thirdhand smoke on surfaces, clothing, and furniture becomes an additional concern. Crawling babies are especially exposed to contaminated carpets and floors. Regular cleaning and smoke-free indoor environments are essential.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers exposed to secondhand smoke have higher rates of asthma, respiratory infections, and ear infections. If you are unable to eliminate smoke exposure entirely, minimize it by ensuring all smoking occurs outdoors, maintaining smoke-free cars and indoor spaces, and cleaning surfaces regularly. Discuss smoking cessation resources with your healthcare provider.',
    },
  ],
  whenNormal: [
    'You have established a completely smoke-free home and car environment for your baby',
    'Smokers in the family smoke outdoors and wash hands and change clothes before holding the baby',
    'You are working toward eliminating all smoke exposure and seeking resources for cessation',
    'Your baby has no respiratory symptoms and you have minimized exposure as much as possible',
  ],
  whenToMention: [
    'Your baby is frequently exposed to secondhand smoke and is developing recurrent ear infections, coughs, or wheezing',
    'You are struggling to maintain smoke-free boundaries with family members or household members',
    'You need support for smoking cessation — your pediatrician can provide resources and referrals',
  ],
  whenToActNow: [
    'Your baby is having difficulty breathing — wheezing, rapid breathing, or blue-tinged lips — whether or not it is related to smoke exposure',
    'Your child has ingested a cigarette, nicotine pouch, vape liquid, or nicotine patch — this is a poisoning emergency, call Poison Control (1-800-222-1222) immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'air-quality-pollution-baby-health',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Dangers of Secondhand Smoke. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/tobacco/Pages/Dangers-of-Secondhand-Smoke.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Health Effects of Secondhand Smoke.',
      url: 'https://www.cdc.gov/tobacco/secondhand-smoke/health.html',
    },
  ],
};
