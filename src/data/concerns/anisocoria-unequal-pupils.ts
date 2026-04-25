import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'anisocoria-unequal-pupils',
  title: 'My Baby Has Unequal Pupils',
  category: 'medical',
  searchTerms: [
    'baby unequal pupils',
    'anisocoria baby',
    'baby one pupil bigger',
    'different sized pupils baby',
    'baby pupil size difference',
    'unequal pupils normal baby',
    'baby dilated pupil one eye',
    'baby pupils different sizes',
    'anisocoria newborn',
    'baby pupil asymmetry',
  ],
  quickAnswer:
    'Slight differences in pupil size (anisocoria) can be normal and affect up to 20% of people, including babies. However, if the difference is large, came on suddenly, or is accompanied by other symptoms like drooping eyelid, vision changes, or neurological symptoms, it needs immediate medical evaluation to rule out serious causes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Some babies are born with slightly different pupil sizes (benign congenital anisocoria). If noticed at birth or early on, your pediatrician will document it and monitor. The key is whether the difference is consistent and your baby is otherwise well. However, if one pupil is much larger or smaller, doesn\'t react to light, or the difference is new, this needs prompt evaluation.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If your baby has had slightly unequal pupils since birth and both pupils react to light normally, this is likely benign. However, if you notice a sudden change in pupil size, especially after an injury or illness, or if accompanied by other symptoms like vomiting, lethargy, or vision problems, seek immediate medical care.',
    },
    {
      ageRange: '6-12 months',
      context:
        'New or worsening pupil asymmetry at this age warrants evaluation. Your pediatrician will check how the pupils react to light, examine eye movement, and look for other signs like drooping eyelid or vision problems. Most cases of mild anisocoria are benign, but sudden or significant differences need investigation.',
    },
    {
      ageRange: '12-24 months',
      context:
        'If your toddler has stable, mild anisocoria that has been present since infancy, this is likely benign. However, if the difference increases, your child develops a drooping eyelid, or there are vision concerns, see your pediatrician. They may refer you to a pediatric ophthalmologist or neurologist for further evaluation.',
    },
    {
      ageRange: '2 years+',
      context:
        'Children with benign anisocoria typically don\'t need treatment, just occasional monitoring. However, new unequal pupils in an older child, especially after head trauma, with headache, or with vision changes, need urgent evaluation. Your doctor will assess for serious causes like brain injury, infection, or neurological conditions.',
    },
  ],
  whenNormal: [
    'Your baby has had slightly different pupil sizes since birth or early infancy',
    'Both pupils react to light appropriately (get smaller in bright light, larger in dim light)',
    'The difference is small (less than 1mm) and doesn\'t change in different lighting',
    'Your baby has been evaluated by a doctor and the anisocoria is documented as benign',
    'Your baby has no other symptoms and is developing normally',
  ],
  whenToMention: [
    'You\'ve noticed your baby\'s pupils are slightly different sizes and want reassurance',
    'The pupil difference seems to be increasing over time',
    'One pupil doesn\'t seem to react to light as much as the other',
    'You have a family history of anisocoria or eye conditions',
  ],
  whenToActNow: [
    'Your baby develops sudden unequal pupils, especially after a head injury or fall',
    'One pupil is very large or very small and doesn\'t react to light',
    'Unequal pupils occur with other symptoms like drooping eyelid, double vision, vomiting, severe headache, or altered consciousness',
    'Your baby seems unable to see properly or has unusual eye movements',
    'Your baby has unequal pupils along with fever, stiff neck, or extreme lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eye Conditions in Infants. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Ophthalmology. Anisocoria. EyeWiki, 2023.',
      url: 'https://eyewiki.aao.org/Anisocoria',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Head Injury. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Head-Injury.aspx',
    },
  ],
};
