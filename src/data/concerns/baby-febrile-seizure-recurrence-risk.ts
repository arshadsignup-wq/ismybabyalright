import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-febrile-seizure-recurrence-risk',
  title: 'Will My Baby Have Another Febrile Seizure?',
  category: 'medical',
  searchTerms: [
    'febrile seizure happen again',
    'recurrent febrile seizure risk',
    'chance of another febrile seizure',
    'prevent febrile seizure recurrence',
    'febrile seizure multiple times',
    'does ibuprofen prevent febrile seizure',
    'febrile seizure risk factors recurrence',
    'baby had two febrile seizures',
    'will fever seizures keep happening',
    'febrile seizure family history risk',
  ],
  quickAnswer:
    'About 30-35% of children who have one febrile seizure will have at least one more during a future febrile illness. Risk factors for recurrence include having the first seizure before 18 months, having a lower fever at the time of the seizure, a family history of febrile seizures, and having the seizure early in the illness. Despite the recurrence risk, febrile seizures do not cause brain damage and do not significantly increase the risk of developing epilepsy (the risk rises only slightly, from about 1% to about 2-4%).',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies who have their first febrile seizure before 12 months have a higher recurrence risk (up to 50%) compared to those whose first seizure occurs after 12 months. This is because they have more years of febrile illness ahead during the susceptible period (up to age 5). Despite this higher recurrence risk, each individual seizure is still almost always benign. Prophylactic anticonvulsant medications are generally not recommended by the AAP due to side effects outweighing benefits. Aggressive fever management with antipyretics has not been proven to prevent febrile seizures.',
    },
    {
      ageRange: '12-36 months',
      context:
        'If your child had their first febrile seizure in this age range, the recurrence risk is around 30%. Each subsequent febrile illness may cause anxiety for parents, which is completely understandable. Having a seizure action plan can help: know how to position your child safely, time the seizure, and know when to call 911 (seizure lasting over 5 minutes). While you cannot prevent febrile seizures, you can prepare for them. Your pediatrician may prescribe rectal diazepam (Diastat) as a rescue medication for seizures lasting more than 5 minutes.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Children typically outgrow febrile seizures by age 5. If your child continues to have febrile seizures after age 5, or if seizures become complex (lasting more than 15 minutes, occurring more than once in 24 hours, or affecting only one side of the body), your pediatrician may recommend evaluation by a pediatric neurologist. The vast majority of children with febrile seizures develop normally and do not develop epilepsy. By school age, febrile seizures are usually a distant memory with no lasting effects.',
    },
  ],
  whenNormal: [
    'Your child had one or two simple febrile seizures during different illnesses and has returned to normal each time.',
    'You feel anxious every time your child gets a fever - this is a very common and understandable parental response.',
    'Your child has developed normally despite having febrile seizures.',
  ],
  whenToMention: [
    'Your child has had three or more febrile seizures and you want to discuss the overall pattern.',
    'You want to discuss whether a rescue medication prescription would be appropriate for your family.',
    'You have a strong family history of epilepsy and are concerned about your child\'s risk.',
  ],
  whenToActNow: [
    'Your child has a febrile seizure lasting more than 5 minutes - call 911 or administer prescribed rescue medication.',
    'Your child has multiple seizures within a 24-hour period.',
    'Your child has a seizure without fever, or a seizure that only affects one side of the body.',
    'Your child has a febrile seizure and afterward shows prolonged confusion, weakness on one side, or difficulty speaking.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-febrile-seizure-first-time',
    'febrile-seizure',
    'baby-epilepsy-signs-early',
    'baby-fever-when-to-go-to-er',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Febrile Seizures: Guideline for the Neurodiagnostic Evaluation. Pediatrics, 2011.',
      url: 'https://publications.aap.org/pediatrics/article/127/2/389/65029',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Febrile Seizures Fact Sheet.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/febrile-seizures',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Febrile Seizures: Risk of Recurrence. Pediatrics in Review, 2021.',
      url: 'https://publications.aap.org/pediatricsinreview/article/42/2/70/174338',
    },
  ],
};
