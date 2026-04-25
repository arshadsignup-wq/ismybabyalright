import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'chronic-congestion',
  title: 'Baby Always Congested (Stuffy Nose)',
  category: 'medical',
  searchTerms: [
    'baby always congested',
    'baby stuffy nose all the time',
    'baby congested but not sick',
    'newborn stuffy nose',
    'baby snoring congested',
    'baby noisy breathing',
    'baby congested at night',
    'baby can\'t breathe through nose',
    'infant chronic congestion',
    'baby sounds congested but no mucus',
    'baby nasal congestion remedies',
  ],
  quickAnswer:
    'Babies are naturally noisy breathers because their nasal passages are very small. Many parents worry their baby is "always congested" when the sounds they hear are actually normal newborn breathing. True chronic congestion can be caused by frequent colds, dry air, or irritants. Saline drops and gentle suctioning are the safest and most effective treatments for infant congestion.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are obligate nose breathers, meaning they breathe primarily through their noses. Their nasal passages are very narrow, so even a small amount of mucus can cause audible congestion. Snorting, snuffling, and squeaking sounds are very common and usually normal. Saline drops (1-2 drops per nostril) followed by gentle bulb syringe suctioning is the recommended treatment. Never use over-the-counter decongestants or cold medicines in infants.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some congestion is often from exposure to colds, especially if your baby has older siblings or is in daycare. Environmental factors like dry air, dust, pet dander, or strong scents can also contribute. A cool-mist humidifier in the room and keeping the air clean can help. Nasal saline spray or drops remain the best remedy. Elevating the head of the crib mattress slightly is no longer recommended due to safety concerns.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in this age range may seem perpetually congested during cold and flu season, as one cold can take 7-10 days to resolve before the next one begins. If your baby is feeding well, sleeping reasonably, and growing normally despite the congestion, this is usually just the normal pattern of building immunity. Teething can also temporarily increase nasal discharge.',
    },
    {
      ageRange: '12 months+',
      context:
        'If nasal congestion persists year-round and is not related to colds, allergies may be a consideration, though true allergic rhinitis is uncommon before age 2. Enlarged adenoids can also contribute to chronic congestion and mouth breathing in toddlers. If your toddler consistently breathes through their mouth, snores heavily, or seems to have obstructed breathing during sleep, discuss this with your pediatrician.',
    },
  ],
  whenNormal: [
    'Your newborn makes snorting, snuffling, or squeaking sounds that come and go, especially during sleep',
    'Your baby is congested during a cold but the congestion clears within 10-14 days',
    'Congestion improves with saline drops and suctioning',
    'Your baby is feeding well, gaining weight, and breathing comfortably despite sounding congested',
    'The congestion is worse in dry environments and improves with a humidifier',
  ],
  whenToMention: [
    'Your baby seems congested all the time, even between colds, and it has persisted for more than 3-4 weeks',
    'The congestion is affecting your baby\'s ability to feed comfortably',
    'Your baby consistently breathes through the mouth instead of the nose',
    'Your toddler snores loudly every night or seems to have pauses in breathing during sleep',
  ],
  whenToActNow: [
    'Your baby is struggling to breathe: fast breathing, flaring nostrils with each breath, retractions (skin pulling in at the ribs or neck), or grunting sounds',
    'Your baby under 3 months has congestion along with a fever of 100.4F (38C) or higher',
    'Your baby\'s congestion is accompanied by thick green or yellow discharge from only one nostril with a foul smell, which could indicate a foreign body or infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Caring for Your Child\'s Cold or Flu.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Caring-for-Colds-and-Flu.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing Over-the-Counter Medicines for Your Child.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/How-to-Manage-Colds-and-Flu.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Common Cold: Babies and Young Children.',
      url: 'https://www.cdc.gov/common-cold/about/index.html',
    },
  ],
};
