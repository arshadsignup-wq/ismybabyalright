import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-swallowed-battery',
  title: 'Baby Swallowed a Button Battery',
  category: 'medical',
  searchTerms: [
    'baby swallowed battery',
    'baby ate button battery',
    'child swallowed lithium battery',
    'button battery ingestion emergency',
    'baby swallowed coin battery',
    'baby swallowed watch battery',
    'button battery emergency',
    'signs baby swallowed a battery',
    'what to do if baby swallows battery',
    'baby swallowed small battery',
    'how dangerous is swallowing a battery',
  ],
  quickAnswer:
    'A swallowed button battery is a medical emergency. Button batteries can cause severe, life-threatening burns to the esophagus within as little as 2 hours. Do not wait for symptoms. Do not induce vomiting. Go to the nearest emergency room immediately. If your child is over 12 months old, give honey on the way to the hospital as it may help slow tissue damage. Time is critical - call the National Battery Ingestion Hotline at 800-498-8666.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'While babies under 6 months are not yet picking up small objects on their own, button battery exposure can happen through older siblings or unsecured toys. At this age, a button battery lodged in the esophagus is especially dangerous because the esophagus is very small. Because young infants cannot tell you what happened, be alert for unexplained drooling, refusal to feed, crying during swallowing, or vomiting. If you suspect your baby may have come in contact with a button battery and one is missing, go to the emergency room immediately.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a high-risk age because babies are actively exploring everything by mouth. The most dangerous scenario is when a button battery lodges in the esophagus, where the electrical current can burn through tissue within 2 hours. Do NOT induce vomiting. Do NOT let your baby eat or drink except honey (only for babies over 12 months). Go directly to the emergency room. An X-ray can quickly confirm whether a battery was swallowed and where it is located.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are the age group most commonly involved in button battery ingestion. The largest button batteries (20mm lithium coin cells like CR2032) are the most dangerous. These are found in remote controls, key fobs, musical greeting cards, and flameless candles. If you know or suspect your toddler swallowed a battery, give 2 teaspoons of honey every 10 minutes on the way to the ER (up to 6 doses). Honey has been shown to reduce the severity of esophageal injury.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Older toddlers may be able to tell you they swallowed something, but many ingestions are unwitnessed. Symptoms can mimic common illnesses - coughing, drooling, refusal to eat, vomiting, or chest pain - which can delay diagnosis. If a button battery passes through the esophagus into the stomach, it usually passes on its own, but this must be confirmed by X-ray. Even batteries in the stomach should be monitored.',
    },
  ],
  whenNormal: [
    'This concern does not have a "normal" scenario - any suspected button battery ingestion requires immediate medical evaluation',
    'If an X-ray confirms the battery passed to the stomach and your child is asymptomatic, your doctor will guide monitoring',
    'If the battery passes in stool and your child has no symptoms, the danger has passed',
  ],
  whenToMention: [
    'You find a product with an open or damaged battery compartment and are unsure if a battery is missing',
    'Your child has unexplained drooling, difficulty swallowing, or refusal to eat and you cannot rule out foreign body ingestion',
  ],
  whenToActNow: [
    'You know or suspect your baby swallowed a button battery - go to the nearest emergency room immediately',
    'Your child is drooling excessively, refusing to swallow, vomiting blood, or having difficulty breathing after a possible ingestion',
    'You find a product with a missing button battery and cannot account for it - assume ingestion and seek emergency care',
  ],
  relatedMilestones: [
    'fine-motor-pincer-grasp',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-poisoning-signs', 'baby-vomiting-bile', 'bloody-stool'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Button Battery Injuries in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Button-Battery-Injuries-in-Children-A-Growing-Risk.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Anfang RR, et al. Use of Honey to Reduce Esophageal Injury from Button Battery Ingestion. Laryngoscope. 2019;129(8):1808-1814.',
      url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6626552/',
    },
    {
      org: 'NIH',
      citation:
        'National Capital Poison Center. Button Batteries.',
      url: 'https://www.poison.org/battery',
    },
  ],
};
