import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'caring-for-baby-when-parents-sick',
  title: 'Caring for Your Baby When You\'re Sick',
  category: 'medical',
  searchTerms: [
    'caring for baby when parent is sick',
    'can I breastfeed when I have a cold',
    'baby care when mom is sick',
    'is it safe to hold baby when sick',
    'parent sick with flu and newborn',
    'breastfeeding while sick',
    'how to protect baby when parent is ill',
    'can baby catch my cold',
    'sick parent and newborn safety',
    'taking care of baby with a fever as parent',
  ],
  quickAnswer:
    'You can and should continue caring for your baby when you have a common illness like a cold or flu, with appropriate precautions. The CDC recommends frequent handwashing (at least 20 seconds with soap), wearing a mask when in close contact with your baby, and avoiding coughing or sneezing near the baby\'s face. Breastfeeding should continue — the AAP emphasizes that breast milk passes protective antibodies to your baby during maternal illness, actually helping protect them. Most over-the-counter cold medications are compatible with breastfeeding (check with your doctor about specific medications). Ask for help from a partner, family member, or friend to give yourself rest time, as recovery is faster with adequate rest. Very few infections require separation from your baby.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have immature immune systems, so extra precautions are warranted. Wash hands before every feeding and diaper change. Wear a clean mask when holding, feeding, or being in close proximity. Avoid kissing the baby\'s face and hands. Continue breastfeeding — your milk is producing antibodies specific to whatever infection you have. If you are too ill to breastfeed, express milk so someone else can bottle-feed it. A fever over 100.4°F (38°C) in a baby under 3 months always requires immediate medical evaluation regardless of whether you are also sick.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Your baby\'s immune system is somewhat stronger but still developing. The same hygiene precautions apply: handwashing, masking during close contact, and continuing breastfeeding. If your baby also develops symptoms, contact your pediatrician. For common colds, babies this age may be congested and fussy but usually recover well. Watch for signs of dehydration (fewer wet diapers, dry mouth) or difficulty breathing.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in this age range are more resilient and have accumulated some immune protection from breast milk antibodies and any vaccinations received. Continue hygiene practices. If your baby has started solids, ensure they maintain adequate fluid intake. Mobile babies may be harder to keep away from you when you\'re resting — this is normal and brief contact is not a major transmission risk if you\'re practicing good hand hygiene.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are frequently exposed to germs through daycare and social contact, and their immune systems are more mature. You can continue normal caregiving with standard hygiene. If both you and your toddler are sick simultaneously, prioritize both of your hydration and rest. Don\'t hesitate to ask for help — caring for a sick toddler while you\'re also ill is genuinely difficult and getting support is appropriate.',
    },
  ],
  whenNormal: [
    'Having a common cold, mild flu, or stomach bug while caring for your baby',
    'Baby catching a mild version of your illness despite precautions — this happens and helps build immunity',
    'Feeling guilty about being sick around your baby — this is a universal parenting experience',
    'Continuing to breastfeed while sick with most common illnesses',
  ],
  whenToMention: [
    'You are unsure whether a specific medication you need is safe while breastfeeding',
    'You have a fever over 101°F (38.3°C) lasting more than 3 days and are not improving',
    'Your baby develops symptoms within a few days of your illness',
    'You have a condition that may require isolation from your baby (active tuberculosis, untreated influenza in a high-risk scenario)',
  ],
  whenToActNow: [
    'Your baby under 3 months develops a fever of 100.4°F (38°C) or higher — seek immediate medical care regardless of your own illness',
    'You are so ill you cannot safely hold or feed your baby (extreme dizziness, loss of consciousness) — call for help immediately',
    'You or your baby develop difficulty breathing, persistent vomiting, or signs of dehydration',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'when-to-call-pediatrician',
    'dehydration-signs-baby',
    'medication-safety-while-breastfeeding',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding When You Are Sick. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/Breastfeeding-When-You-Are-Sick.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. People at Higher Risk of Flu Complications.',
      url: 'https://www.cdc.gov/flu/highrisk/index.htm',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Breastfeeding and Maternal Medication.',
      url: 'https://www.who.int/publications/i/item/9789241501033',
    },
  ],
};
