import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breech-baby-concerns',
  title: 'Baby in Breech Position',
  category: 'maternal',
  searchTerms: ['breech baby', 'baby breech position', 'baby bottom down', 'breech presentation', 'turning breech baby', 'ECV external cephalic version', 'breech delivery', 'baby not head down', 'spinning babies breech', 'breech c-section'],
  quickAnswer: 'A breech presentation means the baby is positioned bottom-first or feet-first rather than head-down. About 3-4% of babies are breech at full term. Many babies turn head-down on their own before 36-37 weeks. If the baby remains breech, options include external cephalic version (ECV) to turn the baby or a planned cesarean delivery.',
  byAge: [
    { ageRange: 'Second trimester', context: 'It is very common for babies to be in breech position in the second trimester. At this stage, there is plenty of room for the baby to move and turn. Most babies will naturally move to a head-down position by 32-36 weeks. There is no need to worry about breech position before 36 weeks.' },
    { ageRange: 'Third trimester', context: 'If your baby is still breech at 36 weeks, your provider may discuss ECV - a procedure where the provider manually turns the baby from the outside. ECV is successful about 50-60% of the time and is performed in a hospital setting. Some people also try positioning techniques (like hands-and-knees position) or complementary therapies, though evidence for these is limited.' },
    { ageRange: 'Labor & delivery', context: 'If the baby remains breech, a planned cesarean at 39 weeks is the most common delivery approach in the US. Vaginal breech delivery is an option at some hospitals with experienced providers but is not widely available. Discuss your options and preferences with your provider.' },
  ],
  whenNormal: ['Baby is breech before 36 weeks - this is very common and most will turn', 'Feeling kicks low and pressure high (baby\'s head in your ribs)'],
  whenToMention: ['Baby is still breech at or after 36 weeks', 'You want to discuss ECV or other options for turning the baby', 'You want to explore vaginal breech delivery options'],
  whenToActNow: ['Water breaks with a breech baby - go to the hospital immediately (risk of cord prolapse)', 'Labor begins with a known breech presentation'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. External Cephalic Version. ACOG Practice Bulletin No. 221, 2020.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/05/external-cephalic-version' },
    { org: 'NIH', citation: 'National Library of Medicine. Breech Presentation. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK448063/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Breech Position. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/breech-position.aspx' },
  ],
  relatedConcernSlugs: ['transverse-lie-baby', 'birth-plan-flexibility'],
};
