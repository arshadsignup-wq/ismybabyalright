import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'brue-brief-resolved-unexplained-event',
  title: 'My Baby Stopped Breathing and Then Was Fine',
  category: 'medical',
  searchTerms: [
    'baby stopped breathing briefly',
    'baby turned blue then normal',
    'baby went limp then fine',
    'BRUE baby',
    'apparent life threatening event baby',
    'ALTE baby',
    'baby unresponsive for seconds',
    'baby color change episode',
    'brief resolved unexplained event',
    'baby breathing scare',
  ],
  quickAnswer:
    'A Brief Resolved Unexplained Event (BRUE) is when a baby suddenly stops breathing, changes color, goes limp, or becomes unresponsive for less than a minute and then returns completely to normal. While terrifying to witness, most BRUEs are isolated events with no underlying serious cause. However, any BRUE requires immediate medical evaluation to ensure your baby is safe.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'BRUEs in very young infants are taken most seriously because of the higher risk of underlying causes such as infection, cardiac issues, or non-accidental trauma. If your baby under 2 months has an episode where they stop breathing, change color, or go limp, go to the emergency room immediately. Doctors will likely want to observe your baby and may run tests including bloodwork, ECG, and possibly imaging.',
    },
    {
      ageRange: '2-6 months',
      context:
        'This is the most common age range for BRUE. Many episodes in this age group are classified as "lower risk" if the baby is over 60 days old, was born at term, the episode lasted less than one minute, and no CPR was required. Lower-risk events still need medical evaluation but may not require extensive testing or hospitalization.',
    },
    {
      ageRange: '6-12 months',
      context:
        'BRUEs become less common as babies get older. If your older baby has an episode of color change, limpness, or apparent breathing pause, it still warrants urgent medical evaluation. At this age, doctors will also consider reflux, breath-holding spells, and choking as possible explanations.',
    },
    {
      ageRange: '12 months+',
      context:
        'These events are uncommon in toddlers. Breath-holding spells, which are a separate and benign condition, become more common at this age and can look similar. If your toddler has an episode of unresponsiveness or color change, seek immediate medical attention to determine the cause.',
    },
  ],
  whenNormal: [
    'Your baby occasionally pauses breathing for a few seconds during sleep and then resumes on their own — this is called periodic breathing and is normal in newborns',
    'Your baby briefly chokes or gags during feeding and recovers quickly with a normal color',
    'Your baby has a brief startle response or tremor during sleep',
  ],
  whenToMention: [
    'Your baby had an episode where they changed color, went limp, or seemed to stop breathing but recovered quickly and seems completely normal now',
    'You are not sure if what you witnessed was a true breathing pause or normal newborn behavior',
    'Your baby has had more than one episode of apparent color change or breathing irregularity',
  ],
  whenToActNow: [
    'Your baby stopped breathing, turned blue or pale, went limp, or became unresponsive — call 911 or go to the emergency room immediately, even if your baby seems fine now',
    'You needed to stimulate your baby vigorously or perform CPR to get them to respond',
    'The episode lasted more than one minute or your baby has not returned completely to their normal state',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Brief Resolved Unexplained Events (Formerly Apparent Life-Threatening Events) and Evaluation of Lower-Risk Infants. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/137/5/e20160590/81476',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Brief Resolved Unexplained Event. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK517537/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Apparent Life-Threatening Event in Infants.',
      url: 'https://www.mayoclinic.org/symptoms/infant-apnea/basics/definition/sym-20050780',
    },
  ],
};
