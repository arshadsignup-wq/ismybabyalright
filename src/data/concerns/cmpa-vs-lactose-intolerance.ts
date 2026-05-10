import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cmpa-vs-lactose-intolerance',
  title: 'CMPA vs Lactose Intolerance',
  category: 'feeding',
  searchTerms: [
    'cmpa vs lactose intolerance baby',
    'cow milk protein allergy baby',
    'baby lactose intolerant symptoms',
    'milk allergy vs intolerance infant',
    'cmpa symptoms breastfed baby',
    'dairy allergy baby signs',
    'baby reacting to milk formula',
    'cow milk allergy blood in stool',
  ],
  quickAnswer:
    "Cow's milk protein allergy (CMPA) and lactose intolerance are different conditions often confused by parents. CMPA is an immune reaction to proteins in cow's milk causing symptoms like blood in stool, eczema, vomiting, and fussiness. Lactose intolerance is the inability to digest the sugar in milk and is extremely rare in babies under 1 year. Most formula-fed babies with digestive issues have CMPA, not lactose intolerance.",
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        "CMPA can appear in the first weeks of life, even in exclusively breastfed babies, as cow's milk proteins can pass through breast milk. Symptoms include blood or mucus in stool, excessive fussiness, eczema, and vomiting. True lactose intolerance (congenital) is extremely rare at this age. If you suspect a reaction, your pediatrician may recommend a maternal dairy elimination diet or a switch to extensively hydrolyzed formula.",
    },
    {
      ageRange: '3-6 months',
      context:
        "CMPA symptoms may become more apparent as feeding volumes increase. Your baby may show persistent eczema, reflux that doesn't improve, loose stools with mucus or blood, or failure to gain weight appropriately. Temporary lactose intolerance can sometimes occur after a stomach bug at this age but resolves on its own. Talk to your pediatrician before switching formulas.",
    },
    {
      ageRange: '6-12 months',
      context:
        "As solids are introduced, CMPA may become more obvious if your baby reacts to yogurt, cheese, or other dairy products. Some babies with CMPA also react to soy. Your pediatrician may recommend allergy testing or a supervised oral food challenge. Many children outgrow CMPA by age 1, so periodic reassessment is important.",
    },
    {
      ageRange: '12 months+',
      context:
        "Many children outgrow CMPA between 1-3 years of age. Your pediatrician may suggest a supervised milk challenge to see if your child has developed tolerance. Secondary lactose intolerance can occasionally develop after gastroenteritis in toddlers but is temporary. If symptoms persist, an allergist referral is appropriate for comprehensive testing.",
    },
  ],
  whenNormal: [
    'Baby has occasional fussiness or gas after feeding but is gaining weight well',
    'Baby has mild spit-up without blood, rash, or excessive distress',
    'Baby has loose stools during a stomach virus that resolve within a few days',
    'Toddler has mild gassiness after large amounts of dairy without other symptoms',
  ],
  whenToMention: [
    'Baby has persistent eczema or rash that seems related to feeding',
    'Baby is frequently fussy after feedings and not gaining weight well',
    'You notice mucus or flecks of blood in your baby\'s stool',
  ],
  whenToActNow: [
    'Baby has severe vomiting with lethargy or signs of dehydration after feeding',
    'Baby develops hives, facial swelling, or difficulty breathing after consuming dairy -- call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cow\'s Milk Allergy in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Milk-Allergy-in-Infants.aspx',
    },
    {
      org: 'NIAID',
      citation:
        'National Institute of Allergy and Infectious Diseases. Food Allergy: An Overview. NIH Publication.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy',
    },
  ],
};
