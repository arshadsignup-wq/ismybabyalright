import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'antibiotic-use-in-babies',
  title: 'Antibiotics in Babies: What Parents Should Know',
  category: 'medical',
  searchTerms: [
    'antibiotics for baby',
    'baby on antibiotics side effects',
    'are antibiotics safe for babies',
    'baby antibiotics diarrhea',
    'when does baby need antibiotics',
    'antibiotics infant risks',
    'baby antibiotic resistance',
    'probiotics with antibiotics baby',
    'baby won\'t take antibiotics',
    'antibiotic side effects infant',
  ],
  quickAnswer:
    'Antibiotics are life-saving medications when used for bacterial infections but are ineffective against viruses, which cause most childhood illnesses. When your doctor prescribes antibiotics for your baby, it is important to complete the full course even if your baby seems better. Common side effects include diarrhea and diaper rash from disruption of normal gut bacteria, which are usually temporary and manageable.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Antibiotics in this age group are often given intravenously in a hospital setting for suspected serious bacterial infections. Because young infants cannot reliably fight bacterial infections on their own, doctors may start antibiotics before test results confirm an infection, then stop them if cultures come back negative. This cautious approach is medically appropriate given the vulnerability of newborns.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The most common reason for antibiotics at this age is a bacterial ear infection or urinary tract infection. Amoxicillin is typically the first-line antibiotic for ear infections. Side effects may include loose stools, mild diarrhea, or a diaper rash from yeast overgrowth. If your baby develops a rash while on amoxicillin, contact your doctor  -  it may be a common non-allergic rash or, rarely, a true allergic reaction.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Ear infections are the most common reason for antibiotics at this age. Your doctor may recommend a "watch and wait" approach for mild ear infections in babies over 6 months, monitoring for 48-72 hours before prescribing antibiotics, since many ear infections resolve on their own. If antibiotics are prescribed, give them at the scheduled times and complete the full course. Mixing liquid antibiotics with a small amount of food can help if your baby resists the taste.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers may need antibiotics for ear infections, strep throat (usually after age 2-3), sinus infections, or urinary tract infections. It is appropriate to ask your doctor whether the illness truly requires antibiotics or if watchful waiting is an option. If your toddler spits out or vomits the medication within 15 minutes, you can usually re-give the dose. After 15 minutes, the medication has likely been absorbed. Probiotics may help reduce antibiotic-related diarrhea.',
    },
  ],
  whenNormal: [
    'Your baby has mild diarrhea or looser stools during the antibiotic course  -  this is a common side effect from disruption of gut bacteria',
    'A mild diaper rash develops during antibiotics, often from yeast overgrowth  -  antifungal diaper cream can help',
    'Your baby\'s symptoms begin improving within 48-72 hours of starting antibiotics',
    'Your baby has a faint, non-itchy, flat pink rash during amoxicillin treatment  -  this is often a common non-allergic reaction',
  ],
  whenToMention: [
    'Your baby\'s symptoms are not improving after 48-72 hours on antibiotics  -  the antibiotic may need to be changed',
    'Your baby develops significant diarrhea (more than 3 watery stools per day) or refuses to take the medication',
    'You notice an itchy, raised, or hive-like rash during antibiotic treatment, which may indicate a true allergic reaction',
    'You have concerns about antibiotic overuse and want to discuss whether this illness truly requires antibiotics',
  ],
  whenToActNow: [
    'Your baby develops facial swelling, difficulty breathing, or widespread hives after taking an antibiotic  -  this is an allergic reaction requiring immediate medical attention',
    'Your baby has severe diarrhea with blood or mucus, high fever, or signs of dehydration while on antibiotics  -  seek medical care promptly',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. The Right Use of Antibiotics. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/treatments/Pages/Antibiotics-When-They-Can-and-Cant-Help.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Antibiotic Use and Resistance: Be Antibiotics Aware.',
      url: 'https://www.cdc.gov/antibiotic-use/about/index.html',
    },
    {
      org: 'AAP',
      citation:
        'Lieberthal AS, et al. The Diagnosis and Management of Acute Otitis Media. Pediatrics, 2013.',
      url: 'https://publications.aap.org/pediatrics/article/131/3/e964/30912/The-Diagnosis-and-Management-of-Acute-Otitis-Media',
    },
  ],
};
