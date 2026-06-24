import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-startle-reflex-moro-persistent',
  title: 'Persistent Moro (Startle) Reflex in Baby',
  category: 'physical',
  searchTerms: [
    'baby startle reflex won\'t go away',
    'moro reflex persistent',
    'baby still startles 6 months',
    'moro reflex not going away',
    'baby exaggerated startle',
    'retained moro reflex',
    'baby startle reflex too strong',
    'when does startle reflex stop',
    'moro reflex waking baby',
    'persistent startle reflex baby',
  ],
  quickAnswer:
    'The Moro (startle) reflex is a normal newborn reflex where babies throw out their arms, arch their back, and then curl inward in response to sudden stimulation like loud noises or feeling unsupported. This reflex typically begins to fade by 3-4 months and should be gone by 5-6 months. A persistent Moro reflex beyond 6 months may warrant neurological evaluation, though some babies simply take a bit longer to integrate this reflex.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The Moro reflex is strong and easily triggered in newborns. Your baby may startle from sudden noises, movements, changes in position, or even their own arm movements. This is completely normal and is actually a sign of healthy neurological function. The reflex can disrupt sleep - swaddling helps by keeping arms contained and providing a sense of security. If the Moro reflex is absent or very weak at this age, that is actually more concerning than its presence.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The Moro reflex should begin fading between 3-4 months as your baby\'s brain develops more cortical control over movements. By 5-6 months, it should be mostly or completely gone. If the startle is still very pronounced at 4-5 months, it may simply be on the later end of normal, but mention it at your next well-baby visit. This is also the time to transition out of swaddling, as the diminishing Moro reflex means your baby is less likely to wake themselves with sudden arm movements.',
    },
    {
      ageRange: '6-12 months',
      context:
        'A clearly present Moro reflex after 6 months is unusual and should be evaluated by your pediatrician. Retained Moro reflex can sometimes be associated with neurological conditions, sensory processing issues, or developmental delays. However, it is important to distinguish between a true Moro reflex (the full pattern of arms out, back arching, then curling in) and a normal startle response, which everyone retains throughout life. Your doctor can assess the difference during an exam.',
    },
  ],
  whenNormal: [
    'Your baby under 4 months has a strong startle response that is triggered by loud sounds or sudden position changes.',
    'The Moro reflex is gradually becoming less intense between 3-5 months.',
    'Your baby occasionally startles in sleep but the frequency is decreasing with age.',
  ],
  whenToMention: [
    'The Moro reflex is still easily and frequently triggered after 5 months.',
    'The Moro reflex seems asymmetric - one arm responds differently than the other.',
    'Your baby\'s startle response is exaggerated and they have difficulty calming after being startled.',
  ],
  whenToActNow: [
    'The Moro reflex is still present at 9-12 months with no signs of fading, especially with other developmental delays.',
    'An asymmetric Moro reflex (one arm does not respond) is present from birth - this could indicate a brachial plexus injury or clavicle fracture.',
    'The startle reflex is accompanied by seizure-like activity, extreme stiffness, or other neurological symptoms.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-primitive-reflexes-not-integrating', 'baby-swaddle-transition-age', 'baby-screaming-in-sleep'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Newborn Reflexes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Reflexes.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Moro Reflex. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/003293.htm',
    },
    {
      org: 'Stanford Children\'s Health',
      citation:
        'Stanford Children\'s Health - Newborn Reflexes.',
      url: 'https://www.stanfordchildrens.org/en/topic/default?id=newborn-reflexes-90-P02630',
    },
  ],
};
