import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'daycare-health-safety-checklist',
  title: 'Daycare Health and Safety Checklist',
  category: 'medical',
  searchTerms: [
    'daycare health and safety checklist',
    'what to look for in a daycare',
    'daycare safety standards',
    'daycare illness prevention',
    'is my daycare safe',
    'daycare hygiene practices',
    'daycare staff to child ratio',
    'daycare licensing requirements safety',
    'how to evaluate daycare health policies',
    'daycare emergency preparedness',
  ],
  quickAnswer:
    'Choosing a safe, healthy daycare environment is one of the most impactful decisions for your baby\'s wellbeing. The AAP and NAEYC (National Association for the Education of Young Children) recommend evaluating: staff-to-child ratios (1:3 for infants, 1:4 for toddlers per NAEYC accreditation standards), handwashing protocols (staff should wash hands before and after diaper changes, meals, and wiping noses), illness exclusion policies aligned with AAP guidelines, safe sleep practices (firm flat surface, no loose bedding, back to sleep), current staff CPR/First Aid certification, up-to-date immunization requirements, written emergency plans, and proper food handling. Look for state licensing (posted visibly), and check for any violations through your state\'s childcare licensing database. NAEYC accreditation is a gold standard but not required.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Infant rooms require the strictest safety measures. Verify: 1:3 or better staff-to-child ratio, safe sleep compliance (individual cribs, firm mattresses, no bumpers or blankets, always placed on back), diaper changing procedures (sanitized surface, hand washing before and after), proper breast milk/formula storage and handling (labeled, refrigerated, warmed safely — never microwaved), and a separate area for diaper changing away from food preparation. Ask how staff respond to a non-breathing or choking infant.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile, additional safety considerations include: outlet covers and secured furniture, safe flooring for crawlers, age-appropriate toys without small parts (choking hazards), safe feeding practices for solids (proper highchair use, supervision, allergen awareness), and secure outdoor play areas if applicable. Ask about their policy for food allergies — how they prevent cross-contamination and handle allergic reactions. Verify they have unexpired epinephrine auto-injectors if they care for children with known severe allergies.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Toddler safety priorities include: secure playground equipment appropriate for the age group, safe transition from cribs to cots for napping, childproofed indoor spaces (gates on stairs, locked cabinets for cleaning supplies), and adequate supervision during active play. Ask about their discipline policy — the AAP opposes corporal punishment and recommends positive guidance techniques. Check the outdoor sun protection policy (shade, sunscreen application with parent permission).',
    },
    {
      ageRange: '18-24 months',
      context:
        'For older toddlers, evaluate the learning environment alongside safety: is there a structured daily schedule? Are activities age-appropriate and stimulating? Do they limit screen time (AAP recommends avoiding screens under 2 years)? Check the transition policy for moving up to the next age group room. Ask about toilet training approach and whether they work with parents on readiness. Review the drop-off and pick-up security procedures (authorized pick-up lists, secure entry).',
    },
  ],
  whenNormal: [
    'Daycare having a written illness policy that sometimes feels strict — proper exclusion criteria protect all children',
    'Your child getting sick more often after starting daycare — this is expected and not a sign of poor hygiene',
    'Minor bumps and bruises from normal play activities, with incident reports provided to parents',
    'Staff asking you to keep your child home for symptoms that meet exclusion criteria',
  ],
  whenToMention: [
    'You have concerns about specific hygiene or safety practices you\'ve observed at the daycare',
    'Your child is getting injured more frequently than seems normal',
    'You notice inconsistencies between the daycare\'s stated policies and what actually happens',
    'Your child seems fearful of a specific caregiver or consistently resists going to daycare',
  ],
  whenToActNow: [
    'You observe or learn about unsafe sleep practices (babies placed on stomachs, loose blankets in cribs, unsupervised sleep)',
    'Evidence of inadequate supervision resulting in injury or a child left unattended',
    'You suspect abuse or neglect — contact your state\'s childcare licensing agency and, if appropriate, child protective services',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'daycare-readiness-signs',
    'when-to-keep-baby-home-from-daycare',
    'baby-daycare-illness-frequency',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Is This the Right Childcare Setting for My Child? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Why-Quality-Matters-in-Early-Child-Care.aspx',
    },
    {
      org: 'NAEYC',
      citation:
        'National Association for the Education of Young Children. NAEYC Early Learning Program Accreditation Standards.',
      url: 'https://www.naeyc.org/accreditation/early-learning/standards',
    },
    {
      org: 'Childcare.gov',
      citation:
        'U.S. Administration for Children & Families. Childcare.gov: Resources for Parents.',
      url: 'https://www.childcare.gov/consumer-education/what-to-look-for-in-a-provider',
    },
  ],
};
