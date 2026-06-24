import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-colic-gut-microbiome-link',
  title: 'Is My Baby\'s Colic Related to Gut Health?',
  category: 'digestive',
  searchTerms: [
    'colic gut microbiome baby',
    'colic probiotics evidence',
    'colic bacteria gut baby',
    'Lactobacillus reuteri colic',
    'colic gut inflammation baby',
    'microbiome colic link',
    'probiotics for colicky baby',
    'colic cause gut bacteria',
    'baby colic gut health treatment',
    'colic digestive system baby',
  ],
  quickAnswer:
    'Emerging research suggests a link between gut microbiome composition and infantile colic. Studies have found that colicky babies tend to have different gut bacteria profiles - specifically lower levels of Lactobacillus and higher levels of gas-producing bacteria. Some clinical trials show that the probiotic Lactobacillus reuteri DSM 17938 may reduce crying time in breastfed colicky babies. However, colic likely has multiple contributing factors, and probiotics are not a guaranteed solution for every baby.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Colic typically begins around 2-3 weeks of age (or 2-3 weeks after the due date for premature babies). During this early period, the newborn gut is being colonized by bacteria, and the composition of this colonization may influence digestive comfort. Breastfeeding supports the growth of beneficial bacteria through human milk oligosaccharides. If you are considering probiotics, discuss specific strains with your pediatrician - the evidence is strongest for L. reuteri DSM 17938 in breastfed infants.',
    },
    {
      ageRange: '6 weeks - 3 months',
      context:
        'This is typically the peak period for colic (defined as crying more than 3 hours a day, more than 3 days a week, for more than 3 weeks, in an otherwise healthy baby). Research shows that colicky babies may have elevated gut inflammation markers (calprotectin) and altered gut motility. While the microbiome is one piece of the puzzle, other factors including immature nervous system, temperament, and feeding dynamics also play a role. A multimodal approach - addressing feeding technique, parental stress, and potentially probiotics - is often most helpful.',
    },
    {
      ageRange: '3-5 months',
      context:
        'Colic almost always resolves by 4-5 months, which coincides with significant maturation of the gut microbiome and digestive system. As your baby\'s gut matures, the bacterial diversity increases and the gut barrier strengthens. If your baby\'s colic symptoms persist beyond 5 months, this may warrant further evaluation for other causes such as gastroesophageal reflux, cow\'s milk protein allergy, or other digestive issues rather than simple colic.',
    },
  ],
  whenNormal: [
    'Your baby has periods of intense crying in the evening but is otherwise healthy, feeding well, and gaining weight.',
    'Your baby\'s colic began around 2-3 weeks and follows a predictable pattern.',
    'Your baby has some gassiness and digestive discomfort but is growing normally.',
  ],
  whenToMention: [
    'Your baby\'s colic seems to be related to feeding - worsening after feeds or with formula changes.',
    'You are interested in trying probiotics for colic and want guidance on evidence-based strains and dosing.',
    'Your baby\'s colic has not improved by 4 months or is getting worse.',
  ],
  whenToActNow: [
    'Your colicky baby has blood in their stool, persistent vomiting, fever, or is refusing feeds.',
    'Your baby is not gaining weight or is losing weight despite adequate feeding.',
    'You are feeling overwhelmed by your baby\'s crying and are worried about your ability to cope safely - seek help immediately.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'antibiotic-use-infant-gut-damage',
    'excessive-gas-baby',
    'baby-excessive-hiccups-after-every-feed',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Colic Relief Tips for Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Colic.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Gut Microbiota and Infantile Colic. Journal of Pediatric Gastroenterology and Nutrition, 2017.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28644355/',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Lactobacillus reuteri for Infantile Colic: A Meta-Analysis. Pediatrics, 2018.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29279326/',
    },
  ],
};
