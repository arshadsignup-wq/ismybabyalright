import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cough-medicine-not-recommended',
  title: 'Why Can\'t I Give My Baby Cough Medicine?',
  category: 'medical',
  searchTerms: [
    'cough medicine baby not safe',
    'why no cough medicine babies',
    'cough syrup baby danger',
    'OTC cough medicine baby',
    'baby cough medicine age',
    'cough suppressant infant safe',
    'cold medicine baby warning',
    'baby too young cough medicine',
    'honey for cough instead of medicine baby',
    'natural cough remedies baby safe',
  ],
  quickAnswer:
    'Over-the-counter cough and cold medicines are NOT recommended for children under age 4 (and many experts recommend waiting until age 6). The FDA and AAP advise against them because they have not been shown to be effective in young children, and they carry serious risks of overdose, side effects, and even death. Safe alternatives include saline drops, humidifiers, honey (over 12 months), and extra fluids.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Absolutely no over-the-counter cough or cold medicines should be given to babies this young. These products can cause serious harm including sedation, breathing problems, and even death. If your very young baby has a cough, consult your pediatrician. The only safe interventions are saline drops, gentle suctioning, humidifier, and ensuring adequate feeding.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Cough and cold medicines remain completely off-limits. Many combination products contain multiple active ingredients that increase the risk of overdose. Even "natural" or "homeopathic" cough products may contain honey (dangerous before age 1) or other potentially harmful ingredients. Stick with doctor-approved methods like saline, suctioning, and humidifier.',
    },
    {
      ageRange: '6-12 months',
      context:
        'OTC cough medicines are still not safe. Studies show these products do not reduce cough frequency or duration in young children. Coughing is actually a protective reflex that helps clear mucus from the airways. Suppressing cough in babies can lead to mucus buildup and potentially worsen respiratory infections.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Cough and cold medicines are not recommended before age 4. However, honey (for children over 12 months) has been shown in studies to be as effective as many OTC cough suppressants. Give 1/2 to 1 teaspoon of honey as needed. Other safe options include warm liquids, humidifier, and elevating the head during sleep.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Continue to avoid OTC cough and cold medicines until at least age 4. Warm honey-lemon water, chicken broth, popsicles, and humidified air remain the safest and most effective approaches. If your child\'s cough is severe enough that you feel medicine is needed, call your pediatrician who can prescribe appropriate treatment if warranted.',
    },
  ],
  whenNormal: [
    'Your baby has a cough from a cold that gradually improves over 1-3 weeks without medicine',
    'Home remedies like saline drops, humidifier, and honey (over age 1) provide adequate relief',
    'Your baby coughs occasionally but is otherwise eating, sleeping, and playing well',
  ],
  whenToMention: [
    'Your baby\'s cough is severe enough that you feel medicine is needed, as your pediatrician may prescribe a specific treatment',
    'You are unsure which home remedies are safe for your baby\'s age',
    'You accidentally gave your baby a cough medicine and want guidance',
  ],
  whenToActNow: [
    'Your baby accidentally ingested cough or cold medicine - call Poison Control (1-800-222-1222) immediately',
    'Your baby has a cough with difficulty breathing, wheezing, high fever, or signs of respiratory distress that is not manageable with home remedies',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-cough-types-meaning',
    'baby-nasal-congestion-relief-methods',
    'baby-medication-administration-tips',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Use Caution When Giving Cough and Cold Products to Kids.',
      url: 'https://www.cdc.gov/medication-safety/parents-caregivers/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Honey for cough in children. Cochrane Systematic Review.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29633783/',
    },
  ],
};
