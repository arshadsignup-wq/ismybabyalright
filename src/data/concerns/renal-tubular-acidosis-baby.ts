import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'renal-tubular-acidosis-baby',
  title: 'Renal Tubular Acidosis (RTA) in Children',
  category: 'medical',
  searchTerms: [
    'renal tubular acidosis baby',
    'RTA child symptoms',
    'failure to thrive kidney',
    'baby not growing kidney problem',
    'metabolic acidosis child',
    'kidney stones child',
    'rickets kidney baby',
    'renal tubular acidosis treatment',
    'baby vomiting poor growth kidney',
    'Fanconi syndrome child',
  ],
  quickAnswer:
    'Renal tubular acidosis (RTA) is a condition in which the kidneys cannot properly acidify the urine, leading to a buildup of acid in the blood (metabolic acidosis). In children, this can cause failure to thrive, vomiting, poor growth, and sometimes rickets or kidney stones. Treatment with oral bicarbonate or citrate supplementation to correct the acidosis usually restores normal growth and development.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'RTA in young infants often presents with poor weight gain, frequent vomiting, and dehydration. Babies may feed poorly and seem fussy or lethargic. Distal RTA (Type 1) is the most common form in infants and may be inherited (autosomal recessive or dominant). An unexplained metabolic acidosis found on blood work in an infant who is not growing well should prompt evaluation for RTA. Early treatment with alkali supplementation can restore normal growth.',
    },
    {
      ageRange: '6-12 months',
      context:
        'If untreated, RTA can cause significant growth failure by this age. Parents may notice that their baby is not keeping up on the growth chart despite adequate intake. Constipation, poor appetite, and recurrent vomiting are common. Some infants with distal RTA may develop nephrocalcinosis (calcium deposits in the kidneys) visible on ultrasound. Proximal RTA (Type 2) may present as part of Fanconi syndrome with loss of glucose, amino acids, and phosphate in the urine.',
    },
    {
      ageRange: '1-5 years',
      context:
        'Toddlers and young children with undiagnosed RTA may present with short stature, rickets (bowed legs, widened wrists), or recurrent kidney stones. Distal RTA (Type 1) can cause calcium-containing kidney stones due to alkaline urine and low citrate excretion. A child with unexplained poor growth, rickets, or kidney stones should be evaluated with blood gases, electrolytes, and urine studies. Treatment with citrate supplementation corrects the acidosis and promotes catch-up growth.',
    },
    {
      ageRange: '5 years+',
      context:
        'Older children with RTA may have been diagnosed earlier or may present with recurrent kidney stones or growth concerns. With appropriate treatment, most children achieve normal growth. Some forms of proximal RTA may improve with age. Regular monitoring of blood electrolytes, kidney function, and growth is important. Medication adherence is essential as stopping alkali therapy will cause the acidosis to recur.',
    },
  ],
  whenNormal: [
    'Your baby is growing along their expected growth curve and has normal blood work at checkups',
    'Your child has occasional vomiting with a viral illness but is otherwise thriving',
    'Your child\'s electrolytes and kidney function tests have been normal',
    'Your child has normal energy levels, appetite, and development for their age',
  ],
  whenToMention: [
    'Your baby is consistently falling off the growth chart despite adequate feeding',
    'Your child has chronic or recurrent vomiting without an obvious cause',
    'Your child has been found to have an unexplained metabolic acidosis on blood work',
    'Your child has bowed legs, widened wrists, or other signs that could suggest rickets',
  ],
  whenToActNow: [
    'Your baby is severely dehydrated with sunken fontanelle, dry mouth, no tears, and no wet diapers for 8 or more hours',
    'Your child has severe vomiting with lethargy and appears very ill, which could indicate a dangerous level of acidosis',
    'Your child passes a kidney stone or has severe flank pain with blood in the urine',
    'Your child with known RTA has run out of or stopped taking their bicarbonate or citrate medication and is becoming increasingly unwell with vomiting or lethargy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-failure-to-thrive-signs', 'baby-growing-too-slow', 'rickets-vitamin-d-bones-baby'],
  sources: [
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Renal Tubular Acidosis. NIH, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/kidney-disease/renal-tubular-acidosis',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Evaluation of the Child with Failure to Thrive. Pediatrics in Review, 2020.',
      url: 'https://publications.aap.org/pediatricsinreview/article/41/11/568/35184/Failure-to-Thrive-in-Children',
    },
    {
      org: 'ASN',
      citation:
        'Rodriguez Soriano J. Renal Tubular Acidosis: The Clinical Entity. Journal of the American Society of Nephrology, 2002.',
      url: 'https://jasn.asnjournals.org/content/13/8/2160',
    },
  ],
};
