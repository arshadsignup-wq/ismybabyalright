import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'flying-with-baby-ear-pressure',
  title: 'Flying with Baby (Ear Pressure)',
  category: 'medical',
  searchTerms: [
    'baby crying on airplane ears',
    'baby ear pain during flight',
    'how to help baby ears on plane',
    'flying with infant ear pressure',
    'baby screaming during takeoff landing',
    'breastfeeding during takeoff airplane',
    'when can baby fly on airplane',
    'pacifier during flight ear pressure',
  ],
  quickAnswer:
    'Ear pain during flights is caused by changes in cabin air pressure during takeoff and landing. Babies cannot intentionally equalize the pressure in their ears like adults can, which can cause significant discomfort and crying. Feeding (breast or bottle), using a pacifier, or encouraging swallowing during ascent and descent helps equalize ear pressure. Most pediatricians consider flying safe for healthy babies after the first 1-2 weeks of life.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Most airlines allow babies to fly after 2 weeks of age. Offer a breast, bottle, or pacifier during takeoff and landing to encourage swallowing, which helps equalize ear pressure. Newborns may sleep through flights due to the white noise. Avoid flying if your baby has a cold or ear infection, as congestion makes equalization harder.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue offering feedings during pressure changes. Babies at this age are more alert and may be more bothered by ear discomfort. Timing flights around nap schedules can help. If your baby has recurrent ear infections, discuss flying with your pediatrician before booking travel.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies can drink from a sippy cup or use a pacifier during ascent and descent. Snacks that involve chewing (appropriate for age) also help equalize pressure. Bring extra feeding options in case of delays. Active babies may want to move around, so plan for in-seat entertainment.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers can drink from a straw cup, chew snacks, or blow bubbles during pressure changes. They may also respond to games that involve jaw movement, like making funny faces. Explain to older toddlers that their ears might feel funny but it will stop. Ear pain should resolve within minutes of reaching cruising altitude or after landing.',
    },
  ],
  whenNormal: [
    'Your baby cries during takeoff and landing but calms down once the plane reaches cruising altitude',
    'Your baby tugs at their ears during ascent or descent but has no fever or signs of illness',
    'Feeding or pacifier use during pressure changes reduces your baby\'s discomfort',
    'Your baby is fussy during the flight but returns to normal behavior after landing',
  ],
  whenToMention: [
    'Your baby has persistent ear pain, fluid drainage from ears, or fever after a flight that lasts more than a few hours',
    'Your baby has a history of recurrent ear infections and you are planning air travel',
    'Your child had ear tube surgery and you are unsure about flying restrictions',
  ],
  whenToActNow: [
    'Your baby has blood or pus draining from their ear after a flight, which could indicate a perforated eardrum',
    'Your child develops a high fever, extreme irritability, or hearing changes after flying that suggest an acute ear infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'jet-lag-baby-sleep-adjustment',
    'altitude-sickness-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Flying with Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Flying-with-Baby.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Airplane ear: Self-care.',
      url: 'https://www.mayoclinic.org/diseases-conditions/airplane-ear/diagnosis-treatment/drc-20351717',
    },
  ],
};
