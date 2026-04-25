import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'hiccups-wont-stop',
  title: 'My Baby\'s Hiccups Won\'t Stop',
  category: 'digestive',
  searchTerms: [
    'baby hiccups won\'t stop',
    'newborn hiccups all the time',
    'constant hiccups baby',
    'how to stop baby hiccups',
    'baby hiccups for hours',
    'are frequent hiccups normal in babies',
    'why does my baby get hiccups so much',
    'baby hiccups after every feed',
  ],
  quickAnswer: 'Hiccups are extremely common and completely harmless in babies, especially in the first few months. They\'re caused by immature diaphragm muscles and usually resolve on their own within a few minutes to an hour. Most babies aren\'t bothered by them at all, even if they seem frequent to you.',
  byAge: [
    {
      ageRange: '0-3 months',
      context: 'Hiccups are most common in newborns and young babies, often happening multiple times a day. They can start even before birth  -  you may have felt them during pregnancy. They\'re triggered by feeding (especially if baby swallows air), temperature changes, excitement, or seemingly nothing at all. Your baby\'s diaphragm is still maturing and contracts easily.',
    },
    {
      ageRange: '3-6 months',
      context: 'Hiccups remain common but often start to decrease in frequency as your baby\'s digestive system matures. They still typically occur after feeds or when baby gets excited. You might notice they last a bit shorter than they did in the newborn phase.',
    },
    {
      ageRange: '6-12 months',
      context: 'Hiccups become less frequent as baby\'s diaphragm matures and feeding patterns stabilize. They may still happen occasionally after large meals or when baby eats too quickly. Most parents notice a significant decrease compared to the early months.',
    },
    {
      ageRange: '12+ months',
      context: 'Hiccups are generally infrequent by this age. When they do occur, they\'re usually brief and often related to eating or drinking too quickly, laughing hard, or sudden temperature changes.',
    },
  ],
  whenNormal: [
    'Hiccups that last anywhere from a few minutes to an hour',
    'Hiccups that happen multiple times a day, especially after feeding',
    'Baby seems comfortable and unbothered during hiccups',
    'Hiccups that resolve on their own without intervention',
    'Hiccups accompanied by small burps or spit-up',
  ],
  whenToMention: [
    'Hiccups interfere with feeding or sleep more than occasionally',
    'You\'re concerned about how frequently they occur',
    'Baby seems distressed or uncomfortable during hiccup episodes',
    'Hiccups are always accompanied by significant spit-up or vomiting',
  ],
  whenToActNow: [
    'Hiccups last more than 2-3 hours continuously without stopping',
    'Baby has difficulty breathing or turns blue during hiccups',
    'Hiccups accompanied by severe vomiting, fever, or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'American Academy of Pediatrics',
      citation: 'Common Infant Digestive Issues: Hiccups, Gas, and Spitting Up (2024)',
      url: 'https://www.aap.org',
    },
    {
      org: 'Mayo Clinic',
      citation: 'Infant Hiccups: What\'s Normal and When to Worry (2024)',
      url: 'https://www.mayoclinic.org',
    },
  ],
};
