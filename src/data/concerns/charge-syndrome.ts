import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'charge-syndrome',
  title: 'My Baby Was Diagnosed with CHARGE Syndrome',
  category: 'medical',
  searchTerms: [
    'CHARGE syndrome baby',
    'CHARGE syndrome diagnosis',
    'CHD7 gene mutation baby',
    'coloboma heart baby',
    'choanal atresia CHARGE',
    'CHARGE syndrome prognosis',
    'CHARGE syndrome hearing loss',
    'CHARGE syndrome cranial nerve',
    'CHARGE syndrome deafblind',
    'CHARGE syndrome feeding',
  ],
  quickAnswer:
    'CHARGE syndrome is a complex genetic condition caused by mutations in the CHD7 gene, occurring in about 1 in 8,500-10,000 births. The name stands for Coloboma (eye defect), Heart defects, Atresia choanae (blocked nasal passages), Retardation of growth/development, Genital underdevelopment, and Ear anomalies/deafness. CHARGE affects many body systems and presents differently in each child. While the medical needs can be significant, especially in the early years, many people with CHARGE syndrome live fulfilling lives with appropriate support. Advances in medical care continue to improve outcomes.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'The newborn period often involves intensive medical care. Priorities include ensuring a safe airway (choanal atresia may require surgery), cardiac evaluation and management, and establishing feeding (many babies with CHARGE need feeding tubes due to swallowing difficulties from cranial nerve dysfunction). Eye exams assess for coloboma. Hearing testing is essential — hearing loss ranges from mild to profound. Genetic testing for CHD7 mutations confirms the diagnosis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As immediate medical issues are stabilized, developmental support becomes central. Children with CHARGE often have combined hearing and vision loss (deafblindness) which significantly impacts how they learn and interact. Early intervention should include a deafblind specialist if available. Feeding remains a major focus — many children transition from tube feeding gradually. Balance problems (from vestibular dysfunction) affect motor development.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Development may be slower than typical, but children with CHARGE continue to make progress with consistent support. Communication approaches vary — some children use sign language, some use spoken language with hearing aids or cochlear implants, and some use a combination. Motor milestones are often delayed due to balance issues. Growth may be below average, and growth hormone deficiency should be screened for.',
    },
    {
      ageRange: '3 years+',
      context:
        'With appropriate educational support (often including deafblind services), many children with CHARGE syndrome make meaningful academic and social progress. Behavioral challenges can occur, sometimes related to frustration from communication difficulties. The CHARGE Syndrome Foundation provides excellent resources and a supportive community. Ongoing medical monitoring of heart, hearing, vision, growth, and kidney function continues through childhood.',
    },
  ],
  whenNormal: [
    'Your baby with CHARGE syndrome has a medical team in place and acute issues are being managed',
    'Your child is making developmental progress with early intervention support',
    'Your child is communicating in their own way and engaging with their environment',
  ],
  whenToMention: [
    'Your baby is having worsening difficulty with feeding, breathing, or swallowing',
    'You are concerned about your child\'s hearing or vision — early intervention makes a significant difference',
    'Your child seems to have balance or coordination problems beyond what your team expected',
    'You need help coordinating the multiple specialists involved in your child\'s care',
  ],
  whenToActNow: [
    'Your baby is having severe breathing difficulty — call 911 immediately',
    'Your baby shows signs of heart failure (difficulty breathing, rapid breathing, poor feeding, excessive sweating) — seek emergency cardiac evaluation',
    'Your baby has a seizure — call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'choanal-atresia',
    'digeorge-syndrome-22q11',
    'congenital-cmv-hearing-loss',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'MedlinePlus. CHARGE Syndrome.',
      url: 'https://medlineplus.gov/genetics/condition/charge-syndrome/',
    },
    {
      org: 'CHARGE Foundation',
      citation:
        'CHARGE Syndrome Foundation. About CHARGE Syndrome.',
      url: 'https://www.chargesyndrome.org/about-charge/',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. CHARGE Syndrome.',
      url: 'https://rarediseases.org/rare-diseases/charge-syndrome/',
    },
  ],
};
