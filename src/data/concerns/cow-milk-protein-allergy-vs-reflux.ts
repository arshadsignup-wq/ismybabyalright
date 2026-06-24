import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cow-milk-protein-allergy-vs-reflux',
  title: 'Cow\'s Milk Protein Allergy vs. Reflux in Babies',
  category: 'digestive',
  searchTerms: [
    'cow milk protein allergy baby',
    'CMPA vs reflux',
    'milk allergy baby symptoms',
    'baby allergic to milk',
    'dairy allergy baby',
    'cow milk intolerance infant',
    'CMPA breastfed baby',
    'milk protein allergy reflux difference',
    'blood in stool milk allergy',
    'baby fussy milk allergy or reflux',
    'CMPA formula',
  ],
  quickAnswer:
    'Cow\'s milk protein allergy (CMPA) and gastroesophageal reflux (GER) can look very similar in babies, with shared symptoms like fussiness, spitting up, and feeding difficulties. CMPA affects about 2-3% of infants and involves an immune response to cow\'s milk proteins in formula or passed through breast milk. Key distinguishing features of CMPA include blood or mucus in stool, eczema, and symptoms that improve with dairy elimination. Proper diagnosis matters because treatments differ significantly.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Both CMPA and reflux commonly present during this period. Reflux (GER) is very common, affecting up to 50% of infants, and typically involves painless spitting up with good weight gain. CMPA may present with fussiness, blood-streaked or mucusy stools, eczema, and feeding refusal. In breastfed babies, CMPA symptoms may improve when the mother eliminates dairy from her diet (allow 2-4 weeks for full clearance). In formula-fed babies, switching to an extensively hydrolyzed formula or amino acid-based formula may be recommended.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If symptoms have not improved with reflux management (positioning, smaller frequent feeds), CMPA should be considered. A trial elimination of cow\'s milk protein (maternal dairy-free diet for breastfed babies, or hypoallergenic formula) for 2-4 weeks with symptom monitoring is the standard diagnostic approach. Skin prick testing and blood tests have limited accuracy for CMPA in this age group. If symptoms clearly improve with elimination and return with reintroduction, the diagnosis is confirmed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most physiologic reflux improves significantly between 6-12 months as babies start solids and spend more time upright. If symptoms persist and CMPA is confirmed, dairy-containing solids should be avoided. Many babies with CMPA also react to soy protein (up to 50% cross-reactivity). Work with your pediatrician or an allergist to plan a safe introduction of complementary foods. Most children outgrow CMPA by ages 1-3, and supervised reintroduction (often called a milk ladder) can be attempted under medical guidance.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Many children with CMPA begin tolerating baked milk (in muffins, cookies) before they can tolerate unheated dairy, as the heat alters the protein structure. A supervised "milk ladder" starting with well-baked dairy and gradually progressing to less processed forms can be used. About 80% of children outgrow CMPA by age 3-5. If your child has severe reactions (immediate allergic responses like hives, vomiting, or breathing difficulty), reintroduction should be done in an allergist\'s office.',
    },
  ],
  whenNormal: [
    'Your baby spits up occasionally but is gaining weight well and is generally content (likely normal reflux).',
    'You tried a dairy elimination diet, symptoms improved, and your pediatrician agrees the diagnosis is CMPA.',
    'Your child with confirmed CMPA is growing well on a hypoallergenic formula or dairy-free diet.',
  ],
  whenToMention: [
    'Your baby has blood or mucus in their stool, persistent eczema, or chronic fussiness with feeding.',
    'Reflux treatments have not improved your baby\'s symptoms and you wonder if CMPA could be the cause.',
    'You are struggling with a dairy elimination diet and need guidance on nutrition for yourself and your baby.',
  ],
  whenToActNow: [
    'Your baby has an immediate allergic reaction after ingesting dairy: hives, facial swelling, vomiting, difficulty breathing (anaphylaxis).',
    'Your baby is losing weight, is persistently refusing to feed, or has large amounts of blood in their stool.',
    'Your baby with suspected CMPA appears dehydrated: sunken fontanelle, no tears, decreased wet diapers.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['food-allergy-anaphylaxis-emergency-children', 'mucus-in-stool', 'blood-in-diaper-newborn', 'formula-constipation-hard-stools'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cow\'s Milk Allergy in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Milk-Allergy.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Food Allergy: An Overview. NIAID, 2022.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/food-allergy',
    },
    {
      org: 'AAP',
      citation:
        'Koletzko S, et al. Diagnostic Approach and Management of Cow\'s-Milk Protein Allergy in Infants. Journal of Pediatric Gastroenterology and Nutrition, 2012.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22249815/',
    },
  ],
};
