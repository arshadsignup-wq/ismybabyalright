import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preauricular-tag-baby',
  title: 'Preauricular Tag',
  category: 'medical',
  searchTerms: [
    'preauricular tag baby',
    'skin tag near baby ear',
    'baby born with tag in front of ear',
    'ear tag newborn',
    'extra skin near ear baby',
    'preauricular skin tag removal baby',
    'accessory tragus baby',
    'baby bump near ear',
  ],
  quickAnswer:
    'A preauricular tag is a small, harmless skin-colored bump or tag of skin that appears in front of the ear. They are present at birth and occur in about 5-10 per 1,000 newborns. Preauricular tags are benign and contain skin and sometimes cartilage. An isolated preauricular tag (without other findings) is rarely associated with hearing problems or other abnormalities. They can be removed surgically for cosmetic reasons if desired, but removal is not medically necessary. Your pediatrician may recommend a hearing screening as a precaution.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Preauricular tags are noticed at birth. Your newborn should receive the standard newborn hearing screening regardless, but having a tag alone does not significantly increase the risk of hearing loss. If your baby has additional findings such as other skin tags, ear abnormalities, or kidney concerns, your doctor may order additional testing including a renal ultrasound, as some syndromes involve both ear and kidney findings. An isolated tag in an otherwise healthy baby is typically benign.',
    },
    {
      ageRange: '3-6 months',
      context:
        'The preauricular tag will grow proportionally with your baby. It does not change in character or become dangerous. If you are interested in removal for cosmetic reasons, discuss timing with your pediatrician or a pediatric plastic surgeon. Some doctors recommend early removal when the tag is small and the procedure is simpler, while others prefer to wait until the child is older.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, the tag continues to be a cosmetic concern only. If it has not caused any issues (such as irritation from clothing or frequent pulling), there is no urgency to intervene. If removal is planned, your doctor will discuss whether it can be done in the office with local anesthesia or requires a brief procedure under general anesthesia, depending on whether cartilage is present at the base.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers may become aware of the tag and touch or pull at it. If the tag is causing social concern or irritation, surgical removal remains an option. The procedure is straightforward  -  a simple tag without cartilage can often be removed in a brief office procedure, while tags with cartilage at the base require a small surgical excision. Recurrence after complete removal is uncommon.',
    },
  ],
  whenNormal: [
    'Your baby has a single small preauricular tag, passed the newborn hearing screening, and has no other physical findings  -  this is a common benign variation.',
    'The tag grows proportionally with your baby and does not change in color, texture, or shape.',
    'A family member also has a preauricular tag  -  they often run in families.',
    'Your baby\'s tag occasionally gets caught on clothing but causes no real discomfort.',
  ],
  whenToMention: [
    'Your baby has a preauricular tag along with other ear abnormalities, skin tags elsewhere, or other physical findings that your pediatrician should evaluate.',
    'The tag is becoming red, swollen, or appears infected.',
    'You would like to discuss surgical removal options and timing.',
  ],
  whenToActNow: [
    'The preauricular tag has become suddenly swollen, warm, red, and painful  -  this could indicate an infection requiring prompt treatment.',
    'Your baby has a preauricular tag along with failed hearing screening and other facial or body abnormalities  -  a comprehensive evaluation for associated syndromes is warranted.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Evaluation of Preauricular Tags and Pits. Pediatrics, 2020.',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20191674/36923',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Preauricular Tags and Pits. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK560643/',
    },
  ],
};
