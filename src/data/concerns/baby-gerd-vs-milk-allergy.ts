import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-gerd-vs-milk-allergy',
  title: 'GERD vs Cow\'s Milk Protein Allergy',
  category: 'digestive',
  searchTerms: [
    'baby gerd vs milk allergy',
    'gerd or cmpa baby',
    'baby reflux or milk allergy',
    'cow milk protein allergy vs reflux',
    'baby cmpa gerd difference',
    'baby milk allergy reflux symptoms',
    'reflux caused by milk allergy',
    'baby spit up milk allergy',
    'gerd cmpa overlap baby',
    'dairy allergy reflux baby',
  ],
  quickAnswer:
    'GERD and cow\'s milk protein allergy (CMPA) share many overlapping symptoms including spitting up, fussiness, and poor feeding, making them difficult to distinguish. Up to 40% of infants referred for GERD symptoms actually have CMPA. A 2 to 4 week trial of eliminating cow\'s milk protein (maternal elimination for breastfed, hydrolyzed formula for formula-fed) can help determine if CMPA is the cause.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'CMPA symptoms often begin in the first weeks of life. Clues that suggest CMPA over simple reflux include blood or mucus in stool, eczema, and symptoms that worsen over time rather than following the typical reflux improvement pattern. If your baby has reflux symptoms plus skin or stool changes, discuss a CMPA evaluation with your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If reflux symptoms are not improving with standard reflux management, CMPA should be considered. A 2 to 4 week elimination trial is both diagnostic and therapeutic. For breastfed babies, the mother strictly eliminates all dairy. For formula-fed babies, switching to an extensively hydrolyzed formula is recommended.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, CMPA symptoms may change. Reacting to dairy-containing solids supports the diagnosis. Many children with CMPA can tolerate baked milk (in muffins, cakes) before tolerating raw milk, and your allergist can guide a ladder introduction.',
    },
    {
      ageRange: '12-24 months',
      context:
        'About 80% of children with CMPA outgrow it by age 3 to 5. Your pediatrician or allergist may recommend periodic oral food challenges to determine if the allergy has been outgrown. If reflux symptoms resolve with dairy elimination, it was likely CMPA all along.',
    },
  ],
  whenNormal: [
    'Mild reflux in a baby who is thriving and has no blood in stool or eczema',
  ],
  whenToMention: [
    'Reflux is not improving with standard management and you want to discuss a CMPA trial',
    'Your baby has reflux plus blood or mucus in stool',
    'Your baby has reflux plus moderate to severe eczema',
    'Reflux symptoms worsened when a new dairy-containing formula was introduced',
  ],
  whenToActNow: [
    'Severe vomiting with poor weight gain from either GERD or CMPA',
    'Significant blood in stool suggesting allergic colitis',
    'Acute allergic reaction with hives, swelling, or breathing difficulty after dairy exposure',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cow\'s Milk Allergy. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Milk-Allergy.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. GERD vs CMPA in Infants. Journal of Pediatric Gastroenterology and Nutrition.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25714681/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Reflux in Infants. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/GERD-Reflux.aspx',
    },
  ],
  relatedConcernSlugs: ['reflux', 'baby-reflux-vs-gerd-difference', 'baby-food-intolerance-vs-allergy', 'eczema-and-food-allergy-link'],
};
