import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-rubbing-eyes-excessively',
  title: 'Baby Rubbing Eyes Excessively',
  category: 'medical',
  searchTerms: [
    'baby rubbing eyes a lot',
    'baby rubbing eyes constantly',
    'baby rubbing eyes and crying',
    'why does my baby rub eyes',
    'baby rubbing eyes not tired',
    'baby rubbing eyes red',
    'toddler rubbing eyes excessively',
    'baby eye rubbing concern',
    'infant rubbing eyes frequently',
  ],
  quickAnswer:
    'Babies commonly rub their eyes when tired, and this is usually normal self-soothing behavior. However, excessive or persistent eye rubbing can sometimes indicate eye irritation, allergies, vision problems, dry eyes, or in rare cases, a condition called oculodigital reflex seen in children with significant visual impairment. If your baby rubs their eyes frequently when not tired, or if rubbing is accompanied by redness, discharge, or tearing, an evaluation is recommended.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns may rub their face and eyes as they develop motor control over their arms and hands. This is usually a random, reflexive movement. Persistent forceful eye rubbing or poking in very young infants is uncommon and may warrant evaluation. Blocked tear ducts can cause eye irritation and rubbing at this age.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, babies have more purposeful hand movements and may rub their eyes when tired or overstimulated. This is the most common reason for eye rubbing and is completely normal. If rubbing is frequent throughout the day regardless of tiredness, or if you notice redness, swelling, or discharge, consult your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Eye rubbing as a sleepiness cue is well-established at this age. Babies also rub their eyes when allergies cause itching, when they have an eye infection, or when something irritates their eyes. If your baby rubs their eyes excessively after outdoor play, it could indicate seasonal allergies. Persistent rubbing can also be a sign of uncorrected refractive error.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers who rub their eyes excessively may have environmental allergies, eye strain from screen time, or vision problems. If eye rubbing is accompanied by squinting, head tilting, or sitting very close to the TV, a comprehensive eye exam is recommended. In rare cases, compulsive eye pressing (oculodigital reflex) in toddlers can indicate severe visual impairment from conditions like Leber congenital amaurosis.',
    },
  ],
  whenNormal: [
    'Your baby rubs their eyes when tired, fussy, or ready for a nap',
    'Eye rubbing occurs mainly at predictable sleepy times and stops once the baby falls asleep',
    'The eyes appear normal (no redness, swelling, or discharge) before and after rubbing',
    'Your baby occasionally rubs their eyes upon waking from sleep',
  ],
  whenToMention: [
    'Your baby rubs their eyes frequently throughout the day, even when well-rested',
    'Eye rubbing is accompanied by persistent redness, tearing, or yellow-green discharge',
    'Your baby seems to rub one eye much more than the other',
  ],
  whenToActNow: [
    'Your baby presses or pokes their eyes forcefully and frequently, especially if they seem to do it for the visual stimulation (flashing lights), as this could indicate severe vision impairment',
    'Eye rubbing is accompanied by a swollen, red, or warm eyelid, especially if your baby has a fever, which could indicate periorbital cellulitis or orbital cellulitis',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Eye Rubbing.',
      url: 'https://aapos.org/glossary/eye-rubbing',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Warning Signs of Vision Problems in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Warning-Signs-of-Vison-Problems-in-Children.aspx',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Why Do I Keep Rubbing My Eyes?',
      url: 'https://www.aao.org/eye-health/tips-prevention/why-do-i-keep-rubbing-my-eyes',
    },
  ],
};
