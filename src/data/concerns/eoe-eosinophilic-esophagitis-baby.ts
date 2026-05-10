import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'eoe-eosinophilic-esophagitis-baby',
  title: 'Eosinophilic Esophagitis (EoE)',
  category: 'feeding',
  searchTerms: [
    'eosinophilic esophagitis baby',
    'EoE in infants',
    'baby refusing food eosinophilic',
    'baby vomiting EoE',
    'eosinophilic esophagitis symptoms baby',
    'baby difficulty swallowing EoE',
    'allergic esophagitis infant',
    'EoE diagnosis baby',
  ],
  quickAnswer:
    'Eosinophilic esophagitis (EoE) is a chronic allergic condition where white blood cells (eosinophils) build up in the lining of the esophagus, causing inflammation and swelling. In babies, it can cause feeding difficulties, vomiting, poor weight gain, and irritability. EoE is diagnosed by endoscopy with biopsy and is managed with dietary elimination, medications, or a combination of both.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'EoE is uncommon but possible in very young infants. Symptoms may mimic severe reflux and include frequent vomiting, feeding refusal, arching during feeds, and poor weight gain that does not respond to standard reflux treatment. If your baby has persistent feeding difficulties that do not improve with reflux medication or formula changes, your pediatrician may consider a referral to a pediatric gastroenterologist.',
    },
    {
      ageRange: '3-6 months',
      context:
        "Babies with EoE may show increasing feeding aversion, significant spit-up or vomiting, and failure to thrive. They may be particularly fussy during or after feeds. Unlike typical reflux which improves with age, EoE symptoms may persist or worsen. If your baby isn't responding to standard reflux treatment, ask your pediatrician about further evaluation.",
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, EoE may become more apparent. Babies may gag, choke, or refuse textured foods. Vomiting may increase with the introduction of specific foods. Many children with EoE also have other allergic conditions like eczema, food allergies, or asthma. Diagnosis requires an upper endoscopy with biopsies showing elevated eosinophils in the esophageal tissue.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with EoE may refuse to eat, prefer liquids over solids, vomit frequently, or have episodes of food becoming stuck (impaction). They may self-limit to soft, easy-to-swallow foods. Treatment options include proton pump inhibitors, swallowed topical corticosteroids, and dietary elimination of trigger foods. Regular monitoring with endoscopy is typically needed to assess treatment response.',
    },
  ],
  whenNormal: [
    'Baby has occasional spit-up that is not forceful and is gaining weight well',
    'Baby gags occasionally when learning to eat new textures during solid food introduction',
    'Baby goes through brief phases of preferring certain foods over others',
    'Baby has mild reflux that improves with age and positioning changes',
  ],
  whenToMention: [
    'Baby has persistent vomiting or reflux that does not respond to standard reflux treatment',
    'Baby is refusing feeds, eating very little, or not gaining weight appropriately',
    'Baby has other allergic conditions (eczema, food allergies) and ongoing feeding difficulties',
  ],
  whenToActNow: [
    'Baby or toddler has food stuck in the esophagus and cannot swallow or is drooling excessively -- seek emergency care',
    'Baby is severely dehydrated from persistent vomiting with sunken fontanelle, no tears, or very few wet diapers',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Eosinophilic Esophagitis. NIDDK, NIH.',
      url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/eosinophilic-esophagitis',
    },
    {
      org: 'ACAAI',
      citation:
        'American College of Allergy, Asthma & Immunology. Eosinophilic Esophagitis. ACAAI.',
      url: 'https://acaai.org/allergies/allergic-conditions/eosinophilic-esophagitis/',
    },
  ],
};
