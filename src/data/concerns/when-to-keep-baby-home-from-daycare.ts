import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'when-to-keep-baby-home-from-daycare',
  title: 'When to Keep Your Baby Home from Daycare',
  category: 'medical',
  searchTerms: [
    'when to keep baby home from daycare',
    'daycare exclusion criteria',
    'baby too sick for daycare',
    'daycare fever policy',
    'when can baby return to daycare after illness',
    'daycare sick policy guidelines',
    'baby vomiting daycare rules',
    'when to keep toddler home from daycare',
    'daycare illness policy AAP',
    'how long to keep baby home after fever',
  ],
  quickAnswer:
    'The AAP and CDC provide clear guidelines for when a child should stay home from daycare. The primary exclusion criteria are: fever of 101°F (38.3°C) or higher with behavioral changes, vomiting (2 or more episodes in the past 24 hours), diarrhea (stools that cannot be contained by a diaper), diagnosed contagious conditions during the infectious period (like strep throat until 24 hours on antibiotics, or chickenpox until all lesions have crusted), and any condition that prevents the child from participating in activities or that requires more care than staff can provide. A runny nose alone, even with colored mucus, is NOT a reason for exclusion. Most daycares require children to be fever-free for 24 hours without fever-reducing medication before returning.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Young infants in daycare may have lower thresholds for exclusion because they cannot communicate symptoms effectively. Any fever of 100.4°F (38°C) or higher in an infant under 3 months requires medical evaluation before return to daycare. For infants 3-6 months, a fever above 101°F with behavioral changes (poor feeding, excessive sleepiness, irritability beyond normal) warrants keeping home. Daycares may also exclude for excessive diarrhea or vomiting that could indicate a contagious gastroenteritis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This age group is most prone to daycare-acquired infections. Standard exclusion criteria apply: fever over 101°F with behavior change, vomiting, uncontained diarrhea, or diagnosed contagious illness. Pink eye (conjunctivitis) policies vary — the AAP states that most bacterial conjunctivitis does not require exclusion unless the daycare policy requires it. Hand-foot-mouth disease does not require exclusion unless the child has open drooling blisters or fever, as it is contagious before symptoms appear.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddlers are better at fighting infections but still get sick frequently. Key exclusion situations include: persistent high fever, lethargy or inability to participate in activities, skin rashes that could be contagious (impetigo, scabies, undiagnosed rashes), and persistent cough with fever that could indicate pneumonia or pertussis. A mild cough or runny nose without fever is generally not grounds for exclusion, as toddlers may have respiratory symptoms for weeks during cold season.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Return-to-care timing matters: after a fever, wait 24 hours fever-free without medication. After vomiting or diarrhea, wait 24 hours after the last episode. After starting antibiotics for strep throat, wait 24 hours. After starting treatment for head lice, the child can usually return the next day. When in doubt, check your specific daycare\'s policy and consult your pediatrician.',
    },
  ],
  whenNormal: [
    'A runny nose (even green or yellow mucus) without fever or behavioral changes — this is NOT a reason to stay home',
    'A mild cough without fever in an otherwise active, well-feeding child',
    'Residual symptoms after an illness (lingering cough, occasional loose stool) when the child is otherwise well',
    'Your daycare calling about a mild symptom that doesn\'t meet exclusion criteria — you can advocate for your child to stay',
  ],
  whenToMention: [
    'Your child has been excluded from daycare repeatedly and you want guidance on when they can return',
    'You are unsure whether your child\'s symptoms are contagious',
    'Your daycare has stricter exclusion policies than AAP guidelines and it\'s causing frequent absences',
    'Your child has a chronic condition (asthma, eczema) that causes symptoms mimicking illness exclusion criteria',
  ],
  whenToActNow: [
    'Your child has a fever over 104°F (40°C), is lethargic, or has difficulty breathing',
    'Daycare reports your baby had a seizure, severe allergic reaction, or injury',
    'Your child develops a rash with fever and stiff neck, which could indicate meningitis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-daycare-illness-frequency',
    'how-often-babies-get-sick-normal',
    'baby-cold-when-to-worry',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Managing Infectious Diseases in Child Care and Schools, 6th Edition (Red Book).',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/prevention/Pages/When-to-Keep-Your-Child-Home-from-Child-Care.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Guidance for Childcare Programs That Remain Open.',
      url: 'https://www.cdc.gov/childcare-centers/hcp/infection-prevention/index.html',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Childcare and Illness: When to Stay Home.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/When-to-Keep-Your-Child-Home-from-Child-Care.aspx',
    },
  ],
};
