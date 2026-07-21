import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'guillain-barre-syndrome-child',
  title: 'Guillain-Barr\u00e9 Syndrome (GBS) in Children',
  category: 'medical',
  searchTerms: [
    'Guillain-Barre syndrome child',
    'GBS child symptoms',
    'ascending weakness child',
    'child legs weak after illness',
    'child cant walk after cold',
    'Guillain-Barre baby toddler',
    'AIDP child',
    'child progressive weakness legs',
    'child lost reflexes weakness',
    'autoimmune weakness child',
  ],
  quickAnswer:
    'Guillain-Barr\u00e9 syndrome (GBS) is a rare autoimmune condition in which the body\'s immune system attacks the peripheral nerves, causing ascending weakness that typically starts in the legs and moves upward. It affects approximately 0.5 to 1.5 per 100,000 children per year and usually follows a viral or bacterial infection by 1-4 weeks. GBS is a medical emergency because the weakness can progress to affect the muscles of breathing. Most children recover fully, but recovery takes weeks to months. Treatment with intravenous immunoglobulin (IVIG) or plasma exchange can shorten the course and reduce severity.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'GBS is rare in infancy but can occur. In babies, the presentation may be more difficult to recognize. Signs include progressive hypotonia (floppiness), weak cry, poor feeding, reduced limb movements, and loss of reflexes. The baby may have had a recent viral illness or vaccination. GBS in infants can be confused with other causes of acute hypotonia such as botulism or spinal muscular atrophy. Lumbar puncture showing elevated protein with normal cell count (albuminocytologic dissociation) and nerve conduction studies support the diagnosis.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with GBS typically present with refusal to walk, unsteady gait, or pain in the legs. Young children may be unable to articulate weakness and instead simply refuse to bear weight or become irritable. Ascending weakness progresses over hours to days. Decreased or absent deep tendon reflexes are a key finding. The child may complain of leg pain or "tingling." Autonomic dysfunction (fluctuating heart rate, blood pressure instability) can occur. Any child with progressive weakness after a recent illness should be evaluated urgently.',
    },
    {
      ageRange: '3-8 years',
      context:
        'School-age children can more clearly describe their symptoms: tingling or numbness starting in the feet and hands, difficulty walking or climbing stairs, weakness that progresses upward, and pain. Facial weakness (difficulty smiling or closing eyes) occurs in some cases. GBS typically reaches its peak severity within 2-4 weeks. Treatment with IVIG is the standard of care in children and is most effective when given early. Monitoring in a hospital setting is critical because respiratory muscles can be affected, requiring intensive care.',
    },
    {
      ageRange: '8+ years',
      context:
        'Older children and adolescents present similarly to adults. The classic pattern is symmetric ascending weakness with areflexia (loss of reflexes). Variants include Miller Fisher syndrome (eye movement problems, loss of coordination, and areflexia) and pure motor or sensory forms. Most children (85-90%) make a full recovery, though recovery may take weeks to months. About 3-5% of children may relapse (chronic inflammatory demyelinating polyneuropathy, or CIDP). Physical rehabilitation is important during recovery to regain strength and function.',
    },
  ],
  whenNormal: [
    'Your child is unsteady on their feet after a stomach bug but rapidly returns to normal within 1-2 days — post-illness fatigue is common',
    'Your child has leg pains (growing pains) at night but walks normally during the day with intact reflexes',
    'Your child had a mild viral illness and is tired but has normal strength and reflexes on examination',
    'Your child stumbles or falls occasionally but has no progressive weakness',
  ],
  whenToMention: [
    'Your child has new weakness in the legs or difficulty walking that started after a recent illness',
    'Your child complains of progressive tingling, numbness, or pain in the legs and/or hands',
    'Your child who was walking normally now refuses to walk or seems unsteady, especially after a recent infection',
  ],
  whenToActNow: [
    'Your child has rapidly progressive weakness in the legs moving upward — go to the emergency department immediately, as GBS can affect breathing muscles within hours to days',
    'Your child with suspected or diagnosed GBS develops difficulty breathing, shortness of breath, weak cough, or difficulty swallowing — this requires immediate intensive care',
    'Your child develops sudden inability to walk, combined with loss of reflexes and recent illness — urgent neurological evaluation is needed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'floppy-baby-syndrome',
    'low-muscle-tone',
    'spinal-muscular-atrophy-baby',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institute of Neurological Disorders and Stroke. Guillain-Barr\u00e9 Syndrome Fact Sheet. NINDS, 2023.',
      url: 'https://www.ninds.nih.gov/health-information/disorders/guillain-barre-syndrome',
    },
    {
      org: 'AAP',
      citation:
        'Ryan MM. Guillain-Barr\u00e9 Syndrome in Childhood. Journal of Paediatrics and Child Health. 2017;53(2):107-116.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/27925366/',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Guillain-Barr\u00e9 Syndrome. CDC, 2024.',
      url: 'https://www.cdc.gov/campylobacter/guillain-barre.html',
    },
  ],
};
