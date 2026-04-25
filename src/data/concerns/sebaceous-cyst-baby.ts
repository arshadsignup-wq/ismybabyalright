import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sebaceous-cyst-baby',
  title: 'My Baby Has a Bump (Sebaceous Cyst)',
  category: 'skin',
  searchTerms: [
    'bump on baby skin',
    'baby sebaceous cyst',
    'hard lump under baby skin',
    'baby has a cyst',
    'small bump on baby head',
    'movable lump on baby scalp',
    'baby skin lump not going away',
    'epidermal cyst baby',
    'painless bump on baby',
    'baby bump under skin',
  ],
  quickAnswer:
    'A small, smooth, movable bump under your baby\'s skin is most likely a benign sebaceous or epidermal inclusion cyst. These are harmless collections of skin cells or oil beneath the surface and are quite common in babies and toddlers. They almost never require treatment unless they become infected or grow rapidly.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Small bumps on a newborn\'s skin are extremely common and are usually milia (tiny white bumps caused by trapped keratin) rather than true sebaceous cysts. Milia appear on the nose, cheeks, and forehead and resolve on their own within a few weeks. True cysts in this age group are rare but can occur anywhere on the body. They feel like smooth, round, pea-sized lumps that move slightly under the skin when touched.',
    },
    {
      ageRange: '3-12 months',
      context:
        'If a firm, painless bump appears under your baby\'s skin and does not go away after a few weeks, it may be a dermoid cyst or epidermal inclusion cyst. These are benign growths that form when skin cells become trapped during development. They are most commonly found on the scalp, face, or neck. They do not cause pain and usually grow very slowly or not at all. Your pediatrician can typically diagnose them with a simple physical exam.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers may develop small cysts from minor skin trauma, clogged pores, or simply as a normal variation. A bump that has been present and unchanged for months is very unlikely to be anything concerning. If the cyst is in an area where clothing or diapers rub against it frequently, it may occasionally become irritated or red, but this usually resolves with keeping the area clean and dry.',
    },
    {
      ageRange: '2-3 years',
      context:
        'At this age, children are more prone to bumps from falls and minor injuries, which can sometimes be confused with cysts. A true cyst will feel smooth and round under the skin, be painless, and persist unchanged over weeks. If your child\'s cyst has been stable and is not bothering them, continued monitoring is all that is typically needed. Your doctor may recommend removal only if it becomes repeatedly infected or is in a cosmetically sensitive area.',
    },
  ],
  whenNormal: [
    'A small, smooth, painless bump under the skin that moves slightly when touched',
    'A bump that has been present for weeks or months without changing size significantly',
    'Tiny white bumps on a newborn\'s nose or cheeks, which are likely milia and will resolve on their own',
    'A bump that does not bother your baby and shows no signs of redness, warmth, or tenderness',
  ],
  whenToMention: [
    'The bump is growing noticeably over a period of weeks',
    'The cyst is located near the eye, on the midline of the scalp, or in an unusual location, as some cysts in these areas warrant further evaluation',
    'Your baby has multiple bumps appearing in a short time frame',
  ],
  whenToActNow: [
    'The bump becomes red, warm, swollen, or painful, or begins draining pus, which could indicate infection',
    'A bump on the midline of the head or spine that seems attached to deeper tissue, as this may need imaging to rule out a connection to underlying structures',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Baby Birthmarks & Rashes. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Your-Newborns-Skin-Birthmarks-and-Rashes.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Epidermoid Cysts (Sebaceous Cysts). Diagnosis & Treatment.',
      url: 'https://www.mayoclinic.org/diseases-conditions/sebaceous-cysts/symptoms-causes/syc-20352701',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Cysts: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/cysts-overview',
    },
  ],
};
