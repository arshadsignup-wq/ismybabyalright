import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'apartment-baby-proofing-small-space',
  title: 'Baby-Proofing a Small Apartment',
  category: 'physical',
  searchTerms: [
    'baby proofing small apartment',
    'childproofing rental apartment',
    'baby proofing studio apartment',
    'small space baby safety',
    'apartment baby safety tips',
    'baby proofing without drilling',
    'renter friendly baby proofing',
    'baby proofing one bedroom apartment',
    'small home baby safe',
    'apartment childproofing essentials',
  ],
  quickAnswer:
    'Baby-proofing a small apartment is absolutely possible and focuses on the same key safety principles as any home: securing furniture to walls, covering outlets, locking cabinets with hazardous materials, and ensuring safe sleep spaces. Small spaces actually have an advantage - there is less area to monitor. Focus on eliminating the most dangerous hazards first: falls, poisoning, choking, and burns.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before your baby is mobile, focus on safe sleep setup and the immediate areas where you place your baby. Ensure the crib or bassinet meets current safety standards and fits properly in your space. Secure any furniture that could tip, even from an adult bumping it. Keep small objects, cords, and medications out of reach from any surface where you lay your baby. Install smoke and carbon monoxide detectors if not already present.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Once your baby starts rolling, crawling, and pulling up, baby-proofing becomes urgent. In a small apartment, get down to floor level and look for hazards from your baby\'s perspective. Use adhesive-mount cabinet locks (renter-friendly) for under-sink chemicals. Cover electrical outlets with plug covers. Use furniture anchors (anti-tip straps) on bookshelves and dressers - many can be wall-mounted with small holes easily patched later. Gate off the kitchen if possible, or use oven knob covers and stove guards.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers in small spaces are especially at risk because they can reach hazards quickly. Ensure window guards or stops are installed on any windows above the first floor. Move all cleaning products, medications, and small batteries to high, locked storage. Secure TV and monitor stands. Consider corner guards on sharp furniture edges at toddler head height. In small spaces, creating one fully safe zone where your toddler can play independently is more practical than trying to baby-proof every inch.',
    },
  ],
  whenNormal: [
    'You feel overwhelmed about baby-proofing limited space - this is a very common concern among apartment-dwelling parents.',
    'Your baby occasionally reaches something they should not - no baby-proofing is 100% complete, and supervision is always the primary safety measure.',
    'You cannot gate off every area in a small apartment - focus on the highest-risk zones instead.',
  ],
  whenToMention: [
    'Your baby has had a minor injury from a household hazard and you want guidance on prevention strategies for your specific space.',
    'You are concerned about lead paint, mold, or other environmental hazards in an older apartment building.',
    'Your baby is consistently getting into hazardous items despite your baby-proofing efforts and you need additional strategies.',
  ],
  whenToActNow: [
    'Your baby has ingested a cleaning product, medication, button battery, or other toxic substance - call Poison Control (1-800-222-1222) or 911 immediately.',
    'Your baby has fallen from a height such as a changing table, counter, or out of a window.',
    'Your baby is choking on a small object and you cannot clear it with back blows and chest thrusts.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-falls-off-bed-when-to-worry',
    'baby-bath-seat-drowning-recall',
    'baby-choking-on-food',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Childproofing Your Home. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Childproofing-Your-Home.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Protect the Ones You Love: Child Injuries Are Preventable.',
      url: 'https://www.cdc.gov/child-safety/about/index.html',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Home Safety for Children: A Review of Injury Prevention Strategies. Pediatrics, 2016.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27940722/',
    },
  ],
};
