import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hypoallergenic-formula-when-needed',
  title: 'When Hypoallergenic Formula is Needed',
  category: 'feeding',
  searchTerms: [
    'hypoallergenic formula baby',
    'when to switch to hypoallergenic formula',
    'extensively hydrolyzed formula baby',
    'amino acid formula infant',
    'baby formula allergy',
    'nutramigen vs alimentum',
    'EleCare formula baby',
    'hydrolyzed formula for milk allergy',
    'baby needs special formula',
  ],
  quickAnswer:
    "Hypoallergenic formulas are specially designed for babies who cannot tolerate standard cow's milk or soy-based formulas due to allergies. Extensively hydrolyzed formulas (like Nutramigen or Alimentum) break milk proteins into tiny pieces that are less likely to trigger allergic reactions. Amino acid-based formulas (like EleCare or Neocate) are used for babies who react even to hydrolyzed formulas. These formulas require a prescription or pediatrician recommendation.",
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        "If your baby has confirmed or suspected cow's milk protein allergy (CMPA) with symptoms like blood in stool, severe eczema, persistent vomiting, or poor weight gain, your pediatrician may recommend an extensively hydrolyzed formula. For breastfed babies, a maternal dairy elimination diet is typically tried first. About 90-95% of babies with CMPA tolerate extensively hydrolyzed formula well.",
    },
    {
      ageRange: '3-6 months',
      context:
        "If your baby is on an extensively hydrolyzed formula but still has symptoms, your pediatrician may switch to an amino acid-based formula. These are the most hypoallergenic options available and are tolerated by virtually all babies with milk protein allergy. Be aware that hypoallergenic formulas taste and smell different from regular formula -- some babies may initially resist the change.",
    },
    {
      ageRange: '6-12 months',
      context:
        "As solids are introduced, continue the hypoallergenic formula as the primary milk source. Do not introduce cow's milk products without your pediatrician's guidance. Some babies with CMPA also react to soy, goat milk, or other animal milks. Work with your pediatrician or a pediatric dietitian to ensure your baby is getting adequate nutrition as they transition to more solid foods.",
    },
    {
      ageRange: '12 months+',
      context:
        "Many children outgrow CMPA between 12-24 months. Your pediatrician or allergist may suggest a supervised milk challenge to check for tolerance. If your child still needs a hypoallergenic formula, some brands offer toddler versions. Do not switch to regular cow's milk or a non-hypoallergenic alternative without medical guidance, as reactions can be severe in sensitized children.",
    },
  ],
  whenNormal: [
    'Baby is fussy or gassy on standard formula but is gaining weight and developing normally',
    'Baby occasionally spits up but is otherwise content and gaining weight well (a "happy spitter")',
    'Baby has mild eczema that responds to moisturizers and topical treatment',
    'Baby is going through a normal fussy period in the first three months',
  ],
  whenToMention: [
    'Baby has persistent blood or mucus in stool while on standard formula',
    'Baby has severe eczema, frequent vomiting, or poor weight gain on standard formula',
    'Baby has a family history of milk allergy and you want to discuss prevention',
  ],
  whenToActNow: [
    'Baby has severe vomiting with signs of dehydration (no wet diapers, sunken fontanelle, no tears)',
    'Baby develops anaphylaxis symptoms (hives, swelling, difficulty breathing) after formula feeding -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/formula-feeding/Pages/Choosing-an-Infant-Formula.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Milk Allergy. Diagnosis and Treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/milk-allergy/diagnosis-treatment/drc-20375107',
    },
  ],
};
