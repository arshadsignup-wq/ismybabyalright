import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-medication-breastfeeding-safe',
  title: 'Medications While Breastfeeding: Safety Guide',
  category: 'maternal',
  searchTerms: [
    'medication safe while breastfeeding',
    'can I take ibuprofen while breastfeeding',
    'breastfeeding safe medications',
    'antibiotics while breastfeeding',
    'antidepressants breastfeeding safe',
    'cold medicine while breastfeeding',
    'allergy medicine breastfeeding',
    'pain medication breastfeeding',
    'medication and breast milk',
    'LactMed drug safety breastfeeding',
    'Tylenol while breastfeeding',
  ],
  quickAnswer:
    'Most commonly used medications are compatible with breastfeeding. The amount of a drug that transfers into breast milk is typically very small, usually less than 1-2% of the maternal dose. Ibuprofen and acetaminophen are considered safe for pain relief. Many antibiotics, most antidepressants (particularly SSRIs), and many allergy medications are also compatible. The NIH LactMed database is the gold-standard resource for checking specific medications.',
  byAge: [
    {
      ageRange: '0-4 weeks postpartum',
      context:
        'In the immediate postpartum period, you may need pain medications for recovery. Ibuprofen (Advil/Motrin) and acetaminophen (Tylenol) are first-line choices and are safe during breastfeeding. Short courses of opioids may be necessary after cesarean delivery, and small amounts transfer to breast milk, but short-term use at prescribed doses is generally acceptable. Monitor your newborn for excessive sleepiness or poor feeding. If you need antibiotics for a postpartum infection, most are compatible with breastfeeding.',
    },
    {
      ageRange: '1-3 months postpartum',
      context:
        'As your baby grows, their ability to metabolize any medications that transfer through milk improves. If you are managing postpartum mood disorders, know that many antidepressants, particularly sertraline (Zoloft) and paroxetine (Paxil), have very low transfer rates into breast milk. Untreated depression or anxiety poses a greater risk to you and your baby than most medications. Discuss options with your provider rather than stopping medication or avoiding treatment.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'By this time, your baby\'s liver and kidneys are more mature, making medication exposure through breast milk even less of a concern. If you develop a new illness (cold, sinus infection, UTI), most standard treatments are compatible with breastfeeding. Avoid decongestants containing pseudoephedrine, as they can reduce milk supply. Antihistamines like cetirizine (Zyrtec) and loratadine (Claritin) are preferred over diphenhydramine (Benadryl), which can cause drowsiness in both you and your baby.',
    },
    {
      ageRange: '6+ months postpartum',
      context:
        'As your baby starts solids and relies less exclusively on breast milk, the relative exposure to any medication through breast milk decreases further. Continue to check specific medications using the LactMed database or by asking your pharmacist. Some medications to generally avoid while breastfeeding include certain chemotherapy drugs, radioactive iodine, and high-dose aspirin. Never stop a necessary medication without discussing alternatives with your provider first.',
    },
  ],
  whenNormal: [
    'Taking ibuprofen or acetaminophen for pain relief while breastfeeding',
    'Using a short course of antibiotics prescribed by your provider',
    'Taking an SSRI antidepressant that has been discussed with your provider',
    'Using most over-the-counter allergy medications (non-sedating preferred)',
  ],
  whenToMention: [
    'You need to start a new medication and want to confirm it is breastfeeding-compatible',
    'Your baby seems unusually drowsy, fussy, or is not feeding well after you start a new medication',
    'You have been told to stop breastfeeding for a medication and want a second opinion (many medications previously thought unsafe have been shown to be compatible)',
    'You are taking multiple medications and are concerned about cumulative effects',
  ],
  whenToActNow: [
    'Your baby is excessively sleepy, difficult to wake, limp, or breathing slowly after you have taken opioid pain medication',
    'You accidentally took a medication that is known to be unsafe during breastfeeding (such as certain chemotherapy agents) and need immediate guidance',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-caffeine-breastfeeding-safe',
    'postpartum-nutrition-breastfeeding-diet',
    'refusing-breast',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. LactMed: Drugs and Lactation Database. NIH, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK501922/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Transfer of Drugs and Therapeutics Into Human Breast Milk: An Update. Pediatrics, 2013.',
      url: 'https://publications.aap.org/pediatrics/article/132/3/e795/31630/The-Transfer-of-Drugs-and-Therapeutics-Into-Human',
    },
    {
      org: 'ACOG',
      citation:
        'American College of Obstetricians and Gynecologists. Breastfeeding Your Baby. ACOG FAQ, 2022.',
      url: 'https://www.acog.org/womens-health/faqs/breastfeeding-your-baby',
    },
  ],
};
