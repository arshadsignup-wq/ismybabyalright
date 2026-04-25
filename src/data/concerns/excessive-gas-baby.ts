import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'excessive-gas-baby',
  title: 'My Baby Has Excessive Gas',
  category: 'digestive',
  searchTerms: [
    'baby has excessive gas',
    'gassy baby won\'t stop crying',
    'how to relieve baby gas',
    'why is my baby so gassy',
    'newborn gas pains',
    'baby farts constantly',
    'gassy baby remedies',
    'baby gas drops do they work',
    'foods that make breastfed baby gassy',
  ],
  quickAnswer: 'Gas is incredibly common in babies and usually peaks around 6-12 weeks. While it can seem uncomfortable, most babies pass gas 15-20 times per day as their digestive systems mature. Simple techniques like bicycle legs, tummy time, and proper burping can help, and it typically improves significantly by 3-4 months.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context: 'Gas is very common as baby\'s digestive system is brand new and still learning to process milk efficiently. Swallowing air during feeding is normal, and baby\'s gut bacteria are still establishing. You might notice more gas in the evening hours (sometimes called the "witching hour"). Baby may pull legs up, grunt, strain, or cry when trying to pass gas.',
    },
    {
      ageRange: '6-12 weeks',
      context: 'This is often peak gas time. Baby\'s digestive system is maturing but not fully developed yet. You might notice baby becomes very fussy when gassy, especially in late afternoon and evening. The good news: relief is coming soon. Many babies show significant improvement after 12 weeks as their gut matures.',
    },
    {
      ageRange: '3-6 months',
      context: 'Gas usually decreases noticeably as baby\'s digestive system matures. Baby becomes better at passing gas without discomfort. If gas suddenly increases or seems painful, consider whether you\'ve introduced any new foods (if breastfeeding) or changed formula.',
    },
    {
      ageRange: '6-12 months',
      context: 'With the introduction of solid foods, you might notice changes in gas patterns. Some foods (beans, broccoli, prunes) naturally produce more gas. This is normal. Baby should be able to pass gas easily at this age. If baby seems genuinely uncomfortable or has other symptoms, talk to your pediatrician about potential food sensitivities.',
    },
  ],
  whenNormal: [
    'Baby passes gas frequently (15-20+ times per day) but seems relieved afterward',
    'Fussiness that improves after passing gas or having a bowel movement',
    'Gas that\'s worse in the evening or after certain feeds',
    'Baby pulls legs up to chest, grunts, or strains briefly then relaxes',
    'Some gas odor (especially after starting solids)',
  ],
  whenToMention: [
    'Gas seems to cause significant pain or crying for extended periods',
    'Baby refuses feeds or has decreased appetite due to gas discomfort',
    'You\'ve tried common remedies for 2+ weeks without improvement',
    'Gas accompanied by blood in stool, diarrhea, or rash',
  ],
  whenToActNow: [
    'Baby\'s belly is hard, swollen, and painful to touch',
    'Severe vomiting (especially green or bloody) with gas',
    'Baby isn\'t passing any gas or having bowel movements for more than 24 hours',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation: 'Gas and Your Breastfed Baby: What\'s Normal (2024)',
      url: 'https://www.aap.org',
    },
    {
      org: 'Children\'s Hospital of Philadelphia',
      citation: 'Managing Infant Gas and Colic Symptoms (2024)',
      url: 'https://www.chop.edu',
    },
    {
      org: 'La Leche League International',
      citation: 'Gassy Babies: Causes and Comfort Measures (2024)',
      url: 'https://www.llli.org',
    },
  ],
};
