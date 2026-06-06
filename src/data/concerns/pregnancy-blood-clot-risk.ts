import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'pregnancy-blood-clot-risk',
  title: 'Blood Clot Risk During Pregnancy (DVT)',
  category: 'maternal',
  searchTerms: ['blood clot pregnancy', 'DVT pregnant', 'deep vein thrombosis pregnancy', 'blood clot leg pregnant', 'pulmonary embolism pregnancy', 'VTE pregnancy', 'thrombosis risk pregnancy', 'swollen leg pregnant clot', 'blood thinners pregnancy', 'clot prevention pregnancy'],
  quickAnswer: 'Pregnancy increases the risk of blood clots (venous thromboembolism or VTE) by 4-5 times due to increased clotting factors, slower blood flow, and vein compression from the growing uterus. While the overall risk is still low (about 1-2 per 1,000 pregnancies), awareness of symptoms is important because blood clots can be life-threatening if untreated.',
  byAge: [
    { ageRange: 'First trimester', context: 'Blood clot risk is elevated from early pregnancy. Risk factors include previous blood clots, family history, obesity, immobility, cesarean delivery, and certain genetic clotting disorders. If you have risk factors, your provider may recommend blood thinners (low-molecular-weight heparin). Stay active and hydrated.' },
    { ageRange: 'Third trimester', context: 'Risk increases as the uterus puts maximum pressure on pelvic veins. Avoid sitting or standing for long periods. On long car or plane trips, move regularly and stay hydrated. Compression stockings can help. Be aware of DVT symptoms: swelling, pain, warmth, and redness in one leg (usually the calf).' },
    { ageRange: 'Postpartum', context: 'Blood clot risk is highest in the first 6 weeks after delivery, especially after cesarean. Get moving as soon as safely possible after delivery. Your provider may recommend compression stockings or blood thinners if you have additional risk factors. VTE is a leading cause of maternal mortality, making awareness critical.' },
  ],
  whenNormal: ['Mild bilateral (both legs) swelling in late pregnancy is normal and is not a clot sign', 'Varicose veins without warmth, redness, or pain are common and not typically a clot'],
  whenToMention: ['You have a personal or family history of blood clots or clotting disorders', 'You will be immobile for extended periods (bed rest, long travel)', 'You have multiple risk factors for blood clots'],
  whenToActNow: ['Swelling, pain, warmth, or redness in ONE leg (especially the calf) that is different from the other leg - possible DVT', 'Sudden shortness of breath, chest pain, rapid heartbeat, or coughing up blood - possible pulmonary embolism - call 911 immediately', 'These are medical emergencies that require immediate evaluation'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Thromboembolism in Pregnancy. ACOG Practice Bulletin No. 196, 2018.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/07/thromboembolism-in-pregnancy' },
    { org: 'NIH', citation: 'National Library of Medicine. Venous Thromboembolism in Pregnancy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK560565/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Blood Clots During Pregnancy. CDC, 2023.', url: 'https://www.cdc.gov/ncbddd/dvt/pregnancy.html' },
  ],
  relatedConcernSlugs: ['pregnancy-varicose-veins', 'pregnancy-swelling-edema', 'flying-during-pregnancy'],
};
