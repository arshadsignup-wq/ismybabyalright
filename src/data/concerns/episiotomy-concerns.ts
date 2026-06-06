import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'episiotomy-concerns',
  title: 'Episiotomy Recovery and Concerns',
  category: 'maternal',
  searchTerms: ['episiotomy', 'episiotomy recovery', 'episiotomy pain', 'episiotomy stitches', 'perineal cut birth', 'episiotomy healing', 'episiotomy scar', 'pain after episiotomy', 'episiotomy infected', 'episiotomy vs natural tear'],
  quickAnswer: 'An episiotomy is a surgical cut made in the perineum (the area between the vagina and anus) during delivery to widen the vaginal opening. While once routine, episiotomies are now performed selectively when medically indicated. Recovery typically takes 2-4 weeks for the initial healing, with full recovery over several months.',
  byAge: [
    { ageRange: 'Labor & delivery', context: 'Episiotomies are now only recommended when there is a medical need, such as when the baby needs to be delivered quickly or during an assisted delivery with forceps or vacuum. Your provider should discuss this with you if possible before making the cut. A local anesthetic is used, and the cut is repaired with dissolving stitches after delivery.' },
    { ageRange: 'Postpartum', context: 'Healing from an episiotomy typically takes 2-4 weeks for surface healing, with deeper tissue healing over 2-3 months. Ice packs, sitz baths, peri-bottles (squirting warm water while urinating), and stool softeners can help with comfort. Sitting on a donut cushion and taking pain medication as recommended by your provider can also help. Stitches dissolve on their own.' },
  ],
  whenNormal: ['Soreness, swelling, and discomfort at the incision site for the first 2-4 weeks', 'Mild discomfort when sitting, walking, or having bowel movements', 'Gradual improvement day by day', 'Stitches dissolving on their own over 2-6 weeks'],
  whenToMention: ['Pain is not improving after 2-3 weeks or is getting worse', 'You have concerns about how the area is healing or how it looks', 'Pain during intercourse persists beyond 3-4 months postpartum'],
  whenToActNow: ['Signs of infection: increasing redness, swelling, warmth, pus, or foul-smelling discharge from the site', 'Stitches have opened and the wound is gaping', 'Severe pain uncontrolled by prescribed medications', 'Fever along with wound pain'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Prevention and Management of Obstetric Lacerations at Vaginal Delivery. ACOG Practice Bulletin No. 198, 2018.', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/09/prevention-and-management-of-obstetric-lacerations-at-vaginal-delivery' },
    { org: 'NIH', citation: 'National Library of Medicine. Episiotomy. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK546675/' },
    { org: 'NICE', citation: 'National Institute for Health and Care Excellence. Intrapartum Care. NICE, 2023.', url: 'https://www.nice.org.uk/guidance/cg190' },
  ],
  relatedConcernSlugs: ['perineal-healing-postpartum', 'vacuum-forceps-delivery-concerns', 'pain-during-sex-postpartum'],
};
