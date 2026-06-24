import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-chair-method-sleep-training',
  title: 'The Chair Method of Sleep Training',
  category: 'sleep',
  searchTerms: [
    'chair method sleep training',
    'sleep lady shuffle',
    'gradual withdrawal sleep training',
    'gentle sleep training chair',
    'chair method baby how to',
    'sleep training without crying',
    'chair method vs ferber',
    'gradual sleep training baby',
    'chair method not working',
    'gentle sleep training methods baby',
  ],
  quickAnswer:
    'The chair method (also called the Sleep Lady Shuffle or gradual withdrawal) is a gentle sleep training approach where you sit in a chair beside your baby\'s crib while they fall asleep, gradually moving the chair farther away over several nights. It allows you to provide your physical presence as comfort while your baby learns to fall asleep independently. This method typically takes 1-3 weeks and may involve more crying than parents expect, but less than cry-it-out methods.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'This is the earliest recommended age for most forms of sleep training. Before attempting the chair method, ensure your baby can sleep without a nighttime feed (discuss with your pediatrician), is healthy, and is not going through a developmental leap. Start by establishing a consistent bedtime routine. Place your baby in the crib drowsy but awake, then sit in a chair beside the crib. You can offer verbal reassurance and gentle touch but try to minimize picking up. Move the chair a few feet farther each 2-3 nights.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is often considered the ideal age for the chair method. Most babies at this age are developmentally ready to self-soothe. The process typically involves starting with the chair right next to the crib for 2-3 nights, then moving to the middle of the room, then near the door, then just outside the door. Consistency is crucial - if you change your approach mid-process, it can confuse your baby and prolong the learning period. Expect some crying, especially in the first few nights, but your presence provides reassurance.',
    },
    {
      ageRange: '12-24 months',
      context:
        'The chair method can work for toddlers, though older children may find your stationary presence more confusing or stimulating than comforting. If your toddler repeatedly stands up or tries to climb out, calmly lay them back down with minimal interaction. Toddlers may take longer to respond to this method due to stronger habits and greater awareness. Ensure the sleep environment is safe for an active toddler. Some parents find that a more structured verbal check-in method works better at this age.',
    },
  ],
  whenNormal: [
    'Your baby cries for the first few nights but gradually decreases the amount of crying as they learn to fall asleep with your nearby presence.',
    'The process takes 1-3 weeks before your baby consistently falls asleep without much protest.',
    'Your baby sometimes has setback nights, especially during illness or developmental milestones.',
    'You feel emotional hearing your baby cry during the process - this is completely normal for parents.',
  ],
  whenToMention: [
    'You have been consistently using the chair method for more than 3 weeks with no improvement.',
    'Your baby seems more distressed rather than less distressed over time.',
    'You are concerned about whether your baby is developmentally ready for sleep training.',
  ],
  whenToActNow: [
    'Your baby is vomiting from intense crying during sleep training attempts.',
    'Your baby has breathing difficulties, unusual sounds, or seems physically unwell during sleep.',
    'You are experiencing severe parental distress, intrusive thoughts, or symptoms of postpartum depression or anxiety related to your baby\'s sleep struggles.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-fighting-bedtime-every-night',
    'baby-catnapping-only-20-minutes',
    'baby-only-sleeps-being-held',
    'wont-sleep-without-nursing',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Getting Your Baby to Sleep. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Getting-Your-Baby-to-Sleep.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Behavioral Interventions for Infant Sleep Problems: A Randomized Controlled Trial. Pediatrics, 2016.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27221288/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Swaddling, Sleep Training, and Safe Sleep. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304',
    },
  ],
};
