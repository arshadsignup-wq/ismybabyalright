import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-misinformation-social-media',
  title: 'Breastfeeding Misinformation on Social Media',
  category: 'maternal',
  searchTerms: [
    'breastfeeding misinformation',
    'breastfeeding myths social media',
    'wrong breastfeeding advice online',
    'breastfeeding TikTok advice',
    'breastfeeding Instagram misinformation',
    'bad breastfeeding advice',
    'breastfeeding influencer advice dangerous',
    'is breastfeeding advice online reliable',
    'fact check breastfeeding claims',
    'breastfeeding conspiracy theories',
  ],
  quickAnswer:
    'Social media is filled with breastfeeding advice that ranges from helpful to dangerously wrong. Common myths include claims that certain foods drastically increase supply, that pain is always normal, that formula supplementation will permanently "ruin" breastfeeding, or that specific products are miracle solutions. Always verify breastfeeding information with evidence-based sources like your pediatrician, a certified lactation consultant (IBCLC), or organizations like the AAP and WHO.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'New parents are especially vulnerable to misinformation during this overwhelming period. Common harmful myths include that colostrum is insufficient and newborns need water or formula from birth, that pain during breastfeeding is "normal and will go away," and that you should wait for your milk to "come in" before nursing. In reality, early and frequent nursing is essential for establishing supply, pain beyond mild tenderness needs evaluation, and colostrum is perfectly designed for newborn needs.',
    },
    {
      ageRange: '6 weeks - 6 months postpartum',
      context:
        'During this phase, parents often encounter misinformation about supply boosters (galactagogues), with unproven supplements, cookies, and teas marketed as essential for maintaining supply. Some social media accounts promote exclusive breastfeeding dogma that shames any use of formula, while others undermine breastfeeding by exaggerating difficulties. The evidence shows that supply is primarily driven by frequent, effective milk removal, not by special foods or supplements.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'Common misinformation at this stage includes claims that breast milk becomes "just water" after 6 months, that extended breastfeeding is harmful, or conversely that all babies must be breastfed until age 2 or they will suffer developmental harm. The WHO recommends breastfeeding up to 2 years and beyond alongside complementary foods, but the AAP supports continued breastfeeding as long as mutually desired. Both formula and breast milk are valid choices.',
    },
  ],
  whenNormal: [
    'You encounter conflicting breastfeeding advice online and feel unsure what to believe.',
    'You feel pressure from social media to breastfeed a certain way or for a specific duration.',
    'You notice your mood or confidence is affected after scrolling through breastfeeding content online.',
  ],
  whenToMention: [
    'Online advice has led you to delay seeking medical help for breastfeeding pain or supply issues.',
    'You are taking supplements or following practices promoted online without discussing them with your healthcare provider.',
    'Social media pressure around breastfeeding is contributing to anxiety or feelings of inadequacy.',
  ],
  whenToActNow: [
    'You followed online advice to restrict your baby\'s feeding or avoid necessary formula supplementation, and your baby is not gaining weight or is showing signs of dehydration.',
    'You are using herbal supplements promoted online and experiencing adverse effects such as nausea, diarrhea, or changes in your baby\'s behavior.',
    'Pressure from online communities is causing severe anxiety, depression, or thoughts of self-harm.',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: ['breastfeeding-pressure-online-guilt', 'breastfeeding-feeling-inadequate-supply', 'formula-ingredient-fear-social-media'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infant and Young Child Feeding Fact Sheet.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Social Media and Its Impact on Breastfeeding. Journal of Human Lactation.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/34261367/',
    },
  ],
};
