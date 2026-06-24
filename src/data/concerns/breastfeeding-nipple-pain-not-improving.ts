import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'breastfeeding-nipple-pain-not-improving',
  title: 'Nipple Pain from Breastfeeding That Won\'t Improve',
  category: 'feeding',
  searchTerms: [
    'nipple pain breastfeeding not getting better',
    'cracked nipples won\'t heal',
    'breastfeeding nipple pain weeks',
    'nipple damage breastfeeding',
    'sore nipples still hurting breastfeeding',
    'breastfeeding nipple blister',
    'nipple thrush symptoms',
    'vasospasm nipple breastfeeding',
    'nipple blanching after breastfeeding',
    'persistent nipple pain nursing',
    'raw nipples breastfeeding',
  ],
  quickAnswer:
    'Nipple pain that persists beyond the first week of breastfeeding or that worsens over time is not normal and almost always has a treatable cause. The most common causes are a persistently shallow latch, tongue tie, thrush (yeast infection), vasospasm, or bacterial infection. Identifying the specific cause is crucial because treatments differ significantly. An IBCLC-certified lactation consultant can help diagnose the issue and develop a treatment plan.',
  byAge: [
    {
      ageRange: '0-2 weeks postpartum',
      context:
        'Some nipple tenderness during the first few days is common as your tissue adjusts. However, if pain is severe from the start, does not improve with latch corrections, or your nipples are cracked, blistered, or bleeding, seek help promptly. Early intervention is important because ongoing nipple trauma can lead to infection and can undermine milk supply if pain causes you to limit feedings. A lactation consultant can observe a full feeding and identify latch or positioning issues.',
    },
    {
      ageRange: '2-6 weeks postpartum',
      context:
        'Pain that has persisted for weeks often has a specific underlying cause. Tongue tie (ankyloglossia) should be evaluated, as it restricts the baby\'s ability to achieve a deep latch. Thrush, a yeast infection, causes burning, shooting, or itching pain in the nipple and may show white patches in the baby\'s mouth. Vasospasm causes blanching (turning white) of the nipple after feeds with throbbing pain. Each requires different treatment: frenotomy, antifungal medication, or warmth and vasodilators, respectively.',
    },
    {
      ageRange: '6 weeks - 6 months postpartum',
      context:
        'Ongoing nipple pain at this stage is especially concerning because it can lead to premature weaning against the mother\'s wishes. Bacterial infection (often Staphylococcus aureus) can colonize cracked nipples and requires topical or oral antibiotics. Eczema or dermatitis of the nipple can cause persistent irritation. Poorly fitting pump flanges, if you are also pumping, can cause ongoing damage. A thorough evaluation by a healthcare provider familiar with lactation is warranted.',
    },
  ],
  whenNormal: [
    'Mild tenderness during the first 10-20 seconds of a latch in the first week that resolves quickly.',
    'Brief sensitivity that improves day over day during the first week of breastfeeding.',
    'Occasional mild discomfort when your baby adjusts their latch during a feed.',
  ],
  whenToMention: [
    'Nipple pain has persisted beyond the first 1-2 weeks without improvement.',
    'Your nipples are cracked, bleeding, or have blisters that are not healing.',
    'You experience burning, shooting, or deep pain during or between feeds.',
  ],
  whenToActNow: [
    'You develop fever, chills, or flu-like symptoms along with breast pain (possible mastitis).',
    'Your nipple has signs of infection: pus, spreading redness, warmth, or increasing swelling.',
    'The pain is so severe that you are unable to feed your baby and are at risk of dehydration for the baby.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['breastfeeding-latch-pain', 'breastfeeding-latch-difficulty-ongoing', 'tongue-tie', 'sore-cracked-nipples-breastfeeding'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Common Breastfeeding Challenges. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Common-Breastfeeding-Challenges.aspx',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Breastfeeding Challenges. ACOG.',
      url: 'https://www.acog.org/womens-health/faqs/breastfeeding-your-baby',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Nipple Pain, Damage, and Vasospasm in the First 8 Weeks Postpartum. Breastfeeding Medicine.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24506716/',
    },
  ],
};
