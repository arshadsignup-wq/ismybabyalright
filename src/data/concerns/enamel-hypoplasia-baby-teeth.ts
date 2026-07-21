import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'enamel-hypoplasia-baby-teeth',
  title: 'Enamel Hypoplasia (Thin or Pitted Tooth Enamel)',
  category: 'medical',
  searchTerms: [
    'enamel hypoplasia baby teeth',
    'baby teeth pitted',
    'baby teeth thin enamel',
    'baby teeth white spots',
    'baby teeth yellow spots',
    'baby teeth brown patches',
    'enamel defect baby teeth',
    'baby teeth discolored patches',
    'baby teeth rough surface',
    'weak enamel toddler teeth',
  ],
  quickAnswer:
    'Enamel hypoplasia is a developmental defect where tooth enamel is thinner or incompletely formed, appearing as white, yellow, or brown spots, pitting, or grooves on the tooth surface. It affects approximately 1 in 10 children to some degree. The condition occurs when enamel formation is disrupted during pregnancy or early infancy, potentially caused by prematurity, nutritional deficiencies, illness, or medication exposure. While enamel hypoplasia cannot be reversed, affected teeth need extra care because thin enamel is more vulnerable to cavities and sensitivity.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Enamel for baby teeth begins forming during pregnancy and continues after birth. Factors that can disrupt enamel development include maternal illness, certain medications, prematurity (especially very low birth weight), neonatal calcium or phosphorus imbalances, and intubation trauma. You will not see signs of enamel hypoplasia until teeth erupt, but if your baby had a complicated birth or NICU stay, mention this to your pediatrician and dentist so they can watch for enamel defects when teeth appear.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby\'s first teeth come in (usually the lower front teeth around 6 months), you may notice white, yellow, or brown discoloration, rough or pitted areas, or grooves on the enamel surface. These signs can be subtle on the front teeth but are often more noticeable on the molars. Begin brushing with a rice-grain-sized smear of fluoride toothpaste twice daily from the first tooth. Schedule your baby\'s first dental visit by age 1 or within 6 months of the first tooth.',
    },
    {
      ageRange: '12-36 months',
      context:
        'As more teeth erupt, the extent of enamel hypoplasia becomes clearer. The first baby molars (around 13-19 months) and second molars (around 25-33 months) may show more obvious defects. Teeth with enamel hypoplasia are significantly more prone to cavities because the thinner, rougher enamel is easier for bacteria to penetrate. Your pediatric dentist may recommend more frequent fluoride varnish applications, dental sealants on affected molars, or silver diamine fluoride to protect vulnerable teeth.',
    },
    {
      ageRange: '3+ years',
      context:
        'Continue vigilant dental care with regular dental visits every 3-6 months as recommended by your pediatric dentist. If cavities develop in teeth with enamel hypoplasia, they can progress quickly due to the thin enamel, so early treatment is important. Severely affected teeth may need crowns for protection. The good news is that enamel hypoplasia in baby teeth does not necessarily mean permanent teeth will be affected, though your dentist will monitor the permanent teeth as they develop.',
    },
  ],
  whenNormal: [
    'Your baby\'s teeth are smooth, white, and uniform in appearance',
    'Your child has a small white spot on one tooth that your dentist has evaluated and is monitoring',
    'Your child\'s teeth are slightly discolored but the dentist has confirmed the enamel is intact and structurally sound',
  ],
  whenToMention: [
    'You notice white, yellow, or brown patches on your baby\'s teeth that were present when the teeth first came in',
    'Your child\'s teeth appear pitted, rough, or have visible grooves in the enamel',
    'Your child seems to have tooth sensitivity to hot, cold, or sweet foods',
    'Your child was premature or had a NICU stay and you want their teeth evaluated for enamel defects',
  ],
  whenToActNow: [
    'Your child has a visible cavity (dark hole or broken area) in a tooth with enamel hypoplasia, as decay can progress rapidly in affected teeth',
    'Your child has a swollen gum, facial swelling, or persistent tooth pain, which could indicate a dental abscess',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['early-childhood-caries-prevention', 'baby-teeth-discolored-gray'],
  sources: [
    {
      org: 'AAPD',
      citation:
        'American Academy of Pediatric Dentistry. Guideline on Perinatal and Infant Oral Health Care.',
      url: 'https://www.aapd.org/research/oral-health-policies--recommendations/perinatal-and-infant-oral-health-care/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Healthy Teeth. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Dental and Craniofacial Research. Developmental Defects of Enamel. NIDCR, NIH.',
      url: 'https://www.nidcr.nih.gov/research/data-statistics/craniofacial-birth-defects',
    },
  ],
};
