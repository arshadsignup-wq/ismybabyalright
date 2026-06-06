import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-vaginal-discharge-changes',
  title: 'Normal Vaginal Discharge Changes in Pregnancy',
  category: 'maternal',
  searchTerms: ['vaginal discharge pregnancy', 'discharge changes pregnant', 'white discharge pregnancy normal', 'leukorrhea pregnancy', 'increased discharge pregnant', 'watery discharge pregnancy', 'discharge color pregnancy', 'mucus discharge pregnant', 'is my discharge normal pregnant', 'clear discharge pregnancy'],
  quickAnswer: 'Increased vaginal discharge (leukorrhea) is a normal and expected change during pregnancy. It is typically thin, white or clear, and mild-smelling. This increased discharge helps protect the birth canal from infection and maintains a healthy balance of bacteria. Changes in color, odor, or consistency may indicate an infection and should be evaluated.',
  byAge: [
    { ageRange: 'First trimester', context: 'You may notice increased vaginal discharge early in pregnancy due to rising estrogen levels and increased blood flow to the vaginal area. Normal pregnancy discharge is thin, white or clear, and either odorless or mildly scented. Wearing a panty liner can help manage the increase. Avoid tampons during pregnancy.' },
    { ageRange: 'Second trimester', context: 'Discharge typically continues to increase throughout pregnancy. This is normal and protective. Continue wearing cotton underwear and avoiding scented products in the vaginal area. If discharge becomes yellow, green, gray, or has a strong odor, contact your provider.' },
    { ageRange: 'Third trimester', context: 'Discharge may increase further in the third trimester. You may also notice thicker mucus as your body prepares for labor. Losing your mucus plug (a thick, sometimes blood-tinged blob of mucus) is a sign that your cervix is changing in preparation for labor. A sudden gush of clear fluid could be amniotic fluid rather than discharge.' },
  ],
  whenNormal: ['Thin, white or clear discharge that increased with pregnancy', 'Mild or no odor', 'No itching, burning, or irritation', 'Gradual increase in discharge throughout pregnancy'],
  whenToMention: ['Discharge that is yellow, green, or gray in color', 'Strong or fishy-smelling discharge', 'Discharge accompanied by itching, burning, or vulvar redness', 'Thick, cottage cheese-like discharge suggesting yeast infection'],
  whenToActNow: ['Sudden gush or steady trickle of clear watery fluid, which could be amniotic fluid', 'Bloody discharge (beyond light spotting) or bright red bleeding', 'Discharge with fever, pelvic pain, or contractions'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Vaginitis. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/vaginitis' },
    { org: 'NIH', citation: 'National Library of Medicine. Vaginal Discharge in Pregnancy. MedlinePlus, 2023.', url: 'https://medlineplus.gov/ency/article/003158.htm' },
    { org: 'March of Dimes', citation: 'March of Dimes. Vaginal Discharge During Pregnancy. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/vaginal-discharge-during-pregnancy.aspx' },
  ],
  relatedConcernSlugs: ['pregnancy-yeast-infection', 'pregnancy-bacterial-vaginosis', 'bloody-show-mucus-plug'],
};
