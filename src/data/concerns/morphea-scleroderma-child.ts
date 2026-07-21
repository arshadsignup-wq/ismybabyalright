import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'morphea-scleroderma-child',
  title: 'Morphea (Localized Scleroderma) in Children',
  category: 'medical',
  searchTerms: [
    'morphea child',
    'localized scleroderma child',
    'hard skin patch child',
    'linear morphea child',
    'en coup de sabre child',
    'scleroderma child',
    'child hardened skin patch',
    'child shiny tight skin',
    'linear scleroderma child face',
    'morphea treatment child',
  ],
  quickAnswer:
    'Morphea, also called localized scleroderma, is an autoimmune condition that causes hardened, thickened patches of skin. In children, the most common form is linear morphea, where a band of hardened skin develops along a limb or on the face/scalp. Unlike systemic scleroderma (a different disease that affects internal organs), morphea is limited to the skin and underlying tissues. However, linear morphea in children can extend deeper to affect muscle, bone, and joints, potentially affecting limb growth or causing facial asymmetry. Early treatment with methotrexate and sometimes corticosteroids can halt disease progression and prevent growth-related complications.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Morphea is very rare in infants. Skin changes in a baby this young — such as hardened, discolored, or unusually textured patches — are more commonly due to other conditions like infantile hemangioma, dermal melanocytosis, or congenital skin disorders. If you notice an unusual skin patch on your baby that feels firm or is changing in size, have your pediatrician evaluate it. A biopsy may be needed if the diagnosis is uncertain.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While uncommon, morphea can occasionally begin in the first year. Early morphea may appear as a reddish or purplish patch that gradually becomes firmer and develops a waxy, ivory-colored center with a purple border (the "lilac ring," which indicates active disease). If you notice a skin patch that is becoming progressively harder or is restricting your baby\'s movement, seek evaluation by a pediatric dermatologist.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Morphea becomes more commonly diagnosed in this age group. Linear morphea — a band of hardened skin running along an arm, leg, or across the face — is the most concerning subtype in children because it can extend into deeper tissues, affecting muscle and bone growth. If linear morphea crosses a joint, it can cause contracture (limited range of motion). On the face and scalp, a specific pattern called "en coup de sabre" creates a linear indentation that can affect underlying bone and, rarely, the brain. Early treatment is important to prevent these complications.',
    },
    {
      ageRange: '3+ years',
      context:
        'The peak onset of childhood morphea is between ages 2 and 14. Linear morphea is the most common subtype (about 65% of childhood morphea). Treatment typically involves methotrexate (a low-dose immunosuppressant taken weekly) with an initial course of oral or IV corticosteroids to halt active disease quickly. Physical therapy is important if joints are affected. Most morphea eventually becomes inactive, but the skin changes and any growth differences may persist. Importantly, morphea does NOT progress to systemic sclerosis — these are distinct diseases. Children with morphea need monitoring for limb length discrepancy and functional limitations.',
    },
  ],
  whenNormal: [
    'A small, stable, soft discoloration on the skin that is not getting harder or larger — many birthmarks and benign skin conditions can look similar initially',
    'An old, inactive morphea patch that is no longer changing — once morphea becomes inactive, the hardened area gradually softens over months to years',
    'Your child\'s morphea is being treated and the lilac ring (purple border indicating active disease) has resolved',
    'Your child with morphea has full range of motion in all joints and no limb length difference',
  ],
  whenToMention: [
    'Your child has a new skin patch that is becoming progressively harder, tighter, or more discolored',
    'Your child has a band of hardened skin along a limb, especially if it crosses a joint or seems to be affecting movement',
    'Your child has a linear indentation on the forehead or scalp (en coup de sabre pattern)',
    'Your child with known morphea seems to be developing new active patches or a limb length difference',
  ],
  whenToActNow: [
    'Your child has rapidly spreading or deepening linear morphea crossing a major joint, causing restriction of movement — aggressive treatment is needed to prevent permanent contracture and growth impairment',
    'Your child has en coup de sabre morphea on the face with new neurological symptoms (seizures, headaches, vision changes) — rarely, linear morphea on the face can extend to involve the underlying brain, requiring urgent neurology evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'baby-autoimmune-condition-signs',
    'juvenile-idiopathic-arthritis-child',
    'pediatric-lupus-signs-child',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Morphea and Localized Scleroderma in Children. Pediatric Dermatology, 2019.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
    {
      org: 'ACR',
      citation:
        'American College of Rheumatology. Localized Scleroderma. ACR, 2023.',
      url: 'https://www.rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Localized-Scleroderma',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Arthritis and Musculoskeletal and Skin Diseases. Scleroderma. NIAMS, 2023.',
      url: 'https://www.niams.nih.gov/health-topics/scleroderma',
    },
  ],
};
