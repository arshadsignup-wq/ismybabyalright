import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ear-pain-no-infection-baby',
  title: 'Ear Pain Without Infection',
  category: 'medical',
  searchTerms: [
    'baby ear pain no infection',
    'baby pulling ear no fever',
    'toddler ear hurts but no infection',
    'baby ear pain teething',
    'baby grabbing ear not sick',
    'referred ear pain baby',
    'baby ear pain no ear infection',
    'toddler complaining ear hurts',
  ],
  quickAnswer:
    'Ear pain in babies and toddlers does not always mean an ear infection. Common non-infectious causes include teething (referred pain from erupting molars), Eustachian tube dysfunction from congestion, changes in air pressure, earwax buildup, or simply exploration of their body. If your baby is pulling at their ears but has no fever, is not particularly fussy, and is eating normally, it is often benign. However, persistent or severe ear pain should always be evaluated.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very young babies who appear to have ear discomfort  -  turning their head, fussing, or rubbing their ear against the mattress  -  should be seen by a doctor to rule out infection, as ear infections in this age group are treated more aggressively. However, some newborns simply discover their ears and touch or pull them as a self-soothing behavior or part of normal exploration.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Ear pulling becomes very common at this age as babies discover their ears. Many parents worry this signals an ear infection, but ear pulling alone  -  without fever, unusual fussiness, or sleep disruption  -  is usually just exploration. Early teething can also cause jaw and ear discomfort, as the nerves in the jaw and ear are closely connected.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is peak teething time, and the eruption of first molars especially can cause referred pain to the ears. Babies may rub or tug their ears, drool more, and be fussier than usual. If your baby has congestion from a cold, Eustachian tube dysfunction can cause ear pressure and discomfort without actual infection. Airplane travel or altitude changes can also cause temporary ear pain at this age.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers may be able to point to or tell you their ear hurts. Non-infectious causes of ear pain at this age include teething (especially second molars), temporomandibular joint discomfort from grinding teeth, swimmer\'s ear without full infection, earwax impaction, or referred pain from a sore throat. If your toddler has recurrent complaints of ear pain with consistently normal ear exams, consider whether jaw clenching, teeth grinding, or seasonal allergies might be contributing.',
    },
  ],
  whenNormal: [
    'Your baby pulls or touches their ears occasionally but is otherwise happy, eating well, and sleeping normally  -  this is likely exploration.',
    'Your baby has ear discomfort that coincides with teething, with visible swollen gums and drooling.',
    'Your toddler has brief ear pain during or after airplane travel or driving through mountains  -  pressure changes are a common cause.',
    'Your child has mild ear discomfort during a cold that resolves as congestion clears, without developing fever or worsening pain.',
  ],
  whenToMention: [
    'Your baby or toddler has persistent ear pain lasting more than a day even without signs of infection.',
    'Ear pain is recurring frequently and you want to rule out underlying causes such as Eustachian tube dysfunction.',
    'Your toddler complains of ear pain that is always on the same side.',
  ],
  whenToActNow: [
    'Your baby has ear pain accompanied by fever over 102.2F (39C), severe irritability, or refusal to eat  -  even if the last exam was normal, a new infection may have developed.',
    'Your child has severe ear pain with drainage, hearing loss, or swelling around the ear  -  these suggest a condition that needs prompt medical attention.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ear Pain in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Ear-Infection-Information.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Earache: First Aid.',
      url: 'https://www.mayoclinic.org/first-aid/first-aid-earache/basics/art-20056590',
    },
  ],
};
