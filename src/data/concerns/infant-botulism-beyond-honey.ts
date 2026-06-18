import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'infant-botulism-beyond-honey',
  title: 'Infant Botulism: Risks Beyond Honey',
  category: 'medical',
  searchTerms: [
    'infant botulism not honey',
    'baby botulism soil',
    'baby botulism corn syrup',
    'baby botulism dust construction',
    'infant botulism sources',
    'baby floppy weak botulism',
    'infant botulism constipation',
    'baby botulism signs symptoms',
    'what causes infant botulism besides honey',
    'clostridium botulinum baby',
  ],
  quickAnswer:
    'While honey before age 1 is the best-known botulism risk, infant botulism can also be caused by exposure to soil, dust (especially from construction sites), and potentially corn syrup or other environmental sources of Clostridium botulinum spores. The first symptom is usually constipation, followed by progressive weakness, a weak cry, poor feeding, and a "floppy" appearance. Infant botulism is treatable but requires immediate medical attention.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies under 6 months are at the highest risk for infant botulism because their gut flora has not yet developed enough to prevent C. botulinum spores from colonizing the intestine. The most common symptom progression is: constipation lasting 3+ days, followed by a weakening cry, difficulty feeding, drooping eyelids, decreased movement, and a floppy or "rag doll" appearance. The baby remains alert but progressively weaker.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Risk decreases as gut bacteria mature but infant botulism can still occur up to 12 months. During this period when babies are crawling and mouthing objects, exposure to contaminated soil or dust becomes a relevant risk factor. Continue to avoid honey and be aware that construction or renovation dust in or near your home can harbor botulism spores.',
    },
    {
      ageRange: '12 months+',
      context:
        'After 12 months, the mature gut flora typically prevents botulism spore colonization, which is why honey becomes safe at this age. Foodborne botulism from improperly canned foods is a different condition that can affect anyone at any age.',
    },
  ],
  whenNormal: [
    'Your baby has occasional constipation that resolves with dietary adjustments and they remain active and feeding well',
    'Your baby is over 12 months old and you are introducing honey — this is safe',
    'Your baby was briefly exposed to garden soil and is showing no symptoms',
  ],
  whenToMention: [
    'Your baby under 12 months accidentally ingested honey, corn syrup, or was exposed to soil or construction dust and you are concerned',
    'Your baby has been constipated for 3 or more days and seems weaker or less active than usual',
    'You notice your baby\'s cry is becoming weaker or their sucking seems less strong',
  ],
  whenToActNow: [
    'Your baby appears floppy, has a weak cry, is feeding poorly, and has drooping eyelids or decreased facial expression — seek emergency care immediately and mention infant botulism to the medical team',
    'Your baby has progressive weakness, difficulty swallowing, or decreased breathing effort',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Botulism: Information for Health Professionals.',
      url: 'https://www.cdc.gov/botulism/hcp/clinical-overview/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Infant Botulism. Red Book, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Botulism.aspx',
    },
    {
      org: 'California IBTPP',
      citation:
        'California Department of Public Health. Infant Botulism Treatment and Prevention Program.',
      url: 'https://www.cdph.ca.gov/Programs/CID/DCDC/Pages/IBTPP.aspx',
    },
  ],
};
