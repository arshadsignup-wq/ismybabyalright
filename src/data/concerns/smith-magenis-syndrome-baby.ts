import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'smith-magenis-syndrome-baby',
  title: 'Smith-Magenis Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'Smith-Magenis syndrome baby',
    'SMS syndrome baby',
    '17p11.2 deletion baby',
    'RAI1 gene baby',
    'Smith-Magenis sleep disturbance',
    'inverted melatonin cycle baby',
    'self-hugging behavior baby',
    'Smith-Magenis self-injury',
    'Smith-Magenis intellectual disability',
    'Smith-Magenis facial features',
  ],
  quickAnswer:
    'Smith-Magenis syndrome (SMS) is a genetic disorder caused by a deletion on chromosome 17p11.2 or a mutation in the RAI1 gene. It is characterized by distinctive facial features, intellectual disability, severe sleep disturbance due to an inverted melatonin cycle (melatonin is produced during the day instead of at night), and behavioral features including a characteristic self-hugging behavior. Infants are often floppy and unusually sleepy. Managing the sleep disorder with melatonin at night and bright light exposure in the morning is a key part of treatment. Early intervention and behavioral support can significantly help children with SMS.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Babies with Smith-Magenis syndrome are typically floppy (hypotonic) and unusually sleepy, which can mask the diagnosis because they may seem like "easy" babies. Feeding difficulties are common, including poor suck and reflux. Facial features in infancy are relatively mild and may include a broad, flat face, brachycephaly (flat back of the head), and a tented upper lip. Short stature may not yet be apparent. The sleep disturbance may be less noticeable in young infants. Diagnosis can be made by chromosomal microarray (for the deletion) or RAI1 gene sequencing (for point mutations).',
    },
    {
      ageRange: '6-18 months',
      context:
        'Motor milestones are delayed due to hypotonia, with most children sitting independently around 12 months. The characteristic sleep disturbance begins to emerge, with frequent nighttime waking and difficulty settling. The inverted melatonin cycle (melatonin production peaks during the day) causes excessive daytime sleepiness and nighttime wakefulness. Hearing loss (often sensorineural) should be evaluated. Feeding difficulties may persist. The facial features begin to become more recognizable with age.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Behavioral features become more prominent. The characteristic self-hugging (an involuntary hand-squeezing or clasping movement when excited) is distinctive to SMS. Self-injurious behaviors may emerge, including head banging, hand biting, and skin picking. Temper outbursts can be severe and prolonged. Speech and language are significantly delayed, though receptive language is often better than expressive. Sleep management with melatonin at bedtime and morning bright light therapy (or acebutolol to suppress daytime melatonin) can dramatically improve behavior and family quality of life.',
    },
    {
      ageRange: '3 years+',
      context:
        'The facial features become more distinctive with age, including a broad face, deep-set eyes, relative prognathism (prominent jaw), and a fleshy appearance. Intellectual disability ranges from mild to moderate, and many children have a good sense of humor and enjoy adult attention, though attention-seeking behavior can become problematic. Short stature is common. Scoliosis may develop. Peripheral neuropathy affects about 75% of individuals. Ongoing management focuses on optimizing sleep, behavioral strategies, educational support, and monitoring for medical complications including obesity, high cholesterol, and seizures (about 20-30%).',
    },
  ],
  whenNormal: [
    'Your baby is a sound sleeper and this was evaluated as normal infant sleep patterns rather than SMS-related hypersomnia',
    'Testing for SMS (chromosomal microarray and/or RAI1 sequencing) was performed and came back normal',
    'Your child with SMS is having improved sleep with melatonin and light therapy management',
    'Your child does self-hugging but has no other features of SMS and genetic testing is negative',
  ],
  whenToMention: [
    'Your baby is unusually sleepy, floppy, and has feeding difficulties and you want to discuss genetic testing',
    'Your child with SMS has severe sleep disturbance and current management is not adequately controlling it',
    'Your child with SMS is showing escalating self-injurious behaviors or severe temper outbursts',
    'You want to discuss melatonin dosing, behavioral strategies, or other management approaches',
  ],
  whenToActNow: [
    'Your child with SMS has a self-injury episode that causes significant harm (deep laceration, fracture, or head injury)',
    'Your child has a seizure or becomes unresponsive',
    'Your child is exhibiting extreme behavioral escalation that is putting themselves or others at risk of harm',
    'Your baby is unable to feed adequately, is dehydrated, or is losing weight',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['low-muscle-tone', 'baby-not-sleeping-enough'],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Smith-Magenis Syndrome. Genetic and Rare Diseases Information Center (GARD).',
      url: 'https://rarediseases.info.nih.gov/diseases/7698/smith-magenis-syndrome',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Smith-Magenis Syndrome. NORD Rare Disease Database.',
      url: 'https://rarediseases.org/rare-diseases/smith-magenis-syndrome/',
    },
    {
      org: 'PRISMS',
      citation:
        'Parents and Researchers Interested in Smith-Magenis Syndrome (PRISMS). Understanding Smith-Magenis Syndrome.',
      url: 'https://www.prisms.org/understanding-sms/',
    },
  ],
};
