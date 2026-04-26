import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-antibiotic-side-effects',
  title: 'Baby Antibiotic Side Effects',
  category: 'medical',
  searchTerms: [
    'baby antibiotic side effects',
    'baby diarrhea from antibiotics',
    'baby amoxicillin side effects',
    'antibiotic rash baby',
    'baby vomiting from antibiotics',
    'baby upset stomach antibiotics',
    'diaper rash from antibiotics baby',
    'antibiotic yeast infection baby',
    'baby refuses antibiotics',
    'probiotics with antibiotics baby',
  ],
  quickAnswer:
    'Antibiotics are sometimes necessary for bacterial infections in babies, but they commonly cause mild side effects. The most frequent side effects are loose stools or diarrhea, diaper rash (often from yeast), upset stomach, and occasionally vomiting. These side effects happen because antibiotics affect the good bacteria in the gut along with the bad bacteria. Most side effects are mild and resolve after the antibiotic course is completed. Always finish the full course prescribed by your doctor, even if your baby seems better.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies may experience loose or watery stools, increased fussiness, and diaper rash while on antibiotics. Give the medication as directed and try to give it with a feeding to reduce stomach upset. If your baby is vomiting the medication back up repeatedly, contact your pediatrician - they may be able to suggest a different formulation or timing. Watch for signs of allergic reaction, which are more important to monitor than GI side effects.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Diarrhea is the most common antibiotic side effect at this age. Offer extra fluids and frequent breastfeeding or formula to prevent dehydration. A yeast diaper rash (bright red with small satellite spots around the edges) may develop because antibiotics disrupt the normal balance of organisms on the skin. Over-the-counter antifungal diaper cream can help. Ask your pediatrician about age-appropriate probiotics during the antibiotic course.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers commonly receive antibiotics for ear infections and may resist taking the medicine due to taste. Mixing with a small amount of food (check with your pharmacist about which foods are safe to mix with the specific antibiotic) can help. Diarrhea and diaper rash remain common side effects. If your toddler develops a widespread red rash while on amoxicillin, it may be a drug reaction or may indicate mononucleosis rather than a true allergy - call your pediatrician to discuss.',
    },
    {
      ageRange: '2-5 years',
      context:
        'Older toddlers and preschoolers may experience similar GI side effects and can sometimes describe belly pain or nausea. If your child develops hives (raised, itchy welts), facial swelling, or difficulty breathing while on any antibiotic, stop the medication and seek medical attention immediately - this could be an allergic reaction that needs prompt treatment.',
    },
  ],
  whenNormal: [
    'Your baby has looser or more frequent stools while on antibiotics that are not watery or bloody',
    'Mild diaper rash develops during or just after the antibiotic course',
    'Your baby is slightly fussier around medicine time but tolerates the antibiotic overall',
    'A mild, flat, non-itchy rash appears while taking amoxicillin (this is common and often not a true allergy)',
    'Side effects resolve within a few days after completing the antibiotic course',
  ],
  whenToMention: [
    'Diarrhea is watery and happening more than 5-6 times per day, or your baby seems uncomfortable',
    'A rash appears while on antibiotics and you are unsure whether it is an allergic reaction or a common drug reaction',
    'Your baby is vomiting the antibiotic repeatedly and you cannot get the medicine to stay down',
  ],
  whenToActNow: [
    'Your baby develops hives, facial or lip swelling, difficulty breathing, or wheezing while on an antibiotic - stop the medication and seek emergency medical care immediately',
    'There is blood in the stool, your baby shows signs of dehydration (no wet diapers in 6-8 hours, no tears, dry mouth, sunken fontanel), or your baby seems significantly worse on the antibiotic than before starting it',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Right Way to Use Antibiotics. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/treatments/Pages/The-Right-Way-to-Use-Antibiotics.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Antibiotic Use in Children.',
      url: 'https://www.cdc.gov/antibiotic-use/community/about/should-know.html',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Antibiotics. U.S. National Library of Medicine.',
      url: 'https://medlineplus.gov/antibiotics.html',
    },
  ],
};
