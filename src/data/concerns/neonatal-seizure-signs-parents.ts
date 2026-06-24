import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'neonatal-seizure-signs-parents',
  title: 'Neonatal Seizure Signs Every Parent Should Know',
  category: 'medical',
  searchTerms: [
    'newborn seizure signs',
    'baby seizure what does it look like',
    'neonatal seizure symptoms',
    'baby stiffening episodes',
    'baby eyes rolling back',
    'newborn jerking movements seizure',
    'baby shaking is it a seizure',
    'subtle seizure newborn',
    'neonatal seizure vs normal movement',
    'baby lip smacking seizure',
    'infant seizure types',
  ],
  quickAnswer:
    'Neonatal seizures can look very different from seizures in older children and adults, which makes them easy to miss. Rather than dramatic full-body convulsions, newborn seizures often present as subtle, repetitive movements: rhythmic lip smacking, tongue thrusting, cycling movements of the legs, eye deviation, apnea (pauses in breathing), or brief episodes of stiffening. Neonatal seizures affect approximately 1-5 per 1,000 live births and can indicate serious underlying conditions including birth injury, infection, metabolic disorders, or brain malformation. Any suspected seizure in a newborn requires urgent medical evaluation.',
  byAge: [
    {
      ageRange: '0-7 days',
      context:
        'The first week of life is when neonatal seizures most commonly occur. Causes in this early period include hypoxic-ischemic encephalopathy (birth-related brain injury), intracranial hemorrhage, metabolic disturbances (low blood sugar, low calcium, low sodium), infections (meningitis, encephalitis), and drug withdrawal. Seizures may look like: repetitive mouth movements (lip smacking, chewing), eye deviation or fluttering, rhythmic limb movements that cannot be stopped by gently holding the limb, apnea with changes in heart rate, or brief episodes of tonic stiffening. Normal newborn movements like jitteriness stop when you gently hold the limb; seizures do not.',
    },
    {
      ageRange: '1-4 weeks',
      context:
        'Seizures presenting after the first week may indicate different causes, including late-onset infections, inborn errors of metabolism, benign neonatal seizures (a diagnosis of exclusion), or structural brain abnormalities. If you notice any repetitive, stereotyped movements that seem involuntary, try to video record the episode to show your doctor, as seizures may not occur during medical examination. An EEG (electroencephalogram) is the gold standard for confirming seizures. Treatment depends on the underlying cause, with anti-seizure medications used when seizures are confirmed.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Infantile spasms, a specific seizure type, can begin as early as 2-3 months (more commonly 4-8 months). These appear as brief clusters of sudden flexion or extension movements, often occurring upon waking. Each spasm lasts only 1-2 seconds, but they occur in clusters that can last several minutes. Infantile spasms require urgent treatment (usually within days of diagnosis) because delayed treatment is associated with worse developmental outcomes. If you see brief, repetitive flexion or "jackknife" movements in your baby, seek evaluation immediately.',
    },
  ],
  whenNormal: [
    'Your newborn has jitteriness or trembling that stops when you gently hold the affected limb, which is common and typically benign.',
    'Your baby has brief startle reflexes (Moro reflex) that cause their arms and legs to jerk outward.',
    'Your baby has occasional hiccups, sneezes, or brief muscle twitches during sleep, which are normal.',
  ],
  whenToMention: [
    'You observed a brief episode that looked unusual but your baby seems fine now - describe it in detail to your pediatrician and share any video you captured.',
    'Your baby has jitteriness that seems excessive or that does not stop when you hold the limb.',
    'Your baby has episodes of staring or unresponsiveness that you are unsure about.',
  ],
  whenToActNow: [
    'Your baby has rhythmic jerking movements of the face, arms, or legs that cannot be stopped by gently holding the limb.',
    'Your baby has an episode of eye deviation, lip smacking, or cycling leg movements accompanied by color change, apnea, or unresponsiveness.',
    'Your baby has clusters of brief flexion or extension movements (possible infantile spasms) - seek urgent evaluation the same day.',
    'Your baby has any seizure-like activity and also has fever, lethargy, poor feeding, or a bulging fontanelle.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'febrile-seizure',
    'neonatal-fever-sepsis-workup',
    'newborn-jaundice-kernicterus-prevention',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Neonatal Seizures: Diagnosis and Management. NeoReviews, 2021.',
      url: 'https://publications.aap.org/neoreviews/article/22/8/e530/180534/Neonatal-Seizures',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Neonatal Seizures: Current Guidelines and Future Challenges. Frontiers in Neurology, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/32655480/',
    },
    {
      org: 'WHO',
      citation:
        'WHO. Guidelines on Neonatal Seizures, 2011.',
      url: 'https://www.who.int/publications/i/item/9789241548304',
    },
  ],
};
