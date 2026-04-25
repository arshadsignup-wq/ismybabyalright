import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'oral-aversion-baby',
  title: 'My Baby Won\'t Put Anything in Their Mouth',
  category: 'feeding',
  searchTerms: [
    'baby won\'t put things in mouth',
    'oral aversion symptoms',
    'baby refuses pacifier and toys',
    'baby doesn\'t mouth toys',
    'oral sensory issues baby',
    'baby won\'t explore with mouth',
    'baby gags on everything',
    'oral defensiveness baby',
    'baby sensitive mouth',
    'baby won\'t chew on teether',
  ],
  quickAnswer:
    'Oral aversion (also called oral defensiveness or oral hypersensitivity) means your baby is uncomfortable with objects or food in or near their mouth. While most babies explore everything by mouthing, babies with oral aversion may refuse pacifiers, teethers, and eventually solid foods. This can result from medical experiences (intubation, NG tubes, suctioning), reflux, or sensory processing differences. Early intervention with an occupational or speech therapist can help.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the early months, oral aversion is often related to medical interventions at birth (NICU stay, breathing support, suctioning) or ongoing reflux that makes swallowing painful. Babies may refuse pacifiers, pull away from bottles, or seem distressed during feeding. If your newborn consistently resists all oral stimulation and feeding is difficult, discuss this with your pediatrician. Gentle, positive oral experiences - like skin-to-skin, letting baby explore your clean finger - can help.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Around 3-4 months, most babies begin bringing toys and their hands to their mouths constantly. If your baby avoids putting anything in their mouth, turns away from objects near their face, or gags when their mouth is touched, this may indicate oral hypersensitivity. Occupational therapy can introduce oral desensitization techniques, which are most effective when started early. Address this now to prevent challenges when introducing solids.',
    },
    {
      ageRange: '6-9 months',
      context:
        'This is when oral aversion significantly impacts feeding development. Babies with oral aversion may refuse all solid foods, gag on smooth purees, or cry when food touches their lips. They may also avoid teething toys despite obvious teething pain. An occupational therapist or speech-language pathologist can work on oral motor skills and desensitization through play-based techniques. Forcing food will worsen aversion - go slow and follow professional guidance.',
    },
    {
      ageRange: '9-12 months',
      context:
        'By this age, oral aversion can lead to significant feeding delays and nutritional concerns. Babies may rely exclusively on bottles and refuse all attempts at solid foods or self-feeding. A feeding team evaluation (pediatrician, OT, SLP, dietitian) is essential. Therapy focuses on building tolerance through sensory play, gradually introducing oral input in non-threatening ways (like playing with food, tolerating messy faces, exploring textures with hands first).',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers with unresolved oral aversion often have very limited diets and may resist toothbrushing and face-washing in addition to eating challenges. Intensive feeding therapy may be needed. Some children have underlying sensory processing disorder, autism spectrum differences, or other developmental conditions that contribute to oral defensiveness. Early intervention services and developmental evaluation can provide a comprehensive support plan.',
    },
  ],
  whenNormal: [
    'Your baby occasionally rejects a pacifier but happily takes a bottle or breast',
    'Your baby mouths some toys but not others, showing typical preferences',
    'Your baby has a strong gag reflex but tolerates feeding and gradually adjusts to new textures',
    'Your baby explores objects with their hands before mouthing them',
  ],
  whenToMention: [
    'Your baby (over 4 months) never puts toys, hands, or objects in their mouth',
    'Your baby gags or becomes distressed when anything touches their lips or mouth',
    'Your baby has a history of NICU stay, feeding tubes, or reflux and now avoids all oral input',
    'Your baby is approaching 6 months and you are concerned about introducing solids due to oral sensitivity',
    'Feeding times are consistently stressful and your baby seems fearful of the bottle or spoon',
  ],
  whenToActNow: [
    'Your baby is losing weight or not gaining adequately due to feeding refusal',
    'Your baby chokes or aspirates during feeds and is at risk for aspiration pneumonia',
    'Your baby refuses all food and liquids and shows signs of dehydration',
  ],
  relatedMilestones: [
    'feeding',
    'oral-motor',
    'sensory-processing',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'ASHA',
      citation:
        'American Speech-Language-Hearing Association. Oral Sensory Issues and Feeding in Infants.',
      url: 'https://www.asha.org/practice-portal/clinical-topics/pediatric-feeding-and-swallowing/',
    },
    {
      org: 'AOTA',
      citation:
        'American Occupational Therapy Association. Sensory Integration and Feeding Development.',
      url: 'https://www.aota.org/practice/children-youth',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Sensory Sensitivities and Feeding Challenges in Infants. 2023.',
      url: 'https://www.zerotothree.org/resource/early-feeding/',
    },
  ],
};
