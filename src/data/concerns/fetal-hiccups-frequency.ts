import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'fetal-hiccups-frequency', title: 'Baby Hiccupping a Lot in the Womb', category: 'maternal',
  searchTerms: ['fetal hiccups', 'baby hiccups womb', 'baby hiccups too much', 'baby hiccupping frequently', 'fetal hiccups normal', 'baby hiccups third trimester', 'why does my baby hiccup so much', 'fetal hiccups concern'],
  quickAnswer: 'Fetal hiccups are very common and are caused by the baby practicing breathing movements, which makes the diaphragm contract rhythmically. They feel like small, regular, repetitive movements. Most fetal hiccups are completely normal and are a sign of healthy development. They are most commonly felt in the second and third trimesters.',
  byAge: [
    { ageRange: 'Second trimester', context: 'You may start feeling fetal hiccups around 24-28 weeks. They feel like rhythmic, repetitive tapping or pulsing in one spot, distinct from kicks. Episodes may last a few minutes to 15-20 minutes. These are a normal sign that your baby\'s respiratory system is developing.' },
    { ageRange: 'Third trimester', context: 'Fetal hiccups are most commonly noticed in the third trimester. Some babies hiccup multiple times a day, while others rarely do. Both are normal. Very frequent, persistent hiccups (multiple times daily for prolonged periods) in very late pregnancy have, in rare cases, been associated with cord compression, so mention it to your provider if the pattern seems excessive or changes suddenly.' },
  ],
  whenNormal: ['Rhythmic, repetitive movements lasting a few minutes, occurring periodically', 'Fetal hiccups a few times a day', 'Hiccups that have been a consistent pattern throughout your pregnancy'],
  whenToMention: ['Hiccups seem to be happening much more frequently than before', 'You want reassurance that fetal hiccups are normal', 'Hiccups are lasting very long periods (30+ minutes regularly)'],
  whenToActNow: ['A sudden dramatic increase in hiccup frequency combined with decreased overall movement', 'Hiccups replacing normal kick and movement patterns'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'National Library of Medicine. Fetal Hiccups: A Normal Developmental Pattern. Journal of Maternal-Fetal & Neonatal Medicine, 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/29096555/' },
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Fetal Movement Monitoring. ACOG, 2022.', url: 'https://www.acog.org/womens-health/faqs/how-to-count-fetal-kicks' },
    { org: 'March of Dimes', citation: 'March of Dimes. Feeling Your Baby Move. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/fetal-movement-counting.aspx' },
  ],
  relatedConcernSlugs: ['decreased-fetal-movement', 'anterior-placenta-reduced-movement'],
};
