import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-separation-from-primary-caregiver', title: 'Helping Toddlers with Separation from Primary Caregiver', category: 'behavior',
  searchTerms: ['toddler separation primary caregiver','toddler wont leave mom','toddler cries when mom leaves','toddler separation difficulty','toddler daycare drop off crying','toddler cannot separate from parent','toddler clingy at drop off','toddler screams when left','helping toddler with separation','toddler attachment separation'],
  quickAnswer: 'Difficulty separating from a primary caregiver is one of the most normal behaviors in young children. It peaks around 18 months and gradually improves. Your child\'s distress at separation is actually a sign of healthy attachment - they have a secure bond with you and naturally protest when that bond is disrupted. Most children calm down within minutes of the parent leaving, even if the drop-off was tearful.',
  byAge: [
    { ageRange: '6-18 months', context: 'Separation anxiety peaks around 8-12 months and can intensify again around 18 months. Your baby cries when you leave because they do not yet understand that you will come back. Always say goodbye (do not sneak away), keep it brief and confident, and trust that your child will adjust.' },
    { ageRange: '18-30 months', context: 'Separation can be very difficult. Create a consistent goodbye routine: hug, kiss, "I love you, I will be back after nap." Keep it the same every time. A transitional object (a small lovey or a photo of you) can help. Ask caregivers how quickly your child calms after you leave - most recover within 5-10 minutes.' },
    { ageRange: '2.5-4 years', context: 'Separation anxiety should gradually improve. If it worsens after being better, look for triggers: new classroom, new teacher, upsetting event at school. Practice brief separations at home. Read books about going to school. Role-play drop-offs with stuffed animals.' },
    { ageRange: '4-5 years', context: 'Most children handle separation well by this age. If your child still has extreme distress at every separation, despite consistent routines and adequate time to adjust, discuss with your pediatrician. They may benefit from strategies for separation anxiety.' },
  ],
  whenNormal: ['Crying at drop-off but recovering within 5-10 minutes','Separation difficulty that peaks around 18 months','Your child is happy and engaged once they settle in','Separation is harder on particularly tired, sick, or stressed days'],
  whenToMention: ['Separation distress has not improved after months of consistent routine','Your child cries the entire time you are gone, not just at drop-off','Separation anxiety is getting worse rather than better with age','Your child has physical symptoms like stomachaches or headaches before separation'],
  whenToActNow: ['Separation anxiety is so severe your child cannot attend any care or activities','Your child is having panic attacks or extreme physical responses to separation'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Separation Anxiety.', url: 'https://www.zerotothree.org/resource/separation-anxiety/' },
    { org: 'NIH', citation: 'Bowlby J. Attachment and Loss, Vol. 2: Separation. Basic Books; 1973.', url: 'https://pubmed.ncbi.nlm.nih.gov/28683573/' },
  ],
  relatedConcernSlugs: ['separation-anxiety','toddler-clinginess-to-one-parent','toddler-anxiety-signs-early','toddler-shyness-vs-social-anxiety'],
};
