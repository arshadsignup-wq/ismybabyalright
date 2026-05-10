import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eyes-sensitive-to-light',
  title: 'Baby Eyes Sensitive to Light',
  category: 'medical',
  searchTerms: [
    'baby eyes sensitive to light',
    'baby squinting in light',
    'photophobia baby',
    'baby bothered by bright light',
    'newborn sensitive to light',
    'baby crying in bright light',
    'baby closing eyes in sunlight',
    'light sensitivity infant',
    'baby photophobia causes',
  ],
  quickAnswer:
    'Mild light sensitivity in newborns is normal because their pupils are small and their retinas are adjusting to light after being in the womb. Babies naturally squint or close their eyes in bright light. However, excessive or persistent light sensitivity (photophobia) can be a sign of eye conditions such as infantile glaucoma, albinism, anterior segment abnormalities, or retinal conditions. If your baby seems unusually distressed by normal indoor lighting, an eye evaluation is recommended.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have smaller pupils and less mature retinas, making them sensitive to bright light. It is normal for newborns to close their eyes or turn away from bright lights. Their eyes gradually adjust to normal light levels over the first few weeks. However, if your baby cannot tolerate any light or is constantly tearing and blinking in normal room light, this could indicate congenital glaucoma or other eye conditions.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this age, babies should be comfortable in normal indoor lighting and able to tolerate moderate outdoor light. Some squinting in bright sunlight is still normal. If your baby consistently squints, tears, or becomes distressed in everyday lighting conditions, or if you notice one eye that appears larger than the other or has a cloudy cornea, seek evaluation promptly.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies should be comfortable in most lighting environments. Temporary light sensitivity can occur during eye infections (conjunctivitis) or after eye trauma. Persistent light sensitivity without an obvious cause should be evaluated. Babies with very light-colored eyes may be slightly more sensitive to bright light, which is normal.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers should tolerate a wide range of lighting conditions. New onset light sensitivity may be related to eye infections, migraines, corneal abrasion, or more serious conditions. If your toddler consistently avoids bright environments, squints, or rubs their eyes frequently, an eye examination is warranted.',
    },
  ],
  whenNormal: [
    'Your newborn squints or closes their eyes briefly when taken into bright sunlight',
    'Your baby briefly looks away from a bright light source before looking back',
    'Mild squinting occurs after waking up from a dark room',
    'Your baby with light-colored eyes squints slightly more in sunlight than babies with darker eyes',
  ],
  whenToMention: [
    'Your baby seems bothered by normal indoor lighting levels',
    'Frequent tearing, squinting, or eye rubbing in everyday lighting conditions',
    'Light sensitivity accompanies red or pink eyes, eye discharge, or swelling',
  ],
  whenToActNow: [
    'Your baby cannot tolerate any light and is in constant distress with tearing, especially if one or both eyes appear enlarged or cloudy, as this is a hallmark of infantile glaucoma requiring emergency evaluation',
    'Light sensitivity develops suddenly after an eye injury, or is accompanied by a white or cloudy pupil, severe redness, or visible eye asymmetry',
  ],
  relatedMilestones: [
    'visual-tracking',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Photophobia.',
      url: 'https://aapos.org/glossary/photophobia',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Photophobia: Looking for Causes and Solutions.',
      url: 'https://www.aao.org/eye-health/symptoms/photophobia-list',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Warning Signs of Vision Problems in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Warning-Signs-of-Vison-Problems-in-Children.aspx',
    },
  ],
};
