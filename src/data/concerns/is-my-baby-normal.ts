import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'is-my-baby-normal',
  title: 'Is My Baby Normal? When Worry Takes Over',
  category: 'behavior',
  searchTerms: [
    'is my baby normal',
    'worried something is wrong with my baby',
    'constant worry about baby development',
    'new parent anxiety',
    'hypervigilant about baby milestones',
    'obsessing over baby development',
    'parenting worry normal',
    'anxious about baby',
    'first time parent fear',
  ],
  quickAnswer:
    'Wondering whether your baby is developing normally is perhaps the most universal parenting experience. Some worry is healthy because it keeps you attentive to your child\'s needs, but when worry becomes constant and overwhelming, it can rob you of the joy of parenting. Most babies are developing perfectly well, and the wide range of normal is much broader than many parents realize.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period is peak anxiety territory for most parents. Every hiccup, unusual sound, and sleep pattern can feel alarming when you are responsible for a tiny, seemingly fragile human. It is normal to check your baby\'s breathing, worry about feeding amounts, and analyze every cry. If these worries are consuming your day or preventing you from sleeping even when your baby sleeps, talk to your healthcare provider about postpartum anxiety, which is common and very treatable.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As your baby becomes more interactive, you may start comparing their development to others. Seeing another baby the same age rolling over, laughing, or grabbing toys when yours is not yet doing those things can trigger intense worry. Remember that developmental charts show averages, not deadlines. Your pediatrician tracks your baby\'s progress at well-child visits specifically to catch any true concerns.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Motor milestones like sitting, crawling, and pulling to stand generate significant parental anxiety. It is important to know that not all babies crawl, some skip straight to walking, and the normal range for independent walking is 9 to 18 months. If your baby is making steady progress, even if it is slower than you expected, they are very likely on a normal trajectory.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Language development becomes the primary worry at this age. Parents often fixate on word counts and compare their child to peers. Typical 12-month-olds may have zero to three words, and 18-month-olds typically have 5 to 20 words, but the range is enormous. Focus on whether your child understands language (pointing, following simple directions) even if they are not yet speaking much.',
    },
  ],
  whenNormal: [
    'You occasionally worry about your baby\'s development but can be reassured by information or your pediatrician',
    'Your baby is meeting milestones within the normal ranges, even if not at the early end',
    'You compare your baby to others sometimes but do not let it consume your thoughts',
    'Your worry increases temporarily around well-child visits or when you encounter developmental information online',
  ],
  whenToMention: [
    'Your worry about your baby is constant and interferes with your ability to enjoy daily life or sleep',
    'You spend significant time each day researching developmental concerns online and it increases your anxiety',
    'You feel a persistent sense of dread that something is wrong even though your pediatrician says your baby is fine',
    'Your partner or family members have expressed concern about the level of your anxiety',
  ],
  whenToActNow: [
    'You are having intrusive thoughts about harm coming to your baby or feel unable to function due to anxiety',
    'Your baby has genuinely lost skills they previously had, such as stopping babbling or no longer making eye contact',
    'You feel disconnected from your baby or unable to bond because of overwhelming anxiety or sadness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Anxiety and Depression in New Parents. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/delivery-beyond/Pages/Understanding-Motherhood-and-Mood-Baby-Blues-and-Beyond.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Developmental Milestones.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Postpartum Anxiety: Prevalence and Associated Factors. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8053415/',
    },
  ],
};
