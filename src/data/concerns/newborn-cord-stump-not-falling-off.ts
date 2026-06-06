import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-cord-stump-not-falling-off',
  title: 'Cord Stump Still Attached (Delayed Separation)',
  category: 'medical',
  searchTerms: ['cord stump not falling off', 'umbilical cord still attached', 'how long cord stump fall off', 'baby cord attached 3 weeks', 'delayed cord separation', 'cord stump hanging on', 'umbilical cord stump 4 weeks', 'cord stump taking long', 'when should cord fall off', 'pulling cord stump off baby'],
  quickAnswer: 'The umbilical cord stump typically falls off within 1-3 weeks, but it can take up to 4 weeks or occasionally longer. Do not pull it off, as it will separate naturally. Keep it clean and dry. If the stump has not fallen off by 4 weeks, mention it to your pediatrician. Very delayed separation (beyond 6-8 weeks) can rarely indicate an immune deficiency.',
  byAge: [
    { ageRange: '0-1 month', context: 'The cord stump dries, shrivels, and separates naturally. Most fall off between 7-21 days, but the range is wide. Factors that affect timing include: how the cord was clamped, stump thickness, exposure to air, and individual variation. Do not pull, twist, or force the stump off, even if it seems to be hanging by a thread. Let it fall off naturally. Keep the area clean and dry, fold diapers below it, and allow air exposure. Bathing with sponge baths (not submersion) is recommended until it falls off.' },
    { ageRange: '1-3 months', context: 'If the cord stump was delayed but eventually fell off, monitor the belly button for normal healing. An umbilical granuloma (small pink tissue growth) may develop at the site, which your pediatrician can treat. If the stump has not separated by 6-8 weeks, your pediatrician may investigate for rare conditions such as leukocyte adhesion deficiency (an immune disorder).' },
    { ageRange: '3-6 months', context: 'The belly button should be fully healed. Any persistent drainage, tissue, or concerns at the belly button should be evaluated.' },
    { ageRange: '6-12 months', context: 'No cord-related concerns. Normal belly button hygiene during baths.' },
  ],
  whenNormal: ['Cord stump separating within 1-4 weeks', 'Stump appears dry, dark, and shriveled', 'Small amount of blood or clear drainage when the stump separates', 'No redness or swelling at the base'],
  whenToMention: ['Cord stump has not fallen off by 3-4 weeks', 'The stump looks wet, oozy, or is not drying well', 'You are tempted to pull it off and want guidance'],
  whenToActNow: ['Cord stump with redness, swelling, foul smell, or pus indicating infection', 'Cord stump has not separated by 6-8 weeks, which may warrant immune evaluation', 'Heavy bleeding from the cord site'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Umbilical Cord Care. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Umbilical-Cord-Care.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Delayed Cord Separation. Pediatric Dermatology.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
  relatedConcernSlugs: ['newborn-cord-stump-smell', 'newborn-belly-button-oozing', 'newborn-umbilical-granuloma'],
};
