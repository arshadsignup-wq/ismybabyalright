import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-cry-it-out-safety',
  title: 'Is Cry It Out Safe for My Baby?',
  category: 'sleep',
  searchTerms: ['cry it out safe','CIO safe baby','cry it out damage baby','does cry it out harm baby','is CIO safe for babies','cry it out research','cry it out attachment','crying it out side effects','extinction sleep training safety','full extinction sleep training safe'],
  quickAnswer: 'Research consistently shows that extinction-based sleep training (cry it out) does not cause long-term harm to babies, attachment, stress levels, or development. A landmark 5-year follow-up study found no differences in emotional health, behavior, or parent-child attachment between sleep-trained and non-sleep-trained children. However, this method is not right for every family, and that is okay.',
  byAge: [
    { ageRange: '0-4 months', context: 'Cry it out is not appropriate for babies under 4 months. Young babies cry to communicate needs including hunger, discomfort, and the need for closeness. Their nervous system is not mature enough for self-regulation. Always respond to your newborn\'s cries.' },
    { ageRange: '4-6 months', context: 'Some families choose full extinction at this age, though many experts suggest starting with gentler approaches first. If you use CIO, ensure your baby is fed, dry, safe, and healthy before starting. Most babies using this method show significant improvement within 3-5 nights, with the first night typically being the hardest.' },
    { ageRange: '6-12 months', context: 'This is a common age for CIO implementation. Your baby has the developmental capacity to self-soothe. The method involves putting your baby down awake, saying goodnight, and not returning until morning (or a predetermined feed time). Crying typically peaks on nights 1-2 and decreases rapidly. Research shows cortisol levels normalize quickly and are not elevated in follow-up studies.' },
    { ageRange: '12-24 months', context: 'CIO can work for toddlers but crying may be more intense and prolonged because toddlers can protest more vigorously. Some parents find graduated methods more manageable at this age. If you choose full extinction, be prepared for 2-3 tough nights. Consistency is critical - going in after extended crying teaches your child that enough crying will bring you, which can worsen the process.' },
  ],
  whenNormal: ['Your baby cries intensely the first night and less each subsequent night','The first night is the hardest with 30-60 minutes of crying for some babies','Your baby seems perfectly happy and normal during the day after sleep training','Sleep improves significantly within 3-7 nights'],
  whenToMention: ['Your baby cries for more than 90 minutes on the first few nights and you are concerned','Sleep training has not improved after 7 consistent nights','You have specific concerns about your baby\'s health that may affect sleep training suitability'],
  whenToActNow: ['Your baby is vomiting from crying - check on them, clean up, and restart if you choose','Your baby sounds like they are in pain rather than protesting','You are unable to cope with the crying and feel you may act unsafely'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Gradisar M et al. Behavioral interventions for infant sleep problems: a randomized controlled trial. Pediatrics. 2016;137(6):e20151486.', url: 'https://pubmed.ncbi.nlm.nih.gov/27221288/' },
    { org: 'NIH', citation: 'Price AM et al. Five-year follow-up of harms and benefits of behavioral infant sleep intervention. Pediatrics. 2012;130(4):643-651.', url: 'https://pubmed.ncbi.nlm.nih.gov/22966034/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep Training. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
  ],
  relatedConcernSlugs: ['baby-sleep-training-methods-comparison','baby-ferber-method-concerns','baby-gentle-sleep-training','sleep-training-guilt-methods'],
};
