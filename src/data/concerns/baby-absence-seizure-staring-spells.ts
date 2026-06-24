import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-absence-seizure-staring-spells',
  title: 'My Baby Has Staring Spells - Could It Be Absence Seizures?',
  category: 'medical',
  searchTerms: [
    'baby staring spells',
    'infant absence seizure',
    'baby staring into space not responding',
    'toddler staring episodes',
    'baby zoning out frequently',
    'absence seizure baby signs',
    'baby blank stare episodes',
    'baby unresponsive staring',
    'toddler staring seizure',
    'baby daydreaming or seizure',
    'baby eyes glazed staring',
  ],
  quickAnswer:
    'Brief moments of staring or "zoning out" are very common in babies and toddlers and are usually a normal part of processing their environment. True absence seizures are rare in children under 4 years old and typically begin between ages 4 and 14. However, some types of seizures in infants can involve staring episodes. If your baby has repeated episodes of unresponsive staring that you cannot interrupt by touch or voice, a medical evaluation is recommended.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young babies frequently appear to stare intently at objects, lights, or into space as their visual system develops. This is normal developmental behavior. However, in rare cases, certain types of infant seizures (such as infantile spasms or focal seizures) can present as brief staring episodes with subtle eye movements. The key difference is whether you can easily get your baby\'s attention by touching them or calling their name. Normal staring is interruptible; seizure-related staring typically is not.',
    },
    {
      ageRange: '6-18 months',
      context:
        'Babies at this age may seem to "zone out" when concentrating, tired, or overwhelmed. This is developmentally normal. However, if your baby has repeated episodes where they become completely unresponsive for several seconds, especially with subtle signs like eye fluttering, lip smacking, or hand movements, these could indicate a type of seizure that warrants evaluation. Video recording episodes to show your pediatrician can be very helpful for diagnosis.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers are notorious for appearing to ignore parents and staring off into space, especially when tired, bored, or deeply focused on something. True absence seizures are still uncommon at this age but become somewhat more likely as children approach preschool age. Distinguishing features of seizures include: the episode is very brief (5-30 seconds), the child is completely unresponsive during it, it ends abruptly with the child continuing exactly where they left off, and there may be subtle eye blinking or lip movements.',
    },
  ],
  whenNormal: [
    'Your baby stares at interesting objects, lights, or faces and you can get their attention by touching them or saying their name.',
    'Your toddler seems to "zone out" when tired, overwhelmed, or deeply concentrating on something.',
    'Staring episodes are infrequent and your child is otherwise meeting developmental milestones normally.',
  ],
  whenToMention: [
    'Your child has repeated brief episodes of staring that seem involuntary and occur multiple times a day.',
    'You notice subtle movements during staring episodes such as eye fluttering, lip smacking, or hand fidgeting.',
    'Your child seems confused or disoriented after staring episodes, even briefly.',
  ],
  whenToActNow: [
    'Your baby has a staring episode accompanied by body stiffening, rhythmic jerking, color change, or loss of muscle tone.',
    'Your baby has clusters of brief head drops or body flexion episodes (possible infantile spasms) - this is a neurological emergency requiring immediate evaluation.',
    'Your child has a staring episode lasting more than 30 seconds or followed by confusion, weakness on one side, or difficulty speaking.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-epilepsy-signs-early',
    'baby-febrile-seizure-first-time',
    'baby-developmental-regression-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Seizures and Epilepsy in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/seizures/Pages/Seizures-and-Epilepsy-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Absence Seizures Information Page.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/epilepsy-and-seizures',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Types of Seizures.',
      url: 'https://www.cdc.gov/epilepsy/about/types-of-seizures.html',
    },
  ],
};
