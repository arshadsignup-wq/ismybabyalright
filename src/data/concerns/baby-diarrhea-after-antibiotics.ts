import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-diarrhea-after-antibiotics',
  title: 'Antibiotic-Associated Diarrhea in Baby',
  category: 'digestive',
  searchTerms: [
    'baby diarrhea after antibiotics',
    'antibiotic diarrhea baby',
    'baby loose stool on antibiotics',
    'amoxicillin diarrhea baby',
    'baby poop change antibiotics',
    'baby diarrhea during antibiotics',
    'antibiotics causing diarrhea infant',
    'probiotic antibiotic diarrhea baby',
    'how long antibiotic diarrhea baby',
    'baby antibiotics gut health',
  ],
  quickAnswer:
    'Diarrhea during or after antibiotic use is very common in babies because antibiotics kill beneficial gut bacteria along with the infection-causing ones. It typically resolves within a few days of completing the antibiotic course. Probiotics (particularly Saccharomyces boulardii or Lactobacillus) may help reduce antibiotic-associated diarrhea when given alongside the medication.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Antibiotics are less commonly used in very young infants, but when necessary, diarrhea is a common side effect. Continue breastfeeding as it provides beneficial bacteria and helps maintain gut health. Contact your pediatrician if diarrhea is severe, as dehydration occurs quickly in young infants.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Amoxicillin, commonly prescribed for ear infections, frequently causes loose stools. The diarrhea is usually mild to moderate and resolves when the course is finished. Continue normal feeding. Some pediatricians recommend a probiotic during the antibiotic course to reduce diarrhea.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Antibiotic-associated diarrhea is common at this age due to frequent ear and respiratory infections requiring treatment. Maintain hydration and continue the full antibiotic course unless your pediatrician says otherwise. The gut microbiome typically recovers within 1 to 2 weeks after antibiotics end.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers on antibiotics commonly develop looser stools. Offering yogurt with live cultures and probiotic-rich foods can help support gut bacteria. If diarrhea persists more than 2 weeks after finishing antibiotics, or if it worsens during the course, contact your pediatrician to rule out Clostridioides difficile infection.',
    },
  ],
  whenNormal: [
    'Mildly looser stools during an antibiotic course that resolve within days of finishing',
    'A slight increase in stool frequency without dehydration or blood',
    'Diarrhea that improves progressively after the antibiotic course ends',
  ],
  whenToMention: [
    'Diarrhea is moderate and persistent throughout the antibiotic course',
    'You want to discuss whether a probiotic would be helpful',
    'Diarrhea continues for more than 2 weeks after completing antibiotics',
  ],
  whenToActNow: [
    'Severe watery diarrhea with blood or mucus during or after antibiotic use, which could indicate C. difficile colitis',
    'Signs of dehydration from antibiotic-associated diarrhea',
    'Severe abdominal pain with bloody diarrhea',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Probiotics and Antibiotics. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/doi/10.1542/peds.2018-3720/37784/',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Antibiotic-Associated Diarrhea in Children. Journal of Pediatrics.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25037575/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Antibiotic Use and Resistance.',
      url: 'https://www.cdc.gov/antibiotic-use/index.html',
    },
  ],
  relatedConcernSlugs: ['diarrhea', 'baby-probiotics-benefits-evidence', 'baby-toddler-diarrhea-chronic'],
};
