import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-green-poop-first-weeks',
  title: 'Green Stools in Early Days',
  category: 'digestive',
  searchTerms: ['newborn green poop', 'baby green stool normal', 'green poop first weeks', 'breastfed baby green poop', 'newborn green bowel movement', 'baby lime green poop', 'dark green poop newborn', 'why is baby poop green', 'green poop foremilk hindmilk', 'newborn green stool causes'],
  quickAnswer: 'Green stools in newborns are common and usually not concerning. They can be a normal part of the meconium-to-milk-stool transition, result from foremilk/hindmilk variation in breastfed babies, or occur in formula-fed babies. As long as your baby is feeding well and gaining weight, occasional green stools are normal.',
  byAge: [
    { ageRange: '0-1 month', context: 'Green stools are very common in the first week as meconium transitions to milk stools. The normal progression is: black/dark green meconium, then dark green transitional stools, then brownish-green, and finally yellow. If stools remain green in a breastfed baby after the first week, it may be related to foremilk/hindmilk imbalance (baby getting more of the watery foremilk and less of the fatty hindmilk). This can happen with short feeding sessions, oversupply, or switching breasts too quickly. Try allowing baby to finish one breast before offering the other. In formula-fed babies, some formulas, especially iron-fortified ones, can cause green stools.' },
    { ageRange: '1-3 months', context: 'Occasional green stools remain normal. Persistent green, frothy stools in a breastfed baby may warrant evaluation of feeding technique. If green stools are accompanied by mucus, blood, or increased frequency, it could indicate a milk protein allergy or infection.' },
    { ageRange: '3-6 months', context: 'Green stools may occur occasionally and are usually not significant. As feeding patterns change, stool color may vary.' },
    { ageRange: '6-12 months', context: 'With solid foods, stool color varies widely based on diet. Green vegetables can cause green stools. This is completely normal.' },
  ],
  whenNormal: ['Green stools during the meconium-to-milk transition in the first week', 'Occasional green stools in an otherwise well baby', 'Green stools related to iron-fortified formula', 'Stool color that varies from feeding to feeding'],
  whenToMention: ['Persistently green, frothy stools in a breastfed baby', 'Green stools with mucus or streaks of blood', 'Green stools with increased frequency or change in baby\'s behavior'],
  whenToActNow: ['Green stools with significant blood, abdominal distension, or vomiting', 'Watery green diarrhea with signs of dehydration in a newborn'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Baby Stool Colors. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Infant Stool Patterns. MedlinePlus.', url: 'https://medlineplus.gov/ency/article/003300.htm' },
  ],
  relatedConcernSlugs: ['newborn-transitional-stools', 'newborn-mucousy-poop', 'newborn-watery-stools-breastfed'],
};
