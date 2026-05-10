import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'spinal-muscular-atrophy-baby',
  title: 'Spinal Muscular Atrophy (SMA) in Babies',
  category: 'medical',
  searchTerms: [
    'spinal muscular atrophy baby',
    'SMA baby signs',
    'baby floppy not moving much',
    'SMA newborn screening',
    'baby progressive weakness',
    'SMA type 1 infant',
    'baby not lifting head floppy',
    'floppy baby SMA',
    'spinal muscular atrophy gene therapy',
  ],
  quickAnswer:
    'Spinal muscular atrophy (SMA) is a genetic neuromuscular disease that causes progressive muscle weakness by affecting motor neurons in the spinal cord. It affects about 1 in 6,000 to 10,000 births. SMA is now included in newborn screening in many states, enabling pre-symptomatic treatment. Revolutionary gene therapies (Zolgensma, nusinersen/Spinraza, risdiplam/Evrysdi) have dramatically changed the prognosis, especially when treatment begins before symptoms appear.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'SMA Type 1, the most severe form, typically presents in the first 6 months of life. Early signs include severe hypotonia (floppy baby), weak cry, difficulty feeding and swallowing, reduced spontaneous movement, and a characteristic "frog-leg" posture. Babies may have a bell-shaped chest due to weak intercostal muscles and breathe primarily with their diaphragm. With the addition of SMA to the newborn screening panel, many babies are now diagnosed before symptoms appear, allowing for immediate treatment.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Untreated babies with SMA Type 1 progressively weaken during this period, losing the ability to hold their head up and eventually developing breathing and swallowing difficulties. However, babies who are treated pre-symptomatically with gene therapy (onasemnogene abeparvovec/Zolgensma) or other therapies (nusinersen/Spinraza or risdiplam/Evrysdi) are achieving milestones that were previously unimaginable — many are sitting and even standing. Early treatment is truly transformative.',
    },
    {
      ageRange: '6-12 months',
      context:
        'SMA Type 2 typically presents between 6-18 months. These babies may have achieved the ability to sit independently but never achieve independent walking. Signs include progressively weaker legs, hand tremor, and difficulty transitioning between positions. Treated babies with SMA Type 1 who received early intervention continue to make progress. Respiratory monitoring and nutritional support remain important aspects of care.',
    },
    {
      ageRange: '12 months+',
      context:
        'Ongoing treatment and multidisciplinary care are essential. Physical therapy, respiratory support, nutritional management, and orthopedic monitoring help maintain function and quality of life. The treatment landscape for SMA has been revolutionized — children who would previously have had very limited prognoses are now walking, talking, and thriving. The earlier treatment begins relative to symptom onset, the better the outcomes.',
    },
  ],
  whenNormal: [
    'Your baby\'s newborn screening was normal for SMA',
    'Your baby has normal muscle tone, can lift their head, and moves all four limbs equally',
    'Your baby was diagnosed with SMA through newborn screening and is on treatment with good developmental progress',
    'Your baby has a mild form (SMA Type 3) with subtle weakness that is being managed',
  ],
  whenToMention: [
    'Your baby seems unusually floppy, has a weak cry, or is not moving their arms and legs as much as expected',
    'Your baby cannot hold their head up by 4 months or seems to be getting weaker rather than stronger',
    'You received an abnormal SMA newborn screening result — follow up immediately for confirmatory genetic testing',
  ],
  whenToActNow: [
    'Your baby has progressive muscle weakness with increasing difficulty breathing or swallowing — SMA can cause respiratory failure, and early treatment is critical',
    'Your newborn screening is positive for SMA — contact the genetics or neuromuscular team immediately, as treatment within the first weeks of life produces the best outcomes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Spinal Muscular Atrophy Fact Sheet. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/spinal-muscular-atrophy',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Spinal Muscular Atrophy. CDC, 2024.',
      url: 'https://www.cdc.gov/ncbddd/spinalmuscularatrophy/index.html',
    },
  ],
};
