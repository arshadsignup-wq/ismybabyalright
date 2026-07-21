import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'dravet-syndrome-baby',
  title: 'Dravet Syndrome in Babies',
  category: 'medical',
  searchTerms: [
    'Dravet syndrome baby',
    'SCN1A seizure baby',
    'prolonged febrile seizures baby',
    'severe myoclonic epilepsy infancy',
    'Dravet syndrome signs',
    'baby seizures with fever not stopping',
    'Dravet syndrome diagnosis',
    'baby prolonged seizure fever',
    'SCN1A gene mutation baby',
    'intractable epilepsy infant',
  ],
  quickAnswer:
    'Dravet syndrome is a severe, lifelong form of epilepsy that typically begins in the first year of life, most commonly between 5-8 months of age. It affects approximately 1 in 15,700 births. The first seizure is often a prolonged febrile seizure (lasting more than 5 minutes) triggered by fever or warm baths. About 80% of cases are caused by mutations in the SCN1A gene. Initial development is often normal, but developmental plateau or regression occurs in the second year of life. Early accurate diagnosis is critical because certain common anti-seizure medications (such as sodium channel blockers) can worsen seizures in Dravet syndrome.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Before the first seizure, babies with Dravet syndrome appear to develop normally. There are typically no clinical signs in the first few months of life. Some parents retrospectively note subtle signs such as being jittery or startling easily, but these are nonspecific. Genetic testing for SCN1A can be performed if there is a family history, but in most cases the diagnosis is not considered until the first seizure occurs.',
    },
    {
      ageRange: '5-12 months',
      context:
        'This is the typical onset period. The first seizure is characteristically a prolonged, often hemiclonic (one-sided) febrile seizure — longer than 5 minutes and sometimes lasting 30 minutes or more, requiring emergency treatment. Seizures may also be triggered by warm baths, overheating, or vaccinations (though vaccines do not cause Dravet syndrome — they may trigger the first seizure in a child who already has the genetic mutation). After the first seizure, additional prolonged or hemiclonic seizures follow, initially often with fever. Between seizures, the baby may appear normal.',
    },
    {
      ageRange: '1-3 years',
      context:
        'During the second year, seizures typically become more frequent and varied, including myoclonic seizures (brief jerking), absence seizures (staring spells), focal seizures, and atypical febrile seizures. Seizures may now occur without fever. Developmental progress plateaus or regresses — previously learned skills may be lost or new skills develop more slowly. Ataxia (unsteady walking) becomes apparent. A characteristic crouched gait is often noted. SCN1A genetic testing is the standard for confirming diagnosis. Avoidance of sodium channel blocking anti-seizure medications (carbamazepine, oxcarbazepine, phenytoin, lamotrigine) is critical, as these can worsen seizures.',
    },
    {
      ageRange: '3+ years',
      context:
        'Epilepsy management is lifelong and typically requires multiple medications. First-line treatments include valproate, clobazam, and stiripentol. Fenfluramine (Fintepla) and cannabidiol (Epidiolex) are FDA-approved specifically for Dravet syndrome. Despite treatment, seizures are often difficult to fully control. Intellectual disability of varying degrees is common. SUDEP (sudden unexpected death in epilepsy) is a significant risk, making seizure control and nighttime monitoring important. Multidisciplinary care, including neurology, developmental pediatrics, and behavioral support, helps optimize quality of life.',
    },
  ],
  whenNormal: [
    'Your baby had a single brief febrile seizure lasting less than 5 minutes with no recurrence — simple febrile seizures are common and benign',
    'Your baby has a known febrile seizure history with no seizures between fevers and normal development',
    'Genetic testing for SCN1A was performed and returned negative, and your child\'s seizure pattern does not fit Dravet syndrome',
  ],
  whenToMention: [
    'Your baby had a prolonged febrile seizure lasting more than 5 minutes or affecting only one side of the body',
    'Your baby is having recurrent seizures with fever, especially if they are prolonged or one-sided',
    'Your child who was developing normally is now losing skills or failing to progress as expected, especially if seizures are also present',
    'Your baby had a seizure triggered by a warm bath, overheating, or mild illness',
  ],
  whenToActNow: [
    'Your baby is having a seizure lasting more than 5 minutes — call 911, administer rescue medication if prescribed, and do not wait for it to stop on its own',
    'Your baby has multiple seizures in one day or a seizure followed by unusual drowsiness, difficulty breathing, or unresponsiveness',
    'Your child with Dravet syndrome has been started on or is taking carbamazepine, oxcarbazepine, phenytoin, or lamotrigine — these medications can worsen Dravet syndrome and should be discussed with your neurologist urgently',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'febrile-seizure',
    'baby-epilepsy-signs-early',
    'baby-seizure-types-infant',
    'baby-developmental-regression-signs',
    'infantile-spasms-west-syndrome',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Dravet Syndrome. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/dravet-syndrome',
    },
    {
      org: 'AAP',
      citation:
        'Wirrell EC, Laux L, Donner E, et al. Optimizing the Diagnosis and Management of Dravet Syndrome. Pediatric Neurology. 2017;68:18-25.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/28162792/',
    },
    {
      org: 'Dravet Syndrome Foundation',
      citation:
        'Dravet Syndrome Foundation. What is Dravet Syndrome? DSF, 2024.',
      url: 'https://www.dravetfoundation.org/what-is-dravet-syndrome/',
    },
  ],
};
