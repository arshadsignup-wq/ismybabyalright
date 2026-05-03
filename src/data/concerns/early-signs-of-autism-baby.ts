import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'early-signs-of-autism-baby',
  title: 'Early Signs of Autism in Babies and Toddlers',
  category: 'behavior',
  searchTerms: [
    'signs of autism in babies',
    'early signs of autism in babies',
    'early signs of autism baby',
    'autism signs in infants',
    'does my baby have autism',
    'autism red flags toddler',
    'autism vs late talker',
    'baby not making eye contact autism',
    'baby not responding to name autism',
    'M-CHAT screening',
    'when can autism be diagnosed',
    'signs of autism 12 months',
    'signs of autism in babies 6 months',
    'signs of autism in babies 1 year old',
    'autism signs 18 months',
    'autism spectrum disorder baby',
    'baby autism checklist',
    'early autism screening',
    'signs of autism in babies 4 months old',
    'signs of autism in babies 2 months old',
    'autism vs speech delay',
    'how to tell if baby has autism',
    'baby not smiling autism',
  ],
  quickAnswer:
    'Autism spectrum disorder (ASD) can sometimes be identified as early as 12-18 months, though most children are not diagnosed until age 2-3. Early signs include limited eye contact, not responding to their name, lack of pointing or showing, limited social smiling, and absence of pretend play. Having one or two of these signs does not mean your child has autism - many typically developing children share individual traits. However, a pattern of multiple social communication differences warrants evaluation. Early intervention, regardless of eventual diagnosis, consistently leads to the best outcomes.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'At this age, autism is very difficult to identify because social development is still emerging. What to watch for is the development of social engagement: your baby should be making eye contact, smiling socially (not just reflex smiling), and showing interest in faces by 2-3 months. A baby who rarely looks at faces, does not smile back when you smile at them, or seems indifferent to social interaction may benefit from monitoring. However, many babies who are later diagnosed with autism appear typically developing in these early months.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Between 6 and 12 months, social communication skills develop rapidly. Key milestones to watch include responding to their name (consistently by 9-10 months), babbling with consonant sounds, sharing enjoyment by smiling and looking at you, and showing interest in social games like peek-a-boo. Differences that may emerge include not looking when you point at something, limited babbling, reduced interest in interactive games, and not using gestures like reaching to be picked up.',
    },
    {
      ageRange: '12-18 months',
      context:
        'This is when some early signs become more apparent. The AAP recommends formal autism screening with the M-CHAT at 18 months and again at 24 months. Signs to discuss with your pediatrician include: not pointing to show you things (not just to request), no words by 16 months, limited pretend play, not following your pointing gesture, loss of any previously acquired skills (regression), and limited back-and-forth social games. Remember that late talking alone, without other social differences, is more commonly a language delay than autism.',
    },
    {
      ageRange: '18-24 months',
      context:
        'By 18-24 months, the signs that may suggest autism become more distinct from typical variation. Children with ASD may not combine words by 24 months, may have difficulty with back-and-forth conversation-like babbling, may line up toys rather than play with them imaginatively, may be very focused on parts of objects (spinning wheels rather than driving the car), and may have strong reactions to sensory input (covering ears, avoiding textures). If the M-CHAT or your own observations raise concerns, request an evaluation.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Many children receive their autism diagnosis during this period. By age 2-3, social differences become clearer: limited interest in peers, difficulty with back-and-forth play, echolalia (repeating phrases without communicative intent), restricted interests, and rigid insistence on routines. An evaluation by a developmental pediatrician, child psychologist, or multidisciplinary team can provide a formal diagnosis and connect you with early intervention services. Research consistently shows that earlier intervention leads to better long-term outcomes.',
    },
  ],
  whenNormal: [
    'Your baby is shy or slow to warm up in new situations but engages well with familiar people at home',
    'Your baby is a late talker but points, gestures, makes eye contact, and shows things to you',
    'Your toddler has one or two quirky behaviors (like lining up cars sometimes) but is otherwise socially engaged',
    'Your bilingual child has fewer words in each language but a combined vocabulary that is on track',
    'Your child flaps their hands briefly when excited but is otherwise socially connected and communicative',
  ],
  whenToMention: [
    'Your baby is not consistently responding to their name by 12 months',
    'Your baby is not pointing to share interest (not just to request) by 14 months',
    'Your child has no words by 16 months or no two-word phrases by 24 months',
    'Your child has limited pretend play, does not imitate actions, or seems to prefer objects over people',
  ],
  whenToActNow: [
    'Your child has lost words, babbling, or social skills they previously had - any regression in development warrants urgent evaluation',
    'Your child has no babbling, no gestures, no eye contact, and no social engagement by 12 months - request a comprehensive developmental evaluation',
  ],
  relatedMilestones: [
    'social-emotional-joint-attention',
    'social-emotional-peer-interaction',
    'language-first-words',
    'language-receptive',
  ],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'not-making-eye-contact',
    'not-responding-to-name',
    'not-pointing',
    'baby-hand-flapping',
    'no-joint-attention',
    'not-talking',
    'speech-delay',
    'baby-not-babbling',
    'echolalia',
    'toddler-obsessive-repetitive-behavior',
    'baby-not-interested-in-people',
    'baby-flat-affect-no-expression',
  ],
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Signs and Symptoms of Autism Spectrum Disorder.',
      url: 'https://www.cdc.gov/autism/signs-symptoms/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Autism Spectrum Disorder. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Autism/Pages/Autism-Spectrum-Disorder.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Mental Health. Autism Spectrum Disorder.',
      url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd',
    },
    {
      org: 'AAP',
      citation:
        'Hyman SL, et al. Identification, Evaluation, and Management of Children With Autism Spectrum Disorder. Pediatrics. 2020;145(1):e20193447.',
      url: 'https://publications.aap.org/pediatrics/article/145/1/e20193447/36917',
    },
  ],
};
