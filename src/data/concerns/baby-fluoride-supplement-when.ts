import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-fluoride-supplement-when',
  title: 'When Does My Baby Need Fluoride Supplements?',
  category: 'medical',
  searchTerms: [
    'baby fluoride supplement when to start',
    'infant fluoride drops',
    'baby needs fluoride',
    'fluoride for babies teeth',
    'when to give baby fluoride',
    'fluoride supplement infant',
    'baby fluoride toothpaste when',
    'no fluoride in water baby',
    'fluoride drops for infants',
    'baby dental fluoride recommendation',
  ],
  quickAnswer:
    'The American Academy of Pediatrics and the American Dental Association recommend fluoride supplementation for babies starting at 6 months of age if your local water supply does not contain adequate fluoride (less than 0.3 ppm). Fluoride helps prevent tooth decay even before teeth emerge by strengthening developing enamel. Your pediatrician or dentist can assess your water source and prescribe appropriate fluoride drops if needed.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Fluoride supplements are not recommended for babies under 6 months of age. Breastmilk and formula prepared with fluoridated water provide minimal fluoride, and this is appropriate for this age. The American Academy of Pediatric Dentistry advises against fluoride supplementation in this period because very young infants have limited capacity to metabolize excess fluoride. Focus during this time should be on gentle oral hygiene by wiping gums with a clean damp cloth after feedings.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Starting at 6 months, your pediatrician may recommend fluoride supplementation (0.25 mg daily) if your drinking water contains less than 0.3 parts per million of fluoride. This is particularly important for families using well water, bottled water without fluoride, or those with reverse osmosis filtration systems that remove fluoride. You can check your local water fluoride level through your water utility or have well water tested. When your baby\'s first tooth appears, begin using a rice-grain-sized smear of fluoride toothpaste on a soft infant toothbrush.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Continue fluoride supplementation as prescribed by your pediatrician or dentist if your water supply lacks adequate fluoride. The dose may be adjusted as your child grows. At this age, use a rice-grain-sized smear of fluoride toothpaste twice daily when brushing. Your child should have their first dental visit by age 1 (or within 6 months of the first tooth), and the dentist can apply fluoride varnish treatments every 3-6 months. Too much fluoride can cause dental fluorosis (white spots on teeth), so follow dosing recommendations carefully and keep toothpaste out of reach.',
    },
  ],
  whenNormal: [
    'Your baby is under 6 months and not receiving fluoride supplements — this is the standard recommendation.',
    'Your water supply contains adequate fluoride (0.3 ppm or higher) and your pediatrician has not recommended supplements.',
    'Your baby is using an appropriate amount of fluoride toothpaste as recommended for their age.',
  ],
  whenToMention: [
    'You are unsure whether your water supply contains fluoride or at what level — ask your pediatrician to help assess your baby\'s fluoride needs.',
    'Your family uses exclusively bottled water, well water, or filtered water and your baby is over 6 months old.',
    'You notice white spots or discoloration on your baby\'s emerging teeth, which could indicate fluorosis or early decay.',
  ],
  whenToActNow: [
    'Your child has swallowed a large amount of fluoride toothpaste or supplements — contact Poison Control (1-800-222-1222) immediately, as fluoride overdose can cause nausea, vomiting, and in severe cases, more serious toxicity.',
    'Your child is showing signs of acute fluoride toxicity such as vomiting, diarrhea, excessive salivation, or abdominal pain after ingesting fluoride products — seek emergency care.',
    'Your child has visible tooth decay (brown or black spots, pitting, or crumbling of teeth) — schedule an urgent dental appointment.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-nail-care-trimming-fear', 'baby-food-preparation-hygiene'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics — Fluoride Use in Caries Prevention in the Primary Care Setting',
      url: 'https://publications.aap.org/pediatrics/article/146/6/e2020034637/33536/Fluoride-Use-in-Caries-Prevention-in-the-Primary',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention — Community Water Fluoridation: Infant Formula',
      url: 'https://www.cdc.gov/fluoridation/basics/infant-formula.html',
    },
    {
      org: 'ADA',
      citation:
        'American Dental Association — Fluoride: Topical and Systemic Supplements',
      url: 'https://www.ada.org/resources/research/science-and-research-institute/oral-health-topics/fluoride-topical-and-systemic-supplements',
    },
  ],
};
