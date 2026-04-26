import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'probiotics-for-baby',
  title: 'Probiotics for Babies',
  category: 'digestive',
  searchTerms: [
    'probiotics for babies',
    'baby probiotic drops',
    'should I give my baby probiotics',
    'infant probiotics benefits',
    'best probiotic for baby',
    'probiotics for colic',
    'probiotics for baby constipation',
    'lactobacillus reuteri baby',
    'are probiotics safe for babies',
    'when to start probiotics baby',
    'probiotics breastfed baby',
  ],
  quickAnswer:
    'Probiotics are live beneficial bacteria that may help support digestive health. Some research suggests certain strains (especially Lactobacillus reuteri) may help with colic in breastfed babies. However, the evidence is still evolving, and not all probiotic products are the same. Always talk with your pediatrician before starting any probiotic, as they can recommend specific strains and products if appropriate for your baby.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'This is when colic peaks and many parents consider probiotics. Some studies show that Lactobacillus reuteri may reduce crying time in breastfed colicky babies. Evidence is less clear for formula-fed babies. Probiotics are generally considered safe for healthy, full-term infants, but always consult your pediatrician first, especially for premature babies or those with immune concerns.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As colic typically improves, the need for probiotics may decrease. If your baby has ongoing digestive discomfort like excessive gas or irregular stools, probiotics may still be discussed with your doctor. The most studied infant strains include Lactobacillus reuteri and Bifidobacterium infantis. Probiotics are not regulated like medications, so choose products specifically designed for infants.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As solids are introduced, your baby\'s gut microbiome is rapidly diversifying naturally through food exposure. Fermented foods like plain whole milk yogurt (after 6 months) contain natural probiotics and are generally a good way to support gut health. If your baby is on antibiotics, your pediatrician may recommend a probiotic to prevent antibiotic-associated diarrhea.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers can get probiotics through foods like yogurt, kefir, and certain cheeses. Probiotic supplements may be recommended during or after antibiotic courses. For toddlers with chronic constipation or recurrent diarrhea, some studies suggest probiotics may help, though results are mixed. Work with your pediatrician to determine if a specific probiotic would benefit your child.',
    },
  ],
  whenNormal: [
    'Your baby has typical digestive patterns and you are curious about probiotics for general wellness',
    'Mild gas or occasional fussiness that is part of normal digestive development',
    'Your pediatrician suggests trying a probiotic for a specific concern like colic',
    'Your baby is taking antibiotics and your doctor recommends a probiotic alongside',
  ],
  whenToMention: [
    'You want to start a probiotic and need guidance on which strain and product to choose',
    'Your baby has persistent digestive issues that are not improving with standard care',
    'Your baby has any immune system concerns or was born prematurely - probiotics should only be used under medical guidance',
  ],
  whenToActNow: [
    'Your baby has a severe allergic reaction after taking a probiotic - swelling, difficulty breathing, or widespread rash',
    'Your immunocompromised baby develops fever or worsening symptoms after starting probiotics',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Probiotics in Infant Formula. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/feeding-nutrition/Pages/Probiotics-in-Infant-Formula.aspx',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Probiotics in Food: Health and Nutritional Properties.',
      url: 'https://www.who.int/publications/i/item/9241546743',
    },
  ],
};
