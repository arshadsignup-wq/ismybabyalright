import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'reactive-arthritis-child',
  title: 'Reactive Arthritis in Children',
  category: 'medical',
  searchTerms: [
    'reactive arthritis child',
    'joint pain after infection child',
    'child knee swollen after stomach bug',
    'post-infectious arthritis child',
    'child ankle swollen after illness',
    'toddler limping after being sick',
    'reactive arthritis toddler',
    'joint swelling after strep child',
    'child arthritis after diarrhea',
    'transient synovitis child',
  ],
  quickAnswer:
    'Reactive arthritis is joint inflammation that develops after an infection elsewhere in the body, most commonly a gastrointestinal infection (Salmonella, Shigella, Campylobacter, Yersinia) or a respiratory/throat infection (Streptococcus, Chlamydia pneumoniae). The arthritis typically appears 1-4 weeks after the triggering infection and is caused by the immune system\'s response, not by the infection spreading to the joint. It usually affects large joints asymmetrically — commonly the knee, ankle, or hip — and is self-limited in most children, resolving within weeks to months. Treatment focuses on managing pain and inflammation with NSAIDs.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Reactive arthritis is rare in infants. Any joint swelling in a baby under 6 months should be evaluated urgently, as septic arthritis (a true joint infection) is the primary concern and requires emergency treatment. Transient synovitis (irritable hip), another common cause of acute joint inflammation in young children, is also uncommon before 6 months. If your baby has a swollen, warm joint or is not moving a limb normally, seek immediate medical evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Reactive arthritis remains uncommon at this age but can occur following gastrointestinal infections. If your baby develops joint swelling or stops using a limb 1-4 weeks after a diarrheal illness or respiratory infection, mention the recent illness to your doctor. The most important first step is ruling out septic arthritis, which may require joint fluid analysis (arthrocentesis). If the joint fluid is sterile and inflammatory, reactive arthritis is a likely diagnosis.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Reactive arthritis is more commonly seen in this age group, particularly after stomach bugs or strep throat. Your toddler may develop a limp, refuse to walk, or have a visibly swollen knee or ankle 1-4 weeks after being sick. The joint is often warm and mildly tender but not typically as acutely painful as in septic arthritis. Post-streptococcal reactive arthritis is an important entity — if it follows strep throat, your doctor may monitor for rheumatic fever as well. Most cases resolve with ibuprofen or naproxen over 2-6 weeks.',
    },
    {
      ageRange: '3+ years',
      context:
        'Reactive arthritis can affect older children after GI infections, strep throat, or respiratory infections. It typically presents with asymmetric large joint involvement — one knee is much more commonly affected than symmetrical small joints. Some children also develop enthesitis (pain where tendons attach to bone, like the heel). If joint symptoms persist beyond 6 weeks, your pediatrician should consider whether the diagnosis might be juvenile idiopathic arthritis rather than reactive arthritis. Most reactive arthritis in children resolves completely without long-term joint damage.',
    },
  ],
  whenNormal: [
    'Your child has mild, brief joint soreness during a viral illness that resolves as the illness clears',
    'Your child\'s joint swelling after an illness resolved completely within 2-4 weeks with anti-inflammatory medication',
    'Your child has full range of motion and normal activity level after the reactive arthritis episode resolved',
    'Your child had transient synovitis (irritable hip) that resolved within 1-2 weeks — this is the most common cause of acute hip pain in young children',
  ],
  whenToMention: [
    'Your child develops joint swelling or limping 1-4 weeks after a gastrointestinal illness, strep throat, or respiratory infection',
    'Joint swelling persists beyond 2-3 weeks despite anti-inflammatory treatment',
    'Multiple joints become involved or symptoms worsen rather than improve',
  ],
  whenToActNow: [
    'Your child has a hot, red, very swollen joint with fever — septic arthritis must be ruled out urgently as it requires emergency surgical drainage and antibiotics',
    'Your child cannot bear weight at all, has severe pain with any joint movement, or appears systemically ill with high fever and joint swelling',
    'Your child develops joint swelling after strep throat along with chest pain, shortness of breath, or a new heart murmur — these could indicate acute rheumatic fever, which requires immediate treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'toddler-joint-swelling',
    'juvenile-idiopathic-arthritis-child',
    'baby-autoimmune-condition-signs',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Reactive Arthritis and Post-Infectious Arthritis in Children. Pediatrics in Review, 2018.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
    {
      org: 'ACR',
      citation:
        'American College of Rheumatology. Reactive Arthritis. ACR, 2023.',
      url: 'https://www.rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Reactive-Arthritis',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Reactive Arthritis. NIAMS, 2023.',
      url: 'https://www.niams.nih.gov/health-topics/reactive-arthritis',
    },
  ],
};
