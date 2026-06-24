import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'postpartum-wrist-pain-de-quervain',
  title: 'De Quervain\'s Tenosynovitis: Postpartum Wrist Pain',
  category: 'maternal',
  searchTerms: [
    'wrist pain after baby',
    'de quervain tenosynovitis postpartum',
    'mommy thumb',
    'thumb pain new mom',
    'wrist pain breastfeeding',
    'wrist pain picking up baby',
    'postpartum wrist tendonitis',
    'mom wrist pain',
    'wrist splint postpartum',
    'de quervain treatment',
  ],
  quickAnswer:
    'De Quervain\'s tenosynovitis, often called "mommy thumb" or "mommy wrist," is inflammation of the tendons on the thumb side of the wrist. It is very common in new parents due to the repetitive hand positions used when lifting, holding, and breastfeeding a baby, combined with hormonal changes and fluid retention that affect the tendons. Treatment includes thumb splinting, modifying how you lift your baby, anti-inflammatory medication, and in persistent cases, a corticosteroid injection that is highly effective.',
  byAge: [
    {
      ageRange: '0-6 weeks postpartum',
      context:
        'Wrist and thumb pain often develops in the early weeks as new parents repeatedly lift, hold, and position their baby. The pain is typically on the thumb side of the wrist and worsens with gripping, twisting, or making a fist around the thumb. Postpartum fluid retention and hormonal changes can contribute by causing swelling around the tendon sheath. Early treatment is important: wear a thumb spica splint (available at pharmacies), apply ice for 10-15 minutes several times daily, and modify how you pick up your baby by scooping rather than using an L-shaped hand position.',
    },
    {
      ageRange: '6 weeks to 3 months postpartum',
      context:
        'If symptoms persist despite conservative measures, see your provider. Ibuprofen can help with pain and inflammation and is safe while breastfeeding. A corticosteroid injection into the tendon sheath is the most effective treatment, providing relief in approximately 80-90% of cases, often with a single injection. The injection is generally safe during breastfeeding. Continue wearing a splint, especially at night, and be mindful of hand positioning during baby care. Physical or occupational therapy can teach you ergonomic techniques for lifting and holding.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'As your baby gets heavier, the strain on your wrists increases. If you have not sought treatment, do not delay further. Chronic tendon inflammation is harder to resolve than acute inflammation. Exercises to strengthen and stretch the thumb and wrist tendons can be helpful once the acute inflammation has subsided. Your therapist can guide appropriate exercises. Adjusting breastfeeding positions to reduce wrist strain (using pillows to support the baby\'s weight) can also help.',
    },
    {
      ageRange: '6+ months postpartum',
      context:
        'Most cases of de Quervain\'s resolve with proper treatment within a few months. If symptoms persist despite splinting, anti-inflammatory medications, and steroid injections, surgical release of the tendon sheath is an option with a high success rate. The procedure is typically outpatient with a relatively quick recovery. Once resolved, the condition does not usually recur unless there is another pregnancy or similar repetitive strain. Maintaining good wrist ergonomics during daily activities helps prevent recurrence.',
    },
  ],
  whenNormal: [
    'Mild wrist or thumb soreness after long periods of holding your baby that resolves with rest',
    'Temporary discomfort that improves with splinting and modified lifting techniques',
    'Gradual improvement over weeks with conservative treatment',
  ],
  whenToMention: [
    'Wrist or thumb pain is persistent and interferes with your ability to care for your baby',
    'You hear or feel snapping or catching when you move your thumb',
    'Pain is not improving after two weeks of rest, splinting, and anti-inflammatory medication',
    'You notice weakness in your grip or difficulty holding objects',
  ],
  whenToActNow: [
    'You experience sudden severe wrist pain with swelling, redness, and warmth, which could indicate infection rather than tendonitis',
    'You lose sensation in your thumb or fingers, suggesting possible nerve involvement',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'postpartum-exercise-when-to-start',
    'postpartum-episiotomy-healing-tips',
    'postpartum-return-to-running',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. De Quervain Tenosynovitis. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK442005/',
    },
    {
      org: 'AAOS',
      citation:
        'American Academy of Orthopaedic Surgeons. De Quervain\'s Tendinosis. OrthoInfo, 2023.',
      url: 'https://orthoinfo.aaos.org/en/diseases--conditions/de-quervains-tendinosis/',
    },
    {
      org: 'NIH',
      citation:
        'Skoff HD. "Postpartum/Newborn" De Quervain\'s Tenosynovitis of the Wrist. American Journal of Orthopedics, 2001.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/11307865/',
    },
  ],
};
