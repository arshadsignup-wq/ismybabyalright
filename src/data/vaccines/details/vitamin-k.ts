import type { VaccineDetail } from '../detail-types';

export const vaccine: VaccineDetail = {
  slug: 'vitamin-k',
  name: 'Vitamin K Injection',
  abbreviation: 'Vit K',
  diseasePrevented: ['Vitamin K Deficiency Bleeding (VKDB)', 'Early VKDB (within 24 hours of birth)', 'Classic VKDB (1-7 days after birth)', 'Late VKDB (2-12 weeks after birth)'],
  howItWorks: 'Vitamin K is essential for blood clotting. All newborns are born with very low levels of vitamin K because it does not cross the placenta well and the newborn gut has not yet been colonized by bacteria that produce it. A single intramuscular injection of vitamin K (phytonadione) provides an immediate supply that is stored in the liver and slowly released over weeks to months, preventing potentially fatal bleeding.',
  schedule: [
    { dose: 1, age: 'Birth (single intramuscular injection within the first 6 hours of life)' },
  ],
  ingredients: ['Phytonadione (vitamin K1) — 1mg for full-term infants', 'Polyoxyethylated fatty acid derivative (solubilizer)', 'Dextrose', 'Benzyl alcohol (0.9% as preservative in some formulations)', 'Water for injection'],
  brands: [
    { name: 'Phytonadione Injection', manufacturer: 'Various (Hospira, American Regent)' },
    { name: 'AquaMEPHYTON', manufacturer: 'Merck (discontinued but historically significant)' },
  ],
  commonSideEffects: [
    'Brief pain at injection site',
    'Small bruise at injection site',
    'Temporary fussiness from the injection',
    'Note: There are essentially no systemic side effects from vitamin K injection in newborns',
  ],
  seriousReactions: [
    'Allergic reactions — extremely rare in neonates',
    'No confirmed link to childhood leukemia or any cancer (this was thoroughly studied and disproven)',
    'No confirmed link to jaundice at the standard 1mg dose',
  ],
  contraindications: [
    'There are NO absolute contraindications to vitamin K administration in newborns',
    'Known hypersensitivity to any component of the formulation (extraordinarily rare in neonates)',
    'Note: Prematurity is NOT a contraindication; premature infants may receive adjusted doses',
  ],
  effectivenessRate: 'A single intramuscular dose of vitamin K at birth is virtually 100% effective at preventing all forms of VKDB. Without vitamin K prophylaxis, late VKDB occurs in approximately 4-7 per 100,000 births, with a mortality rate of 20-50% and permanent brain damage in many survivors.',
  commonMyths: [
    { myth: 'The vitamin K shot causes childhood leukemia', fact: 'This myth originated from a flawed 1992 study that was quickly refuted. Over a dozen large, well-designed studies — including one with over 2 million children — have found NO association between vitamin K injection and any type of cancer. Every major medical organization worldwide recommends vitamin K at birth.' },
    { myth: 'Oral vitamin K drops are just as effective as the injection', fact: 'Oral vitamin K is significantly less reliable than injection. It requires multiple doses over weeks, absorption is variable, doses are easily missed or vomited, and it provides less protection against late VKDB. Countries that switched to oral vitamin K saw increases in late VKDB cases.' },
    { myth: 'Breastfed babies get enough vitamin K from breast milk', fact: 'Breast milk contains very low levels of vitamin K (approximately 1-4 mcg/L), which is insufficient to prevent VKDB. Exclusively breastfed babies who do not receive vitamin K at birth are at the highest risk for late VKDB, which can cause fatal brain hemorrhage.' },
    { myth: 'The injection contains toxic preservatives that harm newborns', fact: 'The amount of benzyl alcohol in the vitamin K injection (0.9%) is far below any level that could cause harm. The dose is tiny (0.5-1mL). Some formulations are preservative-free. The American Academy of Pediatrics confirms the injection is safe for all newborns.' },
  ],
  faqItems: [
    { question: 'Why do ALL babies need vitamin K at birth?', answer: 'All babies are born with extremely low vitamin K levels — only about 20-60% of adult levels. This is because vitamin K does not cross the placenta efficiently and the newborn gut lacks the bacteria that produce it. Without supplementation, babies are at risk for VKDB, which can cause uncontrollable bleeding in the brain, intestines, or other organs.' },
    { question: 'What is VKDB and how serious is it?', answer: 'Vitamin K Deficiency Bleeding (VKDB) causes uncontrolled bleeding in newborns. Late VKDB (2-12 weeks of age) most commonly causes bleeding in the brain (intracranial hemorrhage), which has a 20-50% mortality rate and leaves many survivors with permanent brain damage. The vitamin K injection virtually eliminates this risk.' },
    { question: 'Can I delay or refuse the vitamin K shot?', answer: 'Medical organizations strongly recommend against refusing or delaying vitamin K. Late VKDB typically occurs without warning between 2-12 weeks of age. By the time symptoms appear (bruising, bloody stool, seizures from brain bleeding), permanent damage may already have occurred. There is no medical reason to delay the injection.' },
    { question: 'Is the vitamin K shot given in the leg?', answer: 'Yes. The injection is given intramuscularly (IM) in the front of the baby\'s thigh (anterolateral thigh) shortly after birth. The needle is small, and the procedure takes only seconds. Skin-to-skin contact and breastfeeding immediately after can help comfort the baby.' },
  ],
  sources: [
    { org: 'AAP', citation: 'AAP. Controversies Concerning Vitamin K and the Newborn. Pediatrics. 2003;112(1):191-192.', url: 'https://publications.aap.org/pediatrics/article/112/1/191/28639' },
    { org: 'CDC', citation: 'CDC. Vitamin K Deficiency Bleeding (VKDB) in Infants.', url: 'https://www.cdc.gov/ncbddd/vitamink/index.html' },
    { org: 'WHO', citation: 'WHO. Vitamin K Prophylaxis in Newborns. e-Library of Evidence for Nutrition Actions.', url: 'https://www.who.int/tools/elena/interventions/vitamink-newborns' },
  ],
};
