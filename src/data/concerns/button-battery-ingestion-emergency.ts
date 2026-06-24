import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'button-battery-ingestion-emergency',
  title: 'Button Battery Ingestion: Emergency Guide',
  category: 'medical',
  searchTerms: [
    'baby swallowed button battery',
    'button battery ingestion',
    'child swallowed battery',
    'coin battery swallowed',
    'lithium battery swallowed child',
    'button battery emergency',
    'toddler ate battery',
    'battery stuck in throat child',
    'button battery danger baby',
    'what to do if child swallows battery',
  ],
  quickAnswer:
    'Button battery ingestion is a true medical emergency. If you suspect your child has swallowed a button battery, go to the emergency room immediately -- do not wait for symptoms. A button battery lodged in the esophagus can cause severe chemical burns and life-threatening tissue damage within as little as 2 hours. Do not induce vomiting. Give honey (if over 12 months old) every 10 minutes on the way to the hospital, as it may slow tissue damage.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Infants are at extreme risk because their esophagus is small, making it more likely that a button battery will become lodged. Even small batteries can cause devastating injury. Babies in this age group explore by mouthing objects, so prevention is critical. Secure all battery compartments with screws, keep remote controls and other battery-containing items out of reach, and dispose of used batteries immediately. Do NOT give honey to infants under 12 months due to botulism risk. If ingestion is suspected, go to the ER immediately.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers are the highest-risk age group for button battery ingestion because they are mobile, curious, and still mouth objects. Lithium coin cells (like CR2032) are the most dangerous due to their size and voltage. If you suspect ingestion, do not wait for symptoms. Give 2 teaspoons of honey every 10 minutes (up to 6 doses) while heading to the emergency room. Honey has been shown to reduce tissue damage when a battery is lodged in the esophagus. Do not induce vomiting, as this can cause the battery to re-lodge.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Older children may be able to tell you they swallowed something, but not always. Symptoms of a lodged battery can mimic other conditions: drooling, difficulty swallowing, vomiting, chest pain, or refusal to eat. These symptoms can appear hours after ingestion. If a battery passes to the stomach, it will usually pass through the GI tract within 48-72 hours, but an esophageal lodgment requires emergency endoscopic removal. X-ray is the standard diagnostic tool.',
    },
  ],
  whenNormal: [
    'There is no "normal" scenario for button battery ingestion -- it is always an emergency that requires immediate evaluation.',
  ],
  whenToMention: [
    'This concern always requires emergency action, not a routine mention to your doctor.',
  ],
  whenToActNow: [
    'You know or suspect your child has swallowed a button battery -- go to the emergency room immediately.',
    'Your child is drooling, gagging, refusing to eat, or having chest pain and may have had access to button batteries.',
    'Your child has a button battery lodged in the nose or ear -- seek emergency care, as it can cause severe tissue damage in those locations as well.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['toddler-swallowed-object', 'baby-choking-on-food', 'baby-eating-non-food-pica'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Button Battery Injuries in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Button-Battery-Injuries-in-Children.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Capital Poison Center. Button Battery Ingestion: Triage and Treatment Guideline.',
      url: 'https://www.poison.org/battery',
    },
    {
      org: 'AAP',
      citation:
        'Anfang RR, et al. pH-neutralizing Esophageal Irrigations as a Novel Mitigation Strategy for Button Battery Injury. Laryngoscope, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30284720/',
    },
  ],
};
