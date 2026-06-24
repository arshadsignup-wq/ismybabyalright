import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'melatonin-baby-toddler-safety',
  title: 'Melatonin Safety for Babies and Toddlers',
  category: 'sleep',
  searchTerms: [
    'melatonin baby safe',
    'melatonin for toddler sleep',
    'can I give baby melatonin',
    'melatonin gummies toddler',
    'is melatonin safe for infants',
    'melatonin dosage baby',
    'melatonin side effects children',
    'melatonin overdose child',
    'natural sleep aid baby',
    'melatonin supplement toddler',
    'melatonin poisoning child',
  ],
  quickAnswer:
    'Melatonin is not recommended for babies and should only be used in toddlers under direct guidance from a pediatrician. Melatonin is a hormone, not a simple supplement, and it is not FDA-regulated for purity or dosage accuracy. A 2023 study found that 88% of melatonin gummy products contained actual melatonin amounts that differed from the label, with some containing up to 347% more than stated. Poison control center calls for pediatric melatonin ingestion increased 530% from 2012 to 2021. Behavioral sleep interventions should be tried first for most childhood sleep problems.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Melatonin should never be given to infants under 6 months. Babies this age do not produce melatonin in a circadian pattern yet (their pineal gland is still maturing), and external melatonin could disrupt normal hormonal development. Newborn sleep patterns are biologically driven and cannot be "fixed" with supplements. If your young baby is not sleeping well, this is developmentally normal. Focus on safe sleep practices, appropriate wake windows, and addressing underlying causes of poor sleep (hunger, discomfort, overstimulation).',
    },
    {
      ageRange: '6-24 months',
      context:
        'Melatonin is generally not recommended at this age unless specifically prescribed by a pediatric sleep specialist for conditions such as autism spectrum disorder, ADHD, or neurological conditions that affect circadian rhythm. Over-the-counter melatonin products marketed for children are not regulated by the FDA, and contamination with serotonin (a related hormone) has been documented in some products. Sleep training methods, consistent bedtime routines, and environmental modifications (dark room, cool temperature, white noise) are the evidence-based first-line approaches for sleep difficulties.',
    },
    {
      ageRange: '24-36 months',
      context:
        'If your pediatrician does recommend melatonin for your toddler, use the lowest effective dose (typically 0.5-1 mg), given 30-60 minutes before bedtime. Choose pharmaceutical-grade melatonin if available, or USP-verified supplements. Melatonin should be a short-term aid used alongside behavioral strategies, not a long-term solution. Side effects can include morning grogginess, headaches, bedwetting, and in rare cases, hormonal effects. Never use adult melatonin formulations. Store melatonin safely out of children\'s reach, as accidental ingestion of multiple gummies is a common poisoning scenario.',
    },
  ],
  whenNormal: [
    'Your baby or toddler has occasional nights of poor sleep but generally follows an age-appropriate sleep pattern.',
    'You are using behavioral strategies and consistent routines to manage your child\'s sleep.',
    'Your pediatrician has reviewed and approved a specific melatonin product and dose for your child.',
  ],
  whenToMention: [
    'Your child has persistent sleep problems that are not improving with behavioral interventions.',
    'You are considering giving your child melatonin and want to discuss whether it is appropriate.',
    'Your child has a condition (autism, ADHD, visual impairment) that may affect their circadian rhythm.',
    'You have been giving your child melatonin and want to discuss whether to continue.',
  ],
  whenToActNow: [
    'Your child has accidentally ingested multiple melatonin gummies or an adult dose of melatonin - call Poison Control at 1-800-222-1222 immediately.',
    'Your child is experiencing side effects from melatonin such as excessive drowsiness, confusion, or behavioral changes.',
    'Your child has a sleep problem accompanied by loud snoring, breathing pauses, or gasping during sleep, which may indicate sleep apnea requiring different treatment.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'circadian-rhythm-baby',
    'sleep-regression-4-months',
    'natural-remedies-vs-medicine-baby-danger',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Melatonin and Children\'s Sleep. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/melatonin-and-childrens-sleep.aspx',
    },
    {
      org: 'CDC',
      citation:
        'CDC. Pediatric Melatonin Ingestions: Trends in Poison Control Center Reports. MMWR, 2022.',
      url: 'https://www.cdc.gov/mmwr/volumes/71/wr/mm7122a1.htm',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Melatonin Content Variability in Commercial Supplements. JAMA, 2023.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/37074710/',
    },
  ],
};
