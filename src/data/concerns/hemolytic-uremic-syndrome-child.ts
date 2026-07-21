import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'hemolytic-uremic-syndrome-child',
  title: 'Hemolytic Uremic Syndrome (HUS) in Children',
  category: 'medical',
  searchTerms: [
    'hemolytic uremic syndrome child',
    'HUS baby symptoms',
    'bloody diarrhea then pale child',
    'E coli kidney failure child',
    'pale decreased urine after diarrhea',
    'hemolytic uremic syndrome E coli',
    'child not urinating after stomach bug',
    'bruising after diarrhea child',
    'HUS treatment child',
    'kidney failure after food poisoning child',
  ],
  quickAnswer:
    'Hemolytic uremic syndrome (HUS) is a serious condition characterized by a triad of hemolytic anemia (destruction of red blood cells), thrombocytopenia (low platelets), and acute kidney injury. It most commonly follows bloody diarrhea caused by E. coli O157:H7 infection. HUS is a medical emergency requiring hospitalization. With supportive care, most children recover kidney function, but early recognition and treatment are critical.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'HUS is very rare in young infants. Breastfed babies are generally protected from the foodborne E. coli infections that trigger typical HUS. However, atypical HUS (not caused by E. coli) can occur at any age due to genetic mutations in complement regulation. Any infant with unexplained pallor, decreased urine output, or petechiae (tiny red spots on the skin) needs prompt medical evaluation.',
    },
    {
      ageRange: '6 months - 3 years',
      context:
        'This is the most common age group for typical (Shiga toxin-associated) HUS. It usually begins 5-10 days after the onset of bloody diarrhea from contaminated food or water. Warning signs that HUS is developing include pallor (the child looks washed out), decreased urine output, lethargy, and irritability even as the diarrhea may be improving. Small bruises or pinpoint red spots on the skin indicate low platelets. Do not give antibiotics or anti-diarrheal medications for suspected E. coli diarrhea, as these may increase the risk of HUS.',
    },
    {
      ageRange: '3-8 years',
      context:
        'Children in this age group remain at risk for HUS following E. coli O157:H7 infection, particularly from undercooked ground beef, unpasteurized milk or juice, contaminated water, or contact with farm animals. About 5-15% of children with E. coli O157:H7 infection develop HUS. Parents should watch for a child who becomes increasingly pale, tired, and produces less urine in the days following a bout of bloody diarrhea. Blood work will show anemia, low platelets, and rising kidney markers.',
    },
    {
      ageRange: '8 years+',
      context:
        'While HUS can occur at any age, it is less common in older children. Older children may be better able to describe symptoms such as feeling very tired, having dark or reduced urine, or noticing bruises. Any child recovering from a diarrheal illness who develops these symptoms should be evaluated urgently. Atypical HUS (complement-mediated) should be considered in any child with HUS features without a preceding diarrheal illness.',
    },
  ],
  whenNormal: [
    'Your child has a mild stomach bug with non-bloody diarrhea and is maintaining good urine output and hydration',
    'Your child had brief diarrhea that is resolving and they are returning to normal activity and eating',
    'Your child looks well, is not pale, and has normal energy levels during or after a GI illness',
    'Your child has occasional loose stools without blood and is drinking fluids well',
  ],
  whenToMention: [
    'Your child has bloody diarrhea, even if they seem well otherwise, as E. coli O157:H7 should be considered and a stool culture obtained',
    'Your child seems more tired than expected during recovery from a stomach illness',
    'You notice that your child is urinating less frequently than usual during a diarrheal illness',
    'Your child looks paler than normal after a recent gastrointestinal illness',
  ],
  whenToActNow: [
    'Your child becomes pale, lethargic, or very irritable several days after the onset of bloody diarrhea, as these are warning signs of developing HUS',
    'Your child has significantly decreased urine output or has not urinated in 8-12 hours, especially following a diarrheal illness',
    'Your child develops unexplained bruising, petechiae (tiny red dots on the skin), or appears yellow (jaundiced) after a GI illness',
    'Your child with known or suspected HUS becomes increasingly drowsy, confused, or has seizures, which may indicate severe kidney failure or brain involvement',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-diarrhea-when-to-worry', 'dehydration-signs-baby', 'pallor-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hemolytic Uremic Syndrome. Red Book: Report of the Committee on Infectious Diseases, 2024.',
      url: 'https://publications.aap.org/redbook',
    },
    {
      org: 'NIDDK',
      citation:
        'National Institute of Diabetes and Digestive and Kidney Diseases. Hemolytic Uremic Syndrome in Children. NIH, 2023.',
      url: 'https://www.niddk.nih.gov/health-information/kidney-disease/children/hemolytic-uremic-syndrome',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. E. coli (Escherichia coli) and Hemolytic Uremic Syndrome. CDC, 2024.',
      url: 'https://www.cdc.gov/e-coli/index.html',
    },
  ],
};
