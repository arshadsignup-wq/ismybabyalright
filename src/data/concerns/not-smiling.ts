import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'not-smiling',
  title: 'Baby Not Smiling',
  category: 'behavior',
  searchTerms: [
    'baby not smiling',
    'when do babies smile',
    'my baby doesn\'t smile',
    'baby not smiling at 2 months',
    'baby not smiling at 3 months',
    'baby never smiles',
    'when should baby start smiling',
    'why doesn\'t my baby smile',
    'baby not smiling yet',
    'is it normal for baby not to smile',
  ],
  quickAnswer:
    'Most babies begin smiling reflexively in the first few weeks and develop a true, intentional smile between 6-12 weeks of age. The timeline varies from baby to baby, and premature babies may smile later based on their adjusted age. If your baby is not smiling at all by 3 months, it is worth mentioning to your pediatrician, but many babies simply take a little longer.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'In the first few weeks, you may see "reflex smiles"  -  tiny, fleeting smiles that happen during sleep or at random. These are not intentional social smiles yet, but they are a normal part of early facial muscle development. Your baby is still learning to focus on faces and is not yet capable of smiling in response to social interaction. Do not worry if you are not seeing smiles yet.',
    },
    {
      ageRange: '6-12 weeks',
      context:
        'This is the most common window for a baby\'s first true smile  -  a real, intentional smile in response to seeing your face, hearing your voice, or during pleasant interaction. It is one of the most rewarding milestones for parents. Some babies hit this earlier, some later. Premature babies should be assessed by their adjusted age (due date, not birth date).',
    },
    {
      ageRange: '3-4 months',
      context:
        'By 3 months, most babies are smiling regularly in response to interaction with caregivers. They may also coo, gurgle, and show excitement when they see familiar faces. If your baby is 3 months and not yet showing any intentional smiles during face-to-face interaction, it is a good idea to bring this up at your next pediatric visit. Your doctor may want to check hearing and vision as well.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By 4-6 months, babies typically smile frequently, laugh, and show a range of facial expressions. If your baby is still not smiling at this age, your pediatrician will want to assess their social, visual, and hearing development. Early evaluation is always helpful and does not mean there is necessarily a problem  -  some babies need a bit more time or may have a treatable issue like a hearing difficulty.',
    },
  ],
  whenNormal: [
    'Your baby is under 8 weeks old and you have not seen a real smile yet  -  reflexive smiles during sleep are common but intentional smiling is still developing',
    'Your baby was premature and is not yet smiling based on their chronological age  -  use adjusted age for this milestone',
    'Your baby smiles at some times but not others, or smiles more for one parent than the other',
    'Your baby smiles but is a generally calm, serious, or observant baby who does not smile as frequently as other babies you see',
  ],
  whenToMention: [
    'Your baby is 3 months old (or 3 months adjusted age for preemies) and has not shown any clear, intentional smiles in response to faces or voices',
    'Your baby used to smile and has stopped smiling, or smiles much less than they used to',
    'Your baby does not seem to focus on or show interest in faces at all by 2-3 months',
    'Your baby is not smiling and is also not making cooing sounds or showing interest in social interaction',
  ],
  whenToActNow: [
    'Your baby has lost the ability to smile or shows a sudden decrease in social engagement after previously smiling  -  any loss of skills needs prompt evaluation',
    'Your baby\'s face appears asymmetrical when they try to smile, or one side seems weaker, which could indicate a nerve issue',
    'Your baby seems unusually lethargic, unresponsive, or is not reacting to sounds or visual stimuli alongside not smiling',
  ],
  relatedMilestones: [
    'social-smile',
    'social-emotional-attachment',
    'language-cooing',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Emotional and Social Development: Birth to 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-Birth-to-3-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Two Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: 1 Month. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-1-Month.aspx',
    },
  ],
};
