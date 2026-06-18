import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'syndactyly-webbed-fingers-toes',
  title: 'My Baby Has Webbed Fingers or Toes (Syndactyly)',
  category: 'physical',
  searchTerms: [
    'syndactyly baby',
    'webbed fingers baby',
    'webbed toes newborn',
    'baby fingers fused together',
    'syndactyly surgery baby',
    'when to fix webbed fingers',
    'baby toes connected skin',
    'syndactyly treatment',
    'is syndactyly serious',
    'webbed toes need surgery',
  ],
  quickAnswer:
    'Syndactyly (webbed or fused fingers or toes) is one of the most common congenital hand and foot differences, occurring in about 1 in 2,000-3,000 births. It can be simple (just skin connecting the digits) or complex (bones or other tissues fused). Webbed toes often require no treatment and do not affect function. Webbed fingers, particularly those involving the thumb or ring/small fingers, are typically treated with surgery to improve hand function. The timing and approach depend on which digits are affected.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Syndactyly is usually noticed at birth. Your pediatrician will examine the affected digits and may order an X-ray to determine if bones are also fused (complex syndactyly) or if only skin is involved (simple syndactyly). A referral to a pediatric hand surgeon or orthopedic surgeon is typical. In most cases, no immediate treatment is needed — this is a time for evaluation and planning.',
    },
    {
      ageRange: '3-12 months',
      context:
        'If surgery is recommended, it is typically performed between 6 and 18 months of age. Earlier surgery (around 6 months) may be recommended when digits of different lengths are fused (like the ring and small finger), as the shorter digit can pull on the longer one and cause deviation during growth. For toes, surgery is often unnecessary because toe syndactyly rarely affects walking or function.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is the most common window for syndactyly release surgery. The procedure involves separating the digits and using skin grafts (often from the groin or wrist) to cover the newly separated fingers. Recovery involves wearing a cast or splint for several weeks. Results are generally very good, with excellent hand function. Your child will likely need hand therapy after surgery.',
    },
    {
      ageRange: '2 years+',
      context:
        'After surgery, follow-up continues to ensure the digits grow well and the grafted skin heals properly. Some children need revision surgery as they grow. For isolated simple syndactyly (especially of the toes), if it was not treated surgically, it typically causes no functional issues. Syndactyly can sometimes occur as part of a broader syndrome — your doctor may check for other associated features.',
    },
  ],
  whenNormal: [
    'Your baby has simple webbing between two toes — this is very common and usually requires no treatment',
    'Your baby has mild skin webbing between fingers that the hand surgeon says can wait for planned surgery',
    'Your child had syndactyly release surgery and the fingers are healing well with good range of motion',
  ],
  whenToMention: [
    'The syndactyly involves more than two digits or seems to be part of a pattern of other differences',
    'You notice the fused digits seem to be bending or deviating as your baby grows',
    'Your child is having difficulty grasping or using their hand because of the syndactyly',
    'The skin between webbed toes is becoming irritated or infected',
  ],
  whenToActNow: [
    'The affected digits are turning blue, white, or appear to have poor circulation — seek immediate evaluation',
    'After surgery, the hand or foot shows signs of infection — increasing redness, swelling, warmth, or discharge',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'metatarsus-adductus',
    'pierre-robin-sequence',
  ],
  sources: [
    {
      org: 'ASSH',
      citation:
        'American Society for Surgery of the Hand. Syndactyly.',
      url: 'https://www.assh.org/handcare/condition/syndactyly',
    },
    {
      org: 'Boston Children\'s',
      citation:
        'Boston Children\'s Hospital. Syndactyly (Webbed Fingers).',
      url: 'https://www.childrenshospital.org/conditions/syndactyly',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Syndactyly. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK544366/',
    },
  ],
};
