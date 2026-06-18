import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'houseplant-poisoning-baby',
  title: 'My Baby Ate Part of a Houseplant',
  category: 'medical',
  searchTerms: [
    'baby ate houseplant',
    'toddler ate plant leaf',
    'toxic plants for babies',
    'baby ate pothos',
    'baby ate philodendron',
    'peace lily baby toxic',
    'dieffenbachia baby mouth',
    'poisonous houseplants children',
    'baby chewing on plant',
    'which indoor plants are toxic to babies',
  ],
  quickAnswer:
    'Many common houseplants can cause irritation or illness if a baby chews on them. Plants like pothos, philodendron, peace lily, and dieffenbachia contain calcium oxalate crystals that cause immediate burning and swelling in the mouth and throat. While most houseplant exposures cause only mild symptoms, some plants are more dangerous. If your baby has eaten any part of a plant, call Poison Control (1-800-222-1222) with the plant name.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Crawling babies are drawn to the leaves and soil of floor-level plants. At this age, babies explore by mouthing everything. Even non-toxic plant soil can contain fertilizers, pesticides, or mold that can upset a baby\'s stomach. Move all plants to high, unreachable locations or to rooms your baby cannot access.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers can reach higher surfaces and may pull down hanging plants. They may also dig in plant soil and eat it. This is the peak age for plant ingestion incidents. Common symptoms from calcium oxalate plants include drooling, crying, pawing at the mouth, swelling of the lips or tongue, and refusal to eat. Most symptoms resolve within a few hours.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Older children are less likely to eat plants but may experiment out of curiosity. Teach children not to eat any plant unless a trusted adult says it is food. Continue to identify and remove or relocate any highly toxic plants from your home.',
    },
  ],
  whenNormal: [
    'Your baby briefly mouthed a leaf from a non-toxic plant (such as a spider plant or Boston fern) and shows no symptoms',
    'Your toddler touched plant soil but did not eat any significant amount',
    'Your baby chewed a small piece of a mild-irritant plant (like pothos) and you rinsed their mouth — mild oral irritation should resolve within hours',
  ],
  whenToMention: [
    'Your baby chewed or swallowed a piece of any houseplant and you are unsure if it is toxic — call Poison Control at 1-800-222-1222 with the plant name',
    'Your baby has mild mouth irritation, drooling, or fussiness after chewing on a plant',
    'You want help identifying which plants in your home may be toxic',
  ],
  whenToActNow: [
    'Your baby has significant swelling of the mouth, tongue, or throat, difficulty swallowing, or difficulty breathing after eating any part of a plant — call 911',
    'Your baby ingested a known highly toxic plant such as oleander, foxglove, castor bean, or water hemlock and shows any symptoms including vomiting, diarrhea, irregular heartbeat, or seizures',
    'Your child ate a large amount of any plant and is vomiting repeatedly or acting abnormally',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'Poison Control',
      citation:
        'National Capital Poison Center. Poisonous Plants.',
      url: 'https://www.poison.org/articles/plant',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Poison Prevention Tips. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Poison-Prevention.aspx',
    },
    {
      org: 'ASPCA',
      citation:
        'ASPCA Animal Poison Control. Toxic and Non-Toxic Plant List.',
      url: 'https://www.aspca.org/pet-care/animal-poison-control/toxic-and-non-toxic-plants',
    },
  ],
};
