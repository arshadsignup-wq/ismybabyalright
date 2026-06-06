import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-changing-frequency',
  title: 'How Often Can I Switch Formulas?',
  category: 'feeding',
  searchTerms: ['how often change formula', 'switching formula too much', 'changing formula frequency', 'formula hopping', 'trying different formulas', 'when to change formula', 'formula switching guidelines', 'how long try formula before switching', 'constant formula changes baby', 'formula trial period'],
  quickAnswer: 'There is no strict rule on how often you can switch formulas, but pediatricians generally recommend giving a new formula at least 1-2 weeks before deciding it is not working, unless baby has a serious reaction. Frequent switching can make it harder to identify what works. If you are considering switching due to fussiness or gas, know that these are common in all babies regardless of formula.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns often have digestive symptoms like gas, fussiness, and spit-up regardless of formula type. Give a new formula at least 2 weeks before switching, as baby\'s digestive system needs time to adjust. If baby has a serious reaction like bloody stool, hives, or vomiting, switch immediately and contact your pediatrician.' },
    { ageRange: '4-6 months', context: 'If you have been switching formulas frequently, try settling on one for at least 2-3 weeks. Many symptoms parents attribute to formula intolerance are normal infant behaviors that improve with age.' },
    { ageRange: '6-9 months', context: 'With the introduction of solids, digestive changes are common and may not be related to formula at all. Avoid switching formula and changing diet simultaneously so you can identify the cause of any issues.' },
    { ageRange: '9-12 months', context: 'Most babies do well on standard formula by this age. If your baby has been on a specialty formula, discuss with your pediatrician whether transitioning is appropriate as you approach 12 months.' },
    { ageRange: '12-24 months', context: 'Most toddlers transition from formula to whole milk around 12 months. If your toddler is on a specialty formula, your pediatrician will guide the transition.' },
  ],
  whenNormal: ['Baby has mild fussiness or gas with a new formula that improves within 1-2 weeks', 'You switch once from one standard formula to another', 'Baby adjusts to new formula within a few days'],
  whenToMention: ['You have switched formulas multiple times and baby still seems uncomfortable', 'You are unsure which formula is right for your baby', 'Baby has ongoing symptoms like excessive spit-up or constipation on every formula tried'],
  whenToActNow: ['Baby has blood in stool, hives, or vomiting after starting a new formula', 'Baby has an anaphylactic reaction to formula'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['formula-intolerance-signs', 'formula-type-transitions', 'switching-formula-brands'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choosing an Infant Formula. HealthyChildren.org, 2024.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Choosing-an-Infant-Formula.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Infant Formula Intolerance and Switching Practices. Clinical Pediatrics, 2020.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
