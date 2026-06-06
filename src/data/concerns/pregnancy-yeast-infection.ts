import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-yeast-infection',
  title: 'Yeast Infections During Pregnancy',
  category: 'maternal',
  searchTerms: ['yeast infection pregnancy', 'vaginal yeast infection pregnant', 'candida pregnancy', 'itchy vagina pregnant', 'thick white discharge pregnant', 'thrush pregnancy', 'antifungal safe pregnancy', 'cottage cheese discharge pregnant', 'vulvar itching pregnancy', 'yeast infection treatment pregnant'],
  quickAnswer: 'Yeast infections are more common during pregnancy due to higher estrogen levels and changes in vaginal pH that promote Candida overgrowth. They affect about 1 in 4 pregnant people. While uncomfortable, yeast infections do not harm the baby during pregnancy. Topical antifungal treatments are safe and effective during pregnancy.',
  byAge: [
    { ageRange: 'First trimester', context: 'Yeast infections may occur at any point in pregnancy. In the first trimester, talk to your provider before using any over-the-counter treatments. They can confirm the diagnosis and recommend safe topical antifungal creams or suppositories. Oral fluconazole (Diflucan) is generally avoided during pregnancy.' },
    { ageRange: 'Second trimester', context: 'Yeast infections may recur due to ongoing hormonal changes. Wearing cotton underwear, avoiding douching, keeping the vulvar area clean and dry, and eating yogurt with live cultures may help prevent recurrences. Topical antifungal treatments (miconazole, clotrimazole) for 7 days are typically recommended during pregnancy.' },
    { ageRange: 'Third trimester', context: 'Treating yeast infections before delivery is recommended, as the baby can contract oral thrush (a yeast infection in the mouth) while passing through the birth canal. Your provider can recommend appropriate treatment. Do not self-diagnose - similar symptoms can be caused by other infections.' },
  ],
  whenNormal: ['Thick, white, cottage cheese-like vaginal discharge with vulvar itching', 'Redness and swelling of the vulva', 'Burning with urination or intercourse', 'Symptoms that improve with prescribed antifungal treatment'],
  whenToMention: ['You think you have a yeast infection and want to confirm before treating', 'Symptoms do not improve after completing treatment', 'You are getting recurrent yeast infections during pregnancy'],
  whenToActNow: ['Vaginal discharge with a strong odor, gray or green color, or accompanied by fever, which could indicate a bacterial or sexually transmitted infection', 'Severe pelvic pain accompanying vaginal symptoms'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Vaginitis. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/vaginitis' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Vaginal Candidiasis. CDC, 2023.', url: 'https://www.cdc.gov/fungal/diseases/candidiasis/genital/index.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Vulvovaginal Candidiasis. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459317/' },
  ],
  relatedConcernSlugs: ['pregnancy-bacterial-vaginosis', 'pregnancy-vaginal-discharge-changes'],
};
