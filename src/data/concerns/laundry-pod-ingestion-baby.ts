import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'laundry-pod-ingestion-baby',
  title: 'My Baby Bit Into a Laundry or Dishwasher Pod',
  category: 'medical',
  searchTerms: [
    'baby ate laundry pod',
    'toddler bit detergent pod',
    'baby swallowed laundry detergent',
    'dishwasher pod baby mouth',
    'laundry pod poisoning baby',
    'tide pod baby emergency',
    'detergent pod ingestion child',
    'baby detergent pod eyes',
    'laundry pod chemical burn baby',
    'baby ate dishwasher tablet',
  ],
  quickAnswer:
    'Laundry and dishwasher pods are extremely dangerous to young children. The concentrated detergent can cause severe vomiting, chemical burns to the mouth and esophagus, breathing difficulties, and seizures. If your child has bitten into or swallowed any part of a detergent pod, call Poison Control (1-800-222-1222) immediately and be prepared to go to the emergency room.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age are beginning to crawl and put everything in their mouths. Laundry and dishwasher pods are colorful, squishy, and look exactly like something a baby would want to mouth. Even a small amount of the concentrated detergent can cause vomiting, drooling, coughing, and in serious cases, breathing difficulty or altered consciousness. Keep all pods locked away and out of reach.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers are the highest-risk group for pod ingestion. They can open containers, reach higher surfaces, and are attracted to the bright colors and soft texture of pods. Children this age may bite into a pod and release the concentrated detergent into their mouth and eyes simultaneously. Symptoms can progress rapidly from vomiting to breathing difficulty.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Older children may still mistake pods for candy or toys. Continue to store them in locked, high cabinets. If ingestion occurs at this age, follow the same emergency protocol: call Poison Control and head to the ER if symptoms are present.',
    },
  ],
  whenNormal: [
    'Your child touched a sealed pod briefly and you washed their hands immediately — monitor for skin irritation but this is generally low risk',
    'A very small amount of regular liquid laundry detergent (not a pod) got on your child\'s skin and you rinsed it off promptly',
  ],
  whenToMention: [
    'Your child handled an intact pod and you are unsure if any detergent leaked onto their skin or into their mouth — call Poison Control at 1-800-222-1222',
    'You want guidance on how to properly childproof your laundry and dishwasher pod storage',
  ],
  whenToActNow: [
    'Your child bit into, popped, or swallowed any part of a laundry or dishwasher pod — call Poison Control (1-800-222-1222) immediately and go to the emergency room if your child is vomiting, coughing, drooling excessively, having difficulty breathing, or seems drowsy or unresponsive',
    'Detergent from a pod got into your child\'s eyes — flush the eyes with lukewarm water for 15-20 minutes and call Poison Control',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAPCC',
      citation:
        'American Association of Poison Control Centers. Laundry Detergent Packets.',
      url: 'https://aapcc.org/prevention/laundry-detergent-packets',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Laundry Detergent Pods Pose Risk to Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Laundry-Detergent-Pods-Pose-Risk-To-Children.aspx',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Liquid Laundry Packet Safety.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Liquid-Laundry-Packet-Safety',
    },
  ],
};
