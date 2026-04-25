import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sacral-dimple',
  title: 'My Baby Has a Dimple at the Base of Their Spine',
  category: 'medical',
  searchTerms: [
    'sacral dimple baby',
    'dimple on baby\'s back',
    'baby dimple lower back',
    'sacral dimple normal',
    'pilonidal dimple baby',
    'dimple above buttocks baby',
    'sacral dimple ultrasound',
    'sacral dimple tethered cord',
    'baby spine dimple',
    'sacral dimple when to worry',
  ],
  quickAnswer:
    'A sacral dimple is a small indentation at the base of the spine, just above the buttocks. Most are simple, shallow dimples that are completely normal and never cause problems. Your pediatrician will check the dimple at well visits. Occasionally, if it\'s deep, large, or has unusual features, an ultrasound may be ordered to ensure the spine is developing normally.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Sacral dimples are usually noticed at birth or during early checkups. Your pediatrician will assess the dimple\'s size, depth, and location. Most are "simple" dimples: small, shallow, located within the buttock crease, with normal-looking skin. These rarely need further testing. If the dimple is large, deep, located higher on the back, or has hair, skin tag, or unusual coloring, your doctor may order a spinal ultrasound to check for underlying spinal cord issues.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby\'s sacral dimple was noted as simple at birth, no further monitoring is typically needed. If an ultrasound was recommended and shows normal spine anatomy, you can be reassured. Occasionally, findings on ultrasound require follow-up with a pediatric neurosurgeon, but most sacral dimples are benign and never cause symptoms.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, if your baby\'s sacral dimple has never shown concerning features and your baby is developing normally, it\'s simply a normal variation. Watch for any signs of spinal cord issues as your baby grows: asymmetric leg movement, weakness, or unusual gait when learning to walk. These are very rare, but mention them if noticed.',
    },
    {
      ageRange: '12 months+',
      context:
        'Most children with simple sacral dimples have no issues throughout childhood. If your child was found to have a spinal abnormality on ultrasound or imaging, they may need ongoing monitoring by a pediatric neurosurgeon. Otherwise, the sacral dimple is just a harmless variation - no different than any other birthmark or skin variation.',
    },
  ],
  whenNormal: [
    'Your baby has a small, shallow dimple within the buttock crease',
    'The skin around and in the dimple looks completely normal',
    'Your pediatrician examined the dimple and noted it as a "simple" or "benign" sacral dimple',
    'Your baby is moving both legs equally and developing normally',
    'An ultrasound was done (if ordered) and showed normal spine anatomy',
  ],
  whenToMention: [
    'You\'ve noticed a dimple on your baby\'s lower back and want it checked',
    'The dimple seems deeper than you remember or has changed appearance',
    'You\'re unsure whether the dimple is within normal range',
    'Your baby has other birthmarks or skin variations near the dimple',
  ],
  whenToActNow: [
    'The dimple is draining fluid, pus, or has signs of infection (redness, swelling, warmth)',
    'Your baby develops weakness in the legs, asymmetric movement, or difficulty moving lower limbs',
    'The dimple has a tuft of hair, skin tag, or unusual discoloration that wasn\'t previously evaluated',
    'Your baby has bowel or bladder control issues as they grow older (may indicate tethered cord)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sacral Dimple. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Sacral-Dimple.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cutaneous Stigmata of Spinal Dysraphism. Pediatrics, 2015.',
      url: 'https://publications.aap.org/pediatrics/article/136/4/e1149/34152/Occult-Spinal-Dysraphism',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Spinal Cord Abnormalities. Pediatrics in Review, 2018.',
      url: 'https://publications.aap.org/pediatricsinreview/article/39/1/50/34389/Spinal-Dysraphism',
    },
  ],
};
