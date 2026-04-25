import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'blocked-tear-duct',
  title: 'Baby Blocked Tear Duct (Watery Eye)',
  category: 'medical',
  searchTerms: [
    'baby watery eye',
    'baby eye keeps tearing',
    'blocked tear duct baby',
    'baby one eye watering',
    'baby eye gunk',
    'baby crusty eye',
    'baby tear duct blocked',
    'newborn sticky eye',
    'baby eye discharge',
    'baby eye boogers',
    'dacryostenosis baby',
  ],
  quickAnswer:
    'A blocked tear duct (dacryostenosis) is very common in newborns, affecting up to 20% of babies. It causes watery eyes and sometimes sticky discharge because tears cannot drain normally through the narrow duct into the nose. The good news is that about 90% of blocked tear ducts resolve on their own by age 12 months without any procedure.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Blocked tear ducts often become apparent in the first few weeks of life as tear production increases. You may notice one or both eyes are persistently watery, with a sticky yellowish discharge that collects in the corner of the eye or crusts the eyelashes, especially after sleep. This is different from an eye infection (conjunctivitis) because the white of the eye is not red and your baby is not bothered by it.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Gentle tear duct massage can help open the blocked duct. Your pediatrician can show you the technique: using a clean finger, apply gentle firm pressure at the inner corner of the eye near the nose and stroke downward. Do this 2-3 times a day. Clean any discharge by wiping with a warm, damp cloth from the inner corner outward. Many ducts open during this period.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most blocked tear ducts open spontaneously by 12 months. If the blockage persists and causes frequent discharge or secondary infections, your pediatrician may refer you to a pediatric ophthalmologist to discuss probing. Probing is a brief outpatient procedure that is successful in about 80-90% of cases and is typically done around 9-12 months if the duct has not opened.',
    },
    {
      ageRange: '12 months+',
      context:
        'If a blocked tear duct has not resolved by 12 months, probing is generally recommended. The success rate for probing is slightly lower after age 12-18 months. For persistent blockages, additional procedures such as balloon dilation or silicone tube placement may be considered. These are all very safe and effective treatments.',
    },
  ],
  whenNormal: [
    'One or both eyes are frequently watery but the white of the eye is clear and not red',
    'Your baby has a sticky yellowish discharge from the eye that you can wipe away, but the eye looks comfortable',
    'The tearing and discharge have been present since birth and are not getting worse',
    'Tear duct massage seems to temporarily relieve the discharge',
    'Your baby does not seem bothered by the watery eye and can open the eye normally',
  ],
  whenToMention: [
    'The blocked tear duct has not resolved by 9-12 months and you would like to discuss whether probing is appropriate',
    'Your baby has frequent episodes of increased discharge that seem like recurrent mild infections on top of the blocked duct',
    'Both eyes are persistently affected and the discharge is significant',
  ],
  whenToActNow: [
    'The white part of your baby\'s eye becomes red and inflamed, the eyelid is swollen and red, or your baby seems to be in pain, as this may indicate conjunctivitis or dacryocystitis (infection of the tear duct sac) requiring antibiotic treatment',
    'You notice swelling, redness, or tenderness between the eye and the nose (at the inner corner), which could indicate an infected tear duct sac needing prompt treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Blocked Tear Ducts.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Blocked-Tear-Ducts.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Nasolacrimal Duct Obstruction.',
      url: 'https://aapos.org/glossary/nasolacrimal-duct-obstruction',
    },
  ],
};
