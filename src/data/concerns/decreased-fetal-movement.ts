import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'decreased-fetal-movement', title: 'Baby Moving Less', category: 'maternal',
  searchTerms: ['baby not moving', 'decreased fetal movement', 'baby moving less', 'kick counts', 'baby quiet in womb', 'fetal movement changes', 'haven\'t felt baby move', 'baby stopped kicking', 'reduced fetal movement', 'count to ten kicks'],
  quickAnswer: 'Feeling your baby move regularly is one of the most important signs of fetal well-being. If you notice a significant decrease in your baby\'s usual movement pattern, it should always be evaluated promptly. Trust your instincts - you know your baby\'s patterns best. Contacting your provider about decreased movement is never overreacting.',
  byAge: [
    { ageRange: 'Second trimester', context: 'Most people begin feeling baby movement (quickening) between 16-25 weeks. Movement may be inconsistent early on, and some days you may feel more than others. By 24-28 weeks, movements should become more regular and recognizable. If you have not felt any movement by 24 weeks, let your provider know.' },
    { ageRange: 'Third trimester', context: 'By the third trimester, you should feel regular daily movement. Many providers recommend kick counting: pick a time when baby is usually active, lie on your side, and count 10 movements in up to 2 hours. Most babies reach 10 movements well within 2 hours. While babies may have quieter periods, a significant change from your baby\'s normal pattern should always be evaluated. The baby should NOT move less as you approach your due date.' },
  ],
  whenNormal: ['Baby has active and quieter periods throughout the day', 'Movement patterns you have come to know are consistent', 'Reaching 10 kicks in well under 2 hours', 'Slightly different movement quality (rolls instead of kicks) in late pregnancy due to less room'],
  whenToMention: ['You notice any change in your baby\'s normal movement pattern', 'Kick counting takes longer than usual', 'You are unsure what normal movement feels like for your baby'],
  whenToActNow: ['Your baby is not moving as expected - do not wait, contact your provider or go to the hospital immediately', 'Fewer than 10 movements in 2 hours during active time', 'You have not felt the baby move all day', 'Any sudden stop in movement, especially after 28 weeks'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Decreased Fetal Movement. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/how-to-count-fetal-kicks' },
    { org: 'NIH', citation: 'National Library of Medicine. Decreased Fetal Movement. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557847/' },
    { org: 'NICE', citation: 'National Institute for Health and Care Excellence. Reduced Fetal Movements. NICE, 2021.', url: 'https://www.nice.org.uk/guidance/ng201' },
  ],
  relatedConcernSlugs: ['anterior-placenta-reduced-movement', 'fetal-hiccups-frequency'],
};
