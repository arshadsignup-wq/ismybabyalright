import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-diarrhea-when-to-worry',
  title: 'When Should I Worry About My Baby\'s Diarrhea?',
  category: 'digestive',
  searchTerms: [
    'baby diarrhea when to worry',
    'baby watery poop',
    'how many loose stools is diarrhea baby',
    'baby diarrhea dehydration',
    'infant diarrhea treatment',
    'baby diarrhea how long is too long',
    'newborn diarrhea vs normal poop',
    'baby diarrhea no fever',
    'baby diarrhea after eating',
    'when to take baby to doctor diarrhea',
  ],
  quickAnswer:
    'True diarrhea in babies means a significant increase in the frequency and wateriness of stools compared to your baby\'s normal pattern. Breastfed babies normally have frequent, loose stools that can look like diarrhea but are completely normal. The biggest concern with actual diarrhea is dehydration. Most episodes of viral diarrhea resolve within 5-7 days. Seek medical attention if diarrhea is accompanied by blood, high fever, signs of dehydration, or lasts more than a week.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Breastfed babies can have 8-12 loose, seedy, yellow stools per day and this is completely normal - not diarrhea. True diarrhea in a young baby is a sudden change to much more frequent, watery stools. Diarrhea in babies under 3 months always warrants a call to the pediatrician as young babies can dehydrate quickly. Continue breastfeeding or formula feeding during diarrhea as this helps prevent dehydration and provides necessary nutrients. Do not dilute formula or switch to plain water.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies start solids, their stool patterns change and occasional loose stools related to new foods are common. True diarrhea - multiple watery stools that are significantly different from your baby\'s baseline - may be caused by viral infections (rotavirus, norovirus), food sensitivities, or teething (though teething as a cause is debated). Continue offering breast milk, formula, and age-appropriate foods. The BRAT diet is no longer specifically recommended, but easy-to-digest foods can be helpful. Oral rehydration solutions like Pedialyte can supplement fluid intake.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddler diarrhea is very common and often caused by viral illness, dietary factors (too much juice, fruit, or sugar-free sweeteners), or functional diarrhea. Most viral diarrhea resolves within 5-7 days. Encourage fluid intake with water, diluted juice, and oral rehydration solutions. Continue offering regular foods - restricting the diet is generally not helpful. If diarrhea persists beyond 2 weeks without an identified cause, your doctor may screen for conditions like celiac disease, food allergies, or parasitic infections.',
    },
  ],
  whenNormal: [
    'Your breastfed baby has frequent, loose, seedy stools but is growing well and not in distress.',
    'Your baby has a few days of loose stools during a mild viral illness but is still drinking well and producing wet diapers.',
    'Your baby has looser stools after trying a new food and the pattern resolves within a day or two.',
  ],
  whenToMention: [
    'Diarrhea has lasted more than a week without improvement.',
    'Your baby has diarrhea with low-grade fever but is still drinking and making wet diapers.',
    'Your baby has recurrent episodes of diarrhea that come and go without clear cause.',
  ],
  whenToActNow: [
    'There is blood or mucus in your baby\'s diarrhea.',
    'Your baby shows signs of dehydration - fewer than 4 wet diapers in 24 hours, sunken fontanelle, no tears, dry mouth, lethargy.',
    'Your baby has diarrhea with high fever (over 102 degrees F), severe vomiting, or is refusing all fluids.',
    'Your baby under 3 months has any significant diarrhea - call your pediatrician promptly.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-chronic-diarrhea-no-infection',
    'baby-dehydration-hot-weather',
    'oral-rehydration-baby',
    'rotavirus-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diarrhea in Babies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/abdominal/Pages/Diarrhea.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Diarrhea: Common Illness, Global Killer.',
      url: 'https://www.cdc.gov/diarrhea/about/index.html',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Diarrhoeal Disease Fact Sheet.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease',
    },
  ],
};
