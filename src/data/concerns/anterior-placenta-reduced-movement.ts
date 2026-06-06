import type { ConcernPage } from './types';
export const concern: ConcernPage = {
  slug: 'anterior-placenta-reduced-movement', title: 'Less Movement with Anterior Placenta', category: 'maternal',
  searchTerms: ['anterior placenta movement', 'can\'t feel baby anterior placenta', 'anterior placenta kick counts', 'less movement anterior placenta', 'anterior placenta worry', 'anterior placenta when feel kicks', 'baby movement muffled anterior placenta'],
  quickAnswer: 'An anterior placenta (attached to the front wall of the uterus) acts as a cushion between the baby and your belly wall, which can make movements feel muffled or less intense. You may feel movement later (22-24 weeks instead of 18-20) and primarily on the sides and lower belly. This is normal, but you should still feel regular movement once it is established.',
  byAge: [
    { ageRange: 'Second trimester', context: 'With an anterior placenta, first movements may not be felt until 22-24 weeks or later. You may feel flutters and taps primarily low in the pelvis or on the sides of your belly. This is normal. As the baby grows and movements become stronger, you will feel them more consistently, though they may still feel less intense than with a posterior placenta.' },
    { ageRange: 'Third trimester', context: 'By the third trimester, you should be feeling regular daily movement even with an anterior placenta. The baby is large enough that kicks and rolls should be apparent. Kick counting guidelines still apply - 10 movements in 2 hours during an active time. If you notice a decrease in your baby\'s normal pattern, contact your provider. Do not dismiss reduced movement as "just my anterior placenta."' },
  ],
  whenNormal: ['Feeling movement later than expected (22-24 weeks)', 'Movements felt more on the sides and lower belly than the front', 'Movements that feel muffled but are still regular and consistent'],
  whenToMention: ['You have not felt any movement by 24-25 weeks', 'You are unsure whether your movement patterns are normal', 'You want guidance on kick counting with an anterior placenta'],
  whenToActNow: ['A noticeable decrease in your baby\'s established movement pattern - even with an anterior placenta, this should always be evaluated', 'Inability to feel 10 movements in 2 hours during the baby\'s usual active time'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Fetal Movement Monitoring. ACOG, 2022.', url: 'https://www.acog.org/womens-health/faqs/how-to-count-fetal-kicks' },
    { org: 'NIH', citation: 'National Library of Medicine. Decreased Fetal Movement. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557847/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Feeling Your Baby Move. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/fetal-movement-counting.aspx' },
  ],
  relatedConcernSlugs: ['anterior-vs-posterior-placenta', 'decreased-fetal-movement'],
};
