import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eosinophilic-esophagitis-signs',
  title: 'Eosinophilic Esophagitis (EoE) Signs in Baby',
  category: 'digestive',
  searchTerms: [
    'baby eosinophilic esophagitis',
    'baby eoe symptoms',
    'infant eosinophilic esophagitis',
    'baby eoe signs',
    'baby allergic esophagitis',
    'baby difficulty swallowing food',
    'baby food getting stuck',
    'toddler eoe',
    'eosinophilic esophagitis child',
    'baby reflux not improving eoe',
  ],
  quickAnswer:
    'Eosinophilic esophagitis (EoE) is an allergic inflammatory condition of the esophagus that can mimic GERD but does not respond to acid-suppressing medication alone. In babies and toddlers, signs include feeding difficulties, poor weight gain, vomiting, reflux that does not improve with standard treatment, and food refusal. Diagnosis requires endoscopy with biopsies. Treatment involves dietary elimination or medication.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'EoE is difficult to diagnose in very young infants. Symptoms overlap heavily with GERD and CMPA. If your baby has severe reflux, poor feeding, and is not responding to standard reflux treatment or dairy elimination, EoE should be considered.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Persistent vomiting, feeding refusal, and poor weight gain despite appropriate GERD and CMPA management may suggest EoE. Back arching and irritability during feeds are common. If your pediatrician suspects EoE, referral to a pediatric gastroenterologist is appropriate.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, babies with EoE may have difficulty transitioning to textured foods. They may gag, vomit, or refuse foods with anything other than smooth textures. A history of eczema, food allergies, or asthma in the family raises the suspicion for EoE.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers with EoE may be very selective eaters, preferring soft or liquid foods. They may eat very slowly, have frequent vomiting, or complaint of tummy pain. Diagnosis requires endoscopy showing elevated eosinophils in the esophageal lining. Treatment usually involves eliminating trigger foods (commonly milk, wheat, egg, soy) or using swallowed topical steroids.',
    },
  ],
  whenNormal: [
    'Normal reflux that improves with standard management by 6 to 12 months',
  ],
  whenToMention: [
    'Reflux symptoms persist despite appropriate treatment including acid suppression and dietary elimination',
    'Your baby has difficulty transitioning to solid food textures',
    'Feeding problems with poor weight gain and a family history of allergic conditions',
  ],
  whenToActNow: [
    'Severe food impaction where food gets stuck in the esophagus and the child cannot swallow',
    'Significant weight loss or failure to thrive from feeding difficulties',
    'Your child is dehydrated from persistent vomiting and food refusal',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eosinophilic Esophagitis. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Eosinophilic-Esophagitis.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Eosinophilic Esophagitis.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/eosinophilic-esophagitis',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. EoE in Children. Journal of Allergy and Clinical Immunology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29524537/',
    },
  ],
  relatedConcernSlugs: ['reflux', 'baby-gerd-vs-milk-allergy', 'baby-food-intolerance-vs-allergy'],
};
