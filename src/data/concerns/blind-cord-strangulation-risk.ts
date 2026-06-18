import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'blind-cord-strangulation-risk',
  title: 'Window Blind Cord Strangulation Risk',
  category: 'medical',
  searchTerms: [
    'blind cord strangulation baby',
    'window blind cord danger child',
    'cordless blinds baby safety',
    'baby playing with blind cord',
    'curtain cord strangulation risk',
    'window covering safety children',
    'blind cord death child',
    'corded blinds baby proofing',
    'window shade cord danger',
    'child strangled blind cord',
  ],
  quickAnswer:
    'Window blind cords are one of the top hidden hazards in a home with young children. Over 440 children have died from cord strangulation since 1973, and a child can lose consciousness in as little as 15 seconds. The safest solution is to replace all corded window coverings with cordless alternatives. If you have corded blinds, keep cords permanently out of reach and cut any looped cords.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'Even before your baby is mobile, blind cords near cribs or changing tables pose a risk. A baby can get tangled in a cord while lying in a crib placed near a window. Never place a crib, playpen, or changing table near a window with corded blinds. The safest approach is to replace all corded window coverings in your baby\'s room with cordless options.',
    },
    {
      ageRange: '1-3 years',
      context:
        'This is the highest-risk age group, with most incidents occurring between 16 and 36 months. Toddlers are curious, can climb onto furniture to reach cords, and do not understand the danger. A cord wrapped even once around the neck can tighten with body weight. Cordless blinds, cellular shades, or shutters are the only truly safe options. If replacing is not possible immediately, use cord cleats mounted high on the wall and cut all looped cords into separate strands.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Older children remain at risk though incidents are less common. Continue to ensure all window coverings in accessible areas are cordless. Teach children that blind cords are not toys. Check that any cord shortening devices or cleats are still properly secured.',
    },
  ],
  whenNormal: [
    'Your home has cordless blinds or shades throughout — this eliminates the strangulation risk',
    'You have securely installed cord cleats high on the wall and all looped cords have been cut',
  ],
  whenToMention: [
    'You are unsure whether your window coverings are safe and want guidance on what to replace',
    'You have corded blinds and want advice on interim safety measures while transitioning to cordless',
  ],
  whenToActNow: [
    'Your child is tangled in or being strangled by a blind cord — remove the cord from around the neck immediately and call 911 if the child is unconscious, not breathing, or has an altered level of consciousness',
    'Your child was found with a cord wrapped around their neck and seems fine, but you should still call your pediatrician as a precaution to check for any airway or neck injury',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Window Covering Safety.',
      url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Window-Covering-Safety',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hidden Household Dangers for Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Home-Safety-Heres-How.aspx',
    },
    {
      org: 'WCSC',
      citation:
        'Window Covering Safety Council. Corded Window Covering Safety.',
      url: 'https://windowcoverings.org/',
    },
  ],
};
