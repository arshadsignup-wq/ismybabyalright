import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-honey-exposure',
  title: 'Baby Accidentally Given Honey Before Age 1',
  category: 'feeding',
  searchTerms: ['baby ate honey', 'baby honey botulism', 'honey for baby under 1', 'baby given honey accidentally', 'infant botulism honey', 'baby honey danger', 'when can baby have honey', 'baby ate food with honey', 'honey on pacifier baby', 'baby botulism symptoms'],
  quickAnswer: 'Honey should not be given to babies under 12 months because it can contain spores of Clostridium botulinum, which can cause infant botulism - a serious but rare illness. If your baby accidentally had a small amount of honey, the risk of botulism is still very low (about 1 in 10,000 to 1 in 100,000 exposures result in illness). Watch your baby closely for symptoms over the next 3-30 days. Most accidental exposures do not result in illness, but knowing the warning signs is important.',
  byAge: [
    { ageRange: '0-6 months', context: 'Babies under 6 months are at the highest risk for infant botulism because their gut flora is the least developed. If your young baby consumed honey (including on a pacifier, in gripe water containing honey, or in baked goods made with honey), watch closely for symptoms: constipation is usually the first sign, followed by weak crying, poor feeding, decreased movement, and a floppy appearance. Contact your pediatrician to discuss the exposure.' },
    { ageRange: '6-12 months', context: 'While the risk decreases as gut bacteria mature, babies under 12 months should still avoid honey in any form - raw, cooked, baked, or as an ingredient. If your baby ate food containing honey, the risk is lower with cooked/baked products than raw honey, but monitoring is still appropriate. Symptoms of infant botulism, if they occur, typically appear within 3-30 days of exposure.' },
    { ageRange: '12+ months', context: 'After the first birthday, honey is safe. The gut has developed enough beneficial bacteria to prevent C. botulinum spores from growing. There is no need to continue avoiding honey past 12 months.' },
  ],
  whenNormal: ['Your baby over 12 months ate honey - this is safe', 'Your baby had a tiny taste and shows no symptoms after several days', 'Mild worry after realizing honey was in a product - monitoring is appropriate'],
  whenToMention: ['Your baby under 12 months ate honey and you want guidance on what to watch for', 'You are unsure whether a product your baby ate contained honey', 'Your baby consumed a honey-containing product like certain cereals or crackers'],
  whenToActNow: ['Your baby develops constipation followed by weak crying, poor feeding, decreased movement, or appears floppy within 30 days of honey exposure', 'Your baby has difficulty swallowing, a weak cry, or droopy eyelids', 'Your baby seems unusually floppy or lethargic', 'Your baby under 6 months consumed raw honey - call your pediatrician promptly even without symptoms'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['constipation', 'baby-poisoning-signs', 'floppy-baby-syndrome', 'baby-not-interested-in-food'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Why Shouldn\'t Babies Eat Honey? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Honey-Botulism.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Infant Botulism.', url: 'https://www.cdc.gov/botulism/infant-botulism/index.html' },
    { org: 'WHO', citation: 'World Health Organization. Botulism Fact Sheet.', url: 'https://www.who.int/news-room/fact-sheets/detail/botulism' },
  ],
};
