import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'angelman-syndrome-signs',
  title: 'Angelman Syndrome Signs in Babies',
  category: 'medical',
  searchTerms: [
    'angelman syndrome baby',
    'angelman syndrome signs infant',
    'baby happy but not talking',
    'baby laughing a lot developmental delay',
    'angelman syndrome early signs',
    'baby tremor jerky movements happy',
    'baby not walking not talking',
    'angelman syndrome diagnosis baby',
  ],
  quickAnswer:
    'Angelman syndrome is a rare neurogenetic disorder affecting about 1 in 12,000 to 20,000 people, caused by loss of function of the UBE3A gene on chromosome 15. Children with Angelman syndrome typically have significant developmental delays, minimal or no speech, movement and balance difficulties, and a characteristically happy and excitable demeanor. With supportive therapies, individuals with Angelman syndrome can learn to communicate through alternative methods and lead meaningful lives.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Angelman syndrome is rarely diagnosed in the first few months because newborns typically appear normal at birth. Feeding difficulties and low muscle tone may be early subtle signs, but these are nonspecific. The condition usually becomes apparent later when developmental delays emerge. If there is a known family history or prenatal genetic findings suggesting Angelman syndrome, early genetic testing can confirm the diagnosis.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some developmental delays may begin to emerge, though they are often attributed to other causes at this age. Babies may have difficulty with feeding, reduced babbling, and motor delays such as delayed head control or rolling. Some parents notice tremulous or jerky movements. The characteristic happy demeanor is often not yet distinguishable from typical baby behavior.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Developmental delays become more apparent in this period. Babies may not sit independently, may have poor balance, and may show minimal or no babbling. Frequent smiling and laughing, sometimes without apparent provocation, may become noticeable. Some babies develop seizures in this age range, which is often what prompts further evaluation. Genetic testing (methylation analysis) is used to diagnose the condition.',
    },
    {
      ageRange: '12 months+',
      context:
        'By this age, the characteristic features of Angelman syndrome typically become clear: significant speech delays (most children develop minimal or no spoken words), movement difficulties with a wide-based gait, frequent laughter and smiling, hand flapping, and a strong attraction to water. Seizures are common. Despite the challenges, children with Angelman syndrome are often deeply social and affectionate. Augmentative and alternative communication (AAC) devices can help children express themselves.',
    },
  ],
  whenNormal: [
    'Your baby with Angelman syndrome is making some developmental progress, even if it is slow',
    'Your baby is happy, social, and engaged with family members',
    'Your baby\'s seizures are well-controlled with medication',
    'Your baby is communicating through gestures, signs, or AAC even without spoken words',
  ],
  whenToMention: [
    'Your baby has significant developmental delays, minimal babbling, and jerky or tremulous movements',
    'Your baby has frequent episodes of unprovoked laughter combined with motor delays',
    'Your baby has had a seizure or staring episode',
  ],
  whenToActNow: [
    'Your baby is having a seizure lasting more than 5 minutes or is having repeated seizures without recovering in between — call 911',
    'Your baby has difficulty breathing, is turning blue, or is unresponsive',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Angelman Syndrome. MedlinePlus Genetics, 2023.',
      url: 'https://medlineplus.gov/genetics/condition/angelman-syndrome/',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Angelman Syndrome — Symptoms and Causes. Mayo Foundation for Medical Education and Research, 2023.',
      url: 'https://www.mayoclinic.org/diseases-conditions/angelman-syndrome/symptoms-causes/syc-20355621',
    },
  ],
};
