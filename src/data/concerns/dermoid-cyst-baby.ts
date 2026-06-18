import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dermoid-cyst-baby',
  title: 'My Baby Has a Bump Near Their Eye or on Their Head (Dermoid Cyst)',
  category: 'skin',
  searchTerms: [
    'dermoid cyst baby',
    'bump near baby eye',
    'dermoid cyst eyebrow baby',
    'lump on baby forehead',
    'dermoid cyst removal baby',
    'bump on baby skull fontanelle',
    'congenital cyst baby head',
    'dermoid cyst surgery infant',
    'hard bump baby eyebrow area',
    'nasal dermoid baby',
  ],
  quickAnswer:
    'A dermoid cyst is a benign (non-cancerous) growth that is present at birth, though it may not be noticed right away. It forms during fetal development when skin cells become trapped beneath the surface. Dermoid cysts commonly appear near the eyebrow (most common location), on the scalp, or at the bridge of the nose. They typically feel like a firm, non-tender, round lump that does not move much. While they are not dangerous, dermoid cysts do not resolve on their own and are usually removed surgically to prevent complications like infection or growth.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Dermoid cysts are often noticed in the first few months of life as a firm, painless lump, most commonly near the outer eyebrow. They grow slowly. Your pediatrician may refer you to a pediatric surgeon or pediatric ophthalmologist for evaluation. An ultrasound or CT scan may be ordered, especially for midline cysts (bridge of nose or scalp), to ensure the cyst does not extend deeper through the skull bone.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If the cyst is near the eyebrow and imaging confirms it is superficial, surgical removal is typically planned during this period. The surgery is usually brief, performed under general anesthesia, and leaves a small scar that fades over time. Midline dermoid cysts (on the nose or midline scalp) require more careful imaging before removal because they can sometimes connect to deeper structures.',
    },
    {
      ageRange: '1-3 years',
      context:
        'If the cyst was not removed earlier, it may slowly enlarge and become more noticeable. Removal is still recommended to prevent infection (which makes surgery more complicated) and for cosmetic reasons. If the cyst becomes red, tender, or swollen, it may be infected and needs more urgent attention.',
    },
    {
      ageRange: '3 years+',
      context:
        'Dermoid cysts that are not removed will continue to grow slowly. They do not become cancerous, but they can become infected and are more noticeable as the child grows. Surgical removal at any age is straightforward and has excellent outcomes. The sooner it is done, the smaller and less noticeable the scar.',
    },
  ],
  whenNormal: [
    'Your baby has a small, firm, painless lump near the eyebrow that has been evaluated and you are awaiting planned surgery',
    'The lump is stable in size and not red, tender, or growing rapidly',
    'Your baby had a dermoid cyst removed and the surgical site is healing well',
  ],
  whenToMention: [
    'You notice a new lump on your baby\'s head, face, or near the eye that you have not had evaluated',
    'A previously stable lump seems to be growing',
    'The lump is located on the midline of the nose or scalp — midline cysts need imaging to rule out deeper involvement',
    'The lump is causing a visible deformity or seems to be affecting the position of the eyebrow or eye',
  ],
  whenToActNow: [
    'The lump becomes red, swollen, warm, and painful — this suggests infection and needs prompt medical treatment',
    'You notice the lump is pulsatile (throbs) or seems connected to deeper structures — seek urgent evaluation',
    'Your baby develops changes in vision or eye movement associated with the lump',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'nevus-sebaceous',
    'epidermal-nevus',
  ],
  sources: [
    {
      org: 'Boston Children\'s',
      citation:
        'Boston Children\'s Hospital. Dermoid Cysts.',
      url: 'https://www.childrenshospital.org/conditions/dermoid-cysts',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Dermoid Cyst. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470260/',
    },
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Orbital Dermoid Cysts in Children.',
      url: 'https://www.aao.org/eye-health/diseases/orbital-dermoid-cysts',
    },
  ],
};
