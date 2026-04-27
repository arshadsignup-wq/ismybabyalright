import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-poisoning-signs',
  title: 'Baby Poisoning Signs and What to Do',
  category: 'medical',
  searchTerms: [
    'baby poisoning signs',
    'baby ate something toxic',
    'child ingested cleaning product',
    'baby poisoning symptoms',
    'baby drank cleaning solution',
    'baby ate medication',
    'poison control for baby',
    'baby swallowed household chemical',
    'accidental poisoning infant',
    'toddler ate pills',
    'baby ingested plant',
    'what to do if baby eats poison',
  ],
  quickAnswer:
    'If you suspect your baby or toddler has ingested something poisonous, call Poison Control immediately at 1-800-222-1222 (available 24/7). Do NOT induce vomiting unless specifically told to do so. Common household poisoning risks include medications, cleaning products, laundry pods, button batteries, plants, and personal care products. If your child is unconscious, having a seizure, or having difficulty breathing, call 911 first.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Poisoning in young infants is uncommon but can happen through accidental medication errors (wrong dose, wrong medication), exposure to chemicals on skin or clothing, or ingestion of contaminated breast milk or formula. Always double-check medication dosing for infants. Keep all medications, cleaning products, and chemicals out of reach even at this age, as older siblings may bring items to the baby.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile, poisoning risk increases dramatically. Crawling babies can access low cabinets, reach under sinks, and pick up dropped pills or items. The most common poisoning sources at this age include medications left within reach, cleaning products in accessible cabinets, and small objects like laundry pods (which look like candy). Install cabinet locks, move all chemicals and medications to high locked storage, and be especially cautious about purse contents left on the floor.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is the peak age for accidental poisoning. Toddlers can open child-resistant caps (which are child-resistant, not child-proof), climb to reach items, and are attracted to colorful liquids and tablets. The most dangerous household poisons include iron supplements, blood pressure medications, diabetes medications, laundry detergent pods, and caustic cleaning products. If you suspect ingestion, try to identify what was consumed and how much. Bring the container with you to the ER or have it available when calling Poison Control.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Older toddlers are even more capable of accessing dangerous substances. They can open doors, climb furniture, and may even access items stored "out of reach." This age group is also at risk for plant ingestion in the yard or during outings. Common poisonous plants include philodendron, dieffenbachia, lily of the valley, and oleander. Grandparent homes are a particular risk because medications may not be stored safely. Always bring medications home in their original containers.',
    },
  ],
  whenNormal: [
    'Your baby put a nontoxic item in their mouth and did not swallow it',
    'Your toddler tasted a nontoxic substance like regular crayons, chalk, or paper - these are generally not harmful',
    'Poison Control has confirmed the substance and amount your child was exposed to is nontoxic at that dose',
  ],
  whenToMention: [
    'Your child was exposed to a potentially toxic substance but Poison Control has advised home monitoring',
    'You want guidance on childproofing your home against poisoning risks',
    'Your child has a pattern of putting non-food items in their mouth (pica) that increases poisoning risk',
  ],
  whenToActNow: [
    'Your child is unconscious, having a seizure, or having difficulty breathing after any suspected ingestion - call 911 immediately',
    'Your child has ingested or you suspect ingestion of any medication, cleaning product, laundry pod, or unknown substance - call Poison Control at 1-800-222-1222',
    'Your child has chemical burns on the lips, mouth, or skin, or is drooling excessively or vomiting after a suspected ingestion',
  ],
  relatedMilestones: [
    'fine-motor-pincer-grasp',
    'gross-motor-crawling',
    'gross-motor-walking',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-swallowed-battery', 'baby-vomiting-bile', 'dehydration-signs-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Poison Prevention and Treatment Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/all-around/Pages/Poison-Prevention.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Poisoning Prevention.',
      url: 'https://www.cdc.gov/injury/about/focus-areas/poisoning-prevention.html',
    },
    {
      org: 'NIH',
      citation:
        'National Capital Poison Center. Poison Control Helpline.',
      url: 'https://www.poison.org/',
    },
  ],
};
