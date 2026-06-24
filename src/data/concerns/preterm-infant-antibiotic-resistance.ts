import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preterm-infant-antibiotic-resistance',
  title: 'Antibiotic Resistance Concerns in Preterm Infants',
  category: 'medical',
  searchTerms: [
    'preterm infant antibiotic resistance',
    'NICU antibiotic overuse',
    'premature baby antibiotic risks',
    'antibiotic resistant bacteria baby',
    'NICU infection antibiotic',
    'premature baby gut bacteria antibiotics',
    'antibiotic stewardship NICU',
    'preemie antibiotic side effects',
    'neonatal antibiotic resistance',
    'MRSA NICU baby',
  ],
  quickAnswer:
    'Preterm infants in the NICU frequently receive antibiotics because of their high susceptibility to life-threatening infections. However, research shows that prolonged or unnecessary antibiotic use in preterm infants is associated with antibiotic-resistant organisms, disrupted gut microbiome development, and increased risks of necrotizing enterocolitis, late-onset sepsis, and death. NICU antibiotic stewardship programs aim to ensure antibiotics are used only when truly needed, for the shortest effective duration.',
  byAge: [
    {
      ageRange: 'Birth to 72 hours',
      context:
        'Many preterm infants receive empiric antibiotics (typically ampicillin and gentamicin) at birth because early-onset sepsis can be difficult to distinguish from normal prematurity-related illness. Blood cultures are drawn before starting antibiotics. If cultures remain negative at 36-48 hours and the baby is clinically well, antibiotics should be discontinued. Prolonging antibiotics "just in case" when cultures are negative and the baby is stable provides no benefit and increases harm. Parents can ask about the plan to reassess antibiotics at 48 hours.',
    },
    {
      ageRange: 'NICU stay',
      context:
        'During the NICU stay, preterm infants may receive multiple courses of antibiotics for suspected infections. Each course disrupts the developing gut microbiome, which plays a critical role in immune development, nutrition absorption, and protection against harmful bacteria. Research has shown that each additional day of empiric antibiotics in the NICU is associated with increased risk of necrotizing enterocolitis, fungal infections, and antibiotic-resistant organisms. Ask your NICU team about their antibiotic stewardship practices.',
    },
    {
      ageRange: 'After NICU discharge',
      context:
        'After discharge, preemies who received extensive antibiotics in the NICU may have a less diverse gut microbiome. Breastfeeding, if possible, is one of the most effective ways to help restore healthy gut bacteria. Probiotics may be discussed with your pediatrician, though evidence is still evolving. If your child needs antibiotics for infections after discharge, the same principles apply: use them when needed, for the appropriate duration, and discuss narrow-spectrum options when possible. The gut microbiome can take months to recover after antibiotic courses.',
    },
  ],
  whenNormal: [
    'Your preterm baby received a short course (48-72 hours) of antibiotics at birth while infection was being ruled out',
    'Antibiotics were stopped after blood cultures came back negative and your baby was clinically well',
    'Your pediatrician discusses the risks and benefits before prescribing antibiotics after discharge',
  ],
  whenToMention: [
    'You are concerned about the number or duration of antibiotic courses your baby has received in the NICU',
    'You want to discuss the role of probiotics or breastmilk in supporting your baby\'s gut health after antibiotics',
    'Your baby has recurrent infections after NICU discharge and you are worried about antibiotic resistance',
    'You want to understand your NICU\'s antibiotic stewardship policies',
  ],
  whenToActNow: [
    'Your baby shows signs of infection (fever, lethargy, poor feeding, irritability) and needs prompt evaluation',
    'Your baby has a known antibiotic-resistant infection and symptoms are worsening despite treatment',
    'Your baby develops severe abdominal distension, bloody stools, or feeding intolerance, which could indicate necrotizing enterocolitis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'premature-baby-immune-system-fragile',
    'probiotic-breastfed-infant-gut-health',
    'preterm-birth-long-term-health-effects',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Antibiotic Stewardship in Neonates. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/146/2/e20201754/36950/Antibiotic-Stewardship-in-the-Neonatal-Intensive',
    },
    {
      org: 'NIH',
      citation:
        'Cantey JB, Patel SJ. Antimicrobial Stewardship in the NICU. Infection Control & Hospital Epidemiology, 2015.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26608238/',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Antimicrobial Resistance: Global Report. WHO, 2024.',
      url: 'https://www.who.int/health-topics/antimicrobial-resistance',
    },
  ],
};
