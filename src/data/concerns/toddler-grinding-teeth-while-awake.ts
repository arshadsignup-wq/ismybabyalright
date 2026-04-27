import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-grinding-teeth-while-awake',
  title: 'Toddler Grinding Teeth While Awake and Asleep',
  category: 'physical',
  searchTerms: ['toddler grinding teeth','baby bruxism','toddler teeth grinding awake','baby clenching jaw','toddler grinding teeth sleep','baby grinding teeth why','bruxism toddler','toddler grinding new teeth','baby rubbing gums together','toddler grinding teeth teething','is teeth grinding harmful baby','how to stop toddler grinding teeth'],
  quickAnswer: 'Teeth grinding (bruxism) is very common in babies and toddlers - studies suggest 15-33% of children grind their teeth. Babies often grind their teeth when new teeth come in because the sensation is novel and they are experimenting with their bite. Most children outgrow grinding by age 6 when their permanent teeth start coming in. Grinding is usually harmless and does not require treatment unless it is causing tooth damage, jaw pain, headaches, or significantly disrupting sleep.',
  byAge: [
    { ageRange: '6-12 months', context: 'As the first teeth emerge, many babies discover they can rub their top and bottom teeth together and are fascinated by the feeling and sound. This is sensory exploration - similar to how they explore other new body parts. The grinding may sound terrible but is not harmful to baby teeth at this stage. Offering teething toys gives them something else to chew on. Do not try to stop the grinding by putting your finger in their mouth - this can reinforce the behavior and is a choking risk.' },
    { ageRange: '12-24 months', context: 'Teeth grinding often continues as more teeth erupt and the bite is changing. Many toddlers grind during sleep without being aware of it. Daytime grinding is often a self-soothing behavior or response to stress, discomfort, or boredom. Some toddlers grind when they are concentrating. The sound can be alarming, but the soft enamel of baby teeth is designed to handle some wear. If you notice flat spots or chips on the teeth, mention it to your dentist at the first dental visit (recommended by age 1).' },
    { ageRange: '2-3 years', context: 'Grinding may persist or intensify during stressful periods (new sibling, daycare start, move). Night grinding that you can hear from another room is common and usually harmless. If your child complains of jaw pain in the morning or you notice significant tooth wear, your dentist can evaluate. Night guards are not typically used for children under 6 because the jaw and teeth are still growing and changing. Reducing stress before bed and ensuring your child is not overtired can help reduce nighttime grinding.' },
    { ageRange: '3-6 years', context: 'Most children naturally stop grinding as they get older and their permanent teeth begin to replace baby teeth. If grinding persists and is causing problems (significant tooth wear, jaw pain, morning headaches, disrupted sleep), your dentist may recommend evaluation. In rare cases, sleep-disordered breathing (enlarged tonsils or adenoids causing snoring and mouth breathing) can trigger teeth grinding. If your child grinds AND snores, mention both to your pediatrician.' },
  ],
  whenNormal: ['Your baby grinds their teeth occasionally when new teeth are coming in','Grinding happens intermittently and does not seem to cause your child distress','Your toddler grinds during sleep but sleeps well overall','The teeth show minimal wear and your child does not complain of jaw pain'],
  whenToMention: ['Grinding is happening frequently throughout the day and night','You notice visible wear, flattening, or chipping on your child\'s teeth','Your child complains of jaw pain, ear pain, or headaches','Grinding is accompanied by loud snoring and mouth breathing during sleep'],
  whenToActNow: ['A tooth has cracked or broken from grinding','Your child is in significant jaw pain','Grinding is accompanied by other involuntary movements that seem like they could be seizure-related'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-obsessive-repetitive-behavior','baby-shaking-head-side-to-side','toddler-constant-meltdowns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Teeth Grinding (Bruxism). HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/default.aspx' },
    { org: 'NIH', citation: 'Machado E, et al. Prevalence of Sleep Bruxism in Children: A Systematic Review. Journal of Clinical Pediatric Dentistry. 2014.', url: 'https://pubmed.ncbi.nlm.nih.gov/25306732/' },
    { org: 'AAP', citation: 'American Academy of Pediatric Dentistry. Bruxism. The Reference Manual of Pediatric Dentistry.', url: 'https://www.aapd.org/research/oral-health-policies--recommendations/bruxism/' },
  ],
};
