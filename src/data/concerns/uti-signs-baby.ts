import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'uti-signs-baby',
  title: 'Signs of a UTI in Babies',
  category: 'medical',
  searchTerms: [
    'baby uti symptoms',
    'urinary tract infection baby',
    'baby uti fever',
    'how to tell if baby has uti',
    'baby uti signs',
    'baby peeing less uti',
    'foul smelling urine baby',
    'baby uti treatment',
    'uti in babies without fever',
    'baby uti crying when peeing',
  ],
  quickAnswer:
    'UTIs (urinary tract infections) in babies can be tricky to spot because symptoms are often vague - fever without other cold symptoms, fussiness, poor feeding, or foul-smelling urine. If your baby has unexplained fever, especially if under 3 months, your pediatrician may test for a UTI. UTIs need antibiotic treatment to prevent kidney damage.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any fever in a baby under 3 months (100.4°F/38°C or higher) requires immediate medical evaluation, as UTIs are a common cause of fever in young infants. Your baby may seem generally unwell, feed poorly, or be unusually fussy. Because the signs are subtle, your doctor will likely test your baby\'s urine. Untreated UTIs can lead to serious kidney infection, so prompt diagnosis is critical.',
    },
    {
      ageRange: '3-6 months',
      context:
        'UTI symptoms at this age may include fever without runny nose or cough, irritability, vomiting, or poor feeding. You might notice your baby cries more during diaper changes or has foul-smelling urine. Girls are at higher risk than boys. If your baby has a fever and your pediatrician can\'t find an obvious source (like an ear infection), they\'ll likely collect a urine sample.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies with UTIs may have fever, fussiness, loss of appetite, or vomiting. Some babies cry when urinating, though this is not always obvious. Urine may smell stronger than usual or look cloudy. If your baby has a fever lasting more than 24 hours without clear cold symptoms, mention this to your doctor - they may want to rule out a UTI.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may start to show more classic UTI symptoms like crying when peeing, holding their diaper area, or peeing more or less frequently than usual. Fever, abdominal pain, or new-onset bedwetting (if previously dry) can also be signs. If your toddler is potty training, accidents combined with fever could indicate a UTI. Diagnosis requires a urine test.',
    },
    {
      ageRange: '2 years+',
      context:
        'Older toddlers can sometimes tell you it hurts to pee or that their belly hurts. Look for frequent urination, accidents in a previously toilet-trained child, strong-smelling or cloudy urine, or fever. Some children have UTIs without fever. If you suspect a UTI, contact your pediatrician - they\'ll test the urine and prescribe antibiotics if needed.',
    },
  ],
  whenNormal: [
    'Your baby\'s urine smells slightly stronger after starting a new food (like asparagus)',
    'Your baby cries briefly during a diaper change but is otherwise happy',
    'Your baby has a mild cold with low-grade fever and typical cold symptoms (runny nose, cough)',
    'Your baby is feeding well, having regular wet diapers, and seems comfortable',
  ],
  whenToMention: [
    'Your baby has unexplained fussiness or seems uncomfortable during diaper changes',
    'Your baby\'s urine has a consistently foul smell',
    'Your baby has had one UTI before (may need follow-up imaging or evaluation)',
    'Your baby has a low-grade fever for more than 24 hours with no clear source',
  ],
  whenToActNow: [
    'Your baby under 3 months has any fever (100.4°F/38°C or higher)',
    'Your baby has a high fever (over 102°F/39°C) that doesn\'t improve with fever reducer',
    'Your baby is vomiting repeatedly and can\'t keep fluids down',
    'Your baby has very few wet diapers or shows signs of dehydration (sunken soft spot, no tears, dry lips)',
    'Your baby seems very unwell, is extremely lethargic, or has a weak cry',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Urinary Tract Infections in Children. HealthyChildren.org, 2024.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/genitourinary-tract/Pages/Urinary-Tract-Infections-in-Children.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Urinary Tract Infection. CDC, 2023.',
      url: 'https://www.cdc.gov/antibiotic-use/uti.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fevers. HealthyChildren.org, 2023.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/default.aspx',
    },
  ],
};
