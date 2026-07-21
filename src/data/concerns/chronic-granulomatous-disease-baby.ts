import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'chronic-granulomatous-disease-baby',
  title: 'Chronic Granulomatous Disease (CGD) in Children',
  category: 'medical',
  searchTerms: [
    'chronic granulomatous disease baby',
    'CGD baby',
    'phagocyte defect baby',
    'baby recurrent bacterial fungal infections',
    'baby liver abscess',
    'baby lymph node infection granuloma',
    'baby Aspergillus infection',
    'CGD diagnosis child',
    'baby recurrent Staphylococcus infections',
    'dihydrorhodamine test baby',
  ],
  quickAnswer:
    'Chronic granulomatous disease (CGD) is a rare primary immunodeficiency affecting phagocytes (white blood cells that engulf and kill bacteria and fungi). In CGD, these cells can ingest germs but cannot kill them because they lack the ability to produce the "respiratory burst" of reactive oxygen species needed to destroy pathogens. This leads to recurrent, serious bacterial and fungal infections, particularly with Staphylococcus aureus, Aspergillus, Serratia, Nocardia, and Burkholderia. CGD also causes granuloma formation (inflammatory nodules) in various organs. With lifelong prophylactic antibiotics and antifungals, and newer treatments including bone marrow transplant, children with CGD can do well.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'CGD can present in early infancy with severe infections. The most common early presentations include liver abscesses, lymphadenitis (infected and swollen lymph nodes that may drain), pneumonia (especially with Aspergillus), and severe skin infections. Some babies also develop perianal abscesses or osteomyelitis (bone infection). The X-linked form (accounting for about 65% of cases) typically presents earlier and more severely than autosomal recessive forms. If your baby has a serious infection with an unusual organism, your doctor may test for CGD using the dihydrorhodamine (DHR) flow cytometry test.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Recurrent infections become more apparent at this age. Babies with CGD may develop pneumonia that is slow to resolve, lymph node infections that require drainage, liver or spleen abscesses, or granulomatous lesions in the gut causing symptoms similar to inflammatory bowel disease (poor feeding, bloody stools, poor growth). Infections with catalase-positive organisms (Staphylococcus aureus, Aspergillus species, Serratia marcescens) are characteristic of CGD.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Once diagnosed, children with CGD are placed on lifelong prophylactic medications: trimethoprim-sulfamethoxazole (an antibiotic) and itraconazole (an antifungal) to prevent infections. Interferon-gamma (IFN-gamma) therapy may also be used to reduce serious infections. Despite prophylaxis, breakthrough infections can still occur and need aggressive treatment. Granulomatous inflammation can affect the gastrointestinal and genitourinary tracts, causing symptoms like obstructive bowel disease or urinary tract obstruction.',
    },
    {
      ageRange: '3+ years',
      context:
        'With good prophylactic care, many children with CGD attend school and participate in normal activities. Bone marrow transplant (hematopoietic stem cell transplant) is curative and is increasingly recommended, especially for children with a well-matched donor, as outcomes have improved significantly. Gene therapy is also in clinical trials. Long-term management requires close monitoring for infections, granulomatous complications, and inflammatory bowel disease-like symptoms. Children should avoid mulch, hay, and other sources of decaying plant matter that harbor Aspergillus spores.',
    },
  ],
  whenNormal: [
    'Your child with CGD is on prophylactic antibiotics and antifungals and has not had a serious infection recently',
    'Your child had a routine mild upper respiratory virus and recovered normally — CGD primarily affects the ability to fight certain bacteria and fungi',
    'Your child\'s DHR test was normal, ruling out CGD',
    'Your child with CGD is growing well and meeting developmental milestones with appropriate preventive care',
  ],
  whenToMention: [
    'Your child has had recurrent deep infections (abscesses, lymphadenitis, pneumonia) especially with unusual organisms',
    'Your child with CGD has gastrointestinal symptoms such as chronic diarrhea, bloody stools, or poor growth suggesting granulomatous colitis',
    'You want to discuss whether bone marrow transplant is appropriate for your child with CGD',
  ],
  whenToActNow: [
    'Your child with CGD develops a fever — any fever in a child with CGD requires prompt medical evaluation because infections can progress rapidly and may involve unusual organisms requiring specific treatment',
    'Your child with CGD develops cough, chest pain, or shortness of breath — Aspergillus pneumonia requires urgent diagnosis and aggressive antifungal treatment',
    'Your child with CGD has a rapidly enlarging lymph node, new abscess, or signs of sepsis (high fever, lethargy, poor feeding)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-immune-deficiency-signs',
    'primary-immunodeficiency-signs-baby',
    'scid-severe-combined-immunodeficiency-baby',
    'persistent-fever-baby',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Chronic Granulomatous Disease (CGD). NIAID, 2023.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/chronic-granulomatous-disease-cgd',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Primary Immunodeficiency Diseases. Pediatrics in Review, 2019.',
      url: 'https://publications.aap.org/pediatricsinreview/article/40/8/403/35087',
    },
    {
      org: 'IDF',
      citation:
        'Immune Deficiency Foundation. Chronic Granulomatous Disease. IDF Patient & Family Handbook, 2024.',
      url: 'https://primaryimmune.org/about-primary-immunodeficiencies/specific-disease-types/chronic-granulomatous-disease',
    },
  ],
};
