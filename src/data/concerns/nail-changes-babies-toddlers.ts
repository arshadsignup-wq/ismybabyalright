import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'nail-changes-babies-toddlers',
  title: 'Nail Changes in Babies and Toddlers',
  category: 'skin',
  searchTerms: [
    'baby nail peeling',
    'toddler nail falling off',
    'baby fingernail ridges',
    'baby toenail changes',
    'beau lines baby nails',
    'baby nail discoloration',
    'toddler nail lifting',
    'baby nails brittle thin',
    'white spots baby nails',
  ],
  quickAnswer:
    'Nail changes in babies and toddlers are very common and usually harmless. Thin, peeling, ridged, or slightly discolored nails are normal in young children because their nails are still developing and are much thinner and softer than adult nails. Most nail changes are caused by minor trauma, normal growth patterns, or the aftermath of a viral illness and resolve on their own without treatment.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn nails are paper-thin, soft, and may appear to peel or tear easily. This is completely normal and part of the nails maturing. Some babies are born with nails that extend beyond the fingertip, while others have nails that appear very short. Nails grow quickly at this age. Trim them with a baby nail file or infant scissors to prevent scratching, but do not worry about peeling or irregularities.',
    },
    {
      ageRange: '3-6 months',
      context:
        'You may notice horizontal ridges (called Beau lines) or grooves across the nails, which can appear after a period of illness or stress. These marks reflect a temporary slowdown in nail growth and will grow out over several weeks to months. Nails may also develop small white spots from minor bumps to the nail matrix, which are harmless and disappear as the nail grows.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies begin grasping, crawling, and exploring, their nails experience more minor trauma. Toenails may develop slight lifting or thickening, especially if shoes are too tight. After hand, foot, and mouth disease or other viral illnesses, some babies experience nail shedding (onychomadesis) weeks later. This is startling but temporary -- new nails grow in normally underneath.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers are active and their nails take a beating. Jammed fingers and stubbed toes can cause bruising under the nail (subungual hematoma), which appears as a dark blue or purple mark. The nail may eventually fall off, but a new one will grow in over several months. Nail biting and picking may also begin at this age, leading to ragged, uneven nail edges.',
    },
    {
      ageRange: '24-36 months',
      context:
        'By this age, nails are thicker and more resilient but still softer than adult nails. Horizontal ridges, peeling, and occasional nail shedding after illness can still occur. If a single nail is persistently abnormal -- thickened, discolored, or painful -- while all other nails are normal, it may warrant a look from your pediatrician to rule out a fungal infection or other less common cause.',
    },
  ],
  whenNormal: [
    'Thin, soft nails that peel, bend easily, or tear in young infants',
    'Horizontal ridges or grooves across multiple nails, especially after an illness',
    'White spots on the nails from minor bumps or trauma to the nail base',
    'A nail that falls off weeks after a viral illness like hand, foot, and mouth disease, with a new nail growing underneath',
  ],
  whenToMention: [
    'A nail becomes very thick, discolored (yellow or green), or has an unusual texture that does not match the other nails',
    'Nails are peeling or breaking excessively despite adequate nutrition',
    'A dark streak or line runs lengthwise down a single nail and does not grow out',
    'The skin around the nail is persistently red, swollen, or appears infected',
  ],
  whenToActNow: [
    'A nail injury causes significant bleeding that you cannot stop, or the finger or toe appears deformed after trauma',
    'The nail bed or surrounding skin is very red, warm, swollen, and painful with pus, suggesting a bacterial infection (paronychia) that may need treatment',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nail Injuries in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/injuries-emergencies/Pages/Nail-Injuries.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Nail Disorders in Children. Pediatric Dermatology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24890337/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand, Foot, and Mouth Disease. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Hand-Foot-and-Mouth-Disease.aspx',
    },
  ],
};
