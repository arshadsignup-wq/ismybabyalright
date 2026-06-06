import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pediatric-feeding-disorder-signs',
  title: 'When Is Picky Eating More Than Just a Phase?',
  category: 'feeding',
  searchTerms: ['pediatric feeding disorder', 'extreme picky eating', 'ARFID child', 'feeding disorder signs', 'picky eating vs feeding disorder', 'child eating disorder signs', 'when picky eating is serious', 'avoidant restrictive food intake', 'severe food selectivity', 'feeding therapy needed signs'],
  quickAnswer: 'Pediatric Feeding Disorder (PFD) is diagnosed when feeding difficulties impact nutrition, growth, or psychosocial functioning. Signs that picky eating may be more than a phase include eating fewer than 20 foods with a shrinking list, extreme distress around food, weight loss or growth failure, nutritional deficiencies, and significant family stress around mealtimes. Early intervention with a feeding team produces the best outcomes.',
  byAge: [
    { ageRange: '0-3 months', context: 'Feeding difficulties at this age, such as inability to latch, extreme fussiness during feeding, or poor weight gain, may be early signs of a feeding disorder. Discuss any feeding concerns with your pediatrician early.' },
    { ageRange: '4-6 months', context: 'Extreme difficulty transitioning to solids, severe gagging or vomiting with any solid food, or complete refusal of all solids by 7-8 months may warrant evaluation.' },
    { ageRange: '6-9 months', context: 'If baby shows no progress with textures, gags or vomits with most foods, or has an extremely limited acceptance of any solid foods, mention it to your pediatrician.' },
    { ageRange: '9-12 months', context: 'Red flags include inability to eat any textured food, severe food refusal that impacts weight gain, extreme distress during all meals, or accepting fewer than 10 foods.' },
    { ageRange: '12-24 months', context: 'PFD may be considered when a toddler eats very few foods (under 20) and the list is shrinking, has nutritional deficiencies, is not growing well, has extreme anxiety about food, or meals cause significant family distress daily.' },
  ],
  whenNormal: ['Child is picky but eats at least 20-30 foods across food groups', 'Child\'s food variety fluctuates but generally improves over time', 'Child is growing well despite selective eating'],
  whenToMention: ['Child eats fewer than 20 foods and the list is not expanding', 'Child has dropped previously accepted foods and diet is shrinking', 'Child shows extreme distress around food beyond normal neophobia', 'Child has nutritional deficiencies or is falling off their growth curve'],
  whenToActNow: ['Child is losing weight due to food refusal', 'Child has signs of malnutrition such as hair loss, easy bruising, or extreme fatigue', 'Child has severe anxiety about food that prevents eating enough to sustain health'],
  relatedMilestones: ['feeding'],
  showSelfReferral: true,
  relatedConcernSlugs: ['sensory-food-aversion', 'occupational-therapy-feeding', 'speech-therapy-feeding-swallowing'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Pediatric Feeding Disorder: Consensus Definition and Conceptual Framework. Journal of Pediatric Gastroenterology and Nutrition, 2019.', url: 'https://publications.aap.org/' },
    { org: 'NIH', citation: 'National Institutes of Health. Pediatric Feeding Disorder: Prevalence and Outcomes. Pediatrics, 2021.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
