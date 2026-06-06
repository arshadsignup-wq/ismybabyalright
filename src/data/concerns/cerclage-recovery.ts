import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cerclage-recovery',
  title: 'Cervical Cerclage Concerns and Recovery',
  category: 'maternal',
  searchTerms: ['cerclage pregnancy', 'cervical cerclage', 'cervical stitch', 'cerclage recovery', 'cerclage removal', 'cerclage restrictions', 'McDonald cerclage', 'Shirodkar cerclage', 'cerclage bed rest', 'cerclage complications'],
  quickAnswer: 'A cervical cerclage is a stitch placed around the cervix to help keep it closed and prevent preterm birth. It is typically placed between 12-14 weeks (prophylactic) or when cervical shortening is detected (rescue cerclage). Recovery involves some activity restrictions, but many people with cerclages successfully carry to term. The stitch is usually removed at 36-37 weeks.',
  byAge: [
    { ageRange: 'First trimester', context: 'A prophylactic (preventive) cerclage is typically placed at 12-14 weeks for people with a history of cervical insufficiency or prior second-trimester loss. The procedure is done under anesthesia and takes about 15-30 minutes. Recovery includes a few days of rest, avoiding heavy lifting, and possibly pelvic rest (no intercourse) as advised by your provider.' },
    { ageRange: 'Second trimester', context: 'An emergency or rescue cerclage may be placed if the cervix is found to be dilating or very short in the second trimester. Activity restrictions may be more significant. You will be monitored closely with regular check-ups. Some spotting after placement is normal. Report any heavy bleeding, contractions, or fluid leaking.' },
    { ageRange: 'Third trimester', context: 'The cerclage is typically removed at 36-37 weeks in a quick office procedure. Removal does not mean labor will start immediately - many people go several more days or weeks before labor begins. If labor starts before the scheduled removal, the cerclage will be removed urgently to prevent cervical damage.' },
  ],
  whenNormal: ['Light spotting for a few days after cerclage placement', 'Mild cramping after the procedure', 'Feeling anxious about the cerclage - this is understandable'],
  whenToMention: ['Increased vaginal discharge after cerclage', 'Persistent cramping or pressure', 'Concerns about activity restrictions or when to resume normal activities'],
  whenToActNow: ['Regular contractions or rhythmic cramping with a cerclage in place', 'Heavy bleeding or fluid leaking from the vagina', 'Fever or signs of infection (foul-smelling discharge)'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Cerclage for the Management of Cervical Insufficiency. ACOG Practice Bulletin No. 142, 2014 (Reaffirmed 2022).', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2014/02/cerclage-for-the-management-of-cervical-insufficiency' },
    { org: 'NIH', citation: 'National Library of Medicine. Cervical Cerclage. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK559068/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Cervical Insufficiency and Cerclage. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/complications/cervical-insufficiency.aspx' },
  ],
  relatedConcernSlugs: ['short-cervix-concerns', 'cervical-insufficiency', 'preterm-labor-signs'],
};
