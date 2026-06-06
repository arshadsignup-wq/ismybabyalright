import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'back-labor',
  title: 'Back Labor Pain and Management',
  category: 'maternal',
  searchTerms: ['back labor', 'back pain during labor', 'baby sunny side up labor', 'occiput posterior labor', 'back labor relief', 'intense back pain labor', 'counter pressure labor', 'back labor contractions', 'posterior baby labor', 'back labor management'],
  quickAnswer: 'Back labor refers to intense lower back pain during labor, often caused by the baby being in an occiput posterior (OP or "sunny side up") position where the back of the baby\'s head presses against the birthing parent\'s spine. It occurs in about 25% of labors and can be managed with position changes, counter-pressure, water therapy, and other techniques.',
  byAge: [
    { ageRange: 'Third trimester', context: 'If your baby is in a posterior position in late pregnancy, hands-and-knees position, pelvic tilts, and forward-leaning activities may encourage the baby to rotate. However, many babies rotate during labor itself. Discuss back labor management techniques with your provider or childbirth educator in advance.' },
    { ageRange: 'Labor & delivery', context: 'Back labor contractions feel like intense, continuous pressure in the lower back that may not fully ease between contractions. Effective management includes: counter-pressure (partner pressing firmly on your lower back), hands-and-knees position, side-lying, slow dancing/swaying, warm water (shower or tub), cold packs, and a birth ball. An epidural can also effectively relieve back labor pain. Many posterior babies rotate on their own during labor.' },
  ],
  whenNormal: ['Intense low back pain during contractions that improves between contractions', 'Back pain that responds to counter-pressure and position changes', 'Back labor that gradually resolves as the baby rotates during labor'],
  whenToMention: ['Back pain is so intense that you cannot cope between contractions', 'You want to discuss pain management options', 'Labor seems to be progressing slowly, which can be associated with posterior position'],
  whenToActNow: ['Continuous severe back pain outside of labor that does not come and go with contractions', 'Back labor pain accompanied by heavy bleeding'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'ACOG', citation: 'American College of Obstetricians and Gynecologists. Medications for Pain Relief During Labor and Delivery. ACOG FAQ, 2022.', url: 'https://www.acog.org/womens-health/faqs/medications-for-pain-relief-during-labor-and-delivery' },
    { org: 'NIH', citation: 'National Library of Medicine. Fetal Malpresentation. StatPearls, 2023.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459382/' },
    { org: 'March of Dimes', citation: 'March of Dimes. Stages of Labor. March of Dimes, 2023.', url: 'https://www.marchofdimes.org/pregnancy/stages-of-labor.aspx' },
  ],
  relatedConcernSlugs: ['pregnancy-back-pain', 'epidural-concerns', 'unmedicated-birth-preparation'],
};
