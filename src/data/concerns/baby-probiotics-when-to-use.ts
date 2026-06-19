import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-probiotics-when-to-use',
  title: 'Baby Probiotics: When and Whether to Use Them',
  category: 'digestive',
  searchTerms: [
    'baby probiotics when to use',
    'probiotics for infant colic',
    'should I give my baby probiotics',
    'infant probiotics safe',
    'probiotics for baby constipation',
    'Lactobacillus reuteri for colic',
    'probiotics breastfed baby',
    'best probiotics for newborns',
    'probiotics for baby diarrhea',
    'when to start probiotics for baby',
  ],
  quickAnswer:
    'Probiotics are live beneficial bacteria that may help with specific infant digestive issues, but the evidence is mixed and their use should generally be discussed with your pediatrician. The strongest evidence supports Lactobacillus reuteri DSM 17938 for reducing crying time in breastfed infants with colic — a 2018 meta-analysis in Pediatrics found it reduced crying by about 50 minutes per day compared to placebo. Evidence for constipation and diarrhea prevention is less robust. The AAP has not issued a blanket recommendation for routine probiotic use in healthy infants, citing the need for more research on strain-specific effects, optimal dosing, and long-term safety. Probiotics should not be given to premature infants or immunocompromised babies without medical supervision.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is the peak period for infant colic, and where probiotic research is strongest. Lactobacillus reuteri DSM 17938 has the best evidence for breastfed colicky infants, with multiple randomized controlled trials showing benefit. The typical dose studied is 10⁸ CFU (100 million colony-forming units) daily. Evidence in formula-fed colicky infants is less clear. Always consult your pediatrician before starting any probiotic in a young infant.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As colic typically resolves by 3-4 months, the primary reason to consider probiotics may shift. Some pediatricians recommend probiotics during or after antibiotic use to help restore gut flora, though evidence specifically in this age group is limited. If your baby had colic and benefited from probiotics, your doctor may suggest continuing or tapering off.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With the introduction of solid foods, the gut microbiome undergoes significant changes naturally. Some parents consider probiotics to ease the digestive transition. Limited evidence suggests certain strains may help with acute gastroenteritis (stomach bug) duration, reducing diarrheal illness by about 1 day according to a Cochrane review. Probiotic-containing foods like yogurt can be introduced around 6 months.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers develop a more diverse gut microbiome through varied diet. Probiotic supplementation is generally unnecessary for healthy toddlers eating a balanced diet. Situations where a pediatrician might recommend probiotics include recurrent diarrheal illness, during antibiotic courses, or specific GI conditions like irritable bowel symptoms.',
    },
  ],
  whenNormal: [
    'Choosing not to give your baby probiotics — they are not required for healthy infants',
    'Baby having gas, occasional fussiness, or stool changes without probiotics',
    'Your pediatrician suggesting a wait-and-see approach rather than recommending probiotics',
    'Mild gas or temporary stool changes when first starting a probiotic',
  ],
  whenToMention: [
    'You are considering starting a probiotic and want guidance on appropriate strains and dosing',
    'Baby has colic (crying more than 3 hours/day, 3 days/week) and you want to discuss probiotic options',
    'Baby is on antibiotics and you want to discuss whether probiotics might help prevent diarrhea',
    'Baby has recurrent digestive issues like constipation or loose stools',
  ],
  whenToActNow: [
    'Baby develops a rash, hives, or breathing difficulty after taking a probiotic — this could indicate an allergic reaction',
    'Premature or immunocompromised baby develops fever, bloating, or feeding intolerance while on probiotics',
    'Baby has bloody stools, high fever, or signs of serious infection while taking any supplement',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-gas-drops-simethicone',
    'constipation',
    'baby-diarrhea-after-antibiotics',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Probiotics in Food. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/nutrition/Pages/Probiotics-in-Food.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Probiotics: What You Need To Know. NCCIH.',
      url: 'https://www.nccih.nih.gov/health/probiotics-what-you-need-to-know',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Probiotics in food: Health and nutritional properties and guidelines for evaluation. FAO/WHO Report.',
      url: 'https://www.who.int/publications/i/item/9241594012',
    },
  ],
};
