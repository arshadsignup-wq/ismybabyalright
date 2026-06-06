import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-bacterial-vaginosis',
  title: 'Bacterial Vaginosis During Pregnancy',
  category: 'maternal',
  searchTerms: ['bacterial vaginosis pregnancy', 'BV pregnant', 'fishy smell discharge pregnant', 'gray discharge pregnancy', 'vaginal infection pregnant', 'BV treatment pregnancy', 'gardnerella pregnancy', 'thin discharge pregnancy', 'vaginal odor pregnant', 'BV preterm labor risk'],
  quickAnswer: 'Bacterial vaginosis (BV) is a common vaginal infection caused by an imbalance in the natural bacteria of the vagina. It affects up to 30% of pregnant people. BV during pregnancy has been associated with increased risk of preterm birth and premature rupture of membranes, so it is important to be treated if diagnosed.',
  byAge: [
    { ageRange: 'First trimester', context: 'BV can occur at any time during pregnancy. Symptoms include thin, grayish-white vaginal discharge with a strong fishy odor, especially after intercourse. Some people have no symptoms at all. If you notice unusual discharge, tell your provider. Treatment with pregnancy-safe antibiotics (oral or topical metronidazole or clindamycin) is recommended.' },
    { ageRange: 'Second trimester', context: 'BV that is detected and treated reduces the risk of associated complications. Avoid douching, use only water to clean the vulvar area, wear cotton underwear, and avoid scented products in the vaginal area. BV is not considered a sexually transmitted infection but can be triggered by changes in vaginal flora.' },
    { ageRange: 'Third trimester', context: 'Untreated BV in the third trimester may increase the risk of preterm premature rupture of membranes and preterm labor. If you develop symptoms, report them promptly. Treatment is safe and effective at this stage. BV can recur, so tell your provider if symptoms return.' },
  ],
  whenNormal: ['Increased clear or white vaginal discharge without strong odor is normal in pregnancy', 'Mild changes in discharge consistency are expected during pregnancy'],
  whenToMention: ['Thin, grayish-white discharge with a noticeable fishy smell', 'Vaginal burning or itching with unusual discharge', 'Any change in discharge color, consistency, or odor'],
  whenToActNow: ['Discharge accompanied by pelvic pain, fever, or contractions', 'Heavy watery discharge that could be amniotic fluid rather than vaginal discharge'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Vaginitis. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/vaginitis' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Bacterial Vaginosis. CDC STI Treatment Guidelines, 2023.', url: 'https://www.cdc.gov/std/bv/default.htm' },
    { org: 'NIH', citation: 'National Library of Medicine. Bacterial Vaginosis. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459216/' },
  ],
  relatedConcernSlugs: ['pregnancy-yeast-infection', 'pregnancy-vaginal-discharge-changes', 'preterm-labor-signs'],
};
