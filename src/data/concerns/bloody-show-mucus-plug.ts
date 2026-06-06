import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bloody-show-mucus-plug',
  title: 'Losing Mucus Plug and Bloody Show Before Labor',
  category: 'maternal',
  searchTerms: ['mucus plug pregnancy', 'bloody show labor', 'losing mucus plug', 'mucus plug signs of labor', 'pink tinged mucus pregnant', 'bloody mucus before labor', 'mucus plug third trimester', 'when does mucus plug come out', 'does losing mucus plug mean labor soon', 'cervical mucus plug'],
  quickAnswer: 'The mucus plug is a thick collection of mucus that seals the cervical opening during pregnancy to protect against infection. Losing the mucus plug (which may be accompanied by a bloody show - mucus tinged with pink or brown blood) is a sign that your cervix is beginning to dilate in preparation for labor. It can happen days to weeks before labor begins.',
  byAge: [
    { ageRange: 'Third trimester', context: 'The mucus plug is typically lost in the final weeks of pregnancy as the cervix begins to soften, thin (efface), and open (dilate). It may come out all at once as a thick blob or gradually as increased mucus discharge. A bloody show adds pink, red, or brown blood streaking to the mucus. This is caused by small blood vessels breaking as the cervix changes.' },
    { ageRange: 'Labor & delivery', context: 'Losing the mucus plug does not mean labor is imminent - it can happen days or even weeks before active labor. Some people lose it without noticing. If you lose your mucus plug before 37 weeks, contact your provider as it could indicate preterm cervical changes. After 37 weeks, losing your mucus plug is a reassuring sign that your body is preparing for delivery.' },
  ],
  whenNormal: ['Thick, jelly-like mucus discharge (clear, white, yellowish, or slightly pink) after 37 weeks', 'Mucus streaked with small amounts of pink or brown blood (bloody show)', 'Mucus plug loss after a cervical check at a prenatal appointment', 'No heavy bleeding, just mucus with blood streaks'],
  whenToMention: ['You lose your mucus plug between 34-37 weeks', 'You are unsure whether discharge is mucus plug or something else', 'The bloody show is accompanied by other signs of early labor'],
  whenToActNow: ['Mucus plug loss before 34 weeks, which could indicate preterm cervical changes', 'Heavy bright red bleeding (soaking a pad) rather than blood-tinged mucus', 'A sudden gush of clear fluid suggesting your water may have broken'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. How to Tell When Labor Begins. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins' },
    { org: 'NIH', citation: 'National Library of Medicine. Normal Labor. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK532918/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Signs of Labor. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/signs-of-labor.aspx' },
  ],
  relatedConcernSlugs: ['water-breaking-signs', 'braxton-hicks-vs-real-contractions', 'preterm-labor-signs'],
};
