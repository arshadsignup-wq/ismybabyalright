import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-tear-duct-massage-technique',
  title: 'Blocked Tear Duct: Massage Technique for Babies',
  category: 'medical',
  searchTerms: [
    'baby tear duct massage',
    'blocked tear duct baby',
    'baby eye watery sticky',
    'nasolacrimal duct massage',
    'baby eye discharge tear duct',
    'clogged tear duct newborn',
    'baby tear duct massage technique',
    'baby crusty eye tear duct',
    'when does blocked tear duct resolve',
    'tear duct surgery baby',
  ],
  quickAnswer:
    'A blocked tear duct (dacryostenosis) is very common in newborns, affecting up to 20% of babies. It causes watery, sometimes sticky or crusty eyes because tears cannot drain normally. Gentle massage of the tear duct area (Crigler massage) helps open the duct and resolves the blockage in about 90% of cases by 12 months. The technique involves using a clean finger to apply gentle downward pressure along the side of the nose near the inner corner of the eye.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Blocked tear ducts are most commonly noticed in the first few weeks of life as tear production begins. You may notice one or both eyes are watery, have yellow-green discharge, or are crusty after sleep. This is different from an eye infection (conjunctivitis) because the white of the eye is not red. To perform tear duct massage: wash your hands, place your index finger at the inner corner of the baby\'s eye where it meets the nose, apply firm but gentle downward pressure along the side of the nose, and stroke downward 5-10 times. Do this 2-3 times per day. Clean discharge with a warm, damp cloth.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue the massage technique consistently, as it can take several months to fully open the duct. Keep the eye clean by wiping with a warm, damp cloth from the inner corner outward. Breast milk drops in the eye are a common home remedy, though evidence is limited. If discharge becomes thick, yellow-green, or the white of the eye turns red, this may indicate an infection requiring antibiotic eye drops. Most blocked tear ducts continue to improve gradually with massage during this period.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If the blocked tear duct has not resolved by 9-12 months with consistent massage, your pediatrician may refer you to a pediatric ophthalmologist. The specialist may recommend probing, a brief procedure where a thin wire is passed through the tear duct to open the blockage. This procedure has a success rate of about 80-90% and is typically done under brief general anesthesia. Continue massage until you have been evaluated, as some ducts open even at 10-12 months.',
    },
  ],
  whenNormal: [
    'One or both eyes are watery with clear or slightly yellowish discharge, but the eye whites are not red.',
    'The blockage responds to massage and symptoms come and go.',
    'Your baby does not seem bothered by the watery eye and can see normally.',
  ],
  whenToMention: [
    'The blocked tear duct has not resolved by 9-12 months despite consistent massage.',
    'Discharge is increasing in amount or changing to thick green or yellow.',
    'Both eyes are affected and you want to confirm the diagnosis.',
  ],
  whenToActNow: [
    'The eye becomes very red, swollen, and the baby seems in pain - this could indicate dacryocystitis (infection of the tear sac).',
    'There is significant swelling or redness of the eyelid or area around the eye.',
    'Your baby has a fever along with infected-looking eye discharge.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['crossed-eyes', 'nystagmus-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Blocked Tear Ducts. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/Blocked-Tear-Ducts.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Blocked Tear Duct. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/001016.htm',
    },
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus - Nasolacrimal Duct Obstruction.',
      url: 'https://aapos.org/glossary/nasolacrimal-duct-obstruction',
    },
  ],
};
