import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-watery-stools-breastfed',
  title: 'Watery Stools in Breastfed Newborns',
  category: 'digestive',
  searchTerms: ['breastfed baby watery poop', 'baby loose stools breastfeeding', 'watery stool newborn normal', 'breastfed baby diarrhea or normal', 'newborn runny poop', 'liquid poop breastfed baby', 'baby stool too watery', 'breastfed poop consistency', 'is watery poop normal breastfed', 'breastfed baby poop like water'],
  quickAnswer: 'Breastfed newborns normally have loose, seedy, mustard-yellow stools that may appear watery. This is completely normal and is not diarrhea. True diarrhea in a breastfed baby is characterized by a sudden increase in frequency, very watery consistency with no substance, and often a change in odor. Normal breastfed stools may look watery but should have some seedy texture.',
  byAge: [
    { ageRange: '0-1 month', context: 'Normal breastfed stools are loose, seedy, and yellow, often described as looking like mustard with cottage cheese-like curds. They can look quite watery compared to formula-fed stools, which is completely normal. Breastfed babies may stool 3-4 or more times per day. The frequency and looseness of breastfed stools is not diarrhea. True diarrhea would be a significant change from the baby\'s normal pattern: much more frequent, truly watery (like water with no substance), and possibly green or foul-smelling.' },
    { ageRange: '1-3 months', context: 'Breastfed stools continue to be loose and seedy. Stool frequency may decrease, with some breastfed babies having a bowel movement only once every few days, which is also normal as long as the stool is soft when it comes.' },
    { ageRange: '3-6 months', context: 'Stool patterns continue to vary. Loose, breastfed stools remain the norm.' },
    { ageRange: '6-12 months', context: 'With solid foods, stools become more formed. The loose breastfed stool pattern changes as diet diversifies.' },
  ],
  whenNormal: ['Yellow, seedy, loose stools in a breastfed baby', 'Multiple stools per day (especially in the first month)', 'Baby is feeding well, gaining weight, and comfortable', 'Stool has some texture and seedy appearance, not pure liquid'],
  whenToMention: ['Stools seem more watery than usual with no seedy texture', 'Stool frequency has increased significantly from baby\'s normal pattern', 'You are unsure whether stools are normal or diarrhea'],
  whenToActNow: ['Truly watery stools (like water) occurring 8+ times per day, especially with fever or lethargy', 'Signs of dehydration: fewer wet diapers, sunken fontanelle, dry mouth, or lethargy'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Breastfed Baby Poop. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Infant Diarrhea. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK448082/' },
  ],
  relatedConcernSlugs: ['newborn-explosive-poop-normal', 'newborn-transitional-stools', 'newborn-infrequent-stools-breastfed'],
};
