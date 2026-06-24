import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cannabis-thc-edible-accidental-ingestion',
  title: 'Baby or Toddler Accidentally Ate a Cannabis Edible - What to Do',
  category: 'medical',
  searchTerms: [
    'baby ate edible',
    'toddler ate cannabis gummy',
    'child ate THC edible',
    'baby ingested marijuana edible',
    'toddler ate weed gummy',
    'cannabis edible child emergency',
    'THC poisoning toddler',
    'baby ate THC candy',
    'child marijuana ingestion symptoms',
    'toddler ate cannabis what to do',
    'edible poisoning child',
    'cannabis gummy looks like candy',
    'THC edible child hospital',
    'marijuana edible child treatment',
    'accidental edible ingestion toddler',
  ],
  quickAnswer:
    'If your baby or toddler ate a cannabis/THC edible, call Poison Control (1-800-222-1222) and seek emergency medical care immediately. Cannabis edible ingestion in young children has increased by over 1,300% since 2017, largely because many products look like regular candy or snacks. THC affects small children much more severely than adults and can cause drowsiness, breathing problems, seizures, and loss of consciousness. Do not wait for symptoms to appear - get help right away.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Accidental cannabis ingestion in babies is less common but can happen through breast milk (if a breastfeeding parent uses cannabis) or if a baby gets hold of an edible product. Babies are extremely vulnerable to THC because of their small body weight and immature liver. Even a small amount can cause significant sedation, difficulty breathing, and poor muscle tone. If you suspect any THC exposure in an infant, this is a medical emergency.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are the most common age group for accidental cannabis edible ingestion because they are mobile, curious, and naturally attracted to colorful candy-like products. Many THC gummies, chocolates, and cookies are packaged to closely resemble popular candy brands. Symptoms can appear within 30 minutes to 2 hours and include extreme drowsiness, unsteadiness, dilated pupils, fast heart rate, vomiting, and in severe cases, difficulty breathing, seizures, or unresponsiveness. Be honest with medical staff about what your child consumed - they are there to help, not judge.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Preschoolers can identify and seek out candy-like products, making them vulnerable when THC edibles are accessible. At this age, children may consume larger quantities before a parent notices. Symptoms to watch for include unusual drowsiness, difficulty walking, slurred speech, vomiting, and agitation. THC can remain in a child\'s system longer than in adults. If your child consumed an edible, bring the packaging to the ER so medical staff can determine the THC dose.',
    },
  ],
  whenNormal: [
    'There are no cannabis products in your home or they are stored in a locked container out of reach of children.',
    'Your child was near cannabis products but did not consume any.',
  ],
  whenToMention: [
    'You use cannabis products and want guidance on safe storage practices to protect your child.',
    'You are breastfeeding and using cannabis - THC passes into breast milk and can affect your baby.',
    'Your child attends a home where cannabis products may be accessible.',
  ],
  whenToActNow: [
    'Your child consumed or may have consumed a cannabis edible in any amount - call Poison Control (1-800-222-1222) and go to the ER immediately.',
    'Your child is unusually drowsy, unresponsive, or difficult to wake.',
    'Your child is having difficulty breathing, seizures, or has lost consciousness.',
    'Your child is vomiting, has dilated pupils, or is extremely unsteady on their feet after possible exposure.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-swallowed-something',
    'when-to-call-pediatrician',
    'baby-first-aid-kit-essentials',
  ],
  sources: [
    {
      org: 'AAP',
      citation: 'AAP Pediatrics - Pediatric Edible Cannabis Exposures and Acute Toxicity (2023)',
      url: 'https://publications.aap.org/pediatrics/article/151/2/e2022057761/190427/Pediatric-Edible-Cannabis-Exposures-and-Acute',
    },
    {
      org: 'Poison Control',
      citation: 'National Capital Poison Center - Cannabis Edibles and Children',
      url: 'https://www.poison.org/articles/edible-marijuana-products-and-kids',
    },
    {
      org: 'FDA',
      citation: 'FDA - Accidental Ingestion of Food Products Containing THC by Children',
      url: 'https://www.fda.gov/food/alerts-advisories-safety-information/fda-warns-consumers-about-accidental-ingestion-children-food-products-containing-thc',
    },
  ],
};
