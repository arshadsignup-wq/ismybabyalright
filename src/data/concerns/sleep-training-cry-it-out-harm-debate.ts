import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sleep-training-cry-it-out-harm-debate',
  title: 'Sleep Training and the Cry-It-Out Debate: What Research Shows',
  category: 'sleep',
  searchTerms: [
    'cry it out harmful',
    'sleep training damage baby',
    'is cry it out safe',
    'sleep training debate',
    'Ferber method harm',
    'does cry it out cause trauma',
    'sleep training research',
    'extinction sleep training safe',
    'sleep training cortisol baby',
    'CIO sleep training evidence',
    'controlled crying harm',
  ],
  quickAnswer:
    'The scientific evidence on behavioral sleep training (including graduated extinction and extinction methods) does not support claims of long-term psychological harm. Multiple well-designed studies, including randomized controlled trials with follow-up to age 6, have found no differences in child-parent attachment, behavioral problems, cortisol levels, or emotional development between sleep-trained and non-sleep-trained children. Sleep training is a personal parenting choice, and multiple approaches exist ranging from very gentle to more structured.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'Sleep training is not appropriate before 4 months of age. Young infants need to eat frequently, have immature circadian rhythms, and cannot yet self-soothe. This is a period for building responsive, nurturing routines. You cannot spoil a newborn by responding to their cries. Focus on establishing healthy sleep foundations: dark room, white noise, swaddling, and beginning to distinguish day from night. Some gentle approaches like the "pause" (waiting a few seconds before responding to see if the baby settles) can be appropriate by 3-4 months.',
    },
    {
      ageRange: '4-6 months',
      context:
        'This is often considered the earliest appropriate window for formal sleep training, though many families wait longer. Options include graduated extinction (Ferber method), where you check on the baby at increasing intervals, and full extinction (unmodified cry it out), where you place the baby down awake and do not return until morning. There are also gentler methods like the chair method, pick-up-put-down, and fading. The largest randomized trial on this topic (Hiscock et al., 2007, with follow-up in 2012) found no adverse effects on child stress, behavior, or parent-child attachment at 5-year follow-up.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Many families find this to be the sweet spot for sleep training, as babies are developmentally ready to learn independent sleep skills and are typically past the most intense feeding needs. Whichever method you choose, consistency is key. Most research-supported approaches show significant improvement in 3-7 nights. The brief period of crying during sleep training should be weighed against the documented harms of chronic sleep deprivation in both parents and infants. Parental mental health consistently improves with successful sleep training.',
    },
    {
      ageRange: '12+ months',
      context:
        'Sleep training can be effective at any age, though toddlers present unique challenges including their ability to climb out of cribs, verbal protests, and increased separation anxiety. Sleep training is never mandatory: if your current sleep arrangement works for your family, there is no obligation to change it. The decision should be based on whether the current situation is sustainable for everyone involved. If you choose not to sleep train, that is equally valid, and there are non-training strategies to improve sleep.',
    },
  ],
  whenNormal: [
    'Feeling conflicted about sleep training after reading opposing viewpoints online',
    'Your baby crying for short periods as they learn to fall asleep independently',
    'Improvement in sleep within 3-7 nights of consistent sleep training',
    'Choosing not to sleep train and finding other ways to manage sleep challenges',
  ],
  whenToMention: [
    'You are struggling with severe sleep deprivation and want to discuss your options',
    'You have attempted sleep training and it is not working after consistent effort',
    'You are concerned about your baby\'s sleep patterns independent of the training debate',
    'You want evidence-based guidance tailored to your baby\'s age and temperament',
  ],
  whenToActNow: [
    'Your baby has breathing difficulties, stops breathing, or turns blue during sleep',
    'You are so sleep-deprived that you are falling asleep while holding your baby, driving, or in other unsafe situations',
    'Sleep deprivation is contributing to thoughts of harming yourself or your baby - call 988 or PSI at 1-800-944-4773',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sleep-regression-4-months',
    'split-night-baby-waking',
    'wont-sleep-without-nursing',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Behavioral Interventions for Infant Sleep Problems. Pediatrics, 2006.',
      url: 'https://publications.aap.org/pediatrics/article/117/6/e1197/68548/Behavioral-Interventions-for-Infant-Sleep-Problems',
    },
    {
      org: 'NIH',
      citation:
        'Hiscock H, et al. Long-Term Mother and Child Mental Health Effects of a Population-Based Infant Sleep Intervention: Cluster-Randomized, Controlled Trial. Pediatrics, 2008.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/18829806/',
    },
    {
      org: 'NIH',
      citation:
        'Price AMH, et al. Five-Year Follow-Up of Harms and Benefits of Behavioral Infant Sleep Intervention. Pediatrics, 2012.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/22966026/',
    },
  ],
};
