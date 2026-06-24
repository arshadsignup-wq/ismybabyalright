import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'antibiotic-resistance-genes-newborn',
  title: 'Antibiotic Resistance Genes in Newborns',
  category: 'medical',
  searchTerms: [
    'antibiotic resistance baby',
    'newborn antibiotic resistant bacteria',
    'baby born with resistant genes',
    'antibiotic resistance breast milk',
    'MRSA newborn risk',
    'superbug baby concern',
    'antibiotic resistance passed to baby',
    'newborn gut bacteria resistance',
    'maternal antibiotics resistance baby',
    'antibiotic resistant infection newborn',
  ],
  quickAnswer:
    'Research shows that newborns can acquire antibiotic resistance genes through birth (vaginal flora), breast milk, hospital environments, and early antibiotic exposure. This does not mean your baby has an antibiotic-resistant infection - it means some of their gut bacteria carry genes that could potentially resist certain antibiotics. For most healthy babies, this is part of normal microbial colonization and does not cause problems.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Newborns acquire their first bacteria during and after birth. Babies born vaginally receive bacteria from the birth canal, while those born via C-section pick up more environmental and skin bacteria. If the mother received antibiotics during labor (such as for Group B Strep), the baby\'s initial gut colonization may include more resistant organisms. This is usually temporary, and a healthy microbiome typically establishes over the following weeks. Breast milk contains beneficial bacteria that help promote a healthier gut flora.',
    },
    {
      ageRange: '1-6 months',
      context:
        'The infant gut microbiome is rapidly developing during this period. If your baby needed antibiotics for an infection, some resistant bacteria may temporarily increase in their gut. This is generally self-correcting as the microbiome diversifies. Breastfeeding, when possible, provides prebiotics (human milk oligosaccharides) that support the growth of beneficial bacteria and can help restore microbial balance after antibiotic exposure.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin eating solid foods, their gut microbiome becomes more diverse and resilient. By this age, the concerns about antibiotic resistance genes from early life are generally diminishing as a healthy, diverse microbial community establishes itself. The best approach is to use antibiotics only when truly necessary and to support a healthy microbiome through diverse nutrition and avoiding unnecessary antimicrobial products.',
    },
  ],
  whenNormal: [
    'Your baby was exposed to antibiotics during delivery (such as maternal GBS prophylaxis) but is healthy and feeding well.',
    'Your baby needed a short course of antibiotics for a confirmed infection and recovered fully.',
    'Routine testing shows some resistant bacteria in your baby\'s stool but your baby has no signs of infection.',
  ],
  whenToMention: [
    'Your baby has had multiple courses of antibiotics in the first year and you want to discuss gut health support.',
    'Your baby has recurrent infections that do not respond well to first-line antibiotics.',
    'You are concerned about MRSA or other resistant organisms in your household or daycare setting.',
  ],
  whenToActNow: [
    'Your baby has a known antibiotic-resistant infection (such as MRSA) with worsening symptoms despite treatment.',
    'Your newborn develops signs of sepsis - fever, lethargy, poor feeding, rapid breathing, or mottled skin.',
    'Your baby has a wound or skin infection that is spreading rapidly, with increasing redness, warmth, and swelling.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'antibiotic-use-infant-gut-damage',
    'baby-colic-gut-microbiome-link',
    'rash-after-antibiotics',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Antibiotic Resistance Genes in the Infant Gut Microbiome. Nature Medicine, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30886409/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Antimicrobial Resistance: Global Report on Surveillance, 2022.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Antibiotic Stewardship in Pediatrics. Pediatrics, 2021.',
      url: 'https://publications.aap.org/pediatrics/article/147/1/e2020040295/33534',
    },
  ],
};
