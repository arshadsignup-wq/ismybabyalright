import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-wont-swallow',
  title: 'My Baby Won\'t Swallow Food',
  category: 'feeding',
  searchTerms: [
    'baby won\'t swallow food',
    'baby holds food in mouth',
    'baby spits out everything',
    'baby can\'t swallow solids',
    'dysphagia in babies',
    'swallowing problems baby',
    'baby pockets food',
    'baby pushes food out',
    'baby tongue thrust',
    'baby chews but won\'t swallow',
  ],
  quickAnswer:
    'If your baby takes food into their mouth but won\'t swallow, it could be due to developmental readiness (tongue thrust reflex still present), texture aversion, oral motor delays, or difficulty coordinating the swallow. Most babies under 6 months push food out with their tongues as a protective reflex. However, if your older baby consistently refuses to swallow age-appropriate foods, a feeding evaluation can identify whether this is a skill delay, sensory issue, or structural problem.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'The tongue thrust reflex - where babies automatically push anything solid out of their mouths - is normal and protective in young babies. This reflex typically fades between 4-6 months, which is one reason solids are not recommended before 6 months. If your baby is pushing food out with their tongue, they are likely just not developmentally ready yet. Wait a week or two and try again. Look for signs of readiness: sitting with support, interest in food, loss of tongue thrust.',
    },
    {
      ageRange: '6-9 months',
      context:
        'By 6 months, most babies have lost the tongue thrust reflex and can move food to the back of the mouth to swallow. If your baby takes food in, moves it around, but spits it all out or lets it fall from their mouth, it may be a coordination issue. Some babies need more practice and exposure. Offer a variety of textures (smooth purees, meltable solids, soft lumps) and be patient. If your baby gags frequently or seems unable to coordinate the swallow, mention it to your pediatrician.',
    },
    {
      ageRange: '9-12 months',
      context:
        'At this stage, babies should be able to swallow a range of textures. If your baby mouths food, chews, but then spits it out or pockets it in their cheeks without swallowing, this may indicate oral motor delays or sensory issues. Some babies prefer very specific textures and will only swallow smooth purees. A feeding evaluation by an occupational therapist or speech-language pathologist can assess oral motor skills and provide exercises to improve swallowing coordination.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who cannot or will not swallow solid food may have dysphagia (swallowing difficulty), which can result from neurological issues, structural problems, or severe sensory processing challenges. If your toddler is still only accepting purees or liquids and refuses or cannot manage table foods, a comprehensive feeding evaluation is essential. Swallowing difficulties can increase the risk of choking and aspiration, so professional guidance is important.',
    },
  ],
  whenNormal: [
    'Your baby under 6 months pushes food out with their tongue due to the tongue thrust reflex',
    'Your baby spits out a new food on the first few tries, then gradually begins swallowing it',
    'Your baby swallows some bites but spits out others, showing normal learning and exploration',
    'Your baby swallows smooth foods but gags and spits out lumpy foods initially, then improves with practice',
  ],
  whenToMention: [
    'Your baby over 7 months consistently spits out or drools out all food and shows no progress over several weeks',
    'Your baby pockets food in their cheeks and holds it there without swallowing, even after many minutes',
    'Your baby gags excessively on smooth purees or seems unable to coordinate sucking and swallowing',
    'You notice coughing or choking specifically when your baby tries to swallow (not just gagging during chewing)',
    'Your baby frequently has a wet, gurgly voice or coughs during or after feeds',
  ],
  whenToActNow: [
    'Your baby is choking (silent, unable to cough or cry, turning blue) - call 911 and begin infant choking protocol',
    'Your baby has recurrent pneumonia or lung infections, which can indicate aspiration of food or liquid into the lungs',
    'Your baby is unable to swallow their own saliva and is drooling excessively with respiratory distress',
  ],
  relatedMilestones: [
    'feeding',
    'oral-motor',
    'swallowing-development',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Pediatric Dysphagia (Swallowing Disorder).',
      url: 'https://www.asha.org/practice-portal/clinical-topics/pediatric-dysphagia/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Swallowing Problems in Infants. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Swallowing-Disorder.aspx',
    },
    {
      org: 'NIDCD',
      citation:
        'National Institute on Deafness and Other Communication Disorders. Dysphagia in Children.',
      url: 'https://www.nidcd.nih.gov/health/dysphagia',
    },
  ],
};
